import { useState } from "react";
import hotelData from "./data/hotelsdata";
import HotelCard from "./components/HotelCard";
import BookingForm from "./components/BookingForm";
import Filter from "./components/Filter";
import Modal from "./components/Modal";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (hotel, room) => {
    setSelectedHotel(hotel);
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHotel(null);
    setSelectedRoom(null);
  };

  return (
    <div>
      <Header/>
      
      {/* Filter component to allow users to select a room type */}
      <Filter setRoomType={setRoomType} />

      <div className="hotel-list">
        {hotelData.map((hotel, index) => (
          <HotelCard
            key={index}
            hotel={hotel}
            roomType={roomType} 
            onBookNow={handleBookNow}
          />
        ))}
      </div>
      {/* Modal component displaying the booking form */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedHotel && selectedRoom ? (
          <BookingForm
            selectedHotel={selectedHotel}
            selectedRoom={selectedRoom}
            handleClose={handleCloseModal}
          />
        ) : (
          <p>Loading booking details...</p>
        )}
      </Modal>
      <Footer/>
    </div>
  );
};

export default App;
