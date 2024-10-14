import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Luke's Fullstack_app</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
