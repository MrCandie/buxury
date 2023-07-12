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

export async function uploadFile(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/product/upload`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllProducts() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/product/all`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function viewProduct(id) {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/product/${id}`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createProduct(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/product`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

///////////////////////////
// cart
export async function addCart(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/cart`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function viewCart() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function removeCart(id, data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/cart/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getCart(id) {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/cart/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTotalAmount() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/cart/total-amount`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function checkProduct(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/favorite/check-product`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function addFavorite(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/favorite`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getFavorites() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/favorite`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteFavorite(id) {
  const token = getStoredItem("token");
  const response = await axios.post(
    `${API_URL}/favorite/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function addReview(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/product/review`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

///////////////////
// orders
export async function createOrder(data) {
  const token = getStoredItem("token");
  const response = await axios.post(`${API_URL}/order`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getOrder(reference) {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/order/success/${reference}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getUserOrders() {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/order/user`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function viewOrder(id) {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/order/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getStoreOrders(id) {
  const token = getStoredItem("token");
  const response = await axios.get(`${API_URL}/store/orders/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateOrder(id, data) {
  const token = getStoredItem("token");
  const response = await axios.patch(`${API_URL}/order/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
