require('es6-promise').polyfill();
require('isomorphic-fetch');

export const fetchData = callback => {
  fetch('https://hacker-news.firebaseio.com/v0/item/13128146.json?print=pretty')
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function (stories) {
      // console.log(stories);
      // return stories;

      callback && callback(stories);
    });
}

export const fetchDataPromise = () => {
  return fetch('https://hacker-news.firebaseio.com/v0/item/13128146.json?print=pretty')
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  });
}
