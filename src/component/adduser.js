import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
export default function AddUser() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
               <Button type='submit'>Submit</Button>
               <Link to='/' className='btn btn-danger ml-3'>Cancle</Link>
            </Form>
        </div>
    )
}
