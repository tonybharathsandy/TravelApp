import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      className="bg-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:px-24 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About Our Travel App</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Welcome to our travel app! Our platform helps you explore amazing city places,
          find top hotels, and stay updated with the latest world news. Whether you are
          planning a trip or just browsing destinations, we provide all the tools you need
          for an unforgettable experience.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Our Home page features various city destinations along with their respective countries,
          making it easier to find your next travel spot. On the Hotels page, you can explore
          top accommodations in 28 countries and book your stay with ease. Additionally, our News page keeps you
          informed with the latest global updates, ensuring you never miss out on important events.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          After booking your stay, you will receive an invoice, which you can download anytime
          for your records. This makes managing your travel expenses simple and hassle-free.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          We also provide a mobile app to enhance your experience on the go. Stay connected,
          explore destinations, and manage your bookings seamlessly from your smartphone.
        </p>
        <p className="text-gray-600 text-base sm:text-lg">
          Start your journey with us and discover the world like never before!
        </p>
      </div>
    </motion.div>
  )
}

export default About