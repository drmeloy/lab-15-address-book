const Router = require('express');
const Entry = require('../models/Entry');

module.exports = Router()
  .post('/', (req, res, next) => {
    Entry
      .create(req.body)
      .then(entry => res.send(entry))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Entry
      .find()
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
