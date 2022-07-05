import { Component, Fragment } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { CloudDownloadIcon, MailIcon } from '@heroicons/react/outline';

import './style.css';

class Header extends Component<IProps, IState> {

    render() {
        return (
            <Fragment>
                <section id="home" className="section-home h-screen bg-gray-400 bg-cover bg-center py-14 clip-section bg-no-repeat">

                    <div className="hero min-h-screen">
                        <div className="text-center hero-content text-white">
                            <div className="max-w-md">
                                <div>
                                    <h2 className="mb-2 text-5xl font-bold">Matthieu PRIEUR</h2>
                                    <h3 className="mb-3 text-3xl font-semibold">Software Craftman</h3>
                                </div>
                                <div className="mx-auto flex flex-row gap-3 justify-center mb-5">
                                    <button className="btn btn-circle btn-outline border-white text-white focus:bg-white hover:bg-white focus:text-black hover:text-black">
                                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                    </button>
                                    <button className="btn btn-circle btn-outline border-white text-white focus:bg-white hover:bg-white focus:text-black hover:text-black">
                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                    </button>
                                    <button className="btn btn-circle btn-outline border-white text-white focus:bg-white hover:bg-white focus:text-black hover:text-black">
                                        <FontAwesomeIcon icon={faGithub} size="lg" />
                                    </button>
                                    <button className="btn btn-circle btn-outline border-white text-white focus:bg-white hover:bg-white focus:text-black hover:text-black">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                    </button>
                                </div>
                                <div className="flex md:flex-row sm:flex-col gap-3 w-full justify-center">
                                    <button className="bordered px-5 py-3 rounded-full bg-white text-black flex flex-row align-middle justify-center">
                                        <MailIcon className="h-5 w-5 mr-2 self-center" />{this.props.t('contactMe')}
                                    </button>
                                    <button className="bordered px-5 py-3 rounded-full bg-white text-black flex flex-row align-middle justify-center">
                                        <CloudDownloadIcon className="h-5 w-5 mr-2 self-center" />{this.props.t('downloadCV')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 z-10 w-screen py-4">
                            <svg className="animate-bounce" height="60px" width="60px" fill="#ffffff" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><path d="M56.6,79.6L50,86.2l-6.6-6.6c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8l8,8C49,90.8,49.5,91,50,91s1-0.2,1.4-0.6l8-8  c0.8-0.8,0.8-2,0-2.8S57.4,78.8,56.6,79.6z"></path><path d="M59.4,68.6c-0.8-0.8-2-0.8-2.8,0L50,75.2l-6.6-6.6c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8l8,8C49,79.8,49.5,80,50,80  s1-0.2,1.4-0.6l8-8C60.2,70.6,60.2,69.4,59.4,68.6z"></path><path d="M68,45V27c0-9.9-8.1-18-18-18s-18,8.1-18,18v18c0,9.9,8.1,18,18,18S68,54.9,68,45z M50,59c-7.7,0-14-6.3-14-14V27  c0-7.7,6.3-14,14-14s14,6.3,14,14v18C64,52.7,57.7,59,50,59z"></path><path d="M50,20c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-6C52,20.9,51.1,20,50,20z"></path></svg>
                        </div>
                    </div>

                </section>
            </Fragment>
        );
    }

}

interface IProps extends WithTranslation {
}

interface IState {
    state: any;
}

export default withTranslation('header')(Header);