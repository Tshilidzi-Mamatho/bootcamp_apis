export default function shortestWord(word){
    var shortWord = word.split(" ");
      let result = shortWord[0];
      for(var i=0;i<shortWord.length;i++){
      var shorterWord = shortWord[i];
        if(shorterWord.length<=result.length){
          result = shorterWord;
        }
      }
      return result;
    }