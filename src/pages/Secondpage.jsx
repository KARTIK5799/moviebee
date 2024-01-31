import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

const Secondpage = () => {
 
  const { id } = useParams();


  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    numberOfTickets: "",
    totalPrice: 0,
  });

  useEffect(() => {
    const fetchSelectedMovie = async () => {
      try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setSelectedMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSelectedMovie();
  }, [id]);

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };


const handleInputChange = (e) => {
    const { name, value } = e.target;
  
   
    setFormData({
      ...formData,
      [name]: value,
    });
  

    if (name === "numberOfTickets") {
      const numberOfTickets = parseInt(value, 10) || 0;
      const ticketPrice = 140;
      const totalPrice = numberOfTickets * ticketPrice;
  
      setFormData((prevData) => ({
        ...prevData,
        totalPrice,
      }));
    }
  };
  

  
  const handleBookTicket = () => {
    const numberOfTickets = parseInt(formData.numberOfTickets, 10) || 0;
    const ticketPrice = 140;
    const totalPrice = numberOfTickets * ticketPrice;

    setFormData({
      ...formData,
      totalPrice,
    });

    openModal();
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.age &&
      formData.numberOfTickets
    ) {
     
      const bookingData = {
        name: formData.name,
        email: formData.email,
        age: formData.age,
        numberOfTickets: formData.numberOfTickets,
        totalPrice: formData.totalPrice,
      };

      localStorage.setItem("bookingData", JSON.stringify(bookingData));

      alert("Congratulations! Booking successful");

      
      closeModal();
      setFormData({
        name: "",
        email: "",
        age: "",
        numberOfTickets: "",
        totalPrice: 0,
      });
    } else {
      alert("Please fill in all required fields");
    }
  };

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  
  const { name, summary, genres, rating, image } = selectedMovie;


  return (
    <div className="flex bg-gray-100 min-h-screen dark:bg-gray-700">
      <Navbar />
      <div className="m-20 flex">
        <div className="flex-none">
        
          <img
            src={image ? image.medium : "https://placehold.it/200x280"}
            alt=""
            className="w-96 rounded-md shadow-lg"
          />
        </div>
        <div className="flex-1 p-8 text-white">
          <div className="mb-6">
           
            <div
              style={{ fontSize: "2.5rem" }}
              className="font-bold mb-2 text-4xl"
            >
              {name}
            </div>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
            <div className="text-base mt-2">
              Runtime: {rating.average ? `${rating.average} / 10` : "N/A"}
            </div>
          </div>
          <div className="flex mb-4">
          
            <span className="inline-block text-black bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">
              {genres.slice(0, 1).join(", ")}
            </span>
            <span className="inline-block text-black bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">
              {rating.average ? `${rating.average} / 10` : "N/A"}
            </span>
          </div>
         
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            onClick={handleBookTicket}
          >
            Book Ticket
          </button>

          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Book Ticket Modal"
            className="absolute inset-1/4 p-5 bg-white rounded-md overflow-y-auto h-80"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
          >
            <div className="flex justify-end mb-2">
           
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={closeModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
           
            <h2 className="text-xl font-bold mb-2">Book Ticket</h2>
           
            <form onSubmit={handleFormSubmit}>
           
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
            
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Email: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
           
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Age: <span className="text-red-500">*</span>
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                >
                  {Array.from({ length: 30 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Number of Tickets: <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="numberOfTickets"
                  value={formData.numberOfTickets}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
           
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Total Price:
                </label>
                <span className="mt-1 p-2 border border-gray-300 rounded-md inline-block">
                  ${formData.totalPrice}
                </span>
              </div>

            
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
