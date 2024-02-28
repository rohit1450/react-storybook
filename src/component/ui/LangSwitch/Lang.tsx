import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Select, { StylesConfig, defaultTheme } from 'react-select';
import english from '../../../assets/english.png';
import arabic from '../../../assets/arabic.png';

interface Solution {
    name: string;
    description: string;
}

interface Option {
    label: string;
    value: string;
    switch: { src: string };
}

export interface LangProps {
    solutions: Solution[];
}

const Lang: React.FC<LangProps> = ({ solutions }) => {
    const { t } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = React.useState<Option | null>(null);
    
    const languages: Option[] = [
        { label: 'English', value: 'en', switch: { src: english } },
        { label: 'Arabic', value: 'ar', switch: { src: arabic } },
    ];

    React.useEffect(() => {
        const defaultLanguage = languages.find(lang => lang.value === i18n.language);
        setSelectedLanguage(defaultLanguage || null);
    }, []);

    const changeLanguage = (selectedOption: Option | null) => {
        setSelectedLanguage(selectedOption);
        if (selectedOption) {
            i18n.changeLanguage(selectedOption.value);
        }
    };

    const customStyles: StylesConfig<Option, false> = {
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: 'transparent',
            color: '#4299e1',
            border: '1px solid #4299e1'
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            border: `1px solid #4299e1`,
            zIndex: 10,
            margin: '0px',
            padding: '0px'
        }),
        option: (base) => ({
            ...base,
            height: '100%',
        }),
    };

    const customTheme = (theme: any) => ({
        ...theme,
        margin: '0px',
        padding: '0px',
        border: '0px 0px 1px 0px solid #d8ae76 ',
        colors: {
            ...defaultTheme.colors,
            primary25: 'transparent',
            primary: '#4299e1',
        },
    });

    const getOptionLabel = (option: Option) => (
        <div className='flex items-center'>
            <img className='w-7 h-7 mr-2' src={option.switch.src} alt={option.label} />
            {/* <span>{option.label}</span> */}
        </div>
    );

    return (
        <div>
            <Select
                value={selectedLanguage}
                onChange={changeLanguage}
                options={languages}
                styles={customStyles}
                theme={customTheme}
                getOptionLabel={getOptionLabel}
            />
            <h1 className='text-2xl py-3 font-semibold text-blue-light underline'>{t('Language Changer')}</h1>
            {solutions.map((solution, index) => (
                <div key={index} className='my-5 flex justify-start items-center gap-5'>
                    <div className='text-4xl font-semibold'>{index + 1}.</div>
                    <div>
                        <h3>{t(solution.name)}</h3>
                        <p>{t(solution.description)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Lang;
