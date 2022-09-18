import { BiMenuAltLeft } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import "./index.css";
const Header = () => {
  return (
    <div className="center_container">
      <div className="Header-container">
        <div className="right-container">
          <BiMenuAltLeft className="icon" size={28} />
          <select class="topic-control">
            <option value="UPSC">UPSC</option>
            <option value="RRB">RRB</option>
            <option value="NTPC">NTPC</option>
          </select>
        </div>
        <div className="Left-container">
          <FiSearch className="icon" size={21} />
          <img
            src="https://i.postimg.cc/RZysLRPM/Coin.jpg"
            className="image-coin"
            alt="coin"
          />
          <h1 className="Header">2400</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
