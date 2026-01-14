import { FaAngleDown } from "react-icons/fa6";
import { TbInfoCircle } from "react-icons/tb";
import FormField from "./ui/form-field";

const ProductInfo = () => {
  return (
    <section>
        <form>
            <header className="flex">
                <div className="flex">
                    <TbInfoCircle className="text-amber-600"/>
                    <FormField id="2"><h2 className="bg-secondary-500 font-bold">Product Information</h2> </FormField>
                </div>
                <button>
                    <FaAngleDown />
                </button>
            </header>
        </form>
    </section>
  )
}

export default ProductInfo;