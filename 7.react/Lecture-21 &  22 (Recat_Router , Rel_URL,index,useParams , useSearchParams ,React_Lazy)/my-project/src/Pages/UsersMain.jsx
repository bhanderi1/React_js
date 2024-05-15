import React from 'react'
import { useParams } from 'react-router-dom'

const UsersMain = () => {
    const {userId} = useParams
  return (
    <div>
      <h1>User Details {userId}</h1>
    </div>
  )
}

export default UsersMain
