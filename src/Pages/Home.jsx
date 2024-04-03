import React, { useEffect, useState } from 'react'
import UserApi from '../API/UserApi'
import { toast } from 'react-toastify'

function Home() {
  const [users,setUsers]= useState

   const resdHandler = async () => {
    await UserApi.readAll().then(res => {
      console.log(`data = `, res)
      setUsers(res.data.users)
    }).catch(err => {
      console.log(err)
      toast.error(err.response.data.msg)
    })
   }

   useEffect(()=> {
    resdHandler()
   })
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="table table-responsive">
            <table className="table table-border table-striped table-hovered">
              <thead>
                <tr>
                  <th colSpan={6}>
                    <h4 className="display-4 text-center ">
                        User Data
                    </h4>
                  </th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users && users.map((item,index)=>{
                    return(
                      <tr key={index} className='text-center'>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.isActive ? <strong className='text-sucess'>Active</strong> : <strong className='text-danger'>
                         Blocked </strong>}</td>
                         <td>
                          {/* NavLink.btn.btn-sm */}
                         </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home