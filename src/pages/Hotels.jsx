import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Hotels() {
  let navigate = useNavigate()
  let hotelsData = useSelector(store => store.hotelsData.hotels)
  console.log(hotelsData)

  function handleHotelDetails(e, city){
      e.preventDefault()
      navigate(`/hotel/details/${city}`)
  }
  return (
    <>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className='text-center font-extrabold text-4xl mb-2'>Top Hotels</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {hotelsData.map((hotel, index) => (
            <div key={index}  className="group">
            <form onSubmit={(e) => handleHotelDetails(e, hotel.city)}>
            {hotel.hotels.map((value, index) => (
              <div key={index}>
              <img
                alt={hotel.imageAlt}
                src={value.image_url}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <div className='font-bold'>
              {
                  value.name.length > 34 ? value.name.slice(0, 33) + "..." : value.name
              }</div>
              </div>
            ))}
              <h3 className="mt-4 text-sm text-gray-700 font-semibold">{hotel.city} <span className='text-[23px] font-extrabold'>{hotel.country}</span></h3>
              <div>
                <button className='bg-blue-400 px-2 py-2 rounded-[5px] text-white cursor-pointer' type='submit'>View Details</button>
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

export default Hotels