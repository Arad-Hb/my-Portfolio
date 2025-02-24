
import React from 'react';  
import styles from './Table.module.css'; 

const Table = () => {  
  return (  
    <div className={`${styles.tableContainer}`}>  
      <div className={`${styles.tableHeader}`}>  
        <h2>Hi Everyone...</h2>  
      </div>  
      <ul className={`${styles.tableBody}`}>  
        <li>It's Arad Habashi Website</li>  
        <li>I'm A Creative Web Developper</li>  
      </ul>  
    </div>  
  );  
};  

export default Table;