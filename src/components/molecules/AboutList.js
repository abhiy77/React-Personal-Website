import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  icons : {
    fontSize : '20px'
  },

}));


export function AboutList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <PersonIcon className= {classes.icons}/>
          </ListItemIcon>
          <ListItemText primary="Full Name" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon className= {classes.icons}/>
          </ListItemIcon>
          <ListItemText primary="Email" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhoneIcon className= {classes.icons}/>
          </ListItemIcon>
          <ListItemText primary="Phone number" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon className= {classes.icons}/>
          </ListItemIcon>
          <ListItemText primary="Address" />
        </ListItem>
      </List>

    </div>
  );
}

export default AboutList;