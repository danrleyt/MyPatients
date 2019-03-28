import axios from 'axios';
import UtilsService from './UtilsService';

const url =
  'https://cors-anywhere.herokuapp.com/https://takeshi.minddoc.com/api/v1/status/fixtures/patients';

const PatientService = {
  async fetchPatients() {
    try {
      const response = await axios.get(url);
      const sortedList = UtilsService.sortList(response.data);
      const filteredList = UtilsService.defineFilters(sortedList);
      return filteredList;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

export default PatientService;
