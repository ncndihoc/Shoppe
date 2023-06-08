import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  return (
    <div>
      <div className='bg-orange'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 py-20  lg:grid-cols-5 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='bg-white p-10 shadow-sm'>
                <div className='text-2xl'>Dang nhap</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    name='email'
                    className='focus: focus: w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='Email'
                  />
                  <div className='text-sm.min-h-[1rem] mt-1 text-red-600'></div>
                </div>
                <div className='mt-4'>
                  <input
                    type='password'
                    name='password'
                    className='focus: focus: w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='Password'
                  />
                  <div className='text-sm.min-h-[1rem] mt-1 text-red-600'></div>
                </div>
                <div className='mt-4'>
                  <button className='w-full rounded-sm bg-orange p-3 text-white'>Dang nhap</button>
                </div>
                <div className='mt-8 text-center'>
                  <div className='flex items-center justify-center'>
                    <span className='text-gray-400'>Ban chua co tai khoan?</span>
                    <Link to='/register' className='ml-2 text-orange'>
                      Dang nhap
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
