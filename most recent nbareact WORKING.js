import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Component } from "react";
import basketball from "./basketball.png";

const API = "https://www.reddit.com/r/nbastreams.json";
const topStream = "";
let regexPattern = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redditData: [],
      text: "",
      loading: true,
      comments: "",
      thread: [],
      num: 0,
      num2: 0,
      num3: 0,
      linksArr: [],
      firstArr: [],
      secondArr: [],
      thirdArr: [],
      fourthArr: [],
      fifthArr: [],
      arr: [
        "first link",
        "second link",
        "third link",
        "fourth link",
        "fifth link"
      ],
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: ""
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data =>
        this.setState({ redditData: data.data.children, loading: false })
      );
  }

  dataObject = data => {
    //console.log(JSON.stringify(data));
    if (this.state.num3 === 1) {
      console.log("the first link", this.state.num3);
      let stateArr = this.state.firstArr;
      let dataCopy = data.slice();
      stateArr.push(dataCopy);
      this.setState({ firstArr: stateArr });
      console.log(data);
      console.log("you beter fucking save 1:36am 3/20/19");
    } else if (this.state.num3 === 2) {
      console.log("second", this.state.num3);
      let stateArr = this.state.secondArr;
      let dataCopy = data.slice();
      stateArr.push(dataCopy);
      this.setState({ secondArr: stateArr });
      console.log(data);
      //basically what your doing is
      //creating an else if statement for each this.state.num3
      //which represents each comment data coming in for each page
    }
  };

  componentDidUpdate() {
    const threads = this.state.redditData.filter(
      game => game.data.link_flair_css_class === "gamethread"
    );
    let commentArr = [];
    debugger;
    if (this.state.num < threads.length) {
      for (let i = 0; i < threads.length; i++) {
        commentArr.push(threads[i].data.url);
      }
      this.setState({ num: this.state.num + 1, linksArr: commentArr });
    }
    console.log(this.state.linksArr.length);
    if (this.state.num2 < 1 && this.state.linksArr.length > 0) {
      //do the shit in here only once
      //allows you to update the state in the didUpdate()
      for (let i = 0; i < this.state.linksArr.length; i++) {
        //fetch in here each of comment links
        console.log(this.state.linksArr[0]);
        fetch(this.state.linksArr[i] + ".json")
          .then(response => response.json())
          .then(data => this.dataObject(data));
        this.setState({ num3: this.state.num3 + 1 });
      }
      this.setState({ num2: this.state.num2 + 1 });
    }
    //console.log(this.state.linksArr);
  }

  render() {
    const threads = this.state.redditData.filter(
      game => game.data.link_flair_css_class === "gamethread"
    );
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let content;
    if (this.state.loading) {
      content = (
        <h2 className="loading">
          {" "}
          grabbing all the latest nba games, hold up!{" "}
        </h2>
      );
    } else {
      content = (
        <div>
          <br />
          <h2
            onClick={() => window.open("https://campusstreams.ga")}
            className="weather"
          >
            {" "}
            NBA Games for {days[d.getDay()]}, {months[d.getMonth()]}{" "}
            {d.getDate()}
          </h2>
          <ol className="center">
            {threads.map((hit, index) => (
              <li key={hit.data.created_utc}>
                <a href={hit.data.url} target="_blank">
                  {hit.data.title}
                </a>

                <div className="italicize">stream links will appear here</div>
                <div> {this.state.arr[index]} </div>
              </li>
            ))}
          </ol>
          <div className="center">
            {" "}
            <img
              src={basketball}
              alt="basketball img"
              height="60"
              width="60"
            />{" "}
          </div>
        </div>
      );
    }
    return <div> {content} </div>;
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
