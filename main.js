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



if (document.getElementById("template2")) {
    const source2 = document.getElementById("template2").innerHTML;
    const blogList = Handlebars.compile(source2);
    document.getElementsByTagName("ul")[0].innerHTML = blogList(content)
}

