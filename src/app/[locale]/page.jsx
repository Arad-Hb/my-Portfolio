import React from 'react';
import styles from './page.module.css';
import {useTranslations} from 'next-intl';
import AnimatedNav from '@/components/mainNav/AnimatedNav';

const page = () => {
    const t = useTranslations('HomePage');
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.mainNav}`}><AnimatedNav/></div>
        <div className={`${styles.sideBar}`}></div>
      </div>
    );
}

export default page