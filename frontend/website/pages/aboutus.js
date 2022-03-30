import React from 'react';
import Carousel from '../components/Carousel';
import Newsletter from '../components/Newsletter';

export default function AboutUsPage() {
  return (
    <>
        <Carousel title="CRIADO POR VOLUNTÁRIOS DE DIVERSAS ÁREAS" description="Buscamos te informar sobre os ataques cibernéticos e tentar ajudar a reduzir a incidência dos devidos ataques." image="/carousel/home.png"></Carousel>
        <Newsletter />
    </>
  )
}
