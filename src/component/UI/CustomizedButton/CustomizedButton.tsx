import { Button } from '@mui/material';
import React from 'react'

export const CustomizedButton = (props: any) => {

    const { children, onClick, bgcolor, type, px, m } = props;

    return (
        <Button type={type} sx={{
            width: props.width, px: px,
            boxShadow: "none", m: m, backgroundColor: bgcolor, border: `1px solid ${bgcolor}`, "&:hover": {
                backgroundColor: "transparent", boxShadow: "none",
                color: bgcolor, border: `1px solid ${bgcolor}`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}


export const PrimaryButton = (props: any) => {

    const { children, onClick, bgcolor, type, px, className } = props;

    return (
        <Button className={className} type={type} sx={{
            textTransform: "initial",
            width: props.width, px: 4, borderRadius: "0",
            boxShadow: "none", m: 1, backgroundColor: bgcolor, border: `1px solid ${bgcolor}`, "&:hover": {
                backgroundColor: "transparent", boxShadow: "none",
                color: bgcolor, border: `1px solid ${bgcolor}`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}

