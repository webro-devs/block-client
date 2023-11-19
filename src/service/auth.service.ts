import axios from 'axios';
import * as api from './api.service';
import { SignInDto, SignUpDto } from '../models/user.model';

export default {
  async signIn(data: SignInDto) {
    return await axios.post(`${api.AuthApi}/signin`, data);
  },

  async signUp(data: SignUpDto) {
    return await axios.post(`${api.AuthApi}/signup`, data);
  },
};
