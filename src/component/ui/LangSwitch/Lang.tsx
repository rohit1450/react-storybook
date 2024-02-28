import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
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
        }
    };

    const OptionItem: React.FC<Option> = ({ label, value, switch: { src } }) => (
        <Menu.Item>
            {({ active }) => (
                <button
                    className={`${active ? 'bg-blue-light text-white' : ''
                        } group flex items-center w-full px-1 py-1 text-base`}
                    onClick={() => changeLanguage({ label, value, switch: { src } })}
                >
                    <img className="w-7 h-7" src={src} alt={label} />
                    <span className='mx-2'>{label}</span>
                </button>
            )}
        </Menu.Item>
    );

    return (
        <div>
            <div className='inline-block'>
                <Menu as="div" className="relative rounded-md border border-blue-light shadow-lg">
                    <Menu.Button className="inline-flex justify-start items-center w-full px-1 py-1 text-base text-blue-light font-medium">
                        {selectedLanguage &&
                            (
                                <img className="w-7 h-7 mx-2" src={selectedLanguage.switch.src} alt={selectedLanguage.label} />
                            )
                        }
                        {/* {selectedLanguage ? selectedLanguage.label : 'Select Language'} */}
                    </Menu.Button>
                    <Menu.Items>
                        {languages.map((language, index) => (
                            <OptionItem key={index} {...language} />
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
