import sampleBulkData from "../../../data/sampleBulkData";
import ContentList from "../../ContentList";

export default function Tutoriais() {
    const bulkData = sampleBulkData.sort((a, b) => b.createdAt - a.createdAt).filter(item => item.type === 'tutoriais');

    return (
        <ContentList title="TUTORIAIS RECENTES" fallbackMessage="não há tutoriais publicados" itensPerPage={3} totalLength={bulkData.length} data={bulkData}>
            <div>Não implementado</div>
        </ContentList>
    )
}