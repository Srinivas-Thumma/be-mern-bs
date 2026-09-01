import React, { useState } from 'react'
import axios from 'axios'

export default function App() {

  // creating state variables for username, age and city using useState hook
  let [username, setUsername] = useState(null)
  let [age, setAge] = useState(null)
  let [city, setCity] = useState(null)

// fetching data from the server using fetch api and then converting the response to json and then logging it to the console , trying  to connect the server and client using fetch api and then logging the response to the console
async function getRes() {

  // const res = await fetch('http://localhost:8000') 
  // const data = await res.json()
  // data
  // .then((e) => {
  //   console.log(e)
  // }).catch((err) => {
  //   console.log(err)
  // })

axios.post('http://localhost:8000', 
  { username: username, age: age, city: city })
.then((res) => {
  console.log(res.data)
}).catch((err) => {
  console.log(err)})
}

  return (
    <div>
      <input type="text" placeholder='Enter your name' onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder='Enter your city' onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => getRes()}>Send</button>
    </div>
  )
};
