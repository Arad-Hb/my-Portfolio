import React from 'react';
import styles from './page.module.css';
import {useTranslations} from 'next-intl';
import AnimatedNav from '@/components/mainNav/AnimatedNav';
import SideBar from '@/components/sideBar/SideBar';
import Table from '@/components/descriptionBox/Table';
import RadialMenu from '@/components/radialMenu/RadialMenu';


const page = () => {
    const t = useTranslations('HomePage');
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.sideBar}`}><SideBar/></div>
        <div className={`${styles.MainContent}`}>
          <div className={`${styles.table}`}><Table/></div>
          <div className={`${styles.mainNav}`}><AnimatedNav/></div>
        </div>
      
      </div>
    );
}

export default page