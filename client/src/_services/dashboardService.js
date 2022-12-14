import axios from 'axios';

const getTrans = node => axios.get(`/api/v1/dashboard/${node}/trans`)
  .then(res => res);

export const dashboardService = {
  getTrans,
};
