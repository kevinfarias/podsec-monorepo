import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../Header.module.scss';

export default function Menu() {
    const menus = [
        {
            title: 'QUEM SOMOS',
            path: '/aboutus'
        },
        {
            title: 'TUTORIAIS',
            path: '/tutoriais'
        },
        {
            title: 'VÍDEOS',
            path: '/videos'
        },
        {
            title: 'PODCASTS',
            path: '/podcasts'
        },
        {
            title: 'HOME',
            path: '/'
        },
    ];

    const router = useRouter();

    return (
        <ul class={"navbar-nav me-auto mb-2 mb-lg-0 " + styles.floatRight}>
            {menus.map(item => (
                <li class="nav-item">
                    <Link href={item.path}><a class={"nav-link " + (router.pathname === item.path ? 'active' : '')} href="#">{item.title}</a></Link>
                </li>
            ))}
        </ul>
    );
}