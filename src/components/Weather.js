import React, { useEffect } from 'react'

const Weather = () => {

  const getUsers = async () => {
      const response = await fetch('https://api.github.com/users')
      console.log(response);
  }


  useEffect(() => {
    getUsers();
  })


  return (
    <>
     <h2>list of github users</h2> 
    </>
  )
}

export default Weather
