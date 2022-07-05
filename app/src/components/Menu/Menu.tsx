import React, { Fragment } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { BriefcaseIcon, CheckIcon, HomeIcon, IdentificationIcon, LightningBoltIcon, MenuIcon, TranslateIcon, UserCircleIcon } from '@heroicons/react/outline';

import './style.css';

class Menu extends React.Component<IProps, IState> {

    readonly state: IState = {
        currentLanguage: '',
        mobileMenuDisplayed : false
    };

    componentDidMount() {
        this.setState(
            (_state, props) => ({ currentLanguage: props.i18n.language, mobileMenuDisplayed: false })
        );
    }

    componentDidUpdate(prevProps: IProps, _prevState: IState) {

        // if translation change
        if (this.props.t !== prevProps.t) {
            this.setState(
                (_state, props) => ({ currentLanguage: props.i18n.language })
            );
        }
    };

    changeLanguage = (languageCode: string, fromMobileMenu: boolean) => {
        this.props.i18n.changeLanguage(languageCode);
        if(!fromMobileMenu)
            return;
        
        this.closeMobileMenu();
    };

    displayMobileMenu = () => {
        this.setState(
            (state, _props) => ({ mobileMenuDisplayed: !state.mobileMenuDisplayed })
        );
    };

    closeMobileMenu = () => {
        this.setState({ mobileMenuDisplayed: false });
    };

    render() {

        return (
            <Fragment>
                {/* -- Menu mobile -- */}
                <div className="lg:hidden fixed right-0 bottom-0 z-20">
                    <button className="btn btn-circle m-5 bg-blue-600 border-0 shadow-md" onClick={() => this.displayMobileMenu()}>
                        <MenuIcon className="h-8 w-8" />
                    </button>
                </div>

                <ul className={"menu py-3 shadow-lg bg-base-100 rounded-box mr-10 z-50 right-0 bottom-20 " + (this.state.mobileMenuDisplayed ? 'fixed' : 'hidden')}>
                    <li>
                        <a href="#home" onClick={() => this.closeMobileMenu()}>
                            <HomeIcon className="h-5 mr-2" />{this.props.t('home')}
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => this.closeMobileMenu()}>
                            <IdentificationIcon className="h-5 mr-2" />{this.props.t('aboutMe')}
                        </a>
                    </li>
                    <li>
                        <a href="#experiences" onClick={() => this.closeMobileMenu()}>
                            <BriefcaseIcon className="h-5 mr-2" />{this.props.t('experiences')}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={() => this.closeMobileMenu()}>
                            <LightningBoltIcon className="h-5 mr-2" />{this.props.t('skills')}
                        </a>
                    </li>
                    <li className="menu-title">
                        <span className="divider">
                            <TranslateIcon className="h-4 w-4 text-gray-400" />
                        </span>
                    </li>
                    {
                        [{ name: 'English', code: 'en' }, { name: 'Français', code: 'fr' }].map(
                            (lng, idx) =>
                                <li>
                                    <a href="javascript:void(0)" onClick={() => this.changeLanguage(lng.code, true)} className={lng.code === this.state.currentLanguage ? 'alert alert-success rounded-none' : ''}>
                                        {lng.name}
                                        {lng.code === this.state.currentLanguage && <CheckIcon className="h-5 ml-2" /> }
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
                                    <li className="active"><a href="#home">{this.props.t('home')}</a></li>
                                    <li><a href="#about">{this.props.t('aboutMe')}</a></li>
                                    <li><a href="#skills">{this.props.t('skills')}</a></li>
                                    <li><a href="#experiences">{this.props.t('experiences')}</a></li>
                                </ul>

                                <div className="hidden lg:flex gap-x-2 items-center bg-white rounded-full p-2 text-black">
                                    <TranslateIcon className="h-5 w-5 text-gray-400" />
                                    <ul className="flex gap-x-1.5 items-center">
                                        {
                                            [{ name: 'English', code: 'en' }, { name: 'Français', code: 'fr' }].map(
                                                (lng, idx) => {
                                                    return <Fragment>
                                                        {idx > 0 ? <li className="text-gray-200">/</li> : ''}
                                                        <li className={'rounded-lg ' + (this.state.currentLanguage === lng.code ? 'bg-gray-500 text-gray-100 shadow-md ' : '') + 'px-2'}>
                                                            <a href="javascript:void(0)" onClick={() => this.changeLanguage(lng.code, false)}>{lng.name}</a>
                                                        </li>
                                                    </Fragment>
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    };

}

interface IProps extends WithTranslation {
}

interface IState {
    currentLanguage: string;
    mobileMenuDisplayed: boolean;
}

export default withTranslation('menu')(Menu);