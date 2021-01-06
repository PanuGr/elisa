//SHARE
var a2a_config = a2a_config || {};
a2a_config.locale = "fi";
a2a_config.num_services = 4;

//HANDLEBARS
const blogEntries = document.getElementById("").innerHTML; //get the template
const templateBlog = Handlebars.compile(blogEntries);
const content = {};
const compiledHtml = template(content); //fill the template with our info
const fill = document.getElementById(""); // add the filled template in destination
fill.innerHTML = compiledHtml;