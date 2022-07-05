import { i18n } from "i18next";
import Header from "../../components/header/Header";

function HomeScene(props : IHomeSceneProps) {
    return (
        <Header i18n={props.i18n} />
    );
}

interface IHomeSceneProps {
    i18n: i18n
}

export default HomeScene;