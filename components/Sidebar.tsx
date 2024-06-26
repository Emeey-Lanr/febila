'use client'
import { AppDispatch, RootState } from "@/Redux/Store"
import { changeSidebar } from "@/Redux/constituents/sidebar"
import "@/styles/sidebar.css"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import Image from "next/image"
import logo from "@/public/icons/logo_green_png.png"
import { FaArrowRight, FaTimes } from "react-icons/fa"
const Sidebar = () => {
  const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const sidebarData = useSelector((state:RootState)=>state.sidebar.value)
  const switchRoute = (routeName: string) => {
     dispatch(changeSidebar("closeSidebar"));
      router.push(`/${routeName}`)
   }
  return (
    <div
      className={`hidden  sm:w-full sm:h-full sm:block sm:fixed ${sidebarData.close}`}
    >
      <div className="p-3 flex justify-end">
        <button
          className="w-10 h-10 border border-blue-200 rounded-full flex justify-center items-center text-green-500 font-bold"
          onClick={() => dispatch(changeSidebar("closeSidebar"))}
        >
          <FaTimes />
        </button>
      </div>
      <div>
        <div className="w-4/5 my-6 mx-auto flex justify-center items-center">
          <div className="">
            <Image src={logo} className="w-6 h-6" alt="" />
          </div>
        
        </div>

        <button
          onClick={() => switchRoute("")}
          className="w-4/5 my-7 text-gray-600  flex justify-center text-3xl items-center  mx-auto  font-bold   "
        >
          Home
        </button>
        <button
          onClick={() => switchRoute("about-us")}
          className="w-4/5  my-7 text-gray-600 flex justify-center text-3xl items-center  mx-auto   font-bold  "
        >
          About Us
        </button>
        <button
          onClick={() => switchRoute("contact")}
          className="w-4/5  my-7 text-gray-600 text-3xl  mb-5 flex font-bold  justify-center items-center  mx-auto"
        > 
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Sidebar