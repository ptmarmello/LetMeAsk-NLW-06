import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoTmg from '../assets/images/logo.svg'

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Newroom() {


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
                    <h2>Criar uma nova Sala</h2>
                    <form>
                        <input
                        type="text"
                        placeholder="Nome da Sala"
                        />
                        <Button type="submit">
                            Entrar
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/"> Clique Aqui!</Link></p>
                </div>
            </main>
        </div>
    );
}