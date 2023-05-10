import axios from "axios";

export const apiInstance = axios.create({});


export const getSome = () => {
    return apiInstance({ url: `api/hello`, method: "GET" });
  };