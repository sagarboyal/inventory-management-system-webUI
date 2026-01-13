import { FaAngleDown } from "react-icons/fa6";
import { TbInfoCircle } from "react-icons/tb";

const ProductInfo = () => {
  return (
    <section>
        <form>
            <header className="flex">
                <TbInfoCircle className="text-amber-600 " />
                <h2>Product Information</h2>
                <button>
                    <FaAngleDown />
                </button>
            </header>
        </form>
    </section>
  )
}

export default ProductInfo;