import React from 'react';
import styles from './Accordion.module.css';
import OpenIcon from '../../assets/open_button.svg';
import CloseIcon from '../../assets/closed_button.svg';

function AccordionItem({ title, description, status, accData, index }) {
  const [currStatus, setCurStatus] = React.useState(status);
  return (
    <section className={`${styles.AccordItem}`}>
      {index + 1 !== accData.length ? (
        <div className={`${styles.AccordItemHead}`} onClick={() => setCurStatus(!currStatus)}>
          <h2>{title}</h2>
          {currStatus ? (
            <img src={OpenIcon} alt="open icon" />
          ) : (
            <img src={CloseIcon} alt="closed icon" />
          )}
        </div>
      ) : (
        <div
          className={`${styles.AccordItemHead}`}
          style={{ marginBottom: '0'}}
          onClick={() => setCurStatus(!currStatus)}
        >
          <h2>{title}</h2>
          {currStatus ? (
            <img src={OpenIcon} alt="open icon" />
          ) : (
            <img src={CloseIcon} alt="closed icon" />
          )}
        </div>
      )}

      <p
        style={
          currStatus
            ? { display: 'inline-block'}
            : { display: 'none'}
        }
      >
        {description}
      </p>

      {index + 1 !== accData.length && <hr />}
    </section>
  );
}

export default AccordionItem;
