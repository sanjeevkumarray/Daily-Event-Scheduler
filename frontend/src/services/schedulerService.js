import axios from "axios";

const API_URL = "http://localhost:5000/api/scheduler";

export const addEvent = async (event) => {
  return await axios.post(`${API_URL}/addEvent`, event);
};

export const getEvents = async () => {
  return await axios.get(`${API_URL}/getEvents`);
};
