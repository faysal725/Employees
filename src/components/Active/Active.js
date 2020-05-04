import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import './Active.css';


const Active = (props) => {
    // console.log(props);
    const {img, name, email, phone, salary, id} = props.user;
    return (
        <div className="people">
            <div>
                <img src={img} alt=""/>
            </div>

            <div>
            <h2 className="userName"> {name} </h2>
            <br/>

            <p> ID no: {id} </p>
            <p> Phone no: {phone} </p>
            <p> E-mail: {email} </p>
            <p> Yearly salary: ${salary} </p>
            <button className="main-button" onClick={ ()=> props.handleAddUser(props.user)}>
                <FontAwesomeIcon icon={faUser} /> Add this user
            </button>
            </div>         
            
        </div>
    );
};

export default Active;