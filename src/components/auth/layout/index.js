// import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const {pathname} = useLocation();
    // const {pathname} = location;
    // console.log(pathname);

    useEffect(() => {
        if (pathname.startsWith("/protected")) {
            console.log("You are in a protected route");
        }
    }, [pathname]);
    
    return (
        <>
        This is a child: <Outlet />
        </>
    )
}