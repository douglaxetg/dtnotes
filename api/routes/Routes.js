'user strict';
const myRoutes = function (app) {
  var todoNotes = require('../controllers/Notes');

  app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  app
    .route('/note')
    .post(todoNotes.create)

  app
    .route('/note/:noteId')
    .get(todoNotes.read)
    .put(todoNotes.update)
    .delete(todoNotes.delete)

  app
    .route('/notes')
    .get(todoNotes.listAll)

  app
    .route('/notes/:keyword')
    .get(todoNotes.fitler)
}

module.exports = myRoutes;
