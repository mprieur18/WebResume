import React, { Suspense } from 'react';

import i18n from './i18n';
import Menu from './components/Menu/Menu';
import HomeScene from './scenes/home/home';
import AboutScene from './scenes/about/about';


function App() {

    return (
        <Suspense fallback={<h1>{i18n.t('loadingSuspense')}</h1>}>
            <Menu />
            <HomeScene />
            <AboutScene />
        </Suspense>
    );
}

export default App;
