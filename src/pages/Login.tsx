import React, { useEffect } from 'react';
import { LoginHandler } from '../handler/apihandler';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const navigate = useNavigate();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken') || '';
    if (accessToken !== '') {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const loginHandler = async () => {
    try {
      const user_id = id;
      const user_password = password;

      const result = await LoginHandler({ id: user_id, pw: user_password });
      if (result) {
        navigate('/', { replace: true });
      } else {
        toast.error('사용자 인증에 실패하였습니다.', {
          position: 'bottom-center',
        });
      }
    } catch (e) {
      toast.error('사용자 인증에 실패하였습니다.', {
        position: 'bottom-center',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl min-h-[400px] flex items-center justify-center p-5">
        <div className="w-full flex items-center justify-center">
          <form
            onSubmit={loginHandler}
            className="bg-white flex flex-col items-center justify-center h-full text-center"
          >
            <h1 className="font-bold m-0 text-2xl mb-4">로그인</h1>
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="rounded-lg bg-gray-200 border-none my-2 w-full h-10 pl-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg bg-gray-200 border-none my-2 w-full h-10 pl-3"
            />
            <button
              type="submit"
              className="rounded-full border border-blue-600 bg-blue-600 text-white text-sm font-bold tracking-wider uppercase transition-transform duration-200 hover:scale-95 focus:outline-none p-3 mt-3"
            >
              Sign In
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
