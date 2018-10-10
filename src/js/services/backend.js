import axios from 'axios';
import config from '../config';

export function getCardsData() {
  return axios({
    method: 'GET',
    url: `${config.backendURL}/cards`,
  });
}

export function getColumnsData() {
  return axios({
    method: 'GET',
    url: `${config.backendURL}/columns`,
  });
}
