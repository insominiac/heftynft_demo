/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Link from 'next/dist/client/link'
import Form from 'react-bootstrap/Form'
import Signin from './signin'


export default function Signup(props){

    const [modalShow, setModalShow] = useState(false);

    const handleshow = () => {
        setModalShow(true);
       
    
    }


    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  className="modal-theme1 signInModal" >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-center">
        <Form>
        <div className="title">
         <h2 className="modal_title">Sign Up</h2>
         <p>Already have an account? <Link href="#"><a className="bold" onClick={handleshow} data-toggle="modal" data-dismiss="modal" data-target="#signInModal">Sign in</a></Link></p>
        </div>
         <Form.Group className="mb-3" controlId="formBasicEmail"> 
                <Form.Label>Full Name <span>(Only Visible to You)</span></Form.Label>
                <Form.Control type="text" placeholder="Please enter you first and last names" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Please enter your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username <span>(Visible to the Public)</span></Form.Label>
                <Form.Control type="text" placeholder="Please enter alphanumerical characters, hyphens or underscores" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Please enter 8-20 characters" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Please enter 8-20 characters" />
            </Form.Group>
            <Form.Group className="mb-3 condition" controlId="formBasicCheckbox">
            <div className="text">By clicking Sign Up, I hereby acknowledge that I agree to the HeftyNFT <br/>
            <Link href="#">
             <a>Terms and Conditions</a></Link> and I've read the <Link href="#"><a>Privacy Notice</a></Link>
            </div>
                <Form.Check type="checkbox" label="Click here if you agree"/>
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-field btn-blue form-btn">
            Sign Up
            </Button>
       </Form>
        </Modal.Body>
        <Signin
                show={modalShow}
                 onHide={() => setModalShow(false)} />
                 
      </Modal>

    )

}