import { useEffect } from 'react'
import { useClerk } from '@clerk/react'
import { useNavigate } from 'react-router'

export default function LogoutPage() {
  const { signOut } = useClerk()
  const navigate = useNavigate()

  useEffect(() => {
    void signOut().then(() => navigate('/'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
