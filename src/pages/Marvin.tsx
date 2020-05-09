import React from "react";
import { IonPage } from "@ionic/react";
import "./Marvin.css";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";

type Message = {
  id: number;
  sender?: string;
  text?: string;
};

type MarvinState = {
  messages: Message[];
};

class Marvin extends React.Component<{}, MarvinState> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    };
    this.addMessage = this.addMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  addMessage(message: Partial<Message>): void {
    this.setState({
      messages: [
        ...this.state.messages,
        { id: this.state.messages.length, ...message },
      ],
    });
  }

  handleMessage(message: Partial<Message>) {
    this.addMessage(message);
    this.queryMessage(message.text);
  }

  queryMessage(messageString?: string) {
    fetch(`/.netlify/functions/hello?q=${messageString}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const text = result.entities.intent[0].metadata;
          this.addMessage({ sender: "marvin", text });
        },
        (error) => {
          console.warn(error);
        }
      );
  }

  componentDidMount() {
    this.queryMessage("initialisation");
  }

  componentWillUnmount() {}

  render() {
    return (
      <IonPage>
        <MessageList messages={this.state.messages}></MessageList>
        <SendMessageForm messageCallback={this.handleMessage}></SendMessageForm>
      </IonPage>
    );
  }
}

export default Marvin;
