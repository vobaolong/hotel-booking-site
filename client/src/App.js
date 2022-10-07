import './App.css';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';

function App() {

  return (<>
    <Navbar />
    <div>
      <Routers />
    </div>
    <Footer />
  </>
  );
}
export default App;
