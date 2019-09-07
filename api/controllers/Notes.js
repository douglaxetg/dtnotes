'use strict';
const Note = require('../models/Notes');
let Controller = {}

Controller.create = function (req, res) {
  let newNote = new Note(req.body);
  if (!newNote.title || !newNote.content) {
    res.status(400).send({ error: true, message: 'Please provide title and content' });
  } else {
    Note.create(newNote, function (err, note) {
      if (err) res.send(err);
      res.json(note);
    });
  }
};

Controller.read = function (req, res) {
  Note.getbyId(req.params.noteId, function (err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

Controller.update = function (req, res) {
  Note.update(req.params.noteId, new Note(req.body), function (err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

Controller.delete = function (req, res) {
  Note.remove(req.params.noteId, function (err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

Controller.listAll = function (req, res) {
  Note.getAll(function (err, note) {
    if (err) res.send(err);
    res.send(note);
  });
};

Controller.fitler = function (req, res) {
  Note.filterLitle(req.params.keyword, function (err, note) {
    if (err) res.send(err);
    res.json(note);
  });
};

module.exports = Controller;
