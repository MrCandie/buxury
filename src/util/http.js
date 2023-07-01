import axios from "axios";
import { getStoredItem } from "./lib";

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

export async function resendOtp(data) {
  const response = await axios.post(`${API_URL}/user/resend-otp`, data);

  return response.data;
}

export async function updatePassword(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/user/update-password`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateProfile(data) {
  const token = getStoredItem("token");
  const response = await axios.patch(`${API_URL}/user`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

//////////////////////
// stores
export async function getUserStores() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/store/me`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createStore(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/store`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function viewStore(slug) {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/store/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateStore(id, data) {
  const token = getStoredItem("token");
  const response = await axios.patch(`${API_URL}/store/me/update/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllStores() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/store/all`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
