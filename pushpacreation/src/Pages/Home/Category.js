import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import "../Flipcard.css";
function Category() {
    const productData = [
        {
            name: 'Jwellery',
            imagesrc: '/Products/image-category-jwellery.jpeg',
            redirectTO: '/jwellery'
        },
        {
            name: 'Doormat',
            imagesrc: '/Products/image-category-doormat.jpeg',
            redirectTO: '/doormat'
        },
        {
            name: 'Carpet',
            imagesrc: '/Products/image-category-carpet.jpeg',
            redirectTO: '/carpet'
        },
        {
            name: 'Potery',
            imagesrc: '/Products/image-category-potery.jpg',
            redirectTO: '/potery'
        },
        {
            name: 'Bags',
            imagesrc: '/Products/image-category-bags.jpeg',
            redirectTO: '/bags'
        },
        {
            name: 'Clock',
            imagesrc: '/Products/image-category-clock.jpg',
            redirectTO: '/clock'
        },
        {
            name: 'Wood Decoration Products',
            imagesrc: '/Products/image-category-wood-decoration.jpg',
            redirectTO: '/wooddecoration'
        },
        // {
        //     name: 'jwellery',
        //     imagesrc: '/images/image-category-',
        //     redirectTO: '/jwellery'
        // },
        // {
        //     name: 'jwellery',
        //     imagesrc: '/images/image-category-',
        //     redirectTO: '/jwellery'
        // },
        
        // {
        //     name: "doormat",
        //     imagesrc: '/images/image-category-',
        //     // redirectTO: '/doormat'
        // },
    ]
    return (
        <div className="category-div">
            {productData.map((product) => (
                <Link to={product.redirectTO || ""}>
                    <Fade bottom>
                    <div className="flip-card" style={{ paddingTop:"20px" }}>
                        <Card  className="flip-card-inner">
                            <Card.Img variant="top" src={product.imagesrc}  className=" flip-card-front"/>
                            <Card.Body className="flip-card-back">
                                <Card.Title className="a" style={{textAlign: "center", fontSize:"1.8rem"}}>{product.name}</Card.Title>
                                <Card.Text style={{textAlign: "center", fontSize:"1.6rem"}}>
                                    Click For Know More Products 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    </Fade>
                </Link>
            ))}
         <div></div>
        </div>
    );
};



export default Category;