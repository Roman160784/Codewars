class SmallestIntegerFinder {
  findSmallestInt(args) {
    let currentMin = args[0];
    for (let i = 1; i <= args.length; i++){
      if(args[i] < currentMin) currentMin = args[i];
    }
    return currentMin;
  }
}