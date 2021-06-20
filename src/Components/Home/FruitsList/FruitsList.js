import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

const FruitsList = () => {

    const [fruits, setFruits] = useState([])

    useEffect(() => {
        const url = "https://desolate-fortress-06675.herokuapp.com/allFruits";
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])

    const deleteFruitHandler = (e, _id) => {
        fetch(`https://desolate-fortress-06675.herokuapp.com/delete/${_id}`, {

            method: 'DELETE',
        })
            .then(res => res.text())
            .then(result => {
                if (result) {
                    e.target.parentNode.parentNode.style.display = "none";
                }
            })
    }
    // const loadFruit= (id)=>{

    //    fetch(`https://desolate-fortress-06675.herokuapp.com/fruit/${id}`)
    //    .then(res => res.json())
    //    .then( data => {
    //        console.log(data);

    //    })

    // }
    return (
        <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th> Name</th>
                        <th>Price</th>
                        <th>Quentity</th>
                        <th >Action</th>
                    </tr>
                </thead >
                <tbody>
                    {fruits.map((fruit, index, id) => <tr >
                        <td >{index + 1}</td>
                        <td><h5>{fruit.name}</h5></td>
                        <td>&#8377; <span>{fruit.price}</span></td>
                        <td>{fruit.quentity} Kg</td>
                        <td style={{ width: '120px' }} >

                            <button className="btn-danger"
                                onClick={(e) => deleteFruitHandler(e, fruit._id)}
                            >Delete</button>

                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>

    );
};

export default FruitsList;