import React from 'react'

export default function ListDemo() {
    let cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
  return (
    <>
    <h2>Car List</h2>
    <ul>
        {cars.map((car,ind)=>{
            return <li key={ind}>{car}</li>
        })

        }
    </ul>
    
    </>
  )
}
