// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it used the same characters in the same quantity. 
// Only consider characters, not spaces or punctuations.  Consider captial letters to be the same as lower case letters.

// Solution #1
function anagrams(stringA, stringB){
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
  }

  for (let char in aCharMap){
    if(aCharMap[char] !== bCharMap[char]){
    return false;
    }
  }

  return true;
}

// Helper function for looping through strings
function buildCharMap(str){
  const charMap = {};
  
  // Regex removes everything except the letters
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// anagrams("rail safety", "fairy tales");
anagrams("RAIL! SAFETY!", "fairy tales");
// anagrams("Hi there", "Bye there");
