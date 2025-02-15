/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function Booking() {
    let {city} = useParams()
    let dispatch = useDispatch()
    let navigate = useNavigate()
   let selectedHotel =  useSelector(store => store.hotelsData.hotels)
   let globalUser = useSelector(store => store.bookingData)
   let transactionData = useSelector(store => store.transactions)
   
   let [obj, setObj] = useState({})
   let [state, setState] = useState(0)

    useEffect(() => {
        transactionData.paymentMode ? setState(1) : setState(0)
        setObj(globalUser)
    }, [transactionData])

   function handleChange(e){
    let dynamicValue = e.target.name
    setObj({...obj, [dynamicValue] : e.target.value})
    dispatch({type : "userData", value : obj})
   }

   function handleSubmit(e){
        e.preventDefault()
        dispatch({type : "userData", value : obj})
        navigate(`/invoice/${city}`)
   }

   function handlePayPal(){
    console.log("done")
    setState(1)
    navigate(`/paypal/${city}`)
   }

   function handleMasterCard(){
        setState(1)
        navigate(`/mastercard/${city}`)
   }

   function handleVisa(){
        setState(1)
        navigate(`/visa/${city}`)
   }

   console.log("GlobalData",globalUser)
   console.log("Transactions",transactionData)
   console.log(state)

   let result = selectedHotel.filter((value) => value.city === city);
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
    <div className="space-y-12 ">
    <div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Booking Details </h2>

        <div className="mt-3 grid grid-row-1 gap-x-6 gap-y-10 sm:grid-row-2 lg:grid-row-4 xl:gap-x-10">
          {result.map((product, index) => (
            <div key={index} className="group relative">
            {product.hotels.map((value, index) => (
                <div key={index}>
             <table>
                <tbody>
                    <tr>
                    <td>
                        <img
                        src={value.image_url}
                        alt="Tourist Spot"
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                    </td>
     
                    <td>
                        <p className='ms-20 bg-green-400 p-3 rounded-[5px] text-white'>Price: {value.price}</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>
            ))}    
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={obj.username}
                  placeholder="janesmith"
                  onChange={handleChange}
                  required
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                value={obj.about}
                rows={3}
                required
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
          </div>
  
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={obj.firstName}
                onChange={handleChange}
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="lastName"
                value={obj.lastName}
                onChange={handleChange}
                type="text"
                required
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={obj.email}
                autoComplete="email"
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
              Country
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="country"
                name="country"
                value={obj.country}
                onChange={handleChange}
                autoComplete="country-name"
                required
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>India</option>
                <option>Pakisthan</option>
                <option>Singapore</option>
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
              Street address
            </label>
            <div className="mt-2">
              <input
                id="street-address"
                name="streetAddress"
                value={obj.streetAddress}
                type="text"
                onChange={handleChange}
                required
                autoComplete="street-address"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                onChange={handleChange}
                value={obj.city}
                required
                type="text"
                autoComplete="address-level2"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
              State / Province
            </label>
            <div className="mt-2">
              <input
                id="region"
                name="region"
                onChange={handleChange}
                value={obj.region}
                type="text"
                required
                autoComplete="address-level1"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                id="postal-code"
                name="postalCode"
                type="text"
                onChange={handleChange}
                value={obj.postalCode}
                required
                autoComplete="postal-code"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

        <div className='flex gap-[30px]'>
        <div>
            <legend className="text-sm/6 font-semibold text-gray-900">Booking Date</legend>
            <input name='date' onChange={handleChange} value={obj.date} type="date"/>
        </div>
        <div>
            <legend className="text-sm/6 font-semibold text-gray-900">Payment Type</legend>
            <select onChange={handleChange} disabled = {state ? true : false} value={obj.payment} name='payment'>
                <option selected>--Select--</option>
                <option>PayPal</option>
                <option>Master Card</option>
                <option>Visa</option>
            </select>
        </div>
        <div>
            {obj.payment ?  (<legend className="text-sm/6 font-semibold text-gray-900">Click Here For Transactions</legend>) : ""}
            {obj.payment === "PayPal" ? (<button disabled = {state ? true : false} onClick={() => handlePayPal()} className='px-16 bg-green-500 text-white rounded-[5px] cursor-pointer'>PayPal</button>) : obj.payment === "Master Card" ? (<button  disabled = {state ? true : false} onClick={() => handleMasterCard()} className='px-11 bg-green-500 text-white rounded-[5px] cursor-pointer'>Master Card</button>): obj.payment === "Visa" ? (<button  disabled = {state ? true : false} onClick={() => handleVisa()} className='px-16 bg-green-500 text-white rounded-[5px] cursor-pointer'>Visa</button>): ""}
        </div>
        </div>
      <div>
      <div className="container mx-auto px-4 py-6">
      {result.map((value, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-3">
            Hotel Details
          </h2>

          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="p-3 border">Hotel Name</th>
                  <th className="p-3 border">Address</th>
                  <th className="p-3 border">Price</th>
                  <th className="p-3 border">City</th>
                  <th className="p-3 border">Country</th>
                </tr>
              </thead>
              <tbody>
                {value.hotels.map((hotel, index) => (
                  <tr
                    key={index}
                    className="border-b text-gray-600 hover:bg-gray-100 transition"
                  >
                    <td className="p-3 border">{hotel.name}</td>
                    <td className="p-3 border">{hotel.address}</td>
                    <td className="p-3 border">${hotel.price}</td>
                    <td className="p-3 border">{value.city}</td>
                    <td className="p-3 border">{value.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>

      {console.log("result", result)}
  
       </div>
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 space-y-10"> 
          <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
            <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  defaultChecked
                  id="push-everything"
                  name="push-notifications"
                  onChange={handleChange}
                  value={"EveryThing"}
                  type="radio"
                  required
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                  Everything
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  onChange={handleChange}
                  value={"Same as email"}
                  type="radio"
                  required
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                  Same as email
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  onChange={handleChange}
                  value={"No Push notifications"}
                  type="radio"
                  required
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button onClick={() => {
        setObj({})
         dispatch({type : "removeData", value : {}})
         dispatch({type : "NOCARD", payload : {} })
         navigate("/hotels")
      }} type="button" className="cursor-pointer text-sm/6 font-semibold text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        disabled = {state ? false  : true}
        className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </div>
  </form>
  )
}

export default Booking