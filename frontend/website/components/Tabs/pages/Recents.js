import sampleBulkData from "../../../data/sampleBulkData";
import PodcastCard from "../../Cards/PodcastCard";
import ContentList from "../../ContentList";

export default function Recents() {
    const bulkData = sampleBulkData.sort((a, b) => b.createdAt - a.createdAt);

    const Card = ({ data }) => {
        switch (data.type) {
            case 'podcast': return <PodcastCard data={data} />;
            default: throw new Error(`${data.type} card is not defined`);
        }
    };

    return (
        <ContentList title="POSTAGENS RECENTES" fallbackMessage="não há postagens publicadas" itensPerPage={3} totalLength={bulkData.length} data={bulkData}>
            <Card />
        </ContentList>
    )
}