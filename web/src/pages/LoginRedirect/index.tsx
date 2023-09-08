import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const LoginRedirect = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.getUserData()) {
      navigate('/login')
    }
  }, [auth, navigate])

  return null
}
