module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
  },

  hasRole: (role) => {
    return (req, res, next) => {
      if (req.user.role === role) {
        next();
      } else {
        res.status(401).json({ message: 'Unauthorized'});
      }
    };
  }
}
