import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Data from "./data";

function App() {
  const datas = Data.map(elem=>{
    return(
      <Card 
      key={elem.id}
      item={elem}
      />
    ) 
    
  })



return (
  <div>
    <Navbar />
    <Hero />
    <div className="main">
    {datas}
    </div>
  </div>
);
}

export default App;
