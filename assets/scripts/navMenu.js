document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('headBar');
    const navmenu = document.querySelector('.navMenu');
    const navCurrent = document.querySelector('.navCurrent');

    navCurrent.addEventListener('click', function() {
        navmenu.classList.toggle('active');
        window.addEventListener('resize', () => {
        navmenu.classList.remove('active');
        
    });
    });

});