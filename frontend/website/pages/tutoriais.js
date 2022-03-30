import React from 'react';
import Carousel from '../components/Carousel';
import Newsletter from '../components/Newsletter';
import Tabs from '../components/Tabs';
import Tutoriais from '../components/Tabs/pages/Tutoriais';

export default function HomePage() {
    const tabs = [
        {
            link: 'tutoriais',
            label: 'TUTORIAIS',
            component: () => <Tutoriais />
        }
    ];

  return (
    <>
        <Carousel title="NOSSOS TUTORIAIS" description="Nossos tutoriais em texto/imagens para te ajudar a se proteger de uma forma fácil, rápida e didática!" image="/carousel/home.png"></Carousel>
        <Tabs tabs={tabs} style={{ marginTop: '-70px', height: '67px', width: '60%', marginLeft: '20%' }}></Tabs>
        <Newsletter />
    </>
  )
}
