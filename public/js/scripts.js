$(document).foundation()

if (sessionStorage.hasVisited === undefined){
    const projectCells = document.querySelectorAll('.project-cell');
    const intro = document.querySelector('.intro');
    const introString = intro.textContent.split('');

    intro.style.visibility = 'hidden';

    // Fade in intro h1 one letter at a time
    setTimeout(() => {
        intro.textContent = '';
        intro.style.visibility = '';
        for(let i = 0; i < introString.length; i++){
            (() => {
                setTimeout(() => {
                    intro.textContent += introString[i];
                }, 200 * i);
            })(i);
        }
    }, 1000);

    // Fade in each project cell one after the other
    setTimeout(() => {
        for(let i = 0; i < projectCells.length; i++){
            (() => {
                setTimeout(() => {

                    projectCells[i].style.opacity = 1;
                }, 400 * i);
            })(i);
        }

    }, 1000 + (introString.length * 200));


    setTimeout(() => { 
        setInterval(() => {
            if(intro.style.borderRight === ''){
                intro.style.borderRight = 'thick solid rgba(178, 178, 178, 1)';
            } else {
                intro.style.borderRight = '';
            }
        }, 500);
    },1000 + (introString.length * 200));
    sessionStorage.hasVisited = false;
} else {
    const projectCells = document.querySelectorAll('.project-cell');

    projectCells.forEach(project => {
        project.style.transition = 'transform 0.2s ease-in';
        project.style.opacity = 1;
    })
}


    


    
