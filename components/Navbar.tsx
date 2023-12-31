'use client'
import Link from "next/link"
import Image from "next/image"
import arrow from "@/public/icons/arrow.svg"
import {useDispatch} from"react-redux"
import { AppDispatch } from "@/Redux/Store"
import { changeSidebar } from "@/Redux/constituents/sidebar"
import { useRouter } from "next/navigation"
import logo from "@/public/icons/logo_green_png.png"
const Navbar = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center border-b border-green-100 sticky top-0">
          <div className="w-2/4  h-20  flex items-center">
            <div className="w-4/5 flex items-center mx-auto">
              <Image src={logo} className="w-12" alt="" />
              <Link href="/" className="text-black text-xl pl-4">
                Febila
              </Link>
            </div>
          </div>
          <div className="sidebarIconHide:hidden">
            <button
              className="w-20"
              onClick={() => dispatch(changeSidebar("openSidebar"))}
            >
              <span className="block mx-auto my-2 w-6 h-1 bg-gray-800 rounded-full"></span>
              <span className="block mx-auto w-8 h-1 bg-gray-800 rounded-full"></span>
            </button>
          </div>
          <div className="w-2/4  flex justify-end  items-center sm:hidden">
            <div className="pr-10">
              <div className="mx-auto  flex justify-between items-center">
                <div className="px-10">
                  <Link
                    href="/"
                    className="text-sm hover:border-b-2 hover:border-green-500 transition"
                  >
                    Home
                  </Link>
                </div>
                <div className="px-10 ">
                  <Link
                    href="/about-us"
                    className="text-sm hover:border-b-2 hover:border-green-500 transition"
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => router.push("/contact")}
                    className="flex justify-between px-2 py-2 items-center w-40 h-10 rounded-full bg-green-500"
                  >
                    <span className="text-xs text-white w-4/5 text-center">
                      Contact Us
                    </span>
                    <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                      <Image src={arrow} className="w-3" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar