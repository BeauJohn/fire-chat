import React from 'react'

const handleLogin = (e) => {
   e.preventDefault()
}

function Login() {
   return (
      <div className="loginForm">
         <form onSubmit={handleLogin}></form>
      </div>
   )
}

export default Login
