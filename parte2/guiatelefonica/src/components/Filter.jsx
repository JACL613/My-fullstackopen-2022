import React from 'react'

export default function Filter({persons ,setSearch}) {
    const handdelFilter = e => {
        const {value} = e.target;
        const filterPersons = persons.filter(p => {return p.name.toLowerCase() >= value.toLowerCase() ? p : null} )
        setSearch(filterPersons)
    }
  return (
    <div>
    search: <input type='search' onChange={handdelFilter} />
  </div>
  )
}
