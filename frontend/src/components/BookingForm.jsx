import { useState } from "react";
import PropTypes from "prop-types";
import { sendConfirmationEmail } from "../utils/emailService";
import "../styles/BookingForm.scss";

const BookingForm = ({ selectedHotel, selectedRoom, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev)=>({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookingData = {
      ...formData,
      hotelName: selectedHotel.hotelName,
      roomType: selectedRoom.roomType,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
    };

    sendConfirmationEmail(formData.email, bookingData)
      .then(() => {
        alert("Booking Confirmed!");
        handleClose();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an error with your booking. Please try again.");
      });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Booking Form</h2>
      <p>{selectedHotel.hotelName}</p>
      <p>{selectedRoom.roomType}</p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkOut"
        value={formData.checkOut}
        onChange={handleChange}
        required
      />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

BookingForm.propTypes = {
  selectedHotel: PropTypes.shape({
    hotelName: PropTypes.string.isRequired,
  }).isRequired,
  selectedRoom: PropTypes.shape({
    roomType: PropTypes.string.isRequired,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BookingForm;