import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'
import  GlobalStyle  from './styles/Global'
import { Navbar } from './components/Navbar'
import LibraryProvider from "./components/contexts/useLibraryContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <LibraryProvider>
        <Navbar/>
        <div className='content'>
          <AppRoutes/>
        </div>
      </LibraryProvider>
    </BrowserRouter>
  );
}

export default App;
