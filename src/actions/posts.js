// Contains functionalities that enables user to do something on your app

import * as api from '../api';

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

// Action Creators

// retrieves all posts on the database to be displayed
export const getPosts = () => async (dispatch) => {
    try {
        // you asked the api to call fetch posts which will ig collect all posts in the database
        const { data } = await api.fetchPosts();

        // dispatch what the api did to the app so that the posts will be displayed
        dispatch( { type: FETCH_ALL, payload: data } );
    } catch (error) {
        console.log(error);
    }
}

// creates a post to be stored in the database
export const createPost = (post) => async (dispatch) => {
    try {
        // you asked the api to create a post (dunno not sure)
        const { data } = await api.createPost(post);

        // dispatch the action so that the new post will be stored in the database
        dispatch( { type: CREATE, payload: data } );
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch( { type: UPDATE, payload: data} );
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch( { type: DELETE, payload: id } );
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch( {  type: LIKE, payload: data } );
    } catch (error) {
        console.log(error);
    }
}