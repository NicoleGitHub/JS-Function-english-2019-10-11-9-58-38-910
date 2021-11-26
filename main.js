function reverseString(message){
    // wirte your code here
    var reverseMsg = "";
    for(var i=message.length-1; i >=0; i--){
      reverseMsg += message[i];
    }
    return reverseMsg;
  }
  reverseString('hello'); // should return 'olleh'

function palindrome(message){
  // wirte your code here
  for(var i=0; i<message.length; i++){
    if(message[i] !== message[message.length-1-i]) {
      return false;
    }
    return true;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

function alphabetSort(message){
  // wirte your code here
  return message.split('').sort().join('');
}
alphabetSort('hello'); 

function countWords(message){
  // wirte your code here
  return message.split(' ').length;
}
countWords('Good morning, I love JavaScript.'); // should return 5