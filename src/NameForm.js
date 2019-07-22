import React from 'react';
export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      var newWord = this.toRandomCase(event.target.value);
    this.setState({ value: newWord });
  }

  toRandomCase (text) {
    var ret = '';
    for (var i = 0; i < text.length; i++) {
        var char = text[i].toLowerCase();
        if (Math.random()<0.5) {
            ret += char;
        }
        else {
            ret += char.toUpperCase();
        }
    }
    return ret;
}

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <span class="input">
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      </span>
    </form>);
  }
}
