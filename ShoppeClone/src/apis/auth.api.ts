import { AuthResponse } from 'src/auth/auth.types'
import http from 'src/utils/http'

export const registerAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
