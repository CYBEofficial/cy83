'use client';

import styles from './styles.module.css';

export default function Vrat6911() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UDB-6911</h1>
      <p className={styles.desc}>- DESC 6911Dkz FILETYPE wav LENGTH 1 m 55 s</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p>- - File: <a href="/audio/6911Dkz.wav" download className={styles.link}>6911Dkz.wav</a></p>
          <div className={styles.audioContainer}>
            <audio controls>
              <source src="/audio/6911Dkz.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </li>
      </ul>
    </div>
  );
}
