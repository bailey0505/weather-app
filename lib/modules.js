var skills = [
    "HTML, CSS, and JAVASCRIPT",
    "BOOTSTRAP",
    "WORDPRESS",
    "NODE.JS and EXPRESS", 
    "TWIG", 
    "DJANGO WEB FRAMEWORK(Python)",
]

var aboutme = "My name is Bailey Rotellini and I am currently a junior at Point Park going for my bachelors in Information technology. I also work at O2dca as a website and app developer as well as the Brew Thru as a manager on the weekends. i enjoy programming and have been since 6th grade. I have seen technology grow through this time and have learned how to harness the tools at my disposal to create apps, websites and solutions to my everyday problems. "

exports.getskills = function(){
    return skills;
}
exports.getabout = function() {
    return aboutme;
}

