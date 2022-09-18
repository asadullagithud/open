import "./index.css";

const Topic = (props) => {
  const { Syllabus } = props;
  const { title, chapter, image, buttonImg } = Syllabus;
  return (
    <li className="syllabusItem">
      <img src={image} className="image" alt="pic" />
      <div className="right-syllabus-container">
        <div className="header-para">
          <h1 className="header-Syllabus">{title}</h1>
          <p className="para-syllabus">{chapter}</p>
        </div>
        <img src={buttonImg} className="image" alt="button" />
      </div>
    </li>
  );
};
export default Topic;
