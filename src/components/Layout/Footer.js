import React from 'react'
import { Box, Typography } from'@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
        <Box
            sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
        >
            <Box sx={{
                    my: 0.3, "& svg": {
                    fontSize: "20px",
                    cursor: "pointer",
                    mr: 1,
                    },
                    "& svg:hover": {
                    color: "goldenrod",
                    transform: "translateX(5px)",
                    transition: "all 400ms",
                    },
                }}
             >
                {/*icons */}
                <InstagramIcon />
                <TwitterIcon />
                <GitHubIcon />
                <YouTubeIcon />
            </Box>
            <Typography variant='h10' sx={{"media (max-width: 600px)":{
                fontSize:'1rem'
            },
            }}>
                All Rights Reserved &copy; Techinfo YT 
            </Typography>
        </Box>
    </>
  )
}

export default Footer