import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
    return (
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ display: 'none' }} />
            <BsSearch />
        </form>
    );
}