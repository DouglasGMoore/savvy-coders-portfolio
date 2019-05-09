/* eslint-disable no-loop-func */
import Navigation from './components/Navigation';
import Animation from './components/Animation';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {

        'title': 'Welcome!'
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

// function render(state){

// state.welcome = 'Welcome';
// state.title = 'My Portfolio';
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
    ${Animation(state)}
    ${Footer(state)}
`;
}

render(states.home);
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.textContent);
        render(states, event.target.textContent);
    });
});
