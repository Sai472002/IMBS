import Bg from "../ASSETS/IMAGES/login-background.png"

const bgImage = <img src={Bg} className="size-full absolute" />

function Login() {
    return <>{bgImage} <div className="flex items-center justify-center size-full"><div className="p-4 rounded-md bg-primarylight1 size-80 z-50"><p>Welcome</p></div></div></>
}

export default Login
