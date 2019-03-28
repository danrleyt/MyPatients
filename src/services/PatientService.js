import axios from 'axios';
import UtilsService from './UtilsService';

/* the webpack dev server from create-react-app didn't allow me to access a external endpoint, 
because of that I found this workaround with CORS allowed */

const url =
  'https://cors-anywhere.herokuapp.com/https://takeshi.minddoc.com/api/v1/status/fixtures/patients';

const PatientService = {
  async fetchPatients() {
    try {
      const response = await axios.get(url);
      const sortedList = UtilsService.sortList(response.data); // sort the list by the criterias
      const filteredList = UtilsService.defineFilters(sortedList); // add the filter property to patients
      return filteredList;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

export default PatientService;
