import React from 'react'
import { Grid, Box, TextField, Typography } from '@mui/material'
import { PrimaryButton } from '../UI/CustomizedButton/CustomizedButton'
import { PRIMARY_COLOR } from '../../utils/colors'


const EnquireNow = () => {

    const enquireform = [

        {
            label: "First Name"
        },
        {
            label: "Last Name"
        },
        {

            label: "Email"
        },
        {

            label: "Phone Number"
        }

    ]

    return (

        <Grid container justifyContent="center"
            sx={{ bgcolor: "white", mt: { xs: 5, lg: 0 }, py: 5, display: 'flex', flexDirection: 'row' }}>

            <Grid container xs={12} md={6} lg={9} justifyContent="center">

                <Typography variant='h3' fontWeight="bold"
                    sx={{ width: "100%", fontFamily: 'Noto Serif Ahom', mb: 5, color: "black", textAlign: "center" }}>Love to here from you, <br /> Get in touch.!!</Typography>

                {enquireform.map(data =>

                    <Grid xs={12} lg={6} md={6} sx={{ p: 1 }}>

                        <Typography fontWeight="500" sx={{ m: 0.5, color: "black" }}>{data.label}</Typography>

                        <TextField sx={{ width: "100%", bgcolor: 'white', border: 'none' }}
                        // placeholder={data.label}
                        />

                    </Grid>

                )}

                <Grid xs={12} lg={12} md={12} sm={12} sx={{ p: 1, md: { color: 'red' } }}>

                    <Typography fontWeight="500" sx={{ m: 0.5, color: "black" }}>Message</Typography>

                    <TextField multiline={true} rows={6} sx={{ width: "100%", bgcolor: 'white', border: 'none' }} />


                </Grid>

                <Grid container sx={{ m: 2 }}>

                    <PrimaryButton bgcolor={PRIMARY_COLOR} width="40%">Submit</PrimaryButton>


                </Grid>


            </Grid>

        </Grid >

    )
}

export default EnquireNow