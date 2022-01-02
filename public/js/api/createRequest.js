/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  xhr.responseType = 'json';
  
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      options.callback(null, xhr.response);
    }
  }

  let url = options.url;

  if (options.data) {
    if (options.method === 'GET') {
      url += `?mail=${options.data.mail}&password=${options.data.password}`;
    } else {
      for (let key in options.data) {
        formData.append(key, options.data[key]);  
      }
    }
  }

  try {
    xhr.open(options.method, url, true);
    xhr.send(formData);
  } catch (e) {
    options.callback(e);
  }
  
  return xhr;
};