export default function wordLengths(word){
    var lsWords = word.split(" ");
      var words = lsWords.map(w => w.length);
      let wordsSum = 0;
      for(var i=0;i<words.length;i++){
      wordsSum += words[i];
      }
      return wordsSum;
    }