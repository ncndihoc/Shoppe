import { User } from './user.types'
import { ResponseApi } from './utils.types'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: number
  user: User
}>
