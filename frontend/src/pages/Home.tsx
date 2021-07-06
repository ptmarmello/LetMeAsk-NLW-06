import illustrationImg from '../assets/illustration.svg';
import logoTmg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

export function Home() {
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Responda e tire as dúvidas em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoTmg} alt="Logo Letmeask"/>
                    <button>
                        <img src={googleIconImg} alt="GoogleLogo"/>
                        Crie sua sala com o Google
                    </button>
                    <div>
                        entre em uma sala
                    </div>
                    <form>
                        <input
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}