import React from 'react';
import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const AddFruits = () => {

    const [user, setUser] = useState({
        name: '',
        price: '',
        quentity: ''
    })

    const handleBlur = (e) => {
        let isValid = true;

        if (e.target.name === "name") {
            isValid = e.target.value;
        }

        if (e.target.name === "email") {
            isValid = e.target.value
        }
        if (e.target.name === "price") {
            isValid = e.target.value
        }
        if (e.target.name === "quentity") {
            isValid = e.target.value
        }

        if (isValid) {
            const loginUser = { ...user };
            loginUser[e.target.name] = e.target.value;
            setUser(loginUser);
        }

    }

    const handleSubmit = (e) => {

        const postRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('https://desolate-fortress-06675.herokuapp.com/addFruits', postRequest)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="container mt-5">
            <h2 className="text-secondary mb-5 text-center">To-Do APP</h2>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <h5> Name</h5>
                        <Form.Control onBlur={handleBlur} name="name" placeholder="Enter Name *" required />
                    </Col>
                    <Col>
                        <h5>Price</h5>
                        <Form.Control type="price" onBlur={handleBlur} name="price" placeholder="Enter Price *" required />
                    </Col>
                    <Col>
                        <h5>Quentity</h5>
                        <Form.Control type="number" onBlur={handleBlur} name="quentity" placeholder="Enter Quentity *" required />
                    </Col>
                    <Col>  <input className="btn-primary mt-4 px-4 py-2 rounded" type="submit" value="Add Fruits" /> </Col>

                </Row>

            </form>
        </div>
    );
};

export default AddFruits;