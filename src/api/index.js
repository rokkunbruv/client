import axios from 'axios';

const url = 'https://memorizz-learn-mern.netlify.app/posts';

// ig fetchPosts makes a call to the server to do smth idk
export const fetchPosts = () => axios.get(url);

// this is asking the server that a post will be created / to create a post idk
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);