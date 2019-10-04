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
        <table>
          <tbody>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Country</th>
              <th>Searches</th>
            </tr>
          </tbody>
        </table>
        {this.state.player.map(player => {
          return (
            <table>
              <tbody>
                <tr>
                  <td> {player.id}</td>
                  <td> {player.name}</td>
                  <td> {player.country}</td>
                  <td> {player.searches}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </>
    );
  }
}
