import Axios from "axios";
const URL = import.meta.env.VITE_APP_ENV == 'local' ? "http://localhost" : import.meta.env.VITE_APP_URL;

export const getClassifications = async () => {
  try {
    const classifications = await Axios.get(`${URL}/api/classifications`);
    return classifications;
  } catch (error) {
    return error;
  }
};

export const registerProvider = async (formdata) => {
  try {
    const provider = await axios.post(`${URL}/register`, formdata, {
      Headers: { "Access-Control-Allow-Origin": "*" },
    });
    return provider;
  } catch (error) {
    return error;
  }
};

export const loginProvider = async (formdata) => {
  try {
    const provider = await axios.post(`${URL}/login`, formdata);
    return provider;
  } catch (error) {
    return error;
  }
};

export const callUser = async() => {
  try {
    const response = await axios.get(`${URL}/user`);
    return response;
  } catch (error) {
    return error;
  }
}

export const sendPasswordResetLink = async (formdata) => {
  try {
    const provider = await axios.post(`${URL}/forgot-password`, formdata);
    return provider;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (formdata) => {
  try {
    const provider = await axios.post(`${URL}/reset-password`, formdata);
    return provider;
  } catch (error) {
    return error;
  }
};

export const resendEmailCode = async () => {
  try {
    const response = await axios.post(`${URL}/email/verification-notification`);
    return response;
  } catch (error) {
    return error;
  }
};

export const verifyEmail = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${URL}/logout`);
    return response;
  } catch (error) {
    return error;
  }
}

export const getCsrfToken = async () => {
  try {
    const response = await axios.get(`${URL}/sanctum/csrf-cookie`, { withCredentials: true, credentials: 'include', crossDomain: true });
    // const response = await axios.get(`${URL}/token`, { withCredentials: true, credentials: 'include', crossDomain: true, headers: { "X-CSRF-TOKEN": token }});
    return response;
  } catch (error) {
    return error;
  }
};

export const getToken = async () => {
  try {
    const response = await axios.get(`${URL}/sanctum/csrf-cookie`, { withCredentials: true, credentials: 'include', crossDomain: true });
    // const response = await axios.get(`${URL}/token`, { withCredentials: true, credentials: 'include', crossDomain: true});
    return response;
  } catch (error) {
    return error;
  }
};
