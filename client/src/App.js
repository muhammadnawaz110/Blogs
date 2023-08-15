import logo from './logo.svg';
import './App.css';
import NaveBar from './components/library/NaveBar';
import Home from './components/home/Home';
import { Container } from '@mui/material';
import Footer from './components/sections/footer/Footer';
import Posts from './components/posts/Posts';

function App() {
  return (
    <div className="App">
        <NaveBar />
        <Container>
          {/* <Home />     */}
          <Posts />
        </Container>
        <Footer />
    </div>
  );
}

export default App;
