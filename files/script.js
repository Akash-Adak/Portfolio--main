
var typed = new Typed(".text", {
    strings: ["Programming" , "Java Developer"," Full Stack Developer" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
const skillBars = document.querySelectorAll('.progress-line');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target.querySelector('span');
            bar.style.width = bar.getAttribute('data-skill-level');
            observer.unobserve(entry.target);
        }
    });
});

skillBars.forEach(bar => {
    observer.observe(bar);
});


// toggle theme
// const themeToggle = document.getElementById('themeToggle');

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('light-theme');
// });



const animatedElements = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            scrollObserver.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(element => {
    scrollObserver.observe(element);
});

const tt = document.getElementById('themeToggle');
const homeImage = document.querySelector('.change');

tt.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Change image source based on theme
    if (document.body.classList.contains('light-theme')) {
        homeImage.src = './img/a12.jpeg'; // Light theme image
    } else {
        homeImage.src = './img/a22.jpeg'; // Dark theme image
    }
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


const sb = document.querySelectorAll('.progress-line');

const o = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target.querySelector('span');
            bar.style.width = bar.getAttribute('data-skill-level');
            o.unobserve(entry.target);
        }
    });
});

sb.forEach(bar => {
    o.observe(bar);
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('successMessage').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Message
    if (message === '') {
        document.getElementById('messageError').innerText = 'Message is required.';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        document.getElementById('successMessage').innerText = 'Your message has been sent successfully!';
        document.getElementById('contactForm').reset(); // Reset the form
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
