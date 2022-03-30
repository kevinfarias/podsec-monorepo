import styles from './FallbackMessage.module.scss';
import { BiSad } from 'react-icons/bi';
import { FaRocket } from 'react-icons/fa';

export default function FallbackMessage({ message }) {
    return (
        <div className={styles.fallback}>
            <div className="icon">
                <BiSad></BiSad>
            </div>
            <div className="title">
                <h1>Aaah! Que pena</h1>
            </div>
            <div className="message">
                <h3>Infelizmente, {message}...</h3>
            </div>
            <div className="messageKeepIn">
                <h5>Mas continue ligado e assine nossa newsletter abaixo! Assim que um novo conteúdo sair, você será informado em primeira mão <div className="rocketIcon">{<FaRocket />}</div></h5>
            </div>
        </div>
    );
}