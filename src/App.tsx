import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import {Product} from "./components/Product";
import { useProducts } from "./Hooks/products";

// https://github.com/vladilenm/react-fast-2022
// https://disk.yandex.ru/i/80S0RVQ6Yl6yCA
    // https://www.youtube.com/watch?v=OJ16BaPC6VI
function App() {
  const {products, error, loading } = useProducts();
 
  return (
    <div className="container mx-auto max-w-7xl pt-5 grid grid-cols-3 gap-4 px-14">
      { loading && <Loader /> }
      { error   && <ErrorMessage error={error} /> }
      {products.map(product => <Product key={product.id} product={product}/>)}
      <Modal/>
    </div>
  );
}

export default App;
