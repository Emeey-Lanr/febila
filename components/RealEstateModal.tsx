'use client'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useReducer, useState } from "react"
import { addEstateR } from "@/Redux/constituents/modalStatus"
import { RootState } from "@/Redux/Store"
const RealEstateModal = () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector((state:RootState)=>state.modalStatus.value)
  const [imgUrl, setImgUrl] = useState<any>('')
    const  [unit, setUnit] = useState<number>(0)
    const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  

    const uploadImg = (e:any) => {
        const imgUpload = new FileReader()
        imgUpload.readAsDataURL(e.target.files[0])
      imgUpload.onload = () => {
          console.log(imgUpload.result)
            setImgUrl(`${imgUpload.result}`)
        }
  }
  const decreaseBtn = () => {
    if (unit > 0) {
      setUnit(unit- 1)
    }
  }
  const submitBtn = async (e: any) => {
    try {
      e.prevent.default()
      if ((price !== '' && title !== '') && (imgUrl !== '' && caption !== '')) {
        const register = await axios.post('/', {imgUrl, price, unit, title, caption})
    } else {
      alert("Seems an input is not yet filled")
      }
    
    } catch (error) {
      
    }
  
    
    
  }
  return (
    <>
      {modalStatus.addEstate && <div className="w-full h-full flex justify-center items-center fixed top-0 bg-transblack-500 py-[16px] px-[16px]">
        <div style={{ background: "white" }} className=" lg:w-[500px] w-[95%] px-[16px] py-[16px] rounded-sm">
          <div className="">
            <form onSubmit={(e) => submitBtn(e)}>
              <div>
                <button onClick={() => dispatch(addEstateR(false))} className="text-lg font-bold">X</button>
              </div>
              <div className="h-[200px] px-[12px] py-[12px] border border-grey-200 my-[24px] flex justify-center items-center">
                {imgUrl !== "" ? (
                  <img src={`${imgUrl}`} className="w-full h-full object-cover" width={100} alt="" />
                ) : (
                  <label id="image" className="text-xl text-grey-700" >
                    Add Image <span>+</span>
                    <input
                      id="image"
                      hidden
                      onChange={(e) => uploadImg(e)}
                      type="file"
                    />
                  </label>
                )}
              </div>
              <div className="flex justify-between items-center my-[18px]">
                <p className="gilFnt text-sm font-semibold text-grey-700">Price</p>
                <div className="border border-grey-200 flex justify-center">
                  <input onChange={(e) => setPrice(e.target.value)} type="text" className="h-[18px] text-center border-grey-200 w-[60px]" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="gilFnt text-sm font-semibold text-grey-700">Units</p>
                <div className="border border-grey-200 flex justify-center">
                  <button onClick={() => setUnit(unit + 1)} className="w-[20px] border-r border-grey-200">
                    +
                  </button>
                  <p className="helFnt w-[20px] text-base text-grey-700">{unit > 0 && unit}</p>
                  <button onClick={() => decreaseBtn()} className="w-[20px] border-l border-grey-200">
                    -
                  </button>
                </div>
              </div>
              <input onChange={(e) => setTitle(e.target.value)}
                className="helFnt text-sm mb-[24px] px-[8px] text-grey-700 py-[12px] block w-full border border-grey-200 bg-none fcus:border-grey-400"
                placeholder="Title"
                type="text"
              />
              <textarea onChange={(e) => setCaption(e.target.value)}
                placeholder="Caption"
                className="helFnt text-sm px-[8px] py-[8px] mb-[24px] block resize-none w-full h-[50px] border  border-grey-200 bg-none"
              ></textarea>
              <div>
                <button type="submit" className="helFnt py-[12px] w-full bg-green-500 text-grey-100">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default RealEstateModal