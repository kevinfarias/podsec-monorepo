import styles from './PodcastCard.module.scss';
import { AiOutlineComment, AiOutlineHeart, AiFillPlayCircle } from 'react-icons/ai';
import dayjs from '../../utils/date';
import { useMediaPlayer } from '../../contexts/MediaPlayerContext';

export default function PodcastCard({ data }) {
    const { titulo: title, assunto: description, image, commentsAmount, createdAt, url } = data;
    
    const [_, setMusicState] = useMediaPlayer();

    const timeFromPost = dayjs(createdAt).toNow(true);

    function addPodcastToPlay(name, source, cover = "") {
        setMusicState([
            {
                name,
                musicSrc: source,
                cover
            }
        ])
    }

    return (<div className={styles.card + ' card'}>
        <div className="card-body row">
            <div className="col-5">
                {image ? (<img className="cardImage" src={image}></img>) : (<div className="cardImage"></div>)}
            </div>
            <div className="col-7">
                <h5 className={'card-title'}><b>{title}</b></h5>
                <h6 className={'card-subtitle'}><b style={{ fontWeight: 500 }} data-date-posted={dayjs(createdAt).format('YYYY-MM-DD')}>Postado há {timeFromPost} atrás / {commentsAmount} comentários</b></h6>
                <p className={'card-text'}>
                    {description}
                </p>
                <div className="row">
                    <div className="col-6">
                    <button onClick={() => alert(`amando!`)} className="playButton btn btn-sm btn-outline-danger">
                        <AiOutlineHeart />
                    </button>
                    {'  '}
                    <button onClick={() => alert(`comentando!`)} className="playButton btn btn-sm btn-outline-success">
                        <AiOutlineComment />
                    </button>
                    </div>
                    <div className="col-6">
                        <button onClick={() => addPodcastToPlay(title, url, image)} data={url} className="playButton btn btn-sm btn-outline-info">
                            OUVIR EPISÓDIO{'  '}
                            <AiFillPlayCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}