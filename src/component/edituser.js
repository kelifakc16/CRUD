import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
export default function EditUser() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
               <Button type='submit'>Edit name</Button>
               <Link to='/' className='btn btn-danger'>Cancle</Link>
            </Form>
        </div>
    )
}