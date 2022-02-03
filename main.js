const getPhoto = async () => {
    try {
        const response = await fetch('https://source.unsplash.com/random/1920x1080?flowers');
        const photo = await response.url;
        return photo;
    } catch (error) {
        console.error(error);
    }
};
//RANDOM BACKGROUND
if (screen.width > 500) {
    getPhoto().then(photo => {
        ;
        document.body.style.background = `url( ${photo}) no-repeat center fixed`;
    });
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
var a2a_config = {
    locale: 'fi',
    onclick: 1,
    num_services: 2,
};
if (document.getElementById('article-details')) {
    a2a_config.linkurl = location.href
    document.querySelector('meta[name="description"]').setAttribute("content", `Täältä voit lukea kirjoitukseni nimeltään: ${content.writings[articleID].title}`);
    document.querySelector('meta[name="image"]').setAttribute("content", `assets/${content.writings[articleID].imgSrc}`);
}
