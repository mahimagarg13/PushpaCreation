import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../Flipcard.css";
export default function Carpet() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
    const productCarpet = [
        {
            id: '1',
            name: 'Carpet',
            imagesrc: '/Products/image-category-carpet.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {  
            id: '2',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet1.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '3',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet2.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '4',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet3.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '5',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet4.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '6',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet5.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '7',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet6.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '8',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet7.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '9',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet8.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        {
            id: '10',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet9.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        { 
            id: '11',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet10.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        },
        { 
            id: '12',
            name: 'Carpet',
            imagesrc: '/Products/image-carpet11.jpeg',
            // redirectTO: 'https://wa.me/+91-8010810469'
        }
   ]
    return (
        <div className='outer-div padding-top-100 category'>
            <div className='padding-top-100 '></div>
             <Fade bottom>
                <h1 className='text-center'>Carpet</h1>
            </Fade>
            <div className="category-div">
                {productCarpet.map((product) => (
                    <Link key={product.id} to={product.redirectTO || ""}>
                        <Fade bottom>
                            <div className="flip-card" style={{ paddingTop: "20px" }}>
                                <Card className="flip-card-inner">
                                    <Card.Img variant="top" src={product.imagesrc}  className=" flip-card-front" />
                                    <Card.Body className="flip-card-back">
                                        <Card.Title className="a" style={{ textAlign: "center", fontSize: "1.8rem" }}>{product.name}</Card.Title>
                                        <Card.Text style={{ textAlign: "center", fontSize: "1.6rem" }}>
                                  Click For Know More details  
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Fade>
                    </Link>
                ))}
                <div></div>
            </div>
        </div>
    );
}
