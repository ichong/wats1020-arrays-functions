// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function
//add use strict to invoke strict mode
"use strict"

//Create a function, truncateWords, to accept the two arguments: longText and numWords
var truncateWords = function(longText, numWords) {
//Use the split function to create an array
  var stringArray = longText.split(" ");
//Find the length of the array
  var stringArrayLength = stringArray.length;
//Listed how to calculate the number of words to be removed from the array below but didn't use it
  var numWordsToRemove = stringArrayLength - numWords;
  console.log('Remove:' + numWordsToRemove);
//Removed the words that were outside of the wordLimit with splice  
  var shortenStringArray = stringArray.splice(0, numWords);  
//Added ellipses to the shorten, spliced array at the end
  shortenStringArray.splice(shortenStringArray.length, 0, '...');
//Joined the shorten array
  var truncateString = shortenStringArray.join(' '); 
  
  return truncateString;
};


// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);