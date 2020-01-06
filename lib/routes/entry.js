const Router = require('express');
const Entry = require('../models/Entry');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    Entry
      .create(req.body)
      .then(entry => {
        return Entry
          .findByIdAndUpdate(entry._id, { userId: req.user._id }, { new: true });
      })
      .then(entry => {
        res.send(entry);
      })
      .catch(next);
  })
  .get('/', ensureAuth, (req, res, next) => {
    Entry
      .find({ userId: req.user._id })
      .then(entries => res.send(entries))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Entry
      .findById(req.params.id)
      .then(entry => res.send(entry))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Entry
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(entry => res.send(entry))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Entry
      .findByIdAndDelete(req.params.id)
      .then(entry => res.send(entry))
      .catch(next);
  });
