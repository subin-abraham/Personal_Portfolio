import styles from '../style/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.loader1}`}></div>
      <div className={`${styles.box} ${styles.loader2}`}></div>
      <div className={`${styles.box} ${styles.loader3}`}></div>
      <div className={`${styles.box} ${styles.loader4}`}></div>
      <div className={`${styles.box} ${styles.loader5}`}></div>
    </div>
  );
}
