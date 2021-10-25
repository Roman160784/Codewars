function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function feast(beast, dish) {
    let a = beast.slice(0, 1) + beast.substr(-1, 1)
    let b = dish.slice(0, 1) + dish.substr(-1, 1)

    return a === b