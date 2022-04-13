import React from 'react';
import Carousel from '../components/Carousel';
import Newsletter from '../components/Newsletter';
import Tabs from '../components/Tabs';
import Recents from '../components/Tabs/pages/Recents';
import Podcasts from '../components/Tabs/pages/Podcasts';
import Videos from '../components/Tabs/pages/Videos';
import Tutoriais from '../components/Tabs/pages/Tutoriais';
// import Player from '../components/MusicPlayer';

export default function HomePage() {
    const tabs = [
        {
            link: 'recents',
            label: 'RECENTES',
            component: () => <Recents />
        },
        {
            link: 'podcasts',
            label: 'PODCASTS',
            component: () => <Podcasts />
        },
        {
            link: 'videos',
            label: 'VÍDEOS',
            component: () => <Videos />
        },
        {
            link: 'tutoriais',
            label: 'TUTORIAIS',
            component: () => <Tutoriais />
        }
    ];

  return (
    <>
        <Carousel title="APRENDA A SE DEFENDER NA INTERNET" description="A TE INFORMA TECH tem o objetivo de trazer informação sobre como se prevenir de golpes aplicados na internet, principalmente em redes sociais - Venha aprender com a gente no nosso bate-papo semanal! (texto improvisado)" image="/carousel/home.png"></Carousel>
        <Tabs tabs={tabs} style={{ marginTop: '-70px', height: '67px', width: '60%', marginLeft: '20%' }}></Tabs>
        <Newsletter />
        {/* <Player></Player> */}
    </>
  )
}
