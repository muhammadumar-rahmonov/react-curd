import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'



function CreateUser() {
   const [firstName,setFirstName] = useState('')
   const [lastName,setLastName] = useState('')
   const [email,setEmail] = useState('')
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState("")
   const [fadeOut, setFadeOUT] = useState(false)

  
   async function PostData() {
    setLoading(true)
    setError('')
    const data = {firstName, lastName, email}

    
   
   try {
    const response = await axios.post('https://task-dev-kom.vercel.app/api/add-user', data)
    if(response.status === 200){
     alert('sucsesfull')
    }
    
    
   } catch (error) {
    setError('nimadir xatolik ketdi!')




    setTimeout(() => {
      setFadeOUT(true)
    }, 3000);

    setTimeout(() => {
      setError('')
    }, 5000);




   
   }
   setLoading(false)
   }


 
  return (
   <div className='create-user'>


    <Card style={{ width: '50rem' }}>
    {error &&  <h1 className='error' style={{opacity: fadeOut ? 0 : 1, transition: 'opacity 2s ease-in-out'}}>{error}</h1>}
      <Card.Body>
    
      <InputGroup className="mb-3">
  
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder='firstName'
        />
      </InputGroup> 
      <InputGroup className="mb-3">

        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder='lastName'

        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setEmail(e.target.value)}
          required     
          type='email'   
          placeholder='Email'
        />
       
      </InputGroup>

      <Button onClick={PostData} className='create-btn' variant="outline-primary"   disabled={loading}>{loading ? 'creating...':'create'}</Button>
       
      </Card.Body>
    </Card>
   </div>
  )
}

export default CreateUser