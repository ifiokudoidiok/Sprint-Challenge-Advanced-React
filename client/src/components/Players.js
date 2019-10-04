import React from "react";
import axios from "axios";

const playersAPI = "http://localhost:5000/api/players";
export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    };
  }
  // {
  //     name: "",
  //     country:"",
  //     searches:"",
  //     id:"",
  // }
  componentDidMount() {
    axios
      .get(playersAPI)
      .then(response => {
        //   debugger;
        console.log(response.data);
        this.setState({
          player: response.data
        });
      })
      .catch(response => {
        debugger;
      });
  }

  render() {
    return (
      <>
        {this.state.player.map(player => {
          return (
            <>
              
              <h1> Name: {player.name}</h1>
              <p>Country: {player.country}</p>
              <p>Searches:  {player.searches}</p>

                
            </>
          );
        })}
      </>
    );
  }
}
