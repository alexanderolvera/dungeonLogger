import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()
  const { uid } = router.query

  return (
    <>
      <h3>Dashboard Component</h3>
      <h6>{uid}</h6>
    </>
  )
}