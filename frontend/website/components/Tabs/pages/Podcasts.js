import sampleBulkData from "../../../data/sampleBulkData";
import PodcastCard from "../../Cards/PodcastCard";
import ContentList from "../../ContentList";

export default function Podcasts() {
    const bulkData = sampleBulkData.sort((a, b) => b.createdAt - a.createdAt).filter(item => item.type === 'podcast');

    return (
        <ContentList title="PODCASTS RECENTES" fallbackMessage="não há podcasts publicados" itensPerPage={3} totalLength={bulkData.length} data={bulkData}>
            <PodcastCard />
        </ContentList>
    )
}