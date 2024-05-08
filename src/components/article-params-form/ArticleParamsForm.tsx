import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { OptionType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { IArticleOptions, IArticleParamsFormProps } from 'src/types';
import clsx from 'clsx';
import { useState, useRef, useEffect, FormEvent } from 'react';

export const ArticleParamsForm = ({
	setPageState,
}: IArticleParamsFormProps) => {

    const [formState, setFormState] = useState<IArticleOptions>(defaultArticleState);
	const formRef = useRef<HTMLDivElement>(null);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleFormOpen = () => {
        setIsFormOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

	const handleClickOutside = (event: MouseEvent) => {
		if (formRef.current && !formRef.current.contains(event.target as Node)) {
			handleCloseForm();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleChange = (key: keyof IArticleOptions, value: OptionType) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const resetStates = () => {
        setFormState(defaultArticleState);
        setPageState(defaultArticleState);
    };

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setPageState(formState);
    };

	const containerClasses = clsx(styles.container, {
		[styles.container_open]: isFormOpen,
	});

	return (
		<>
			<ArrowButton toggleFormOpen={toggleFormOpen} openState={isFormOpen} />
			<aside
				ref={formRef}
				className={containerClasses}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) => handleChange('fontFamilyOption', selected)}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) => handleChange('fontSizeOption', selected)}
					/>
					<Select
						title='цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selected) => handleChange('fontColor', selected)}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) => handleChange('backgroundColor', selected)}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) => handleChange('contentWidth', selected)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetStates} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};

