import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
