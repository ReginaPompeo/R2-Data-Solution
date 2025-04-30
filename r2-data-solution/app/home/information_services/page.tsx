import styles from './information_services.module.scss';
import Image from 'next/image';
import ServiceImage1 from '../../../public/Service-Image-1.svg';
import ServiceImage2 from '../../../public/Service-Image-2.svg';
import ServiceImage3 from '../../../public/Service-Image-3.svg';
import ServiceImage4 from '../../../public/Service-Image-4.svg';
import ServiceImage5 from '../../../public/Service-Image-5.svg';
import ServiceImage6 from '../../../public/Service-Image-6.svg';
import ServiceIcon1 from '../../../public/Service-Icon-1.svg';
import ServiceIcon2 from '../../../public/Service-Icon-2.svg';
import ServiceIcon3 from '../../../public/Service-Icon-3.svg';
import ServiceIcon4 from '../../../public/Service-Icon-4.svg';
import ServiceIcon5 from '../../../public/Service-Icon-5.svg';
import ServiceIcon6 from '../../../public/Service-Icon-6.svg';

const information_services = [
    { icon: ServiceIcon1, image: ServiceImage1, text: 'Automatização de Processos' },
    { icon: ServiceIcon2, image: ServiceImage2, text: 'Automatização de Relatórios' },
    { icon: ServiceIcon3, image: ServiceImage3, text: 'Desenvolvimento de Sites'},
    { icon: ServiceIcon4, image: ServiceImage4, text: 'Gestão e Tratamento de Dados'},
    { icon: ServiceIcon5, image: ServiceImage5, text: 'Desenvolvimento de Dashboards'},
    { icon: ServiceIcon6, image: ServiceImage6, text: 'Automatização de Documentos'}
];

export default function Information_Service(){
    return(
        <div className={styles.serviceContainer}>
            <div className={styles.title}>
                Nossos Serviços
            </div>
            <div className={styles.blockSpace}>
                {information_services.map((service, index) => (
                    <div key={index} className={styles.blockContainer}>
                        {/* Imagem de fundo */}
                        <Image 
                            className={styles.backgroundImage}
                            src={service.image} 
                            alt={service.text} 
                            fill // Faz a imagem preencher todo o container
                        />
                         <div className={styles.overlayFilter}></div>
                        {/* Conteúdo sobreposto */}
                        <div className={styles.contentOverlay}>
                            <div className={styles.iconSpace}>
                            <Image 
                                    src={service.icon} 
                                    alt={`Ícone de ${service.text}`}
                                    width={70} 
                                    height={70} 
                                />
                            </div>
                            <div className={styles.titleService}>
                                <h1>{service.text}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};