import { useTranslation } from "react-i18next";

const AboutScene = () => {

    const { t } = useTranslation('about');

    return (
        <>
            <section className="min-h-screen p-5 lg:py-14 lg:px-2" id="about">
                <div className="mx-auto">
                    <h2 className="mb-4 text-3xl font-bold text-left">{t('title')}</h2>
                </div>
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src={process.env.PUBLIC_URL + "/assets/imgs/me.jpeg"} alt="me" height="200" width="200" className="rounded-lg shadow-2xl" />
                    <div>
                        <h3 className="mb-5 text-4xl">{t('heading-title-greeting')} <span className="font-bold">{t('heading-title-name')}.</span></h3>
                        <span className="text-gray-400">
                        {

                            (t('jobs', { returnObjects: true }) as string[]).map(
                                (job, index) => {
                                    return <>
                                        {/* index > 0 && <FontAwesomeIcon icon={faCircle} className=" h-2 mb-1 mx-2" /> */}
                                        <span>{job}</span>
                                    </>
                                }
                            )

                        }
                        </span>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutScene;