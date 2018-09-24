const Tram = require('tram-one')

const app = new Tram()
app.addRoute('/', require('./pages/rgb'))
app.addRoute('/404', require('./pages/404'))
app.addActions({ color: require('./actions/color') })

// set the store and actions on the window
// so they are globally accessable
window.engine = {
  store: app.engine.store,
  actions: app.engine.actions
}
app.addListener((store, actions) => {
  // update the window store and actions
  window.engine = {
    store, actions
  }
})

app.start('.main')
