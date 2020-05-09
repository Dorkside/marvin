import React from "react";
import "./SendMessageForm.css";

type SendMessageProps = {
  messageCallback?: Function;
};

type SendMessageState = {
  message: string;
};

class SendMessageForm extends React.Component<
  SendMessageProps,
  SendMessageState
> {
  messageCallback: Function;

  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
    };
    this.messageCallback = props.messageCallback;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    if (this.messageCallback) {
      this.messageCallback({
        sender: "user",
        text: this.state.message,
      });
    }
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <form className="send-message-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}
export default SendMessageForm;
