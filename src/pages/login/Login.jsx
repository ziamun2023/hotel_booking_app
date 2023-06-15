import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import { TbFidgetSpinner } from 'react-icons/tb'
const Login = () => {

    const {    user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,}=useContext(AuthContext)

        // VITE_IMGBB_KEY
        const navigate=useNavigate()
        const from =location.state?.from?.pathname || '/'
        const eamilRef=useRef() //to get the value of email using userefEmail NB: but it is nto recommended because it interfare dom that will slow down the app



        // handle Google sign in 
        const handleGoogleSignIn=()=>{
            signInWithGoogle()
            .then(result=>{
                console.log(result.user)
                toast.success('logged in successfully !')
                navigate(from , {replace: true})
            })
            .catch(err=>{
                console.log(err.message)
                toast.error(err.message)
                setLoading(false)
            })



        }

        // handle SUbmit 

        const handleSUbmit=(event)=>{
            event.preventDefault()
            const email=event.target.email.value
            const password=event.target.password.value
            console.log(email,password)
            signIn(email,password)
            .then(result=>{
                console.log(result.user)
                navigate(from , {replace: true})
            })
            .catch(err=>{
                console.log(err.message)
                toast.error(err.message)
                setLoading(false)
            })

        }

        // handle reset 
        const handleReset=()=>{
    
            const email=eamilRef.current.value
                  resetPassword(email)
                  .then(()=>{
                    setLoading(false)
                    toast.success('please check your email for reset link')
                  
                  })
        }






  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Toaster></Toaster>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
        onSubmit={handleSUbmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
              ref={eamilRef}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[rgb(69,105,221)] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[rgb(69,105,221)] bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[rgb(69,105,221)] w-full rounded-md py-3 text-black'
            >{
                loading?<TbFidgetSpinner className='m-auto animate-spin' size={24}></TbFidgetSpinner>:"  Continue"
            }
            
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button onClick={handleReset} className='text-xs hover:underline hover:text-[rgb(69,105,221)] text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-[rgb(69,105,221)] text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login