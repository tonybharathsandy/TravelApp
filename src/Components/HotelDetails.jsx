import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  let { city } = useParams();
  let navigate =  useNavigate()
  let data = useSelector((store) => store.hotelsData.hotels);

  let result = data.filter((value) => value.city === city);
  console.log(data);

    let handleBook = function(e, city){
        e.preventDefault()
        console.log(city)
        navigate(`/book/${city}`)
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-3xl px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Details about the Hotel
        </h1>

        {result.map((place, index) => (
          <div key={index} className="flex flex-col items-center text-center">
          <form onSubmit={(e) => handleBook(e, place.city) }>
            {place.hotels.map((value, index) => (
              <div key={index} className="flex flex-col justify-center">
                <img
                  src={value.image_url}
                  className="w-160 h-100 rounded-md bg-gray-200 object-cover mb-4"
                  alt={place.name}
                />

                <h3 className="text-xl font-bold text-gray-700">
                  {value.name}
                </h3>
                <h3 className="text-xl font-bold text-gray-700">
                  Address : {value.address}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-semibold">
                  {value.overview}
                </p>
                <p className="font-mono">Latitude : {value.latitude}</p>
                <p className="font-mono">Longitude : {value.longitude}</p>
                <p>
                  Ratings :
                  {value.star_rating === 5
                    ? " ⭐⭐⭐⭐⭐ "
                    : value.star_rating === 4
                    ? " ⭐⭐⭐⭐ "
                    : value.star_rating === 3
                    ? " ⭐⭐⭐ "
                    : value.star_rating === 2
                    ? " ⭐⭐ "
                    : value.star_rating === 1
                    ? " ⭐ "
                    : " No Ratings "}
                </p>
                <div className="m-auto">
                  <p className="font-semibold bg-amber-200 p-2 w-[350px] text-center">
                    Price : {value.price}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-3">
              <span className="font-semibold text-[25px]">{place.city}</span>{" "}
              <span className="font-extrabold text-3xl">{place.country}</span>
            </div>
            <div className="mt-3">
              <button className="bg-green-500 px-3 py-2 border-0 cursor-pointer rounded-[5px] text-white" type="submit">
                Book Now
              </button>
            </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
