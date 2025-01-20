const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const navbarElements = document.querySelectorAll('.navbar');
navbarElements.forEach((el) => observer.observe(el));

const heroElements = document.querySelectorAll('.hero');
heroElements.forEach((el) => observer.observe(el));

const cardElements = document.querySelectorAll('.card');
cardElements.forEach((el) => observer.observe(el));

const contentElements = document.querySelectorAll('.content');
contentElements.forEach((el) => observer.observe(el));

const insightsElements = document.querySelectorAll('.insights');
insightsElements.forEach((el) => observer.observe(el));

const informationElements = document.querySelectorAll('.information');
informationElements.forEach((el) => observer.observe(el));

const otherElements = document.querySelectorAll('.other');
otherElements.forEach((el) => observer.observe(el));

const servicesElements = document.querySelectorAll('.services');
servicesElements.forEach((el) => observer.observe(el));


