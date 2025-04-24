import styles from './home.module.scss';
import React from "react";
import Image from "next/image";
import MarketingButton from '@/components/marketing_button/marketing_button';
import ImageBanner from '../../public/photo-banner.svg';


export default function Home(){
    return (
        <div className={styles.homeContainer}> 
            <div className={styles.centerContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.title}>
                        Deixe a automação trabalhar para você.
                    </div>
                    <div className={styles.buttonContainer}>
                        <MarketingButton phone="5511992391941" message="Olá! Quero saber mais sobre os serviços." />
                    </div>  
                </div>
                <div className={styles.rightContainer}>
                    <div>
                        <Image src={ImageBanner} alt="Banner" className={styles.banner} />
                    </div>
                </div>
            </div>
        </div>
    )
};
