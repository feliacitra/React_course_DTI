import BaseService from './baseService';
import API from '../config/rest';

const login = (username, password) => {
  return BaseService.post(API.LOGIN, { username, password });
};

const getProduct = (namaProduct) => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 10,
      offset: 0,
      search: namaProduct,
    },
  });
};

export default { login, getProduct };
