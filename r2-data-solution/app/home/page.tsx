import styles from './home.module.scss';
import React from "react";
import Image from "next/image";
import Logo from '../../public/logo-r2.svg';
import MarketingButton from '@/components/marketing_button';
import ImageBanner from '../../public/photo-banner.svg';


export default function Home(){
    return (
        <div className={styles.homeContainer}>
            <div className={styles.topContainer}>
                <div className={styles.logoContainer}>
                    <div>
                        <Image src={Logo} alt="Logo" fill className={styles.logo} />
                    </div>
                </div>
            </div>    
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
