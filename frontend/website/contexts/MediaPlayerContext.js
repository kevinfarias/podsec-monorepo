import React from 'react';

const MediaPlayerContext = React.createContext();

export function MediaPlayerProvider(props) {
    const state = React.useState([]);

    return <MediaPlayerContext.Provider value={state} {...props}></MediaPlayerContext.Provider>
}

export function useMediaPlayer() {
    const context = React.useContext(MediaPlayerContext);
    if (!context) {
        throw new Error("useMediaPlayer must be used within a MediaPlayerProvider");
    }

    return context;
}

export function addPodcastToPlay(name, source, cover = "") {
    const [_, setState] = useMediaPlayer();

    setState([
        {
            name,
            musicSrc: source,
            cover
        }
    ])
}