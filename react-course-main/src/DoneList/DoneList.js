import React from "react";

class DoneList extends React.Component {
  render() {
    return (
      <>
        <h5>Done items</h5>
        {this.props.items.map((item) => {
          return (
            <div className="card mb-2">
              <div class="card-body">
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default DoneList;
