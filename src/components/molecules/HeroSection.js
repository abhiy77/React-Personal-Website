import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  imgHeight,
  imgWidth
}) {

  const useStyles = makeStyles({
    heroSection : {
      color : '#fff',
      padding : '160px'
    },
    heroSectionDark : {
      backgroundColor: '#1c2237'
    },
    heroRow : {
      alignItems : 'center'
    },
    row : {
      display: 'flex',
      marginRight: '-15px',
      marginBottom: '-15px',
      marginLeft: '-15px',
      flexWrap: 'wrap',
      alignContent: 'stretch'
    },
    col : {
      marginBottom: '15px',
      paddingRight: '15px',
      paddingLeft: '15px',
      flex: 1,
      maxWidth: '50%',
      flexBasis: '50%'
    },
    heroTextWrapper : {
      maxWidth : '700px',
      paddingTop : '0',
      paddingBottom : '60px'
    },
    topLine : {
      color: '#f00946',
      fontSize: '24px',
      lineHeight: '16px',
      fontWeight: 700,
      letterSpacing: '1.4px',
      textTransform: 'uppercase',
      marginBottom: '16px'
    },
    heading : {
      marginBottom: '24px',
      fontSize: '30px',
      lineHeight: 1.1,
      fontWeight: 600,
      color: '#f7f8fa'
    },
    dark : {
      color: '#1c2237'
    },
    heroSubtitle : {
      maxWidth: '700px',
      marginBottom: '35px',
      textAlign: 'justify',
      fontSize: '18px',
      lineHeight: '24px'
    },
    heroImgWrapper : {
      maxWidth: '555px'
    },
    heroImg : {
      maxWidth: '95%',
      marginTop: 0,
      marginRight: 0,
      marginLeft: '10px',
      paddingRight: 0
    }, 
    img : {
      border: 0,
      maxWidth: '100%',
      verticalAlign: 'middle',
      display: 'inline-block'
    }
  });

  const styles = useStyles();


  return (
    <>
      <div
        className={lightBg ? styles.heroSection : `${styles.heroSection} ${styles.heroSectionDark}`}
      >
        <div className='container'>
          <div
            className={`${styles.row} ${styles.heroRow}`}
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className={styles.col}>
              <div className={styles.heroTextWrapper}>
                <div className={styles.topLine}>{topLine}</div>
                <h1 className={lightText ? styles.heading : `${styles.heading} ${styles.dark}`}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? styles.heroSubtitle
                      : `${styles.heroSubtitle} ${styles.dark}`
                  }
                >
                  {description}
                </p>   
              </div>
            </div>
            <div className='col'>
              <div className={styles.heroImgWrapper}>
                <img src={img} alt={alt} className={styles.heroImg} width={imgWidth} height={imgHeight}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
