import Navbar from "./Navbar"
import { Toaster } from 'react-hot-toast'

export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      {children}
      <Toaster />
    </>
  )
}