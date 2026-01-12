import React from 'react'

const Login = () => {
     const googleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-sm">
    
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Login
    </h2>

    <button
      onClick={googleLogin}
      className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Login with Google
    </button>

  </div>
</div>

  )
}

export default Login