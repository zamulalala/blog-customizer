import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useArticleForm } from 'src/utils';
import { IArticleParamsFormProps } from 'src/types';


export const ArticleParamsForm = ({
	toggleFormOpen,
	openState,
	setPageState,
}: IArticleParamsFormProps) => {

	const { formState, handleChange, resetStates } = useArticleForm();

	const handleSubmit = (evt: React.SyntheticEvent) => {
        evt.preventDefault();
        setPageState(formState);
    };

	const handleReset = () => {
        resetStates();
        setPageState(defaultArticleState);
    };

	const containerClasses = [styles.container, openState ? styles.container_open : ''].join(' ');

	return (
		<>
			<ArrowButton toggleFormOpen={toggleFormOpen} openState={openState} />
			<aside
				className={containerClasses}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
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
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
