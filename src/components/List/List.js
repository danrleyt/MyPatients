import React from 'react';
import Patient from './components/Patient';

const borderStyle = {
  border: 'solid',
  height: '100vh'
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 1
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    let { filter } = this.state;

    if (event.target.checked) {
      this.setState({ filter: (filter *= parseInt(event.target.value, 10)) });
    } else {
      this.setState({ filter: (filter /= parseInt(event.target.value, 10)) });
    }
  }

  render() {
    const { objects, callback } = this.props;
    const { filter } = this.state;
    return (
      <div className="col s12 m3" style={borderStyle}>
        <div className="row">
          <p className="col s4">
            <input
              type="checkbox"
              id="linked"
              value="2"
              onChange={this.handleFilter}
            />
            <label htmlFor="linked">Linked</label>
          </p>
          <p className="col s4">
            <input
              type="checkbox"
              id="online"
              value="3"
              onChange={this.handleFilter}
            />
            <label htmlFor="online">Online</label>
          </p>
          <p className="col s4">
            <input
              type="checkbox"
              id="unread"
              value="5"
              onChange={this.handleFilter}
            />
            <label htmlFor="unread">Unread</label>
          </p>
        </div>
        <div className="row">
          {objects.map(value => {
            if (filter === 1)
              return (
                <Patient
                  key={value.phoneNumber}
                  patient={value}
                  callback={callback}
                />
              );
            if (value.filter % filter === 0)
              return (
                <Patient
                  key={value.phoneNumber}
                  patient={value}
                  callback={callback}
                />
              );

            return null;
          })}
        </div>
      </div>
    );
  }
}

export default List;
