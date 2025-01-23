import { SignInButton } from "@clerk/clerk-react"


const Home = () => {
  return (
    <div>
      <h1>Sign in with button</h1>
      <SignInButton mode="modal"/>
    </div>
  )
}

export default Home
