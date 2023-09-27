"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Pagination } from "@nextui-org/pagination";

const images = [
    {
        src: "https://via.placeholder.com/1800x900.png?text=Image+1",
        alt: "Image 1",
    },
    {
        src: "https://via.placeholder.com/1800x900.png?text=Image+2",
        alt: "Image 2",
    },
    {
        src: "https://via.placeholder.com/1800x900.png?text=Image+3",
        alt: "Image 3",
    },
];

export default function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    return (
        <>
            <div className="items-center justify-center !w-full !h-400">
                <Card className="" fullWidth="true">
                    <CardHeader className="!w-full">
                        <Image className="!w-full" src={images[currentImage].src} alt={images[currentImage].alt} />
                    </CardHeader>
                </Card>
            </div>
            <div className="justify-center items-center align-items-center mt-5 place-content-center">
                    <Pagination loop showControls color="success" total={3} initialPage={1} />
            </div>
        </>
    );
}