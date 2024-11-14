import React from "react";
import Navbar from "@/componentes/Navbar";
import Body from "@/componentes/Body";

const LoginPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                <Navbar />
                <div className="snap-y snap-mandatory h-full overflow-y-scroll">
                    <Body color="bg-black-500" />
                </div>
            </div>
        </>
    );
};

export default LoginPage;
