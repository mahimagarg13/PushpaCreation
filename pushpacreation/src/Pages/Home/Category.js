import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import "../Flipcard.css";
function Category() {
    const productData = [
        {
            id: '1',
            name: 'Jwellery',
            imagesrc: '/Products/image-category-jwellery.jpeg',
            redirectTO: '/jwellery'
        },
        {
            id: '2',
            name: 'Doormat',
            imagesrc: '/Products/image-category-doormat.jpeg',
            redirectTO: '/doormat'
        },
        {
            id: '3',
            name: 'Carpet',
            imagesrc: '/Products/image-category-carpet.jpeg',
            redirectTO: '/carpet'
        },
        {
            id: '4',
            name: 'Potery',
            imagesrc: '/Products/image-category-potery.jpg',
            redirectTO: '/potery'
        },
        {
            id: '5',
            name: 'Bags',
            imagesrc: '/Products/image-category-bags.jpeg',
            redirectTO: '/bags'
        },
        {
            id: '6',
            name: 'Clock',
            imagesrc: '/Products/image-category-clock.jpg',
            redirectTO: '/clock'
        },
        {
            id: '7',
            name: 'Wood Decoration Products',
            imagesrc: '/Products/image-category-wood-decoration.jpg',
            redirectTO: '/wooddecoration'
        }
    ]
    return (
        <div className="category-div">
            {productData.map((product) => (
                <Link key={product.id} to={product.redirectTO || ""}>
                    <Fade bottom>
                        <div className="flip-card" style={{ paddingTop: "20px" }}>
                            <Card className="flip-card-inner">
                                <Card.Img variant="top" src={product.imagesrc} className=" flip-card-front" />
                                <Card.Body className="flip-card-back">
                                    <Card.Title className="a" style={{ textAlign: "center", fontSize: "1.8rem" }}>{product.name}</Card.Title>
                                    <Card.Text style={{ textAlign: "center", fontSize: "1.6rem" }}>
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