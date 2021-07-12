import React from 'react';
import Header from '../../atoms/Header';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    row_heading : {
        justifyContent: 'center',
        marginBottom : '20px',
        marginTop: '100px'
    },
    img : {
        marginBottom : '48px'
    }
});

function createData(imgName,imgSrc) {
    return { imgName,imgSrc };
}

const rows = [
    createData('Thought 1','images/thought1.jpeg'),
    createData('Thought 2','images/thought2.jpeg'),
    createData('Thought 3','images/thought3.jpeg'),
    createData('Thought 4','images/thought4.jpeg'),
    createData('Thought 5','images/thought5.jpeg'),
    createData('Thought 6','images/thought6.jpeg'),
    createData('Thought 7','images/thought7.jpeg'),
    createData('Thought 8','images/thought8.jpeg'),
    createData('Thought 9','images/thought9.jpeg'),
    createData('Thought 10','images/thought10.jpeg'),
    createData('Thought 11','images/thought11.jpeg'),
    createData('Thought 12','images/thought12.jpeg'),
];

function Gallery() {

    const styles = useStyles();

    return (
        <div>
            <Container maxWidth="lg" >
                <Grid container spacing={1}>
                    <Grid container item lg={12} className={styles.row_heading}>
                        <Header align="center" data="MY GALLERY" />
                    </Grid>
                    {rows.map((row) => (
                        <Grid container item lg={4} spacing={1} key={row.imgName} className={styles.img}>
                            <img src={row.imgSrc} alt={row.imgName} height="450px" width="350px"/>
                        </Grid>
                    ))}
                </Grid>
               
                
            </Container>

        </div>
    )
}

export default Gallery;
