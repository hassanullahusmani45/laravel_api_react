import React from 'react'
import Input from '../../components/form/Input'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/logo-white.svg";
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '../../components/form/Button';
import { required, min, max, email } from '../../validators/Rules';
import { useForm } from '../../hooks/useForm';

export default function Register() {

  const [formState, onInputHandler] = useForm({
    fullname: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false);

  console.log(formState)
  const registerNewUser = (event) => {
    event.preventDefault();
    alert("Register !!!")
  }



  return (
    <div className='flex justify-center w-full h-screen p-8 bg-slate-900 text-white'>
      <form className='flex flex-col justify-center  w-1/3 bg-slate-800 rounded-2xl shadow-2xl p-8'>
        <div className=' text-center text-green-500 text-lg font-medium'>Welcome To The Registration Page.</div>

        <Link to={"/"} className='flex justify-center items-center'>
          <img src={Logo} className="w-24 h-24 rounded-full" alt="logo" />
        </Link>

        <label htmlFor="fullname"
          className="block pl-2 mb-2 font-medium text-white dark:text-gray-200">Full-name :</label>
        <div className='relative'>
          <Input
            id="fullname"
            element="input"
            type="text"
            placeholder="plece enter your full name."
            className="font-medium border-[3px] rounded-full shadow-md block w-full p-2 px-6 text-blue-800 bg-slate-200 placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal"
            validationes={[
              required(),
              min(3),
              max(50),
            ]}
            onInputHandler={onInputHandler}
          />
          <UserIcon className='absolute right-3 top-3 size-5 text-slate-900' />
        </div>


        <label htmlFor="email"
          className="block pl-2 mb-2 mt-4 font-medium text-white dark:text-gray-200">Email :</label>
        <div className='relative'>
          <Input
            element="input"
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="font-medium border-[3px] rounded-full shadow-md block w-full p-2 px-6 text-blue-800 bg-slate-200 placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal"
            validationes={[
              required(),
              email(),
              min(9),
              max(100),
            ]}
            onInputHandler={onInputHandler}

          />
          <EnvelopeIcon className='absolute right-3 top-3 size-5 text-slate-900' />
        </div>


        <label htmlFor="password"
          className="block pl-2 mb-2 mt-4 font-medium text-white dark:text-gray-200">Password :</label>
        <div className='relative'>
          <Input
            element="input"
            id="password"
            type="password"
            placeholder="********"
            className="font-medium border-[3px] rounded-full shadow-md block w-full p-2 px-6 text-blue-800 bg-slate-200 placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal"
            validationes={[
              required(),
              min(8),
              max(20)
            ]}
            onInputHandler={onInputHandler}

          />
          <LockClosedIcon className='absolute right-3 top-3 size-5 text-slate-900' />
        </div>

        <div className='flex justify-center items-center mt-8'>
          <Button
            type="submit"
            onClick={registerNewUser}
            className="bg-green-500 py-1.5 px-6 w-fit rounded-full hover:scale-105"
            disabled={!formState.isFormValid}
          >
            Register
          </Button>
        </div>

      </form>
    </div>
  )
}
