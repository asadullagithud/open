import { BiHomeAlt } from "react-icons/bi";
import { VscChecklist } from "react-icons/vsc";
import { MdOutlineHelpCenter } from "react-icons/md";
import { ImStatsBars2 } from "react-icons/im";
import { CgTimer } from "react-icons/cg";
import "./index.css";

const Topic = () => {
  return (
    <div className="bottom-container">
      <li className="icons-style">
        <BiHomeAlt size={24} color="gray" />
        <p className="para-ioc">Home</p>
      </li>
      <li className="icons-style">
        <VscChecklist size={24} className="selected" />
        <p className="para-ioc">Planning</p>
      </li>
      <li className="icons-style">
        <CgTimer size={24} color="gray" />
        <p className="para-ioc">Revision</p>
      </li>
      <li className="icons-style">
        <MdOutlineHelpCenter size={24} color="gray" />
        <p className="para-ioc">Help</p>
      </li>
      <li className="icons-style">
        <ImStatsBars2 size={24} color="gray" />
        <p className="para-ioc">Stats</p>
      </li>
    </div>
  );
};
export default Topic;
