"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sidebar from "./Sidebar"

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1, position:'fixed', width:'100%'}}>
            <AppBar sx={{backgroundColor:'transparent'}}>
                <Toolbar>
                        <Sidebar />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black', fontWeight:'bold' }}>
                        BEST
                    </Typography>
                    <Button sx={{color:'black'}}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}