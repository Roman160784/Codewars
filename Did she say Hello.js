function validateHello(greetings) {
  let arr = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
  let arr2 = greetings.toLowerCase()
  for (let i = 0; i < arr.length; i++){
    if (arr2.includes(arr[i])) {
      return true
    }
  }
  return false
}