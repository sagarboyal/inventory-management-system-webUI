import PriceStock from "./PriceStock";
import ProductInfo from "./ProductInfo";


function CreateProduct() {
  return (
    <div>
        {/* Form Header section */}
        <div></div>

        {/* Form input section */}
        <div>
            <ProductInfo />
            {/* <PriceStock /> */}
        </div>
    </div>
  );
}

export default CreateProduct;