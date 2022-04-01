const Word = require("../models/wordData");
const mongoose = require("mongoose");
function create(req, res, next) {
  let text = req.body.text;
  let id = req.body.id;
  let word = new Word({
    text,
    id,
  });
  word.save().then((data) => {
    res.send(data);
  });
}

function view(req, res, next) {
  Word.find({}).then((data) => {
    res.send(data);
  });
}

function update(req, res, next) {
  Word.findByIdAndUpdate(req.params.id, req.body, (err, word) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Updating the word " });
    }
    res.send({ success: "Updation successfull" });
  });
}

function remove(req, res, next){
  Word.findByIdAndDelete(req.params.id, (err, word)=>{
    if(err){
      return res.status(500).send({error: "Problem with Deleting the word "})
    }
    res.send({success: 'word deleted successfully'})
  })
}

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.remove = remove;


