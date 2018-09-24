const Tram = require('tram-one')
const html = Tram.html({
  'color-slider': require('../components/color-slider'),
  'color-preview': require('../components/color-preview')
})

module.exports = (store) => {
  const previewColor = `rgb(${store.color.red}, ${store.color.green}, ${store.color.blue})`
  return html`
    <div style="zoom: 2; text-align: center;">
      <color-slider color='red' />
      <color-slider color='green' />
      <color-slider color='blue' />
      <color-preview size='2em' color=${previewColor} />
      <div>${previewColor}</div>
    </div>
  `
}
