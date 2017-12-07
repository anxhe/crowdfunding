module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
  }
}
