const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const {color} = window.engine.store
  const {actions} = window.engine

  const setColorValue = (event) => {
    actions.setColorValue({color: attrs.color, value: event.currentTarget.value})
  }

  const rgb = (subValue) => {
    const colors = {
      red: attrs.color === 'red' ? subValue : color.red,
      green: attrs.color === 'green' ? subValue : color.green,
      blue: attrs.color === 'blue' ? subValue : color.blue,
    }
    return `rgb(${colors.red}, ${colors.green}, ${colors.blue})`
  }

  const sliderStyle = `
    -webkit-appearance: none;
    height: 1em;
    background: linear-gradient(to right, ${rgb(0)}, ${rgb(255)});
    outline: none;
  `

  const sliderThumbStyle = html`
  <style>
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1em;
      height: 1em;
      border: solid black;
      cursor: pointer;
    }

    input[type=range]:focus::-webkit-slider-thumb {
      border: solid white;
    }
  </style>
  `

  const prefix = attrs.color.slice(0, 1)[0].toUpperCase()

  return html`
    <div>
      ${sliderThumbStyle}
      ${prefix} <input
        style=${sliderStyle} type="range"
        min="0" max="255" value=${color[attrs.color]}
        onchange=${setColorValue} />
    </div>
  `
}
