import { SocialLink } from "./SocialLink";
import './header.css';

export function Header(){
    return(
        <header>
            <h1>DEV. Julio.C.Dias</h1>
            <nav>
                <SocialLink url="https://github.com/juliozulu2008" icon="fa-brands fa-github" />
                <SocialLink url="https://www.linkedin.com/in/j%C3%BAlio-cesar-dias-dos-santos-8470b01a3/" icon="fa-brands fa-linkedin" />
                <SocialLink url="https://www.instagram.com/julio.c.dias/" icon="fa-brands fa-instagram" />
            </nav>
        </header>
    )
}