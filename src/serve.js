import axios from "axios";
import Qs from "qs";
const baseUrl = "http://39.108.180.151:10010/";
// const baseUrl = "http://49.234.185.250:10000/";
// const baseUrl = "http://39.108.180.151:10086/";

const getqq = async (value, url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params: value,
      })
      .then(function (response) {
        // console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
const getqqpjhm = async (value, url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url + "/" + value)
      .then(function (response) {
        // console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
const postqq = async (value, url) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, value)
      .then(function (response) {
        // console.log(response);
        resolve(response);
        // return response
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
const putqq = async (value, url) => {
  console.log(value);
  var readyData = Qs.stringify(value);
  return new Promise((resolve, reject) => {
    axios
      .put(baseUrl + url + "?" + readyData)
      .then(function (response) {
        // console.log(response);
        resolve(response);
        // return response
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
//用/结尾的put请求
const putqqdg = async (value, url, body) => {
  console.log(value);
  // var readyData = Qs.stringify(value);
  return new Promise((resolve, reject) => {
    axios
      .put(baseUrl + url + "/" + value, body)
      .then(function (response) {
        // console.log(response);
        resolve(response);
        // return response
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
const deleteqq = async (value, url) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(baseUrl + url + "/" + value)
      .then(function (response) {
        // console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
export { getqq, getqqpjhm, postqq, putqq, deleteqq, putqqdg };
