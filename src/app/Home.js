import "@babel/polyfill";
import React, { Component } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import Table from "./components/Table";
import moment from "moment";

class Home extends Component {
  state = {
    data: []
  };

  formatData = data => {
    return data.map(item => ({
      // 2018-12-27T19:27:32.331369
      when: moment(item.timestamp + "Z").fromNow(),
      who: item.author.key,
      description: item.comment
    }));
  };

  componentDidMount() {
    this.interval = setInterval(async () => {
      const response = await fetch(
        "http://openlibrary.org/recentchanges.json?limit=20"
      );
      const data = await response.json();
      const formattedData = this.formatData(data);

      this.setState({
        data: formattedData
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container>
        <Title title={this.props.title} />
        <Table headings={this.props.headings} data={this.state.data} />
      </Container>
    );
  }
}

export default Home;
