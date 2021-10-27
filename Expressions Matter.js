function expressionMatter(a, b, c) {
  let result = 0;
  return Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c );
}

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}