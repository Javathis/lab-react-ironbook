import React from 'react'

const Users = (props) => {


  const userDisplay = props.users.map(users => {

    return (

      <tr>
        <td>{users.firstName}</td>
        <td>{users.lastName}</td>
        <td>{users.campus}</td>
        <td>{users.role}</td>
        <td>{users.linkedin}</td>
      </tr>


    )
  })
  return (
    <>
      {userDisplay}
    </>

  )


}

export default Users
