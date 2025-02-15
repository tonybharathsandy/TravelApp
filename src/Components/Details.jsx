import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Details() {
  let { name } = useParams();
  let data = useSelector((store) => store.reduxData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let places = data.destinations;
  
  let result = places.filter((value) => value.name === name);
  console.log(result);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-3xl px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Details about the place
        </h1>

        {result.map((place) => (
          <div
            key={place.id}
            className="flex flex-col items-center text-center"
          >
            <img
              src={place.image}
              className="w-160 h-100 rounded-md bg-gray-200 object-cover mb-4"
              alt={place.name}
            />
            <h3 className="text-xl font-bold text-gray-700">{place.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{place.description}</p>

            <p className="text-sm font-medium text-gray-900 mt-4">
              <strong>Average Cost:</strong> {place.currency}{" "}
              {place.average_cost}
            </p>

            <div className="mt-3">
              <h2 className="font-bold">Activities:</h2>
              <p className="text-sm">{place.activities.join(", ")}</p>
            </div>

            <div className="mt-3">
              <h2 className="font-bold">Other Attractions:</h2>
              <div style={{display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center"}} className="text-sm list-disc list-inside text-center">
                {place.attractions.map((value, index) => (
                  <div key={index}>
                  <img style={{width : "300px", height : "300px", borderRadius:"10px"}} className="object-cover" src={value.image}/>
                  <p className="font-bold">{value.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
