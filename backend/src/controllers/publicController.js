const Creator = require("../models/creator");
const Work = require("../models/work"); 
const getApprovedCreatorsPublic = async (req, res) => {
  try {
    const creators = await Creator.find({ isApproved: true }) // ✅ now works
      .select("-password") // don’t send password to frontend
      .lean();

    // get their approved works
    const populatedCreators = await Promise.all(
      creators.map(async (creator) => {
        const works = await Work.find({
          creator: creator._id,
          status: "approved",
        }).lean();
        return { ...creator, works };
      })
    );

    res.status(200).json(populatedCreators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getApprovedCreatorsPublic };
