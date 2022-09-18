import Percentage from "../Percentage";
import "./index.css";

const Topic = (props) => {
  const { StateData } = props;
  const { topic, percentage } = StateData;
  return (
    <li className="state-style">
      <h1 className="header-State">{topic}</h1>
      <Percentage percentage={percentage} className="percentage-container" />
    </li>
  );
};
export default Topic;
