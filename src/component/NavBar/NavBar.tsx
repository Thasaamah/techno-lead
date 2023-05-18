import { Box, Grid, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { PRIMARY_COLOR } from '../../utils/colors'
import { PrimaryButton } from '../UI/CustomizedButton/CustomizedButton'
import { navbar } from './helper'

export const NavBar = () => {

    const navigate = useNavigate()


    return (

        <Grid container justifyContent="center" sx={{ bgcolor: "white", py: 1, zIndex: "100", position: "fixed", top: 0, display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" } }}>

            <Grid container lg={11}>

                <Grid container md={4} lg={4}>

                    <img width="40%" style={{ cursor: "pointer" }} onClick={() => navigate("/")} src={require("../../assets/images/logo/logo.png")} />

                </Grid>


                <Grid container justifyContent="space-between" alignItems="center" md={8} lg={8} >

                    {navbar.map(data =>


                        <Grid>

                            <Typography variant='subtitle1' sx={{
                                cursor: "pointer",
                                color: window.location.pathname === data.path ? PRIMARY_COLOR : 'black',
                                fontWeight: window.location.pathname === data.path ? 'bold' : 'normal',
                            }} onClick={() => navigate(data.path)}>{data.title}</Typography>


                        </Grid>


                    )}

                    <a href='https://wa.me/+917510387887' style={{ listStyle: "none", color: "inherit", textDecoration: "none" }}>


                        <PrimaryButton bgcolor={PRIMARY_COLOR}>Get in Touch</PrimaryButton>

                    </a>


                </Grid>

            </Grid>

        </Grid >
    )
}
