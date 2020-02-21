import {cats} from './catSeeder.js'

async function renderCatTemplate() {
    const template = await fetch('all-cats.hbs')
        .then(x => x.text());
    
    const templateFn = Handlebars.compile(template);
    const context = { cats };
    const render = templateFn(context);
    document.getElementById('allCats').innerHTML = render;
    Array.from(document.querySelectorAll('.showBtn')).map(x => {
        x.addEventListener('click', showStatus())
    })
}

function showStatus() {
    return function (e) {
        let div = (e.target.parentNode.children)[1];
        div.style.display = div.style.display === 'none' ? 'inline' : 'none';
    };
}

renderCatTemplate();
