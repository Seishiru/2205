import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className="content">
            <Home />
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
