const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const previewStyle = `
    width: ${attrs.size};
    height: ${attrs.size};
    background: ${attrs.color};
  `
  return html`
    <div style=${previewStyle} />
  `
}
