import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import jwellry from "./Images/WhatsApp Image 2021-11-26 at 10.18.03 PM (4).jpeg"
// import potery from "./Images/IMG_5677 (1).jpg"
// import doormat from "./Images/WhatsApp Image 2021-09-17 at 6.36.40 PM.jpeg"
// import begs from "./Images/WhatsApp Image 2021-09-17 at 6.36.37 PM.jpeg"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Category() {
    const productData = [
        {
            name: 'jwellery',
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
            redirectTO: '/wood-decoration'
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
                    <div  style={{ paddingTop:"20px" }}>
                        <Card  className="product-card">
                            <Card.Img variant="top" src={product.imagesrc}  className="product-card-image"/>
                            <Card.Body>
                                <Card.Title  style={{ color: '#b45f50', textAlign: "center"}}>{product.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Link>
            ))}

            {/* <div><Card style={{ width: '280px' }}>
                <Card.Img variant="top" src={potery} />
                <Card.Body>
                    <Card.Title style={{color:'#b45f50', textAlign:"center"}}>Potery</Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                </Card.Body>
            </Card></div> */}
            {/* <div><Card style={{ width: '280px' }}>
                <Card.Img variant="top" src={doormat} />
                <Card.Body>
                    <Card.Title style={{color:'#b45f50', textAlign:"center"}}>Doormat</Card.Title>
                    <Card.Text>
                       
                    </Card.Text>
                </Card.Body>
            </Card></div> */}
            {/* <div><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={begs} />
                <Card.Body>
                    <Card.Title style={{color:'#b45f50', textAlign:"center"}}>Side Bags</Card.Title>
                    <Card.Text>
                       
                    </Card.Text>
                </Card.Body>
            </Card></div> */}
            <div></div>
        </div>
    );
};



export default Category;