import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./postui.css"
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const PostUi = ({ single, wishlistItem }) => {
    const { category , id}=single
    return (
        <div className='mb-5'>
            <Card >
                <Card.Header>
                    <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img className=' rounded-circle sellerProfile' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1684680589~exp=1684681189~hmac=cafa5607e920ec2467a85bab709d5276befd391f36b7a89409199f11f28d0bde" alt="" />
                        <div>
                            <h4>Rafi Store</h4>
                            <p>@rafiStore23</p>
                        </div>
                    </div>
                    <div>
                        {/* <h6 className='text-center'>Rating</h6> */}
                        <FaStar className='text-warning fs-4 me-1'></FaStar>
                        <FaStar className='text-warning fs-4 me-1'></FaStar>
                        <FaStar className='text-warning fs-4 me-1'></FaStar>
                        <FaStar className='text-warning fs-4 me-1'></FaStar>
                        <FaStar className='text-warning fs-4 '></FaStar>
                    </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title> <h6> <span className='fs-1 text-danger'>29%</span> OFF for any Product</h6> </Card.Title>
                    <Card.Text>
                        <div className='mt-5'>
                            <p> 🛒 Discount Offer: 29% off on all purchases</p>
                            <p className='mt-3'> 🕒 Duration: This offer is valid from [start date] to [end date].</p>
                            <p> 📍 Location: Groceress Shop outlets nationwide</p>

                        </div>
                    </Card.Text>
                    <Link
                        to={
                            process.env
                                .PUBLIC_URL +
                            `/product/${single.id}`
                        }
                    ><Button variant="primary">Go somewhere</Button></Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostUi;