
import Layout from "../../components/layout/layout"
import HeroSection from "../../components/heroSection/HeroSection"
import Filter from "../../components/filter/Filter"
import ProductCard from "../../components/productCard/ProductCard"
import Testimonials from "../../components/testimonials/Testimonials"
import Track from "../../components/track/Track"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, deleteFromCart } from "../../redux/cartSlice"



const Home = () => {
const dispatch = useDispatch();
const cartItem = useSelector((state)=> state.cart)

console.log(cartItem);

const addCart = () => {
  dispatch(addToCart('shirt'))
}

const deleteCart = () => {
  dispatch(deleteFromCart('shirt'))
}
  return (
    <div>
        <Layout>
          {/* <div className="flex gap-5">
            <button className="bg-gray-300" onClick={()=> addCart()}>Add</button>
            <button className="bg-gray-300" onClick={()=> deleteCart()}>Delete</button>
          </div> */}
            <HeroSection/>
            <Filter/>
            <ProductCard/>
            <Track/>
            <Testimonials/>
        </Layout>
    </div>
  )
}

export default Home