import React from 'react'
import { Form, Button } from 'react-bootstrap'

import './style/newsletter-box.scss'

function NewsLetterBox() {
    return (
        <div className="newsletter-box">
            <div className="title">Subscribe</div>
            <div className="sub-title">
                Share your Email Address with us and get weekly stuffs related with cassandra
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Feed me good resources
                </Button>
            </Form>
        </div>
    )
}

export default NewsLetterBox
