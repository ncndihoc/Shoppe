type Role = 'Admin' | 'User'

export interface User {
  _id: string
  roles: string[]
  email: string
  name: string
  date_of_birth: string | null
  address: string
  phone: string
  createdAt: string
  updatedAt: string
  __v: number
}
