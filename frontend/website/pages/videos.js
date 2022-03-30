import React from 'react';
import Carousel from '../components/Carousel';
import Newsletter from '../components/Newsletter';
import Tabs from '../components/Tabs';
import Videos from '../components/Tabs/pages/Videos';

export default function VideosPage() {
    const tabs = [
        {
            link: 'videos',
            label: 'VÍDEOS',
            component: () => <Videos />
        }
    ];

  return (
    <>
        <Carousel title="NOSSOS VÍDEOS" description="Tem assuntos que encaixam melhor em vídeo, não é mesmo? Acesse nosso acervo de tutoriais em vídeo" image="/carousel/home.png"></Carousel>
        <Tabs tabs={tabs} style={{ marginTop: '-70px', height: '67px', width: '60%', marginLeft: '20%' }}></Tabs>
        <Newsletter />
    </>
  )
}
