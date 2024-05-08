import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { ArrowButtonProps } from 'src/types';
import clsx from 'clsx';


export const ArrowButton = ({ toggleFormOpen, openState }: ArrowButtonProps) => {

	const containerClasses = clsx(styles.container, {
		[styles.container_open]: openState,
	});
    const arrowClasses = clsx(styles.arrow, {
		[styles.arrow_open]: openState,
	});

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