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
            <table>
                <tbody>
              <tr>
              <td> {player.id}</td>
              <td> {player.name}</td>
              <td> {player.country}</td>
              <td>  {player.searches}</td>
              </tr>
                </tbody>

                
            </table>
          );
        })}
      </>
    );
  }
}
