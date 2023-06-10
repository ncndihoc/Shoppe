import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ResponseApi } from 'src/auth/utils.types'

type FormData = Omit<Schema, 'confirm_password'>
const loginshema = schema.omit(['confirm_password'])

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginshema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => loginAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                type: 'Server',
                message: formError[key as keyof FormData]
              })
            })
          }
        }
      }
    })
  })

  return (
    <div>
      <div className='bg-orange'>
        <div className='container'>
          <div className='grid grid-cols-1 py-20  lg:grid-cols-5 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
                <div className='text-2xl'>Dang nhap</div>
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
                <div className='mt-4'>
                  <button className='w-full rounded-sm bg-orange p-3 text-white'>Dang nhap</button>
                </div>
                <div className='mt-8 text-center'>
                  <div className='flex items-center justify-center'>
                    <span className='text-gray-400'>Ban chua co tai khoan?</span>
                    <Link to='/register' className='ml-2 text-orange'>
                      Dang ki
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
