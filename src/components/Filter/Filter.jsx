import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'store/contactsSlice/slice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <h3 className={styles.heading}>Find contacts by name</h3>
      <input className={styles.input} type="text" onChange={handleChange} />
    </div>
  );
};
