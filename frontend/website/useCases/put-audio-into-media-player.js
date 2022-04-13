import { useMediaPlayer } from "../contexts/MediaPlayerContext";

export default function PutAudioIntoMediaPlayer(audio) {
    const [state, setState] = useMediaPlayer();
    
    setState({ audiosList: [audio] })
}