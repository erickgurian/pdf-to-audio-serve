module.exports = (req, res, next) => {
  const error = new Error('Route Not Found');

  error.status = 404;
  // return res.status(404).json({ message: 'Rourer not exists' });
  next(error);
};
