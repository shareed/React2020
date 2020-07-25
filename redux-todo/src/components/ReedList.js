import React from "react";
import { connect } from "react-redux";
import { addMember } from "../actions";

class ReedList extends React.Component {
  state = {
    newMember: ""
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button
          onClick={() => {
            this.props.addMember(this.state.newMember);
          }}
        >
          Add member
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.reedReducer.members
  };
};

const mapDispatchToProps = { addMember };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReedList);
