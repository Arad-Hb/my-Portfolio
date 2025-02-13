import {useLocale, useTranslations} from 'next-intl';
import styles from "./page.module.css";
import { redirect } from 'next/navigation';

export default function Home() {

  const locale = useLocale();
  const t = useTranslations('HomePage');

  return (
    <div className={styles.page}>
     {redirect(`/${locale}`)}
    </div>
  );
}
