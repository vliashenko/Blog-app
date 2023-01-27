import { FC } from 'react';
import { Triangle } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader: FC = () => {
    return (
        <div className={styles.spinner}>
            <Triangle
                height="180"
                width="180"
                color="#414141"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass="s"
                visible={true}
                />
        </div>
    );
};

export default Loader;