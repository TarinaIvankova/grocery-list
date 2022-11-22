import './App.css';
import { GroceryList } from './GroceryList';
import image from './shop.png';
import imageTwo from './shopping.png';


function App() {
  return (
    <div className='app'>
      <div className='container'>
     <img src={ image } width='200px' alt='shop'/>
     </div>
     <div className='container'>
     <h1>Grocery List</h1>
     </div>
   <GroceryList/>
   <div className='container'>
     <img src={ imageTwo } width='200px' alt='shopping'/>
     </div>
    </div>
  );
}

export default App;
