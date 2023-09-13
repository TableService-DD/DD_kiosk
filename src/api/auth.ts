import axios from 'axios';
import { BASE_URL } from '.';
export interface UserInfo {
  id: string;
  pw: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}
export async function getLogin(userInfo: UserInfo): Promise<boolean> {
  try {
    const response = await axios.get(`${BASE_URL}/user/login`, {
      params: userInfo,
    });

    if (
      response.status === 200 &&
      response.data &&
      response.data.data &&
      'access_token' in response.data.data
    ) {
      console.log('Login Success:', response.data);
      localStorage.setItem('access_token', response.data.data.access_token);
      localStorage.setItem('refresh_token', response.data.data.refresh_token);
      return true;
    }
    return false;
  } catch (error: unknown) {
    console.error('Login Error:', error);
    return false;
  }
}

export async function getRefresh(): Promise<boolean> {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/refresh`,
      {},
      {
        params: {
          refresh_token: localStorage.getItem('refresh_token'),
        },
      },
    );

    if (response.status === 200 && response.data) {
      localStorage.setItem('access_token', response.data.access_token);
      console.log('Refresh Success:');
      return true;
    }
    return false;
  } catch (error: unknown) {
    console.error('Refresh Error:', error);
    return false;
  }
}
