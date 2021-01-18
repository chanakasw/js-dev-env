import 'whatwg-fetch';
import { getBaseURL } from './base-url';

const baseURL = getBaseURL();

export const getUsers = () => get('users');

export const deleteUser = id => del(`users/${id}`);

const get = url => fetch(baseURL + url).then(onSuccess, onError);

// Can't call func delete since reserved word
const del = url => {
  const request = new Request(baseURL + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
};

const onSuccess = response => response.json();

const onError = error => console.log(error); // eslint-disable-line no-console

