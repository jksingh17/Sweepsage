const Work = require("../models/work");

// @desc    Create new work
// @route   POST /api/works
// @access  Private (creator)
const createWork = async (req, res) => {
  try {
    const { title, description, photos, portfolioLinks, socialMedia } = req.body;

    const newWork = await Work.create({
      creator: req.user,
      title,
      description,
      photos,
      portfolioLinks,
      socialMedia,
    });

    res.status(201).json(newWork);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all works of logged-in creator
// @route   GET /api/works/my
// @access  Private (creator)
const getMyWorks = async (req, res) => {
  try {
    const works = await Work.find({ creator: req.user });
    res.json(works);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update work
// @route   PUT /api/works/:id
// @access  Private (creator)
const updateWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);

    if (!work) return res.status(404).json({ message: "Work not found" });
    if (work.creator.toString() !== req.user.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updatedWork = await Work.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedWork);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete specific field entry from a work (photo, link, etc.)
// @route   DELETE /api/works/:id
// @access  Private (creator)
// to delete any specific value{
//   "field": "photos",
//   "value": "photo1.jpg"
// }
const deleteWork = async (req, res) => {
  try {
    const { field, value } = req.body; // example: { "field": "photos", "value": "img123.jpg" }

    const work = await Work.findById(req.params.id);

    if (!work) return res.status(404).json({ message: "Work not found" });
    if (work.creator.toString() !== req.user.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // remove from array
    await Work.findByIdAndUpdate(
      req.params.id,
      { $pull: { [field]: value } }, // dynamic field removal
      { new: true }
    );

    res.json({ message: `${value} removed from ${field}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createWork,
  getMyWorks,
  updateWork,
  deleteWork,
};
