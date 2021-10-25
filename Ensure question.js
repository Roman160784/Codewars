function ensureQuestion(s) {
  if (s.includes('?')) {
    return s
  }
  else {
    return s + '?'
  }
}

function ensureQuestion(s) {
  return s.split('?').join('').concat('?')
}