import { OptionType } from "./constants/articleProps";

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export interface IArticleOptions {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

export interface IArticleParamsFormProps {
    setPageState: React.Dispatch<React.SetStateAction<IArticleOptions>>;
}

export interface IArticleProps {
	closeForm?: OnClick;
}

export interface ArrowButtonProps {
    toggleFormOpen?: OnClick;
    openState?: boolean;
}

export type OptionProps = {
	value: OptionType['value'];
	title: OptionType['title'];
	selected: OptionType;
	groupName: string;
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

export type RadioGroupProps = {
	name: string;
	options: OptionType[];
	selected: OptionType;
	onChange?: (value: OptionType) => void;
	title: string;
};