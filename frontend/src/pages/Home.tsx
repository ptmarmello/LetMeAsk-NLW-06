import illustrationImg from '../assets/images/illustration.svg';
import logoTmg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Responda e tire as dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoTmg} alt="Logo Letmeask"/>
                    <button className="create-room">
                        <img src={googleIconImg} alt="GoogleLogo"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator" >
                        entre em uma sala
                    </div>
                    <form>
                        <input
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}