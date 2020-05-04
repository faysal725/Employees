import React from 'react';

const Total = (props) => {
    const People = props.People
    console.log(People);
    const totalSalary = People.reduce((total, ppl) => total + ppl.salary, 0);
    console.log(totalSalary)
    return (
        <div>
            <h4>Adding summery</h4>
            <p>User added:{People.length}   </p>
            <p>Total salary: { totalSalary } </p>
            
        </div>
    );
};

export default Total;