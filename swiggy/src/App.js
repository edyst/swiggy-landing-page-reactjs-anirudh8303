import './App.css';
import JumboSection from "./JumboSection"
import CardSection from './CardSection';
import Restaurants from './Restaurants';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <JumboSection />
      <CardSection />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default App;
