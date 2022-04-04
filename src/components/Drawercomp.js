import { Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

const PAGES =["DriveX for learners","DriveX for Instructor"]

const Drawercomp = () => {
    const [openDrawer,setOpenDrawer]= useState(false)


  return (
    <React.Fragment>

<Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
    <List>{
        PAGES.map((page,index)=>(
            <ListItemButton key={index}>
            <ListItemIcon>
                <ListItemText>{page}</ListItemText>
            </ListItemIcon>
        </ListItemButton>

        ))
        
        }
       
    </List>
</Drawer>
<IconButton  sx={{ marginLeft:"auto"}}onClick={()=>setOpenDrawer(!openDrawer)}>
<MenuIcon/>
</IconButton>

    </React.Fragment>
  )
}

export default Drawercomp