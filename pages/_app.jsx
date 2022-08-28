import { useContext } from 'react';
import  { AuthContext, AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  // const {name} = useContext(AuthContext);
  return (
    <AuthContextProvider >
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
