import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  'confirm-password': string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
    }
  )
  return (
    <div>
      <div className='bg-orange'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 py-20  lg:grid-cols-5 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
                <div className='text-2xl'>Dang ki</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    className='focus: focus: w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='Email'
                    {...register('email', rules.email)}
                  />
                  <div className='mt-2 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
                </div>
                <div className='mt-4'>
                  <input
                    type='password'
                    className='focus: focus: w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='Password'
                    {...register('password', rules.password)}
                    autoComplete='on'
                  />
                  <div className='mt-2 min-h-[1.25rem] text-sm text-red-600'>{errors.password?.message}</div>
                </div>
                <div className='mt-4'>
                  <input
                    type='password'
                    className='focus: focus: w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='Confirm password'
                    {...register('confirm-password', rules.confirm_password)}
                    autoComplete='on'
                  />
                  <div className='mt-2 min-h-[1.25rem] text-sm text-red-600'>{errors['confirm-password']?.message}</div>
                </div>
                <div className='mt-4'>
                  <button type='submit' className='w-full rounded-sm bg-orange p-3 text-white'>
                    Dang ki
                  </button>
                </div>
                <div className='mt-8 text-center'>
                  <div className='flex items-center justify-center'>
                    <span className='text-gray-400'>Ban da co tai khoan?</span>
                    <Link to='/login' className='ml-2 text-orange'>
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
