const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {

    // check role exists
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "Access denied" });
    }

    // check role permission
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You are not allowed to access this resource"
      });
    }

    // role is allowed
    next();
  };
};

export default roleMiddleware;
