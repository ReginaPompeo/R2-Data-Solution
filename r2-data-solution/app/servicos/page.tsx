'use client';

import styles from './services.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useRef } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import ServiceImage1 from '../../public/Service-Image-1.svg';
import ServiceImage2 from '../../public/Service-Image-2.svg';
import ServiceImage3 from '../../public/Service-Image-3.svg';
import ServiceImage4 from '../../public/Service-Image-4.svg';
import ServiceImage5 from '../../public/Service-Image-5.svg';
import ServiceImage6 from '../../public/Service-Image-6.svg';
import ServiceIcon1 from '../../public/Service-Icon-1.svg';
import ServiceIcon2 from '../../public/Service-Icon-2.svg';
import ServiceIcon3 from '../../public/Service-Icon-3.svg';
import ServiceIcon4 from '../../public/Service-Icon-4.svg';
import ServiceIcon5 from '../../public/Service-Icon-5.svg';
import ServiceIcon6 from '../../public/Service-Icon-6.svg';

const service = [
  { /*icon: ServiceIcon1,*/ image: ServiceImage1, text: 'Automatização de Processos', description: 'AAAAAAAAA' },
  { /*icon: ServiceIcon2,*/ image: ServiceImage2, text: 'Automatização de Relatórios', description: 'BBBBBBBBBB' },
  { /*icon: ServiceIcon3,*/ image: ServiceImage3, text: 'Desenvolvimento de Sites', description: 'CCCCCCCCCCCC' },
  { /*icon: ServiceIcon4,*/ image: ServiceImage4, text: 'Gestão e Tratamento de Dados', description: 'DDDDDDDDDDDD' },
  { /*icon: ServiceIcon5,*/ image: ServiceImage5, text: 'Desenvolvimento de Dashboards', description: 'EEEEEEEEE' },
  { /*icon: ServiceIcon6,*/ image: ServiceImage6, text: 'Automatização de Documentos', description: 'FFFFFFFF' }
];

type ServiceType = {
  icon: any;
  image: any;
  text: string;
  description?: string;
};

export default function Service() {
  const swiperRef = useRef<any>(null);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  return (
    <>
      <Navbar />
      <div className={styles.serviceContainer}>
        <div className={styles.title}>Nossos Serviços</div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
          className={styles.swiperContainer}
        >
          {service.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={styles.card}
                onClick={() => setSelectedService(item)}
              >
                <Image
                  src={item.image}
                  alt={item.text}
                  width={150}
                  height={150}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{item.text}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedService && (
          <div className={styles.modalOverlay} onClick={() => setSelectedService(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={() => setSelectedService(null)}>✖</button>
              <Image
                src={selectedService.icon}
                alt={`Ícone ${selectedService.text}`}
                width={80}
                height={80}
              />
              <h2>{selectedService.text}</h2>
              <p>{selectedService.description}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
