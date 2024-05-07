import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { useToggleForm } from './utils';
import { IArticleOptions } from './types';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const [pageState, setPageState] = useState<IArticleOptions>(defaultArticleState);
	const { isFormOpen, toggleFormOpen, handleCloseForm } = useToggleForm();

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				toggleFormOpen={toggleFormOpen}
				openState={isFormOpen}
				setPageState={setPageState}
			/>
			<Article closeForm={handleCloseForm}/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

