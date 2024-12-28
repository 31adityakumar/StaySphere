import PropTypes from "prop-types";
import "../styles/Filter.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Filter = ({ setRoomType }) => {
  return (
    <div className="filter-container">
      <label htmlFor="roomType" className="filter-label">
      <i className="fas fa-filter filter-icon" aria-hidden="true"></i>
      </label>
      <select
        id="roomType"
        name="roomType"
        onChange={(e) => setRoomType(e.target.value)}
        className="filter-dropdown"
        aria-label="Filter by Room Type"
      >
        <option value="" disabled selected>
          Room Type
        </option>
        <option value="">All</option>
        <option value="Economy Room">Economy Room</option>
        <option value="Deluxe Room">Deluxe Room</option>
        <option value="Luxury Suite">Luxury Suite</option>
        <option value="Presidential Suite">Presidential Suite</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  setRoomType: PropTypes.func.isRequired,
};

export default Filter;
