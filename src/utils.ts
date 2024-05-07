import { useState } from 'react';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';
import { IArticleOptions } from './types';

export const useArticleForm = () => {
    const [formState, setFormState] = useState<IArticleOptions>(defaultArticleState);

    const handleChange = (key: keyof IArticleOptions, value: OptionType) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const resetStates = () => {
        setFormState(defaultArticleState);
    };

    return { formState, handleChange, resetStates };
};

export const useToggleForm = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleFormOpen = () => {
        setIsFormOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return { isFormOpen, toggleFormOpen, handleCloseForm };
};
