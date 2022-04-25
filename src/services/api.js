import axios from "axios";

async function getProduct(product) {
  const response = await axios.get(
    `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${product}&source=nanook`
  );

  return response;
}

export default getProduct;
