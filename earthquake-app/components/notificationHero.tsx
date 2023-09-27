import React from "react";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Code} from "@nextui-org/code";

export default function HeroNotificationCard(props: any) {
    return (
        <div className={props.className}>
            <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Earthquake Alert</p>
                <small className="text-default-500">40.940848, 29.237231
Çarşı, 34876 Kartal/İstanbul</small>
            <Code className="mt-3" color="danger">3.2 Decrees</Code>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <div className="flex gap-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96410.5980679038!2d29.2519936!3d40.963276799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1695820759019!5m2!1str!2str" width="500" height="250" className="map-iframe" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </CardBody>
        </Card>
        </div>
    );
}
