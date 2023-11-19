import axios from 'axios';
import * as api from './api.service';
import { BlogModel, CreateBlogDto } from '../models/blog.model';

export default {
  async getAll() {
    return await axios.get(api.BlogApi);
  },

  async getOne(id: string) {
    return await axios.get(`${api.BlogApi}/${id}`);
  },

  async create(data: CreateBlogDto) {
    return await axios.post(api.BlogApi, data);
  },

  async update(id: string, data: Partial<CreateBlogDto>) {
    return await axios.patch(`${api.BlogApi}/${id}`, data);
  },

  async deleteOne(id: string) {
    return await axios.delete(`${api.BlogApi}/${id}`);
  },
};
