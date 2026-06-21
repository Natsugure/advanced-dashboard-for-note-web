import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ClerkProvider } from '@clerk/react'
import { customLocalization } from './features/auth/loc/ja-jp.ts'
import router from './routers/Router.tsx'
import '@mantine/core/styles.css'
import '@mantine/charts/styles.css';
import './theme.css'
import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core'

const myColor: MantineColorsTuple = [
  '#e6fdf7',
  '#d7f5ed',
  '#b2e9d9',
  '#89dcc4',
  '#67d1b3',
  '#51cba8',
  '#43c8a2',
  '#35b893',
  '#269d7c',
  '#08886a'
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
  primaryShade: 7,
});

const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      signInUrl={process.env.VITE_CLERK_SIGN_IN_URL}
      signUpUrl={process.env.VITE_CLERK_SIGN_UP_URL}
      afterSignOutUrl={"/login"}
      localization={customLocalization}
    >
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </ClerkProvider>
  </StrictMode>,
)
