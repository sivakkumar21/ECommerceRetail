import { ApiError } from "./types/ApiError";

export const getError = function (error: ApiError) {
  return error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : error.message;
};
