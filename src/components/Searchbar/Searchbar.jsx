import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Seachbar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        event.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={styles.searchbar}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <button type="submit" className={styles.button}>
                    <span className={styles.buttonLabel}>Search</span>
                </button>
                <input
                    className={styles.input} 
                    type="text" 
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;