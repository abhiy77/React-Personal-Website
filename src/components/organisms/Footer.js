import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';


function Footer() {

    const useStyles = makeStyles({
        footerContainer : {
            backgroundColor: '#1c2237',
            padding: '4rem 0 2rem 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },  
        footerInput : {
            padding: '8px 24px',
            borderRadius: '2px',
            marginRight: '10px',
            outline: 'none',
            border: 'none',
            fontSize: '18px',
            marginBottom: '16px',
            border: '1px solid #fff'
        },    
        footerLinks : {
            width: '100%',
            maxWidth: '1000px',
            display: 'flex',
            justifyContent: 'center'
        },   
        footerLinkWrapper : {
            display: 'flex'
        },
        footerLinkItems : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '16px',
            textAlign: 'left',
            width: '160px',
            boxSizing: 'border-box'
        },       
        footerLinkItemsHeader : {
            marginBottom: '16px',
            color: '#fff'
        },
        footerLinkItemsLink : {
            color: '#fff',
            textDecoration: 'none',
            marginBottom: '0.5rem',
            '&:hover': {
                color: '#e9e9e9',
                transition: '0.3s ease-out'
            }
        },
        footerEmailFormh2 : {
            marginBottom: '2rem'
        },
          
          /* Social Icons */
        socialIconLink : {
            color: '#fff',
            fontSize: '24px'
        },
        socialMedia : {
            maxWidth: '1000px',
            width: '100%'
        }, 
        socialMediaWrap : {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            maxWidth: '1000px',
            margin: '40px auto 0 auto'
        },   
        socialIcons : {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '240px'
        },  
        socialLogo : {
            color: '#fff',
            justifySelf: 'start',
            marginLeft: '20px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px'
        },
        websiteRights : {
            color: '#fff',
            marginBottom: '16px'
        }
    });

    const styles = useStyles();

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLinks}>
                <div className= {styles.footerLinkWrapper}>
                    <div className={styles.footerLinkItems}>
                        <h2 className={styles.footerLinkItemsHeader}>Navigation Links</h2>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Home</Link>
                        <Link className={styles.footerLinkItemsLink} to='/about'>About me</Link>
                        <Link className={styles.footerLinkItemsLink} to='/contact'>Contact me</Link>
                        <Link className={styles.footerLinkItemsLink} to='/gallery'>Gallery</Link>
                    </div>
                </div>
                <div className={styles.footerLinkWrapper}>
                    <div className={styles.footerLinkItems}>
                        <h2 className={styles.footerLinkItemsHeader}>Videos</h2>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Submit Videos</Link>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Send Feedback</Link>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Contact</Link>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Know more</Link>
                    </div>
                    <div className={styles.footerLinkItems}>
                        <h2 className={styles.footerLinkItemsHeader}>Social Media</h2>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Instagram</Link>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Facebook</Link>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Youtube</Link>
                        <Link className={styles.footerLinkItemsLink} to='/home'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className= {styles.socialMedia}>
                <div className={styles.socialMediaWrap}>
                    <small className={styles.websiteRights}>Copyright © 2021</small>
                    <div className={styles.socialIcons}>
                        <Link
                            className={styles.socialIconLink}
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className={styles.socialIconLink}
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className={styles.socialIconLink}
                            to={
                                '/'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className={styles.socialIconLink}
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className={styles.socialIconLink}
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;