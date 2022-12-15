import { Card } from './Card';
import './cardscontainer.css';
import HTMLLogo from '../../assets/techs/html-logo.png';
import CSSlogo from '../../assets/techs/css-logo.png';
import JavaScriptLogo from '../../assets/techs/js-logo.png';
import ReactLogo from '../../assets/techs/react-logo.png';
import NodejsLogo from '../../assets/techs/nodejs.png';
import CsharpLogo from '../../assets/techs/c.svg';
import JavaLogo from '../../assets/techs/Java-Logo.png';
import KotlinLogo from '../../assets/techs/kotlin-hero.svg';
import AndroidLogo from '../../assets/techs/Android.png';

export function CardsContainer(){
    return(
        <div className="techs">
            <h2>🧑🏾‍💻 Tecnologias</h2>
            <main className="cards-container">
                <Card image={HTMLLogo} alt="Logo do HTML" />
                <Card image={CSSlogo} alt="Logo do CSS" />
                <Card image={JavaScriptLogo} alt="Logo do JavaScript" /> 
                <Card image={ReactLogo} alt="Logo do React.js"/>
                <Card image={NodejsLogo} alt="Logo do NOde.js"/>
                <Card image={CsharpLogo} alt="Logo do Csharp" />
                <Card image={JavaLogo} alt="Logo do Java"/>
                <Card image={KotlinLogo} alt="Logo do Kotlin"/>
                <Card image={AndroidLogo} alt="Logo do Android"/>
            </main>
        
        </div>
    )
}
