import { Grid, Typography } from '@mui/material'

export const About = () => {
    return (

        <Grid container justifyContent="center" sx={{ mt: 13 }}>

            <Grid lg={10}>

                <Typography variant='h4' sx={{
                    mb: 4, fontWeight: "bold",
                    textAlign: "center"
                }}>About Us</Typography>

                <Typography variant='h5' sx={{
                    mb: 4, fontWeight: "bold",
                    textAlign: "center"
                }}>“ No customer is too big or small for Techno Lead Maintenance Services. Whatever
                    the size of your project we aim to treat each and every customer as if they are our
                    only customer. After all, your Residence and Works space is your castle and you have
                    a right to expect the best”.</Typography>


                <Typography variant='h6'>We operate throughout Qatar and surrounds, indoor or out. We also offer a free inspection, assessment and quotation without any obligation to use our company. Please compare our quotes
                    with competitors and ask all the necessary questions - we have nothing to hide and our pricing
                    reflects the quality and care of our handiwork. From large complexes to office parks, apartment
                    blocks to free standing houses - we are here to help. Give us a call and yourself, we can’t wait for you to join the scores of satisfied Techno Lead
                    Maintenance Services customers.</Typography>

            </Grid>

        </Grid>

    )
}
