import React from 'react'

export default function ListDemo2() {
    let employees = [
        { eId: 101, name: "madhu", sal: 5000 },
        { eId: 104, name: "susmita", sal: 8000 },
        { eId: 103, name: "archana", sal: 7000 },
        { eId: 102, name: "manoj", sal: 9000 }
    ];

  return (
    <>
    <h2>Employee List</h2>
    <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Sal</th>
            </tr>
        </thead>
        <tbody>
        {employees.map((emp,ind)=>{
            return <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
            </tr>
        })}
        </tbody>
    </table>
    
    </>
  )
}
