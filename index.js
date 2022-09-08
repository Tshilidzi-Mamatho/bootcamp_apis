import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';

import totalPhoneBill from './bootcamp/totalPhoneBill.js';

const app = express();

app.use(express.static('public'));

app.get(`/api/word_game`, function(req, res){
    const sentence = req.query.sentence;
console.log(sentence)
    if(!sentence){
        req.json({
            error: 'Please insert setence'
        })
    }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "wordLengths" : wordLengths(sentence)
    });
});

app.get("/api/phonebill/total", function(req, res){

    const dataCost = req.query.useCost;
    res.json({
      "bill": totalPhoneBill(dataCost)
     });
  });

const PORT = 6007;
app.listen(PORT, function(){
    console.log('api started on port:', PORT)
});