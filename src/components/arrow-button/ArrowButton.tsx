import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { ArrowButtonProps } from 'src/types';


export const ArrowButton = ({ toggleFormOpen, openState }: ArrowButtonProps) => {

	const containerClasses = [styles.container, openState ? styles.container_open : ''].join(' ');
    const arrowClasses = [styles.arrow, openState ? styles.arrow_open : ''].join(' ');

    return (
        <div
            role='button'
            aria-label='Открыть/Закрыть форму параметров статьи'
            tabIndex={0}
            onClick={toggleFormOpen}
            className={containerClasses}
        >
            <img src={arrow} alt='иконка стрелочки' className={arrowClasses} />
        </div>
    );
};