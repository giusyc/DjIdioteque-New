import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            close={() => props.onClose(false)}
        
        >
            <List className="sideList" component="nav">
                <ListItem button onClick={()=> console.log("featured")}>
                   SoundCloud
                </ListItem>
                <ListItem button onClick={()=> console.log("featured")}>
                   Upcoming Shows
                </ListItem>
                <ListItem button onClick={()=> console.log("featured")}>
                   About
                </ListItem>

            </List>
           
        </Drawer>
    );
};

export default SideDrawer;