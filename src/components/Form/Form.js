// Form component where the user can input details for the post they want to create

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js';
import { createPost, updatePost } from '../../actions/posts.js'



const Form = ( { currentId, setCurrentId } ) => {
    // initialize fields for the post
    const [postData, setPostData] = useState( {
        creator: '', title: '', message: '', tags: '', selectedFile: '',
    } );
    const post = useSelector( (state) => currentId ? state.posts.find( (p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
        if (post) setPostData(post);
    }, [post] )

    // this will create the post
    const handleSubmit = (e) => {
        // dunno what this does
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData) );
        } else {
            // this is probably the frontend communicating to the backend through the api that
            // hey, the user wants to create a new post, so the server sends that data to the
            // database idk what im yapping about
            dispatch ( createPost(postData) );
        }

        clear();
    }

    // this is probably to clear what the user inputted on the form component
    const clear = () => {
        setCurrentId(null);
        setPostData( {
            creator: '', title: '', message: '', tags: '', selectedFile: '',
        } );
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" 
            noValidate 
            className={`${classes.root} ${classes.form}`} 
            onSubmit={handleSubmit}>
                {/* displaying the title of the form */}
                <Typography cariant="h6">{currentId ? 'Editing' : 'Creating'} a Memoree</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator} 
                    onChange={ (e) => setPostData( { ...postData, creator: e.target.value } ) }
                />
                {/* these are just text boxes in which the user can add text to input their details for their new post */}
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={ (e) => setPostData( { ...postData, title: e.target.value } ) }
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={ (e) => setPostData( { ...postData, message: e.target.value } ) }
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={ (e) => setPostData( { ...postData, tags: e.target.value.split(',') } ) }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={ ( {base64} ) => setPostData( { ...postData, selectedFile: base64 } ) }
                    />
                </div>
                {/* this allows the user to call the create post api call */}
                <Button 
                    className={classes.buttonSubmit} 
                    variant="container" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    Submit
                </Button>
                {/* this allows the user to call the clear form call idk */}
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;