import { useMediaPlayer } from '../../contexts/MediaPlayerContext';
import { PlayerWithNoSSR } from '../../pages/_app';

export default function Player() {
    const [state, setState] = useMediaPlayer();

    return (
        <PlayerWithNoSSR theme="auto" {...state}>
        </PlayerWithNoSSR>
    )
}