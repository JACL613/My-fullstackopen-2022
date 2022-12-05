import React from 'react'

export default function Filter({Data ,setData}) {
    const handdelFilter = e => {
        const {value} = e.target;
        const filterData = Data.filter(p => {return p.name.toLowerCase() >= value.toLowerCase() ? p : null} )
        setData(filterData)
    }
  return (
    <div>
    search: <input type='search' onChange={handdelFilter} />
  </div>
  )
}
