import { login } from './lib/login';

type APIFunction = (arg: any) => Promise<any>;

const Handler = (apiFunction: APIFunction) => {
  return async (arg: any) => {
    try {
      const result = await apiFunction(arg);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const LoginHandler = Handler(login);
