import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules'
import Input from 'src/components/Input'

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
                <Input
                  type='email'
                  placeholder='Email'
                  name='email'
                  errorMessages={errors.email?.message}
                  register={register}
                  rules={rules.email}
                  className='mt-8'
                />
                <Input
                  type='password'
                  placeholder='Password'
                  name='password'
                  errorMessages={errors.password?.message}
                  register={register}
                  rules={rules.password}
                  className='mt-4'
                  autoComplete='on'
                />
                <Input
                  type='password'
                  placeholder='Confirm password'
                  name='confirm-password'
                  errorMessages={errors['confirm-password']?.message}
                  register={register}
                  rules={rules.confirm_password}
                  className='mt-4'
                  autoComplete='on'
                />
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
