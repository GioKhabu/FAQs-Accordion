import React from 'react';
import styles from './App.module.css';
import { data } from '../../assets/utils';
import AccordionItem from '../AccordionItem/AccordionItem';
function App() {
  return (
    <div className={`${styles.AppWrapper}`}>
      <main className={`${styles.BodyWrapper}`} tabIndex="0">
        <div className={`${styles.HeaderWrapper}`}>
          <div className={`${styles.AccordionWrapper}`}>
            <article className={`${styles.AccordionGourp}`}>
              <header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <path
                    d="M37.5 20.5C37.504 21.0127 37.3481 21.5139 37.0541 21.934C36.7601 22.354 36.3425 22.672 35.8594 22.8438L25.9469 26.4484L22.3438 36.3594C22.1662 36.8378 21.8464 37.2505 21.4274 37.5418C21.0085 37.8332 20.5103 37.9894 20 37.9894C19.4897 37.9894 18.9915 37.8332 18.5726 37.5418C18.1536 37.2505 17.8338 36.8378 17.6563 36.3594L14.0516 26.4375L4.14063 22.8438C3.66218 22.6662 3.24955 22.3464 2.95816 21.9274C2.66677 21.5085 2.51059 21.0103 2.51059 20.5C2.51059 19.9897 2.66677 19.4915 2.95816 19.0726C3.24955 18.6536 3.66218 18.3338 4.14063 18.1563L14.0625 14.5516L17.6563 4.64063C17.8338 4.16218 18.1536 3.74955 18.5726 3.45816C18.9915 3.16677 19.4897 3.01059 20 3.01059C20.5103 3.01059 21.0085 3.16677 21.4274 3.45816C21.8464 3.74955 22.1662 4.16218 22.3438 4.64063L25.9484 14.5625L35.8594 18.1563C36.3425 18.328 36.7601 18.646 37.0541 19.066C37.3481 19.4861 37.504 19.9873 37.5 20.5Z"
                    fill="#AD28EB"
                  />
                </svg>
                <h1>FAQs</h1>
              </header>
              {data.length !== 0 &&
                data.map(({ title, description, status }, index) => {
                  return (
                    <AccordionItem
                      key={`${title}-${index}`}
                      title={title}
                      description={description}
                      status={status}
                      accData={data}
                      index={index}
                    />
                  );
                })}
            </article>
            <div className={`${styles.EmptyDiv}`}></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
