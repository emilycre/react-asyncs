import React from 'react';
import spinner from '../assets/spinner.jpeg';
import styles from './Loader.css';

export default function Loading() {
  return <img className={styles.Loader} src={spinner} />;
}
