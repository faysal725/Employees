import React, { useState } from 'react';
import "./Person.css";
import fakedata from '../../fakedata';
import Active from '../Active/Active';
import Total from '../Total/Total';

const Person = () => {
    
    const first10 = fakedata.slice(0,10);
    const [users, setusers] = useState(first10);
    const [People, setPeople] = useState([]);

    const handleAddUser = (user) =>{
        // console.log("User Added", user);
        const newPeople = [...People, user];
        // console.log(newPeople);
        setPeople(newPeople);
        
    }
    
    return (
        <div className="office-container">
            <div className="user-container">
                {
                    users.map(us => <Active 
                        handleAddUser =  {handleAddUser}
                        user ={us}>
                        </Active>)
                }
            
            </div>

            <div className="total-container">
                <Total People = {People}></Total>
            </div>
        </div>
    );
};

export default Person;