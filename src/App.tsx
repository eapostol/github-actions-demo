import './App.css'
import Calculator from './components/Calculator';
import Advertisement from './components/Advertisement';

// add a statement that will cause eslint to produce an error
// now commented out to let eslint pass its tests.
// const x = 1;

const companyName1: string = 'ABC Corporation';
const productDescription1 = 'Great Product!';
const price1 = '$19.99';


const companyName2: string = 'XYZ Corporation';
const productDescription2 = 'Amazing Product!';
const price2 = '$49.99';

function App() {

  return (
    <>
      <Advertisement companyName={companyName1} productDescription={productDescription1} price={price1} />
      <Advertisement companyName={companyName2} productDescription={productDescription2} price={price2} />
      <Calculator />
    </>
  )
}

export default App;
