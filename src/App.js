// MAIN INTERFACE OF THE WEB APP

import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid }  from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memorizz from './images/memorizz.png';
import useStyles from './styles.js';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    // i dont understand
    useEffect( () => {
        dispatch( getPosts() );
    }, [currentId, dispatch] );
    
    // main interface of the app
    return (
        <Container maxidth="lg">
            {/* Header of the app */}
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* Displays the title of the app */}
                <Typography className={classes.heading} variant="h2" align="center" >MEMORIZZ</Typography>
                {/* Displays the logo of the app besides the title */}
                <img className={classes.image} src={memorizz} alt="memorizz" height="60" />
            </AppBar>
            {/* Body of the app */}
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            {/* Displays all of the created posts which are stored in the database */}
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* Displays the form where the user can create a new psot */}
                           <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;