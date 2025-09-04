const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // get token from headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // remove 'Bearer '

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user id to request
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
