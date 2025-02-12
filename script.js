const projectScroll = document.getElementById('project-scroll');

const projectTransformer = (projects) => {
    let out = "";
    projects.forEach(project => {
        if (project === "FastAPI" || project === "React") {
            project_file = project + ".svg"
        } else {
            project_file = project + ".webp"
        }
        out += `
            <div class="stack-logo-wrapper">
                <img class="stack-logo" src="media/stack-logos/${project_file}" alt="${project} logo">
                <span class="stack-logo-name">${project}</span>
            </div>
        `;
    });
    return out;
}


fetch('src.json')
    .then(response => response.json())
    .then(data => {
        
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            
            projectDiv.innerHTML = `
                <div class="project-image">
                    <img src="media/project-pictures/${project.image}" alt="${project.title} picture">
                </div>
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-stack">Stack: 
                    <div class="stack"> 
                        ${projectTransformer(project.stack)}
                    </div>
                </div>
                <div class="project-link"><a href="${project.link}" target="_blank">${project.link_title}</a></div>
            `;
            
            projectScroll.appendChild(projectDiv);
        });
    })

const rightArrow = document.getElementById('right-arr');
const leftArrow = document.getElementById('left-arr');


leftArrow.addEventListener('click', () => {
    projectScroll.scrollBy({
        left: -520, 
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    projectScroll.scrollBy({
        left: 520, 
        behavior: 'smooth'
    });
});

projectScroll.addEventListener('scroll', () => {
    const scrollLeft = projectScroll.scrollLeft;
    const scrollWidth = projectScroll.scrollWidth;
    const clientWidth = projectScroll.clientWidth;
    
    if (scrollLeft <= 0) {
        projectScroll.classList.add('scroll-start');
        projectScroll.classList.remove('scroll-middle');
        projectScroll.classList.remove('scroll-end');
    } else if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
        projectScroll.classList.add('scroll-end');
        projectScroll.classList.remove('scroll-middle');
        projectScroll.classList.remove('scroll-start');
    }else {
        projectScroll.classList.add('scroll-middle');
        projectScroll.classList.remove('scroll-start');
        projectScroll.classList.remove('scroll-end');
    }
});