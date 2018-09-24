const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const previewStyle = `
    width: ${attrs.size};
    height: ${attrs.size};
    background: ${attrs.color};
    margin: 0.4em auto;
  `
  return html`
    <div style=${previewStyle} />
  `
}
