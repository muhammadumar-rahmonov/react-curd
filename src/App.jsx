import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserCard from './componentd/card'
import Header from './componentd/header'
import CreateUser from './componentd/CreateUser'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from './componentd/spinner'


function App() {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)
  


    async function GetData() {
        try {
            const data = await axios.get('https://task-dev-kom.vercel.app/api/all-user')         
            // setData(data)
            console.log(data.status);
            
          if(data.status === 200){
            setData(data)
            setLoading(false)
          }
           
        } catch (error) {
            console.log(error);
            
        }
    }
useEffect(()=>{
  GetData()
},[]);





  return (
    <> 
    <BrowserRouter>
    <Header/>
 
         <Routes>
           <Route path="/" element={<UserCard  loading={loading} data={data} />} />
           <Route path="/CreateUser" element={<CreateUser />} />
         </Routes>
      
   
    </BrowserRouter>
    </>
  ) 
}

export default App
