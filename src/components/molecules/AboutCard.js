import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../atoms/Header';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#1c2237',
    maxWidth : '850px'
  },
  header: {
    color: '#FFF',
    alignItems: 'center',
    marginTop: '80px',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  border: {
    borderBottom: '1.5px solid yellow',
    marginBottom : '20px'
  },
  paragraph : {
    fontSize : '20px',
    color : '#fff',
    textAlign : 'justify'
  }
});

export function AboutCard({
  header,
  paragraphOne,
  paragraphTwo
}) {
  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={1}>
        <Grid container item lg={12} >
          <Header align="center" className={styles.header} data={header} />
          <Grid container item lg={6} className={styles.border}></Grid>
        </Grid>
        <Grid container item lg={12} >
          <Header component="h4" align="center" className={styles.paragraph} data={paragraphOne} />
        </Grid>
        <Grid container item lg={12} >
          <Header component="h4" align="center" className={styles.paragraph} data={paragraphTwo} />
        </Grid>

      </Grid>

    </Container>

  );
}

export default AboutCard;