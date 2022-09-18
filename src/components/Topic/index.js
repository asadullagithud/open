import { IoIosClose } from "react-icons/io";
import Percentage from "../Percentage";
import State from "../State";
import Popup from "reactjs-popup";
import "./index.css";

const StatesList = [
  {
    id: 1,
    topic: "Weak",
    percentage: 33,
  },
  {
    id: 2,
    topic: "Average",
    percentage: 80,
  },
  {
    id: 3,
    topic: "Improvement",
    percentage: 66,
  },
  {
    id: 4,
    topic: "Cutoff level",
    percentage: 100,
  },
];

const Topic = (props) => {
  const { TopicData, renderStatePop } = props;
  const { topic, percentage, value } = TopicData;
  const classSelected = value ? "selected topic-header" : "topic-header";
  const stateChange = () => {
    renderStatePop();
    console.log("sirisha");
  };
  return (
    <li className="list-style">
      {value ? (
        <Popup
          trigger={
            <button className={classSelected} onChange={stateChange}>
              {topic}
            </button>
          }
          position="bottom left"
        >
          {(close) => (
            <>
              <div className="containerPop selected">
                <IoIosClose
                  size={22}
                  className="cross"
                  color="white"
                  onClick={() => close()}
                />
                <div className="title-pop">
                  <h1 className="header-pop">Strength Bar</h1>
                  <p className="para-pop">
                    Introducing strength bar to help you Know Your Week subjects
                  </p>
                </div>
                <ul className="state-list">
                  {StatesList.map((item) => (
                    <State StateData={item} key={item.id} />
                  ))}
                </ul>
                <div>
                  <button type="button" className="topic-header simple">
                    Finish
                  </button>
                </div>
              </div>
            </>
          )}
        </Popup>
      ) : (
        <button type="button" className={classSelected}>
          {topic}
        </button>
      )}
      <Percentage percentage={percentage} />
    </li>
  );
};
export default Topic;
