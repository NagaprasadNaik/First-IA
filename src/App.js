import data from './components/back/Data'
import './App.css';
import Header from './components/front/Header';
import Products from './components/front/Products';

function App() {
  const { productItems } = data;
  return (
    <div>
      <Header />
      <Products productItems={productItems} />
    </div>
  );
}

export default App;
