/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
  
  export default function Cards() {
    
      let dispatch = useDispatch()
      let data =   useSelector(store => store.reduxData)
      let place = data.destinations || []
      let navigate = useNavigate()

      function handleSubmit(e, name){
        e.preventDefault()
        console.dir(e.target)
        navigate(`/details/${name}`)
      }

      useEffect(()=>{
        dispatch({type : "removeData", value : {}})
        dispatch({type : "NOCARD", payload : {} })
      }, [])
    
    return (
        <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <p style={{fontSize:"25px", fontWeight:"bolder", textAlign:"center"}}>Popular Places</p>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {place.map((value) => (
              <div key={value.id} className="group relative">
              <form onSubmit={(e) => handleSubmit(e, value.name)}  name={value.name}>
                <img
                  src={value.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <p style={{fontWeight:"bolder"}}>{value.name}</p>
                    </h3>
                        {
                            value.description.length > 85 ? <p className="mt-1 text-sm text-gray-500">{ value.description.slice(0, 85) + "..."}</p> :  <p className="mt-1 text-sm text-gray-500">{value.description}</p>
                        }
                  </div>
                </div>
                <div style={{marginTop:"10px"}}>
              <button type="submit" className="cursor-pointer bg-violet-500 text-white p-2 rounded-lg">More Details</button>
              </div>
              </form>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
  }
  