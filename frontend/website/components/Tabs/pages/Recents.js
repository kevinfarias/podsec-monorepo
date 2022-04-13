import ReactLoading from 'react-loading';    
import PodcastCard from "../../Cards/PodcastCard";
import ContentList from "../../ContentList";
import api from "../../../api/backend";
import React from 'react';

export default function Recents() {
    const [state, setState] = React.useState({
        loading: true,
        list: []
    });

    React.useEffect(async () => {
        const response = await api.get('/all');

        setState({
            loading: false,
            list: response.data.data
        });
    }, []);

    if (state.loading) {
        return (<ReactLoading type={'balls'} color={'blue'} height={667} width={375} />);
    }

    const Card = ({ data }) => {
        switch (data.type || "podcast") {
            case 'podcast': return <PodcastCard data={data} />;
            default: throw new Error(`${data.type} card is not defined`);
        }
    };

    return (
        <ContentList title="POSTAGENS RECENTES" fallbackMessage="não há postagens publicadas" itensPerPage={3} totalLength={state.list.length} data={state.list}>
            <Card />
        </ContentList>
    )
}