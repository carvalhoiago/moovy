import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'
import  GlobalStyle  from './styles/Global'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import { MyLibrary } from './pages/MyLibrary'

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
