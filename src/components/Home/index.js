import { Component } from "react";
import Topic from "../Topic";
import Syllabus from "../Syllabus";
import "./index.css";

const topicList = [
  {
    id: 1,
    topic: "History",
    percentage: 33,
    value: true,
  },
  {
    id: 2,
    topic: "Civics",
    percentage: 65,
    value: false,
  },
  {
    id: 3,
    topic: "Geo",
    percentage: 80,
    value: false,
  },
  {
    id: 4,
    topic: "Maths",
    percentage: 100,
    value: false,
  },
];

const syllabus = [
  {
    id: 1,
    title: "ART & CULTURE",
    chapter: "chapter 1",
    image: "https://i.postimg.cc/mDXkhT2b/Screenshot-2022-09-17-221113.jpg",
    buttonImg: "https://i.postimg.cc/NGRGW8Rs/Screenshot-2022-09-17-221322.jpg",
  },
  {
    id: 2,
    title: "ART & CULTURE",
    chapter: "chapter 1",
    image: "https://i.postimg.cc/mDXkhT2b/Screenshot-2022-09-17-221113.jpg",
    buttonImg: "https://i.postimg.cc/NGRGW8Rs/Screenshot-2022-09-17-221322.jpg",
  },
  {
    id: 3,
    title: "ART & CULTURE",
    chapter: "chapter 1",
    image: "https://i.postimg.cc/0QQ5ThGh/Screenshot-2022-09-17-221234.jpg",
    buttonImg: "https://i.postimg.cc/tgLyc7Tn/Screenshot-2022-09-17-221335.jpg",
  },
  {
    id: 4,
    title: "ART & CULTURE",
    chapter: "chapter 1",
    image: "https://i.postimg.cc/v8nDGwwd/Screenshot-2022-09-17-221252.jpg",
    buttonImg: "https://i.postimg.cc/J73mTrWt/Screenshot-2022-09-17-221351.jpg",
  },
];

class Home extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    setInterval(this.displayHello, 2500);
  }
  displayHello = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { show } = this.state;
    return (
      <div className="Home-container">
        <h1 className="home-header">Planning</h1>
        <ul className="topic-list">
          {topicList.map((item) => (
            <Topic TopicData={item} key={item.id} />
          ))}
        </ul>
        <ul className="syllabus-list">
          {syllabus.map((item) => (
            <Syllabus Syllabus={item} key={item.id} />
          ))}
        </ul>
        {show ? (
          <p className="para-home">pls click on history button</p>
        ) : (
          <p className="para-dummy"></p>
        )}
      </div>
    );
  }
}

export default Home;
