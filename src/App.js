import React, { Component } from 'react';
import List from './components/List/List';
import Container from './components/Container/Container';
import Loader from './components/static/Loader';
import Presentation from './components/static/Presentation';
import PatientService from './services/PatientService';

const styleapp = {
  display: 'flex',
  height: '100vh'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      selected: {},
      isLoading: true
    };
    this.handleSelectPatient = this.handleSelectPatient.bind(this);
  }

  async componentDidMount() {
    const patientsList = await PatientService.fetchPatients();
    this.setState({ patients: patientsList, isLoading: false });
  }

  handleSelectPatient(patient) {
    this.setState({ selected: patient });
  }

  render() {
    const { patients, selected, isLoading } = this.state;
    return (
      <div className="row" style={styleapp}>
        {isLoading ? (
          <Loader />
        ) : (
          <List objects={patients} callback={this.handleSelectPatient} />
        )}
        {Object.keys(selected).length ? (
          <Container selected={selected} />
        ) : (
          <Presentation />
        )}
      </div>
    );
  }
}

export default App;
