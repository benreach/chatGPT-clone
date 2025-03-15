import { SignUp } from '@clerk/clerk-react'
import React from 'react'


function SignUpPage() {
  return (
    <div className='signUpPage'>
      <SignUp path='/sign-up' />
    </div>
  )
}

export default SignUpPage