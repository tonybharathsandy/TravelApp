import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const MasterCardForm = () => {
    let {city} = useParams()
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [form, setForm] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: ""
      });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Details:", form);
    alert("Card details saved successfully!");
    dispatch({type : "MASTERCARD", payload : form })
    navigate(`/book/${city}`)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        
        {/* MasterCard Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
            alt="MasterCard Logo"
            className="h-12"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Enter Card Details</h2>

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
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 transition duration-200"
          >
            Save Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default MasterCardForm;
