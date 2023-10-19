import AppContext from './App'
;(async () => {
  const context = new AppContext()
  await context.bootstrap()
})()
