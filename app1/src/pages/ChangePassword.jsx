import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { changePass } from '../service/commonServices'
import Navbar from '../components/Navbar'

function ChangePassword() {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const email = sessionStorage.getItem('email')

    const change_password = async () =>{
        if(!password || !confirmPassword){
            toast.error('All fields are required')
            return 
        }

        if(password !== confirmPassword){
            toast.error('Password do not match')
        }

        try{
            const result = await changePass(email, password)

            if(result.status === 'success'){
                toast.success('Password changed successfully')
                setPassword('')
                setConfirmPassword('')
            }else{
                toast.error('Failed to change password')
            }
        } catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
        
    }
    return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-center mt-5">
        <div className="card shadow p-4" style={{ width: '400px' }}>
          <h4 className="text-center mb-4">Change Password</h4>

          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>

          <button className="btn btn-primary w-100" onClick={change_password}>
            Change Password
          </button>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
