import { ResponseData } from './common/api_types';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;

export const login = async <T>(query: object): Promise<boolean> => {
  try {
    const response = await axios.get(`${apiUrl}/user/login`, {
      params: query,
    });
    if (response.status !== 200) throw new Error('login failed');
    else {
      const data: ResponseData<T> = response.data as ResponseData<T>;
      console.log(data);
      if (data.message !== 'success' || (data.data as any).message) {
        throw new Error('login failed');
      }
      localStorage.setItem('accessToken', (data.data as any).access_token);
      localStorage.setItem('refreshToken', (data.data as any).refresh_token);

      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
