
import Navigation from './components/Navigation';
// import Animation from './components/Animation';
import Main from './components/Main';
import Footer from './components/Footer';

const states =  {
    'welcome': {
        'title': 'Welcome!',
        'links': [ 'Welcome','About', 'Contact', 'Portfolio' ],
    },
    'contact': {
        'title': 'Contact Me',
        'links': [ 'Welcome', 'About', 'Contact', 'Portfolio' ],
    },
    'portfolio': {
        'title': 'welcome to my portfolio',
        'links': [ 'Welcome', 'About', 'Contact', 'Portfolio' ],

    },
    'about': {
        'title': 'About me',
        'links': [ 'Welcome', 'About', 'Contact', 'Portfolio' ],


    }
};

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
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
