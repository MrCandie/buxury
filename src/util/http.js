import axios from "axios";

const API_URL = "https://buxury.onrender.com/api/v1";

export async function signup(data) {
  const response = await axios.post(`${API_URL}/user/register`, data);

  return response.data;
}

export async function login(data) {
  const response = await axios.post(`${API_URL}/user/login`, data);

  return response.data;
}

export async function verifyOtp(data) {
  const response = await axios.post(`${API_URL}/user/verify`, data);

  return response.data;
}

export async function forgotPassword(data) {
  const response = await axios.post(`${API_URL}/user/forgot-password`, data);

  return response.data;
}

export async function resetPassword(data) {
  const response = await axios.post(`${API_URL}/user/reset-password`, data);

  return response.data;
}
