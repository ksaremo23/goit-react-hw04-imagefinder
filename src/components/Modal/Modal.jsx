import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ image, tags, onClose }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackDropClick = e => {
        if (e.currentTarget == e.target) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleBackDropClick}>
            <div className={styles.model}>
                <img src={image} alt={tags} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default Modal;