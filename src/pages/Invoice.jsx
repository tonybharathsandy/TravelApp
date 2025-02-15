import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Invoice = () => {
  const { city } = useParams();
  const invoiceRef = useRef();
  let navigate = useNavigate()

  const hotels = useSelector((store) => store.hotelsData.hotels);
  const userDetails = useSelector((store) => store.bookingData);
  const transactions = useSelector((store) => store.transactions);

  const filteredHotels = Array.isArray(hotels) ? hotels.filter((hotel) => hotel.city === city) : [];

  const handleDownloadPDF = async () => {

    document.body.querySelectorAll("*").forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.color.includes("oklch") || computedStyle.backgroundColor.includes("oklch")) {
        el.style.color = "black"; // Set a fallback color
        el.style.backgroundColor = "white";
      }
    });

    const element = invoiceRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("invoice.pdf");
    navigate("/TravelApp")
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <div ref={invoiceRef} className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-bold text-center text-gray-800">Invoice</h2>
        <p className="text-center text-gray-600"><strong>Customer:</strong> {userDetails?.username || "N/A"}</p>
        <p className="text-center text-gray-600"><strong>Date:</strong> {new Date().toLocaleDateString()}</p>

        <h1 className="text-center font-extrabold text-2xl mt-4">Hotel Details</h1>
        {filteredHotels.length > 0 ? (
          <table className="w-full border-collapse border mt-3">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Hotel Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">City</th>
                <th className="border p-2">Country</th>
              </tr>
            </thead>
            <tbody>
              {filteredHotels.map((hotel, index) => (
                <tr key={index} className="text-center">
                  {hotel.hotels.map((value) => (
                    <>
                      <td className="border p-2">{value.name}</td>
                      <td className="border p-2">{value.price}</td>
                      <td className="border p-2">{value.address}</td>
                    </>
                  ))}
                  <td className="border p-2">{hotel.city}</td>
                  <td className="border p-2">{hotel.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 mt-2">No hotels found for {city}</p>
        )}

        <h1 className="text-center font-extrabold text-2xl mt-4">Customer Details</h1>
        <table className="w-full border-collapse border mt-3">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Booking Date</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Street Address</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border p-2">{userDetails?.firstName || "N/A"}</td>
              <td className="border p-2">{userDetails?.lastName || "N/A"}</td>
              <td className="border p-2">{userDetails?.date || "N/A"}</td>
              <td className="border p-2">{userDetails?.email || "N/A"}</td>
              <td className="border p-2">{userDetails?.streetAddress || "N/A"}</td>
              <td className="border p-2">{userDetails?.city || "N/A"}</td>
              <td className="border p-2">{userDetails?.country || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        <h1 className="text-center font-extrabold text-2xl mt-4">Transaction Details</h1>
        <table className="w-full border-collapse border mt-3">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Card Number</th>
              <th className="border p-2">Card Holder Name</th>
              <th className="border p-2">CVV</th>
              <th className="border p-2">Card Expiry Date</th>
              <th className="border p-2">Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border p-2">{transactions?.cardNumber || "N/A"}</td>
              <td className="border p-2">{transactions?.cardholderName || "N/A"}</td>
              <td className="border p-2">{transactions?.cvv || "N/A"}</td>
              <td className="border p-2">{transactions?.expiryDate || "N/A"}</td>
              <td className="border p-2">{transactions?.paymentMode || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
      Download Invoice
      </button>
    </div>
  );
};

export default Invoice;