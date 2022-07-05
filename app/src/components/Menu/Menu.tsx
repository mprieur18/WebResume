import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseIcon, CheckIcon, HomeIcon, IdentificationIcon, LightningBoltIcon, MenuIcon, TranslateIcon, UserCircleIcon } from '@heroicons/react/outline';


import './style.css';

const Menu = () => {
    const { t, i18n } = useTranslation();

    const [languageState, setLanguageState] = useState(i18n.language);
    const [mobileMenuDisplayed, setMobileMenuDisplayed] = useState(false);

    useEffect(() => {
        setLanguageState(i18n.language);
        console.log('Language has been updated to ' + i18n.language);
    }, [i18n, i18n.language]);

    const changeLanguage = (languageCode: string, fromMobileMenu: boolean) => {
        i18n.changeLanguage(languageCode);
        if(!fromMobileMenu)
            return;
        
        closeMobileMenu();
    };

    const displayMobileMenu = () => {
        setMobileMenuDisplayed(!mobileMenuDisplayed);
    };

    const closeMobileMenu = () => {
        setMobileMenuDisplayed(false);
    };

    const menuLinks : Array<MenuElement> = [
        { 
            translationKey: 'home',
            icon: <HomeIcon className="h-5 mr-2" />
        },
        {
            translationKey: 'about',
            icon: <IdentificationIcon className="h-5 mr-2" />
        },
        {
            translationKey: 'experiences',
            icon:<BriefcaseIcon className="h-5 mr-2" />
        },
        {
            translationKey: 'skills',
            icon:<LightningBoltIcon className="h-5 mr-2" />
        }
    ];

    return (
        <>
            {/* -- Menu mobile -- */}
            <div className="lg:hidden fixed right-0 bottom-0 z-20">
                <button className="btn btn-circle m-5 bg-blue-600 border-0 shadow-md" onClick={displayMobileMenu}>
                    <MenuIcon className="h-8 w-8" />
                </button>
            </div>

            <ul className={"menu py-3 shadow-lg bg-base-100 rounded-box mr-10 z-50 right-0 bottom-20 " + (mobileMenuDisplayed ? 'fixed' : 'hidden')}>
                {menuLinks.map(item => {
                    <li>
                        {item.icon}<a href={item.anchor || '#' + item.translationKey} onClick={closeMobileMenu}>{t(item.translationKey)}</a>
                    </li>
                })}
                <li className="menu-title">
                    <span className="divider">
                        <TranslateIcon className="h-4 w-4 text-gray-400" />
                    </span>
                </li>
                {
                    [{ name: 'English', code: 'en' }, { name: 'Français', code: 'fr' }].map(
                        (lng, idx) =>
                            <li>
                                <a href="javascript:void(0)" onClick={() => changeLanguage(lng.code, true)} className={lng.code === languageState ? 'alert alert-success rounded-none' : ''}>
                                    {lng.name}
                                    {lng.code === languageState && <CheckIcon className="h-5 ml-2" /> }
                                </a>
                            </li>
                    )
                }
            </ul>

            {/* -- Desktop menu -- */}
            <header className="fixed  w-full top-0 z-10 text-white lg:px-16">
                <div className="flex-none max-w-10xl mx-auto hidden lg:block ">
                    <div className="py-4 flex items-center align-middle justify-center text-sm leading-5">
                        <h1 className="text-2xl font-bold hidden">Matthieu PRIEUR</h1>

                        <div className="flex space-x-10 ml-auto">
                            <ul className="menu-header hidden lg:flex flex-row justify-center gap-x-2 list-none">
                                {menuLinks.map(item => {
                                    <li><a href={item.anchor}>{t(item.translationKey)}</a></li>
                                })}
                            </ul>

                            <div className="hidden lg:flex gap-x-2 items-center bg-white rounded-full p-2 text-black">
                                <TranslateIcon className="h-5 w-5 text-gray-400" />
                                <ul className="flex gap-x-1.5 items-center">
                                    {
                                        [{ name: 'English', code: 'en' }, { name: 'Français', code: 'fr' }].map(
                                            (lng, idx) => {
                                                return <>
                                                    {idx > 0 ? <li className="text-gray-200">/</li> : ''}
                                                    <li className={'rounded-lg ' + (languageState === lng.code ? 'bg-gray-500 text-gray-100 shadow-md ' : '') + 'px-2'}>
                                                        <a href="javascript:void(0)" onClick={() => changeLanguage(lng.code, false)}>{lng.name}</a>
                                                    </li>
                                                </>
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

interface MenuElement {
    readonly translationKey: string;
    readonly anchor?: string;
    readonly icon?: JSX.Element
}

export default Menu;