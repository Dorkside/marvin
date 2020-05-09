import React from "react";
import { IonPage } from "@ionic/react";
import "./Marvin.css";
import MessageList from "../components/MessageList";

type Message = {
  id: number;
  sender?: String;
  text?: String;
};

type MarvinState = {
  messages: Message[];
};

class Marvin extends React.Component<{}, MarvinState> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [{ id: 0, sender: "marvin", text: "Hi." }],
    };
  }

  addMessage(message: Partial<Message>): Message[] {
    return [
      ...this.state.messages,
      { id: this.state.messages.length, ...message },
    ];
  }

  componentDidMount() {
    fetch("/.netlify/functions/hello")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.warn(error);
        }
      );
  }

  componentWillUnmount() {}

  render() {
    return (
      <IonPage>
        <MessageList messages={this.state.messages}></MessageList>
        <input></input>
      </IonPage>
    );
  }
}

export default Marvin;
