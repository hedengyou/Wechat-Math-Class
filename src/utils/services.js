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

function getVideoUrl (videoId) {
  return request('GET', `/api/video/${videoId}`);
}

function getQuestions (lesson, chapter, subChapter) {
  return request('POST', '/api/lesson/getQuestions', { lesson, chapter, subChapter });
}

function getAllWork () {
  return request('GET', '/api/homeworkAll');
}

export default {
  helloApi,
  login,
  getAllUsers,
  getAllLessons,
  getOneLessonById,
  getOneLessonByName,
  getVideoUrl,
  getQuestions,
  getAllWork
}
