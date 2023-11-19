import axios from 'axios';
import * as api from './api.service';
import { UserModel } from '../models/user.model';

export default {
  async getAll() {
    return await axios.get(api.UserApi);
  },

  async getOne(id: string) {
    return await axios.get(`${api.UserApi}/${id}`);
  },

  async update(id: string, data: Partial<UserModel>) {
    return await axios.patch(`${api.UserApi}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await axios.delete(`${api.UserApi}/${id}`);
  },
};
