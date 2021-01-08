const backgroundUrl = [
    "felipe.webp", 'annie.webp', 'evie.webp',
    'joceline.webp', 'oleksandra.webp', 'pawel.webp',
    'priscilla.webp', 'priscilla1.webp', 'priscilla2.webp',
    'priscilla3.webp', 'zoltan.webp'
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
a2a_config.onclick = 1;
a2a_config.num_services = 2;

//RANDOM BACKGROUND
document.getElementsByTagName('body')[0].style.backgroundImage = `url(/assets/background/${backgroundUrl[randomNum()]} ) `


