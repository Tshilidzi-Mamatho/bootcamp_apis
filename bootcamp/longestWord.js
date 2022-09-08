export default function longestWord(word){
    var longWord = word.split(" ");
    let long = 0;
    let result = "";
    for(var i = 0; i<longWord.length; i++){
    var longerWord = longWord[i];
      if(longerWord.length>=long){
      long = longerWord.length;
        result = longerWord;
      }
    }
    return result;
  }

