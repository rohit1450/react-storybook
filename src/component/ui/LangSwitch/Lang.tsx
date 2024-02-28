import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { Menu } from '@headlessui/react';
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
    locale: string;
}

export interface LangProps {
    solutions: Solution[];
}

const Lang: React.FC<LangProps> = ({ solutions }) => {
    const { t } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = React.useState<Option | null>(null);
    const [open, setOpen] = React.useState(false);

    const languages: Option[] = [
        { label: 'En', value: 'en', switch: { src: english }, locale: 'en-US' },
        { label: 'Ar', value: 'ar', switch: { src: arabic }, locale: 'ar-SA' },
    ];

    React.useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        const defaultLanguage = languages.find(lang => lang.value === savedLanguage) || languages[0];
        setSelectedLanguage(defaultLanguage);
        i18n.changeLanguage(defaultLanguage.value);
    }, []);

    const changeLanguage = (selectedOption: Option | null) => {
        setSelectedLanguage(selectedOption);
        if (selectedOption) {
            localStorage.setItem('language', selectedOption.value);
            i18n.changeLanguage(selectedOption.value);
            setOpen(false);
        }
    };

    return (
        <div>
            <div className='inline-block'>
                <Menu as="div" className="relative rounded-md border border-blue-light shadow-lg">
                    <Menu.Button className="inline-flex justify-start items-center w-full py-1 text-base text-blue-light font-medium" onClick={() => setOpen(!open)}>
                        {selectedLanguage &&
                            (
                                <img className="w-7 h-7 mx-1" src={selectedLanguage.switch.src} alt={selectedLanguage.label} />
                            )
                        }
                        {open ? (
                            <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                    </Menu.Button>
                    <Menu.Items>
                        {languages.map((language, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        className={`${active ? 'bg-blue-light text-white' : ''} group flex items-center w-full px-1 py-1 text-base`}
                                        onClick={() => changeLanguage(language)}
                                    >
                                        <img className="w-7 h-7" src={language.switch.src} alt={language.label} />
                                        <span className='mx-2'>{language.label}</span>
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Menu>
            </div>

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
