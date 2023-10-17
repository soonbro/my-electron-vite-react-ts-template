const App = () => {
  return (
    <div id="app">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="../../../resources/icon.png" alt="ChitChat Logo"></img>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <h1>Hello World!</h1>
      <h3>
        I'm{' '}
        <a target="_blank" href="https://github.com/soonbro" rel="noopener noreferrer">
          Soonbro
        </a>
      </h3>

      <h4>
        <a href="https://www.electronjs.org/" target="_blank">
          Electron
        </a>{' '}
        +{' '}
        <a href="https://www.reactjs.org/" target="_blank">
          React
        </a>{' '}
        +{' '}
        <a href="https://www.typescriptlang.org/" target="_black">
          TypeScript
        </a>
      </h4>
      <h5>
        {`use `}
        <a target="_blank" href="https://electron-vite.org" rel="noopener noreferrer">
          electron-vite
        </a>
      </h5>
    </div>
  )
}

export default App
