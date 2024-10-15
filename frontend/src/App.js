import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Luke's Fullstack_app</h1>
          {/* Must out Outlet instead of HomeScreen because in index.js, HomeScreen has become nested route of <App /> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
