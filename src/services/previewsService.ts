// services/userService.js

import axios from 'axios';
import ApplicationDetails from '../types/ApplicationDetail';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your API base URL

export const previewSatReport = (details: ApplicationDetails) => {
  return axios.get(`${API_BASE_URL}/api/poc/sat/preview`,         
  {
    params : details
  });
};

// Add other functions related to user service as needed
