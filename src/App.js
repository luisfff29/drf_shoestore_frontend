import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shoes: [] };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
  }
  render() {
    return (
      <div style={{ margin: "2em" }}>
        <h1>Shoe Store</h1>
        {this.state.shoes.map((shoe) => {
          return (
            <ul>
              <li>
                <b>SIZE:</b> {shoe.size}
              </li>
              <li>
                <b>BRAND:</b> {shoe.brand}
              </li>
              <li>
                <b>MANUFACTURER:</b> {shoe.manufacturer}
              </li>
              <li>
                <b>COLOR:</b> {shoe.color}
              </li>
              <li>
                <b>MATERIAL:</b> {shoe.material}
              </li>
              <li>
                <b>STYLE:</b> {shoe.shoe_type}
              </li>
              <li>
                <b>FASTEN:</b> {shoe.fasten_type}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
