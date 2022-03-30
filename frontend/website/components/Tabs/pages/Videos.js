import sampleBulkData from "../../../data/sampleBulkData";
import ContentList from "../../ContentList";

export default function Videos() {
    const bulkData = sampleBulkData.sort((a, b) => b.createdAt - a.createdAt).filter(item => item.type === 'video');

    return (
        <ContentList title="VÍDEOS RECENTES" fallbackMessage="não há vídeos publicados" itensPerPage={3} totalLength={bulkData.length} data={bulkData}>
            <div>Não implementado</div>
        </ContentList>
    )
}