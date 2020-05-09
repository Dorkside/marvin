import React from "react";
import "./MessageList.css";

type Message = {
  id: number;
  sender?: String;
  text?: String;
};

type MessageListProps = {
  messages: Message[];
};

class MessageList extends React.Component<MessageListProps> {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message) => {
          return (
            <li key={message.id}>
              <div>{message.sender}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
