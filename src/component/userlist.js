import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
export default function Userlist() {

    // const user = [
    //     { id: 1, name: 'user one' },
    //     { id: 2, name: 'user two' },
    //     { id: 3, name: 'user three' },]
    const [user, setUser] = useState([
        { id: 1, name: 'user one' },
        { id: 2, name: 'user two' },
        { id: 3, name: 'user three' },])
    const handelDelete = (id) => {

        // alert(id)
        const newUser = user.filter(items => items.id !== id)
        console.log("user", user)
        console.log("newUser", newUser)
        setUser(newUser)
    }
    const handleEdit =(id)=>{
         alert(id)

    }
    // console.log("update user", user)
    return (
        <div>
            <ListGroup className='mt-4'>
                {user.map(users => (
                    <ListGroup.Item className='d-flex'><p>{users.name}</p>
                        <div className="edit">
                            {/* <Link className="btn btn-warning" to={`/edit/${users.id}`}>Edit</Link> */}
                            <Button variant="danger" onClick={() => handelDelete(users.id)}>Delete</Button>
                            <Button variant="success" onClick={() => handleEdit(users.id)}>Edit</Button>
                        </div>
                    </ListGroup.Item>
                ))}

            </ListGroup>
        </div>
    )
}
