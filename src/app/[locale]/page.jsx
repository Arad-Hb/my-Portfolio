import React from 'react';
import styles from './page.module.css';
import {useTranslations} from 'next-intl';
import AnimatedNav from '@/components/mainNav/AnimatedNav';
import SideBar from '@/components/sideBar/SideBar';


const page = () => {
    const t = useTranslations('HomePage');
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.sideBar}`}><SideBar/></div>
        <div className={`${styles.mainNav}`}><AnimatedNav/></div>
      </div>
    );
}

export default page