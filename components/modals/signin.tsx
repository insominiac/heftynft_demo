/* eslint-disable react/no-unescaped-entities */

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Link from 'next/dist/client/link'
import Form from 'react-bootstrap/Form'

export default function Signin(props){
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered  className="modal-theme1 signInModal">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Form>
          <Form.Group className="title" controlId="formBasicEmail">
            <h2 className="modal_title">Sign In</h2>
            <p>Don’t have an account yet? <Link href="#"><a  className="bold" data-toggle="modal" data-dismiss="modal" data-target="#signUpModal">Sign up</a></Link></p>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Please enter you Email" />   
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Please enter your Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn btn-field btn-blue form-btn">
          Sign In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    )
}