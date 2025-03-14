import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className='signUpPage'>
      <SignUp path='/sign-up' />
    </div>
  )
}

export default SignUpPage