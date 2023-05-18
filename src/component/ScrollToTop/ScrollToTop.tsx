import React from 'react'

export const ScrollToTop = (props: any) => {

    React.useEffect(() => {

        window.scrollTo(0, 0);

        console.log("helo")

    }, [props.children])

    return (
        <>{props.children}</>
    )
}
