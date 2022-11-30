import React,{useState} from 'react'

export default function FormPerson({persons,setPersons}) {
    const [ newName, setNewName ] = useState('')
    const [newTel , setNewTel] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault();
        const filter = persons.findLast((person) => person.name === newName ? true :false)
        if (!filter) {
          setPersons([...persons ,{name:newName , number: newTel}])
          setNewName('')
          setNewTel('')
        }else{
          console.log(filter);
          alert(`No puedes guardar: ${newName}  Ya existe: ${persons.filter(p=> p.name === newName ? p.name : null)}`)
        }
      }
  return (
    <form onSubmit={handelSubmit}>
    <div>
      name: <input type='text' onChange={e => {const {value} = e.target;setNewName(value)}} />
    </div>
    <div>
      number: <input type='number' onChange={e => {const {value} = e.target;setNewTel(value)}} />
    </div>
    <div>
      <button type="submit" >add</button>
    </div>
  </form>
  )
}
