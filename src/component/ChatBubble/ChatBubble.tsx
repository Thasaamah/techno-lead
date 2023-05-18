import { Box } from '@mui/material'
import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import { PRIMARY_COLOR } from '../../utils/colors';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ChatBubble = () => {

    return (

        <a href='https://wa.me/+97444180612' style={{ listStyle: "none", color: "inherit", textDecoration: "none" }}>

            <Box sx={{
                width: "60px", height: "60px", bgcolor: "#25D366",
                position: "fixed", bottom: 0, right: 0, zIndex: 100, m: 4, cursor: "pointer",
                transition: "0.5s",
                borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center",
                "&:hover": {
                    transform: "scale(1.1)",

                }
            }}>

                <WhatsAppIcon sx={{ color: "white", fontSize: '1.7rem' }} />

            </Box>

        </a>


    )
}