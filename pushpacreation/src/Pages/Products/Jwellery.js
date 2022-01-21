import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import "../Flipcard.css";
export default function Jwellery() {
    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        []
    );
    const productJwellery = [
        {
            name: 'Ear Rings',
            imagesrc: '/Products/image-EarRings1.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            name: 'Nacklace',
            imagesrc: '/Products/image-Nacklace2.jpeg',
            // redirectTO: '/doormat'
        },
        {
            name: 'Ear Rings',
            imagesrc: '/Products/image-Rings1.jpeg',
            // redirectTO: '/jwellery'
        },
        {
            name: 'Rings',
            imagesrc: '/Products/image-Rings2.jpeg',
            // redirectTO: '/jwellery'
        },
        {
            name: 'Nacklace',
            imagesrc: '/Products/image-Nacklaceset1.png',
            // redirectTO: '/doormat'
        },
        {
            name: 'Bracelate',
            imagesrc: '/Products/image-Bracelate1.png',
            // redirectTO: '/'
        }
    ]
    return (
        <div className='outer-div padding-top-100 category'>
            <div className='padding-top-100 '></div> <Fade bottom>
                <h1 className='text-center'>Jwellery</h1>
            </Fade>
            <div className="category-div">

                {productJwellery.map((product) => (
                    <Link to={product.redirectTO || ""}>
                        <Fade bottom>
                            <div className="flip-card" style={{ paddingTop: "20px" }}>
                                <Card className="flip-card-inner">
                                    <Card.Img variant="top" src={product.imagesrc} className=" flip-card-front" />
                                    <Card.Body className="flip-card-back">
                                        <Card.Title className="a" style={{ textAlign: "center", fontSize: "1.8rem" }}>{product.name}</Card.Title>
                                        <Card.Text style={{ textAlign: "center", fontSize: "1.6rem" }}>
                                            <a href="https://wa.me/+91-" rel="noopener noreferrer" target="_blank" className='aa'>   Click For Know More details  </a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Fade>
                    </Link>
                ))}
                <div>
                </div>
            </div>
        </div>
    );
}
