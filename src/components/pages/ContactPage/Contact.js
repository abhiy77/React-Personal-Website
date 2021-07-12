import { Grid, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../atoms/Header';
import AboutTable from '../../molecules/AboutTable';

const useStyles = makeStyles({

    row_heading : {
        justifyContent: 'center',
        marginBottom : '20px',
        marginTop: '100px'
    },
    about_container : {
        display : 'inline',
    },
    table :{
        display : ''
    }
});


function Contact() {
    const styles = useStyles();

    return (
        <>
            <Container maxWidth="lg" >
                <Grid container spacing={1} >
                    <Grid container item lg={12} className={styles.row_heading}>
                        <Header align="center" data="CONTACT ME" />   
                    </Grid>
                    <Grid container item lg={2}> </Grid>
                    <Grid container item lg={9} className={styles.about_container}>
                        <AboutTable className={styles.table}/>
                    </Grid>
                   
                </Grid>    
            </Container>

        </>
    )
}

export default Contact;
