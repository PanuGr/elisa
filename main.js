const backgroundUrl = [
    "felipepelaquim-InpSZCpwS7g-unsplash.webp", 'annie-spratt-nCn9gE5-1wU-unsplash.webp', 'evie-s-SxEhEk9O2H0-unsplash.webp',
    'joceline-m-huitzil-3bX5yrvFgKk-unsplash.webp', 'oleksandra-bardash-6rRLtMcEnzg-unsplash.webp', 'pawel-czerwinski-giIUmmihDFA-unsplash.webp',
    'priscilla-du-preez-5mgtTFa7Y3M-unsplash.webp', 'priscilla-du-preez-K1-mGLwGJJE-unsplash.webp', 'priscilla-du-preez-KeUHnTJ78fY-unsplash.webp',
    'priscilla-du-preez-yS13_sGYElg-unsplash.webp', 'zoltan-tasi-vds0LlvYe58-unsplash.webp'
];
const randomNum = () => {
    return Math.floor(Math.random() * backgroundUrl.length)
}

//HANDLEBARS
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articleID = urlParams.get('id')


const source = document.getElementById("template").innerHTML; //get the template
const templateBlog = Handlebars.compile(source);

if (document.getElementById('article-details')) {
    const compiledHtml = templateBlog(content.writings[articleID]);
    const fill = document.getElementsByTagName("main")[0];
    fill.innerHTML = compiledHtml;
} else {
    const compiledHtml = templateBlog(content); //fill the template with our info
    const fill = document.getElementsByTagName("section")[0]; // add the filled template in destination
    fill.innerHTML = compiledHtml;
}

if (document.getElementById("template2")) {
    const source2 = document.getElementById("template2").innerHTML;
    const blogList = Handlebars.compile(source2);
    document.getElementsByTagName("ul")[0].innerHTML = blogList(content)
}


//SHARE
var a2a_config = a2a_config || {};
a2a_config.locale = "fi";
a2a_config.num_services = 4;

//RANDOM BACKGROUND
document.getElementsByTagName('body')[0].style.backgroundImage = `url(/assets/background/${backgroundUrl[randomNum()]} ) `


