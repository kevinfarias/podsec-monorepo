import React from 'react';
import Carousel from '../components/Carousel';
import Newsletter from '../components/Newsletter';
import Tabs from '../components/Tabs';
import Podcasts from '../components/Tabs/pages/Podcasts';

export default function PodcastsPage() {
    const tabs = [
        {
            link: 'podcasts',
            label: 'PODCASTS',
            component: () => <Podcasts />
        },
    ];

  return (
    <>
        <Carousel title="NOSSOS PODCASTS" description="Em um formato de áudio, escute conversa com especialistas da área sobre formas de se prevenir de ataques ou até mesmo como agir em determinadas ocasiões" image="/carousel/home.png"></Carousel>
        <Tabs tabs={tabs} style={{ marginTop: '-70px', height: '67px', width: '60%', marginLeft: '20%' }}></Tabs>
        <Newsletter />
    </>
  )
}
