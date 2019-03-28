import React from 'react';
import { create } from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import App from '../App';
import Patient from '../components/List/components/Patient';
import Container from '../components/Container/Container';
import Info from '../components/Container/components/Info';
import Chat from '../components/Container/components/Chat';
import UtilsServices from '../services/UtilsService';
import mockdata from './mockData/example.json';

describe('Basic Flow', () => {
  it('matches the snapshot', () => {
    const component = create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('shows a list of patients', () => {
    const component = create(<App />);
    const instance = component.getInstance();
    const sorted = UtilsServices.sortList(mockdata);
    const filtered = UtilsServices.defineFilters(sorted);
    instance.setState({ patients: filtered, isLoading: false });
    const { root } = component;
    const listOfPatients = root.findAllByType(Patient);
    expect(listOfPatients.length).toBe(5);
  });

  it('select a patient', async () => {
    const component = create(<App />);
    const instance = component.getInstance();
    const sorted = UtilsServices.sortList(mockdata);
    const filtered = UtilsServices.defineFilters(sorted);
    instance.setState({ patients: filtered, isLoading: false });
    const { root } = component;
    const listOfPatients = root.findAllByType(Patient);
    const { patient } = listOfPatients[0].props;
    listOfPatients[0].children[0].props.onClick();
    const container = root.findAllByType(Container);
    const renderedName = container[0].findAllByType('h5')[0].children[0];
    expect(renderedName).toBe(`${patient.firstName} ${patient.lastName}`);
  });

  it('shows info of the patient', async () => {
    const component = create(<App />);
    const instance = component.getInstance();
    const sorted = UtilsServices.sortList(mockdata);
    const filtered = UtilsServices.defineFilters(sorted);
    instance.setState({ patients: filtered, isLoading: false });
    const { root } = component;
    const listOfPatients = root.findAllByType(Patient);
    listOfPatients[0].children[0].props.onClick();
    const container = root.findAllByType(Container);
    container[0].findAllByType(FontAwesomeIcon)[1].props.onClick();
    expect(container[0].findAllByType(Info).length).toBe(1);
  });

  it('shows messages of the patient', async () => {
    const component = create(<App />);
    const instance = component.getInstance();
    const sorted = UtilsServices.sortList(mockdata);
    const filtered = UtilsServices.defineFilters(sorted);
    instance.setState({ patients: filtered, isLoading: false });
    const { root } = component;
    const listOfPatients = root.findAllByType(Patient);
    listOfPatients[0].children[0].props.onClick();
    const container = root.findAllByType(Container);
    container[0].findAllByType(FontAwesomeIcon)[0].props.onClick();
    expect(container[0].findAllByType(Chat).length).toBe(1);
  });

  it('changes list after filter active', async () => {
    const component = create(<App />);
    const instance = component.getInstance();
    const sorted = UtilsServices.sortList(mockdata);
    const filtered = UtilsServices.defineFilters(sorted);
    instance.setState({ patients: filtered, isLoading: false });
    const { root } = component;
    const filterLinked = root.findAllByType('input');
    const event = {
      preventDefaul() {},
      target: {
        checked: true,
        value: 2
      }
    };
    filterLinked[0].props.onChange(event);
    const listOfPatients = root.findAllByType(Patient);
    expect(listOfPatients.length).toBe(3);
  });
});
