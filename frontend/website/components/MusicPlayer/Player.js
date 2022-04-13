// components/Player.js
import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useMediaPlayer } from '../../contexts/MediaPlayerContext';

const locale = {
    emptyText: 'Sem podcasts na fila',
    clickToPlayText: 'Clique para tocar',
    clickToPauseText: 'Clique para pausar',
    previousTrackText: 'Episódio anterior',
    nextTrackText: 'Próximo episódio',
    reloadText: 'Recarregar',
    volumeText: 'Volume',
    playListsText: 'Lista de episódios',
    clickToDeleteText: function clickToDeleteText(name) {
        return "Clique para deletar ".concat(name);
    },
    loadingText: 'Carregando'
};

export const Player = () => {
    const [audioList] = useMediaPlayer();
    
    return <ReactJkMusicPlayer 
                locale={locale}
                glassBg={false}
                toggleMode={false} 
                showReload={false} 
                showDownload={false} 
                showLyric={false}
                showThemeSwitch={false}
                showPlayMode={false}
                showMiniModeCover={false}
                audioLists={audioList}
                showMiniModeCover={false}
                mode="full"  
                theme="light"
            />
}