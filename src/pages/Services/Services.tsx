import { Grid, Typography } from '@mui/material'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useEffect } from 'react';


export const Services = () => {


    const list = [
        {
            image: "heavy_equp_5.jpeg",
            title: "heavy equipments",
            description: "Heavy equipment refers to large, powerful machines used in construction, agriculture, mining, forestry, and other industries. These machines are designed to perform specific tasks, such as excavating, grading, hauling, and drilling"
        },
        {
            image: "heavy_equp_6.jpeg",
            title: "overland transport",
            description: "Overland transport refers to the movement of goods and people over land, typically using roads, railways, or other ground-based transportation modes. This type of transport is commonly used for both domestic and international transportation, including the movement of goods between cities, countries, or continents."
        },
        {
            image: "international.jpg",
            title: "international transport",
            description: "International transport refers to the movement of people, goods, and cargo across national borders between countries. It involves the use of various modes of transportation, including air, sea, and land transport."
        },
        {
            image: "building_main.jpg",
            title: "mvp works",
            description: "Building maintenance work refers to the various tasks and activities that are carried out to keep a building or property in good condition, safe, and functional. Building maintenance work is essential to ensure that a building operates efficiently, meets safety standards, and retains its value over time."
        },
        {
            image: "ac_main.jpg",
            title: "ac maintance",
            description: "AC maintenance refers to the regular servicing and upkeep of air conditioning units to ensure their proper functioning, efficiency, and longevity. Regular maintenance of AC units is essential to ensure that they provide optimal cooling or heating and avoid breakdowns or malfunctions."
        },
    ]



    return (



        < Grid container justifyContent="center" alignItems="center"
            sx={{ mt: { xs: "60px", md: 10 }, bgcolor: "" }
            }>


            {
                list.map((data: any) =>

                    <Grid sm={12} md={12} sx={{ m: 1 }} justifyContent="start" alignItems="center" container lg={11}>


                        <Grid container alignItems="center">

                            <Grid md={3}>


                                <img width="100%" src={require(`../../assets/images/banner/${data.image}`)} />

                            </Grid>


                            <Grid md={9}>

                                <Typography variant='h5' sx={{
                                    width: "100%", mx: 5, mt: 5,
                                    fontWeight: "bold", textTransform: "capitalize"
                                }}>{data.title}</Typography>

                                <Typography variant='subtitle1' sx={{ mx: 5, mt: 1 }}>{data.description}</Typography>

                            </Grid>


                        </Grid>

                    </Grid>

                )
            }




        </Grid >
    )
}



