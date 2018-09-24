module.exports = {
  init: () => ({red: 100, green: 100, blue: 100}),
  setColorValue: (colors, {color, value}) =>
    Object.assign({}, colors, {[color]: value})
}
