import Menu from './components/Menu';
import SearchBar from './components/SearchBar';
import UserDetails from './components/UserDetails';
import styles from './Header.module.scss';

export default function Header({ props }) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id={styles.navbarPrincipal}>
            <div class="container-fluid row">
                <div className="col-2" style={{ textAlign: 'center' }}>
                    <a class="navbar-brand" href="#">LOGO</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={"collapse navbar-collapse col-8"} style={{ textAlign: 'right', display: 'inline-flex' }}>
                    <Menu></Menu>
                    <SearchBar></SearchBar>
                </div>
                <div className="col-2">
                    <UserDetails></UserDetails>
                </div>
            </div>
        </nav>
    );
}