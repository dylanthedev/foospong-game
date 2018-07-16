import React, { Component, createContext } from "react";
import Nes from "nes";

const Context = createContext();

const { Provider, Consumer } = Context;

class Store extends Component {
  state = {
    connected: false
  };

  actions = {
    sendController: event => () => {
      // send websocket event
      console.log("sending " + event, this.client, this.state.playerNumber);
      this.client.request({
        method: "POST",
        path: `/player/${this.state.playerNumber}`,
        payload: {
          event
        }
      });
    },
    setPlayer: playerNumber => {
      this.setState({
        playerNumber
      });
    }
  };

  client = new Nes.Client(process.env.REACT_APP_SOCKET_URL);

  componentDidMount() {
    this.client
      .connect()
      .then(() => {
        this.setState({
          connected: true
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: this.actions,
          client: this.client
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, Store };