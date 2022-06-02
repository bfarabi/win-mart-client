import axios from "axios";


const BASE_URL = "https://stormy-tundra-69275.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzM2MWVkM2QwODIwNjQ5MGU2OTIwOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTI2MjAxNjAsImV4cCI6MTY1Mjg3OTM2MH0._h2fZgizrIGvHAnACR0WV9sWVTZUK4ZXY8DqRM4FiFc";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
