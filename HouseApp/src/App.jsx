import { useEffect, useState } from 'react'
import Machine from './components/Machine'
import './App.css'
import axios from 'axios'


function App() {
 


  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData=()=>{

      axios.get('http://192.168.0.2:1880/status')
   .then(res=>{
     setData(res.data)
   })
    }
    fetchData()
    const intervalId = setInterval(fetchData, 2500);
    return () => clearInterval(intervalId);
  }, [])
 
    const handdlePost = ()=>{
      axios.post('http://192.168.0.2:1880/post',{data:'change'})
     .then(res=>console.log(res.status))
    }

  const piclink = 'https://thumb.pccomponentes.com/w-530-530/articles/35/352349/141-beko-ds-8512-cx-secadora-bomba-de-calor-de-carga-frontal-8kg-a-blanca-opiniones.jpg'

  return (
    
    <div className='flex flex-col h-screen w-screen items-center justify-center'>

    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img src={piclink} alt='washing machine'></img>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Home App</h2>
    <p>State: {data?.state?'Working':'Stopped'}</p>
    <p>Power usage: {data?.powerusage}</p>
    <p>Notifications: <input onClick={()=>handdlePost()} type="checkbox" checked={data?.notifications} className="toggle bg-gray-500 checked:bg-green-500  " /></p>
    
    
  </div>
  </div>

      
  </div>

    
  )
}

export default App
