import React from "react";

class PersonClass extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}

export { PersonClass };
