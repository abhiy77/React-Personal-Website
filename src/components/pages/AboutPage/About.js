import { Grid, Container } from '@material-ui/core';
import React from 'react';
import  ProfileCard  from '../../molecules/ProfileCard';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../atoms/Header';
import  AboutTable  from '../../molecules/AboutTable';
import SkillTable  from '../../molecules/SkillTable';
import  AboutCard  from '../../molecules/AboutCard';
import { articleOne , articleTwo } from '../../AboutCardData';



const useStyles = makeStyles({

    row_heading: {
        justifyContent: 'center',
        marginBottom: '20px',
        marginTop: '100px',
    },
    about_container: {
        display: 'inline',
    },
    imageContainer: {
        position : 'absolute',
        top : '1100px',
        left : '800px',
        zIndex : '-1'
    },
    liftTop: {
        marginTop: '50px',
        marginBottom: '20px'
    },
    bottomContainer : {
        marginTop : '200px',
        marginBottom : '20px',
        marginLeft : '450px'
    },
    secondImageContainer: {
        position : 'absolute',
        top : '1700px',
        left : '150px',
        zIndex : '-1'
    },
    headerText : {
        color : '#fff',
        backgroundColor : '#1c2237',
        padding : '10px',
        borderRadius : '20px'
    }
});


function About() {
    const styles = useStyles();

    return (
        <>
            <Container >
                <Grid container spacing={1}>
                    <Grid container item lg={12} className={styles.row_heading}>
                        <Header align="center" className={styles.headerText} data="MY PROFILE" />
                    </Grid>
                    <Grid container item lg={4} spacing={2} >
                        <ProfileCard />
                    </Grid>
                    <Grid container item lg={8} className={styles.about_container}>
                        <AboutTable />
                    </Grid>

                    <Grid container item lg={12} className={styles.row_heading}>
                        <Header align="center" className={styles.headerText} data="ARTICLES" />
                    </Grid>

                    <div className={` ${styles.liftTop} `}>
                        <AboutCard {...articleOne} />
                    </div>
                    <div className= {` ${styles.imageContainer} `}>
                        <img src='images/paragraph2.jpg' height='600px' width='850px' />
                    </div>

                    <div className={` ${styles.bottomContainer} `}>
                        <AboutCard {...articleTwo} />
                    </div>
                    <div className= {` ${styles.secondImageContainer} `}>
                        <img src='images/paragraph3.jpg' height='600px' width='850px' />
                    </div>

                    {/* <Grid container item lg={4} className= {styles.row_heading}>
                        <AboutCard />
                    </Grid> */}

                    {/* <Grid container item lg={6} className={styles.row_heading}>
                        <Typography gutterBottom variant="h4" component="h2" align="center">
                            OTHER WEBSITES
                        </Typography>
                    </Grid> */}
                    {/* <Grid container item lg={2} ></Grid> */}
                    <Grid container item lg={12} className={` ${styles.row_heading}`}>
                        <Header align="center" className={styles.headerText} data="SKILLS" />
                    </Grid>
                    {/* <Grid container item lg={3} className={styles.about_container}>
                        <WebsiteTable className={styles.table}/>
                    </Grid> */}
                    <Grid container item lg={12} >
                        <SkillTable />
                    </Grid>
                </Grid>

            </Container>





        </>
    )
}

export default About;
