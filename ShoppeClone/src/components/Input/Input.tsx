import { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  name: string
  errorMessages?: string
  className?: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

export default function Input({
  type,
  autoComplete,
  placeholder,
  name,
  errorMessages,
  className,
  register,
  rules
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='focus: focus: w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, rules)}
      />
      <div className='mt-2 min-h-[1.25rem] text-sm text-red-600'>{errorMessages}</div>
    </div>
  )
}
