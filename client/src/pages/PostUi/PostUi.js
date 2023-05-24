import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./postui.css"
import { FaHeart, FaRegComment, FaShare, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const PostUi = ({ single, wishlistItem }) => {
    const { category , id}=single
    return (
        <div className='grid-product space-mb--20'>
            <Card className=''>
                <Card.Header>
                    <div className=' d-flex align-items-center justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img className=' rounded-circle sellerProfile' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1684680589~exp=1684681189~hmac=cafa5607e920ec2467a85bab709d5276befd391f36b7a89409199f11f28d0bde" alt="" />
                        <div>
                                <Link
                                    to={
                                        process.env
                                            .PUBLIC_URL +
                                        `/product/${single.id}`
                                    }
                                >  <h4>Rafi Store</h4></Link>
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
                    <Card.Title> <h6> </h6>  </Card.Title>
                    <Card.Text>
                        <div className='mt-5'>
                            <p> 🛒 Discount Offer: 29% off on all purchases</p>
                            <p className='mt-3'> 🕒 Duration: This offer is valid from [start date] to [end date].</p>
                            <p> 📍 Location: Groceress Shop outlets nationwide</p>

                        </div>
                    </Card.Text>
                    <p>10:04 pm <span>5/3/2023</span></p>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <div><p>200 Likes</p></div>
                        <div><p>30 comments</p></div>
                        <div><p>12 share</p></div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <div><FaHeart className='fs-4 '></FaHeart></div>
                        <div><FaRegComment className='fs-4'></FaRegComment></div>
                        <div><FaShare className='fs-4'></FaShare></div>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostUi;