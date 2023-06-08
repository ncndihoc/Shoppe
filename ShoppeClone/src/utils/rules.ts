import type { RegisterOptions } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    },
    maxLength: {
      value: 160,
      message: 'Email must not exceed 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Email must be at least 6 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password must not exceed 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password is required'
    },
    maxLength: {
      value: 160,
      message: 'Confirm password must not exceed 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Confirm password must be at least 6 characters'
    }
  }
}
