
import Navigation from './components/Navigation';
import Animation from './components/Animation';
import Main from './components/Main';
import Footer from './components/Footer';

const states =  {
    'welcome': {
        'title': 'Fuck YOu!'
    },
    'contact': {
        'title': 'Contact Me'
    },
    'portfolio': {
        'title': 'welcome to my portfolio'
    },
    'about': {
        'title': 'About me'
    }
};

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
    ${Animation(state)}
    ${Footer(state)}
`;
}

render(states.welcome);
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let x = event.target.textContent.toLowerCase();

        return (`states.${x}`);
    });
});
