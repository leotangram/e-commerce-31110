import { useParams } from "react-router-dom";
import Item from "../item/Item";
import iphoneXImage from "../../assets/images/iphonex.png";
import useProducts from "../../hooks/useProducts";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      {!id &&
        products.map((product) => {
          if (product.id === "1") {
            product.image = iphoneXImage;
          }
          return <Item key={product.id} {...product} />;
        })}
      {id &&
        filterProducts.map((product) => {
          if (product.id === "1") {
            product.image = iphoneXImage;
          }
          return <Item key={product.id} {...product} />;
        })}
    </div>
  );
};

export default ItemListContainer;
