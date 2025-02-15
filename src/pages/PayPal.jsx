import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const PayPal = () => {
    const [form, setForm] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: ""
      });
    let navigate = useNavigate()
    let {city} = useParams()
    let dispatch = useDispatch()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Card details saved Successfully!");
    console.log(form)
    dispatch({type : "PAYPAL", payload : form })
    navigate(`/book/${city}`)
  };
  console.log("paypal", form)
  console.log("para", city)
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-center mb-4">
          <img
            src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
            alt="PayPal Logo"
            className="h-12"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              maxLength="16"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              value={form.expiryDate}
              onChange={handleChange}
              maxLength="5"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="password"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              maxLength="3"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
            <input
              type="text"
              name="cardholderName"
              value={form.cardholderName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
          >
            Save Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayPal;
