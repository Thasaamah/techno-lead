import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Twitter from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../utils/colors';

export const Footer = () => {

    const route = useNavigate();

    const footerData = [
        {
            id: 1,
            main_title: "COMPANY",
            children: [
                {
                    sub_title: "Home",
                    path: "/",
                },
                {
                    sub_title: "About Us",
                    path: '/about',

                },
                {
                    sub_title: "Contact Us",
                    path: '/contact',
                },
            ]
        },
        {
            id: 2,
            main_title: "SERVICES",
            children: [
                {
                    sub_title: "Heavy Equipments",
                    path: "/services",
                },
                {
                    sub_title: "Over Land Transport",
                    path: '/services'

                },
                {
                    sub_title: "International Transport",
                    path: '/services'

                },
                {
                    sub_title: "MVP Works",
                    path: '/services'

                },
                {
                    sub_title: "Ac  Maintenance",
                    path: '/services',
                },
            ]
        },
        {
            id: 2,
            main_title: "ADDRESS",
            children: [
                {
                    sub_title: "PO Box: 2875, Doha, Qatar",
                    path: "/"
                },
                {
                    sub_title: "solutions@technoleadintl.com",
                    path: "/"
                },
                {
                    sub_title: "+974 4418 0612",
                    path: "/"
                },
                {
                    sub_title: "+974 7478 0980",
                    path: "/"
                },
                {
                    sub_title: "+974 7478 0982",
                    path: "/"
                },
            ]
        },

    ];


    return (

        <Grid container justifyContent="space-around" sx={{ bgcolor: "white", pt: 5 }}>

            <Grid container lg={12} sx={{ display: "flex", justifyContent: "space-around", pt: 5, pb: 10 }}>

                <Grid container sm={12} md={4} lg={4} >

                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", alignItems: "center"
                    }}>

                        <img width="200px" src={require("../../assets/images/logo/logo.png")} />


                        <Typography sx={{ color: "black", my: 1 }}>Social Links</Typography>

                        <Box display="flex" sx={{ my: 3 }}>


                            {[{ icon: FacebookIcon, path: "https://www.facebook.com/technoleadintl.qa" },
                            { icon: InstagramIcon, path: "https://www.instagram.com/technoleadtht/" },
                            { icon: LinkedInIcon, path: "https://www.instagram.com/technoleadtht/" }].map(data =>

                                <a href={data.path}>

                                    <data.icon sx={{
                                        color: "black", mr: 2, fontSize: "1.8rem", cursor: "pointer", '&:hover': {

                                            color: PRIMARY_COLOR
                                        }
                                    }} />

                                </a>
                            )}

                        </Box>

                    </Box>

                </Grid>


                <Grid container sm={12} md={4} lg={8}>

                    {footerData.map(data =>

                        <Grid xs={12} sm={12} lg={4} sx={{ p: 2 }}>

                            <Typography variant='h6' sx={{ fontWeight: "bold", color: "black", mb: 1 }}>{data.main_title}</Typography>

                            {data.children.map(child =>

                                <Typography variant='subtitle1' onClick={() => route(child.path)} sx={{ color: "black", mb: 1 }}>{child.sub_title}</Typography>

                            )}

                        </Grid>

                    )}

                </Grid>

            </Grid >

            <Grid container justifyContent="center" sx={{ p: 2 }}>

                <Typography sx={{ fontSize: "0.8rem", color: "black" }}><b>© 2023 TECHNO LEAD.</b> All rights reserved.</Typography>

            </Grid>

        </Grid >
    )
}
