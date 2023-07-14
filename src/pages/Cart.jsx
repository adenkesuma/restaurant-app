import Subheading from "../components/Subheading"

const Cart = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-[60vh]">
        <div className="pt-[2rem] text-center">
            <Subheading title="Checkout your order" spoon={"mx-auto"} />
            <h1 className="headtext__cormorant">Cart</h1>
        </div>

        <div>
            <p className="text-center mt-8 text-[#fff]">Empty order</p>
        </div>
    </div>
  )
}

export default Cart