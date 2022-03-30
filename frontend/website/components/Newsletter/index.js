import styles from './Newsletter.module.scss';
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

export default function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <div className="jumbotron">
                <h1 className="title row">
                    NÃO PERCA NENHUMA NOVIDADE!
                </h1>
                <p className="description row">
                    Nos siga nas redes sociais e não deixe de se increver na nossa Newsletter. Receba todas as nossas dicas, notícias e atualizações com apenas um clique!
                </p>
                <div className="signUp row g-0 justify-content-center">
                    <div className="col-auto">
                        <label for="email" class="visually-hidden">Insira seu e-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="Insira seu e-mail" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className={'btn btn-dark'}>ENVIAR</button>
                    </div>
                </div>
                <div className="socialButtons mt-3 row justify-content-center">
                    <div className="icon col-auto">
                        <AiFillYoutube />
                    </div>
                    <div className="icon col-auto">
                        <AiFillInstagram />
                    </div>
                    <div className="icon col-auto">
                        <AiFillFacebook />
                    </div>
                </div>
            </div>
        </div>
    );
}