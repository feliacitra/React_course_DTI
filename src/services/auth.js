import BaseService from './baseService';
import API from '../config/rest';

const login = (username, password) => {
  return BaseService.post(API.LOGIN, { username, password });
};

const getProduct = () => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 30,
      offset: 0,
      search: 'minyak',
    },
  });
};

export default { login, getProduct };
