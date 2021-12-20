import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'
import  GlobalStyle  from './styles/Global'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <div className='content'>
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
