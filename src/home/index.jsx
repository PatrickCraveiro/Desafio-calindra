import "./reset.scss";
import MainHeader from "../componentes/mainHeader/mainHeader";
import MainContainer from "../componentes/Container/Container";
import ProductProvider from "../context/Product";

function App() {
  return (
    <ProductProvider>
      <MainHeader></MainHeader>
      <MainContainer></MainContainer>
    </ProductProvider>
  );
}

export default App;
