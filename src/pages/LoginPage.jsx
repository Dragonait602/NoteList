import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {

    const [isLoginView, setIsLoginView] = useState(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    
    const {login} = useAuth();
    const navigate = useNavigate()

    const handleLogin = async () => {
        try{
            const response = await fetch('/api/auth/login',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })
            const data = await response.json();

            if(!response.ok){
                alert(data.message)
                return
            }

            login(data.user)
            navigate('/')

        }catch(error){
            console.error('Помилка при логіні:', error)
            alert('Не вдалося підключитися до серверу.')
        }
    }
    const handleRegister = async () =>{
        try{
            const response = await fetch('/api/auth/register',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, username, password}),
            })
            const data = await response.json()
            if(!response.ok){
                alert(data.message)
                return
            }
            alert(data.message)
            setIsLoginView(true)
        }catch(error){
            console.error('Помилка при реєстрації', error)
            alert('Не вдалось підключитись до серверу')
        }
    }

    return(
        <div className="container">
            <main className="login main">
                {isLoginView ? (
                    <div className="login__block">
                        <div className="login__title">
                            <h2>LOGIN</h2>
                        </div>
                        <div className="login__inputs">
                            <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
                            <input type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <div className="login__button">
                            <button onClick={handleLogin}>LOGIN IN</button>
                        </div>
                        <div className="login__register">
                            <a onClick={()=> setIsLoginView(false)}>Need an account?</a>
                        </div>
                    </div>
                ):(
                    <div className="register__block">
                        <div className="register__title">
                            <h2>REGISTER</h2>
                        </div>
                        <div className="register__inputs">
                            <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
                            <input type="text" value={username} placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                            <input type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <div className="register__button">
                            <button onClick={handleRegister}>REGISTER</button>
                        </div>
                        <div className="register__login">
                            <a onClick={()=> setIsLoginView(true)}>Already have an account? Log in</a>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default LoginPage;