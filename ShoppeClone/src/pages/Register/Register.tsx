import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'

type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  })
  return (
    <div>
      <div className='bg-orange'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 py-20  lg:grid-cols-5 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
                <div className='text-2xl'>Dang ki</div>
                <Input
                  name='email'
                  register={register}
                  type='email'
                  className='mt-8'
                  errorMessages={errors.email?.message}
                  placeholder='Email'
                />
                <Input
                  name='password'
                  register={register}
                  type='password'
                  className='mt-2'
                  errorMessages={errors.password?.message}
                  placeholder='Password'
                  autoComplete='on'
                />

                <Input
                  name='confirm_password'
                  register={register}
                  type='password'
                  className='mt-2'
                  errorMessages={errors.confirm_password?.message}
                  placeholder='Confirm Password'
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
