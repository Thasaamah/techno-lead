import { Box, Grid, Typography } from '@mui/material'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";
import { ChatBubble } from '../../component/ChatBubble/ChatBubble';


export const Home = () => {
    return (

        <Grid container justifyContent="center" alignItems="center"
            sx={{ mt: { xs: "60px", md: 10 }, bgcolor: "" }}>

    
            <Grid justifyContent="center" alignItems="center" container lg={11}>

                <Banner />

            </Grid>

            <Gallery />


        </Grid>
    )
}


export default function Banner() {


    const banner = [

        {
            image: "../../assets/images/logo/logo.png",
        },
        {
            image: "../../assets/images/logo/logo.png",
        },
        {
            image: "../../assets/images/logo/logo.png",
        },
        {
            image: "../../assets/images/logo/logo.png",
        },
    ]

    return (

        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >



            {banner.map(data =>

                <SwiperSlide>

                    <img width="100%" src={require("../../assets/images/banner/banner_1.jpeg")} alt="" />

                </SwiperSlide>
            )}


        </Swiper>

    );
}



const Gallery = () => {

    const gallery = [

        {
            image: "banner/heavy_equp_1.jpeg",
        },
        {
            image: "banner/heavy_equp_2.jpeg",
        },
        {
            image: "banner/heavy_equp_3.jpeg",
        },
        {
            image: "banner/heavy_equp_4.jpeg",
        },
        {
            image: "banner/heavy_equp_5.jpeg",
        },
        {
            image: "banner/heavy_equp_6.jpeg",
        },
        {
            image: "banner/heavy_equp_7.jpeg",
        },
        {
            image: "banner/heavy_equp_8.jpeg",
        },
        {
            image: "banner/heavy_equp_9.jpeg",
        }

    ]


    return (

        <Grid container justifyContent="center">

            <Grid container lg={11}>

                <Grid container>

                    <Typography variant='h4' sx={{ fontWeight: "bold", my: 2 }}>Gallery</Typography>

                </Grid>

                {gallery.map(data =>

                    <Grid sm={6} md={6} lg={4} sx={{ p: 1 }}>

                        <img width="100%" src={require(`../../assets/images/${data.image}`)} alt="" />

                    </Grid>

                )}

            </Grid>

        </Grid >
    )
}

