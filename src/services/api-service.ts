import axios from "axios";

export const baseURL = "https://electricalways.com/api";
export const assetsBaseURL = "https://electricalways.com/storage";

export default axios.create({
  baseURL: baseURL,
});
