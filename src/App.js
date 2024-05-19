import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './routes/router'
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className="content">
            <MainRouter />
        </div>
    </BrowserRouter>
  );
}

export default App;
