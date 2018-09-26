import request from './request';

// Api service

// Hello Api,仅测试接口使用
function helloApi () {
  return request('GET', '/');
}

function login (name, password) {
  return request('POST', '/api/login', { roleId: name, password });
}

function getAllUsers () {
  return request('GET', '/api/users');
}

function getAllLessons () {
  return request('GET', '/api/lessons');
}

function getOneLessonById (id) {
  return request('GET', `/api/lesson/${id}`);
}

function getOneLessonByName (name) {
  return request('GET', `/api/lesson/name/${name}`);
}

export default {
  helloApi,
  login,
  getAllUsers,
  getAllLessons,
  getOneLessonById,
  getOneLessonByName
}
