function isPalindrome(x) {
  // your code here
  //перевели в нижний регистр
  x = x.toLowerCase();
  //разбили, развернули, соединили строку и сравнили
 return x == x.split('').reverse().join('')
}