import React from 'react'

export default function Filter({Data ,setData}) {
    const handdelFilter = e => {
        const {value} = e.target;
        const filterData = Data.filter((d,index,array) => {
          // console.log(index , array);
          

          if( d.name.common.toLowerCase().localeCompare(value.toLowerCase()) === 0 ){
          
            return d
           
          }else if (d.name.official.toLowerCase().localeCompare(value.toLowerCase()) === 0 ) {
              
            return d
          }else if (d.name.common.toLowerCase().localeCompare(value.toLowerCase()) === -1 && value.length === d.name.common.length  ) {
            return d

          }
          return null 
        })

        setData(filterData)
      }
  return (
    <div>
    search: <input type='search' onChange={handdelFilter} />
  </div>
  )
}
