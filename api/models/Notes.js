'user strict';
const sql = require('./Dbconfig.js');

//note object constructor
let Note = function (note) {
  this.title = note.title;
  this.content = note.content;
};

Note.create = function create(newNote, result) {
  sql.query('SELECT COUNT(*) AS cnt FROM notes WHERE title = ?', newNote.title, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      if (res[0].cnt > 0) {
        result(err, 'duplicated');
      } else {
        sql.query('INSERT INTO notes set ?', newNote, function (err, res) {
          if (err) {
            result(err, null);
          } else {
            result(null, 'success');
          }
        })
      }
    }
  })
}

Note.getbyId = function getbyId(noteId, result) {
  sql.query('SELECT * from notes where id = ? ', noteId, function (
    err,
    res
  ) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Note.update = function (id, note, result) {
  sql.query(
    'UPDATE notes SET title = ?, content = ? WHERE id = ?',
    [note.title, note.content, id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Note.remove = function (id, result) {
  sql.query('DELETE FROM notes WHERE id = ?', [id], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Note.getAll = function getAll(result) {
  sql.query('SELECT * from notes', function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Note.filterLitle = function filterLitle(keyword, result) {
  sql.query("SELECT * from notes where title like '%" + keyword + "%' ", function (
    err,
    res
  ) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Note;
