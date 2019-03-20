import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Component } from "react";

const API = "https://www.reddit.com/r/nbastreams.json";
const topStream = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redditData: [],
      defaultQuery: "redux",
      text: "",
      loading: true
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data =>
        this.setState({ redditData: data.data.children, loading: false })
      );
  }

  commentFetch2 = theurl => {
    console.log(theurl);
    let test = "some random code";

    return test;
  };

  commentFetch = url => {
    //hey
    let urlArr = [];
    urlArr.push(url);

    let links = this.commentFetch2(url);
    console.log(links);
    return <div> stream links will appear here </div>;
  };

  render() {
    /*const threads = this.state.redditData.filter(
      game => game.data.link_flair_css_class === "gamethread"
    );
    */
    let reg = /^Game/;
    const threads = this.state.redditData.filter(soccer =>
      reg.test(soccer.data.title)
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
            {threads.map(hit => (
              <li key={hit.data.created_utc}>
                <a href={hit.data.url} target="_blank">
                  {hit.data.title}
                </a>

                <div className="italicize">stream links will appear here</div>
              </li>
            ))}
          </ol>
        </div>
      );
    }
    return <div> {content} </div>;
  }
}

export default App;
