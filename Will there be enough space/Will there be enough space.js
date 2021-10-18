function enough(cap, on, wait) {
  const a = on + wait - cap;
  if (a < 0) {
    return 0;
  }
  else return a;
}