import "../styles/HotelCard.scss";

const HotelCard = ({ hotel, roomType, onBookNow }) => {
  // Filter rooms based on the selected roomType
  const roomsToShow = roomType
    ? hotel.rooms.filter((room) => room.roomType === roomType)
    : hotel.rooms;

  return (
    <div className="hotel-card">
      <h3>{hotel.hotelName}</h3>
      {roomsToShow.map((room, index) => (
        <div key={index} className="room-info">
          <p>Room Type: {room.roomType}</p>
          <p>Price: {room.price}</p>
          <button
            className="book-now-btn"
            onClick={() => onBookNow(hotel, room)} // Trigger booking when clicked
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
