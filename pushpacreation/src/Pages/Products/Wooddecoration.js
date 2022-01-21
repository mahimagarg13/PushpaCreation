import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
export default function Wooddecoration() { 
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
     const productWooddecoration = [
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/image-wood1.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/image-wood2.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/image-wood3.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/image-wood4.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/image-wood5.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/image-wood6.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
   
    {
        name: 'Wood Decoration',
        imagesrc: '/Products/Wood 1.jpg',
        // redirectTO: 'https://wa.me/+91-8010810469'
    },
   
]
return (
    <div className='outer-div padding-top-100 category'>
        <div className='padding-top-100 '></div> <Fade bottom>
            <h1 className='text-center'>Wood Decoration</h1>
        </Fade>
        <div className="category-div">

            {productWooddecoration.map((product) => (
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