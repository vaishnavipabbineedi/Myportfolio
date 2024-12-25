let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['FullStack Developer', 'Python Developer', 'Java Developer', 'PowerBI'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

 // Email Redirect Function
function redirectToGmail() {
    const mailtoLink = "mailto:narasimha.b74@gmail.com";
    window.location.href = mailtoLink;
}

















// Snowflake Animation Code
function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2 and 5 seconds
        snowflake.style.opacity = Math.random();
        snowflakeContainer.appendChild(snowflake);

        // Remove snowflakes after animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }, 200); // Create a snowflake every 200ms
}

createSnowflakes();
