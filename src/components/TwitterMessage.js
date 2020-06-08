import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleChange=(e)=>{
    this.setState({
      tweet: e.target.value
  })
}

  render() {
    let charactersRemaining = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" id="message" onChange={this.handleChange} value={this.state.tweet}/>
        {charactersRemaining}
      </div>
    );
  }
}

export default TwitterMessage;
