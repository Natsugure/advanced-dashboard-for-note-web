import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ClerkProvider } from '@clerk/react'
import router from './routers/Router.tsx'
import '@mantine/core/styles.css'
import '@mantine/charts/styles.css';
import './theme.css'
import { MantineProvider } from '@mantine/core'

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/login"}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </ClerkProvider>
  </StrictMode>,
)
