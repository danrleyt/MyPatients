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
      patients: [], // List of patients
      selected: {}, // control which patient was selected
      isLoading: true // control when to show the loader
    };
    this.handleSelectPatient = this.handleSelectPatient.bind(this);
  }

  async componentDidMount() {
    const patientsList = await PatientService.fetchPatients(); // fetch the list of patients
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
