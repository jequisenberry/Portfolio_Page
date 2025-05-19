const Site_Handler = {

    Doc_Elements: {

        // Header
        Header: {
            Name                : document.getElementById('header-name'),
            Title               : document.getElementById('header-title'),
            Title_Info          : document.getElementById('header-title-info')
        },
        
        // Navigation
        Nav: {
            Nav_Project         : document.getElementById('nav-projects')
        },

        // About Me
        About_Me: {
            Content_Text        : document.getElementById('about-me-content') 
        },

        // Contact
        Contact: {
            Contact_Email       : document.getElementById('contact-email'),
            Contact_Resume      : document.getElementById('contact-resume'),
            Contact_Linked_In   : document.getElementById('contact-linked-in'),
            Contact_Github      : document.getElementById('contact-github')
        },

        // Projects
        Project: {
            Project_Contents    : document.getElementById('project-contents')
        }

    },

    Site_Data: {
        
        // Profile Data
        My_Profile: {
            Name            : "Jason Quisenbery",
            Title           : "Front-End & Email Developer",
            Title_Info      : "Creating responsive, engaging emails and front-end solutions.",
            About_Me        :
                "Detail-oriented HTML email and front-end developer dedicated to creating high-performance, visually consistent email templates and webpages that deliver seamless experiences across platforms. Proficient in HTML, CSS, and front-end JavaScript, with expertise in responsive design and development best practices. An enthusiastic learner who brings creative problem-solving and technical expertise to dynamic development teams.",
            Email_Link: "jason.quisenberry@proton.me",
            Resume_Link     : "/",
            Linked_In_Link  : "www.linkedin.com/in/jason-quisenberry",
            GitHub_Link     : "https://github.com/jequisenberry"

        },

        // Projects 
        Projects : [
            {
                id          : 1,
                title       : "Kadeda Ceramics - Invoice Template",
                nav_title   : "Kadeda Ceramics",
                active      : true,
                description : 
                    "A responsive HTML email invoice template for a mock ceramics company, optimized for consistent rendering across major email clients and devices. With a clean aesthetic and user-friendly experience, that adheres to best practices in HTML email design.",
                previewImg  : "images/kadeda-preview.png",
                pageLink    : "https://jequisenberry.github.io/Kadeda_Ceramics/",
                gitLink     : "https://github.com/jequisenberry/Kadeda_Ceramics.git"
            },
            {
                id          : 2,
                title       : "Jolt Coffee - Responsive Sales Flyer",
                nav_title   : "Jolt Coffee",
                active      : true,
                description : 
                    "A fall sale promotion email for Jolt Coffee, featuring a dynamically responsive design and a sleek, modern layout. Optimized for consistent rendering across major email clients, it includes dark mode support to align with user browser preferences, ensuring a user-friendly experience that drives customer engagement.",
                previewImg  : "images/jolt-coffee-preview.png",
                pageLink    : "https://jequisenberry.github.io/Jolt_Coffee_Promo/",
                gitLink     : "https://github.com/jequisenberry/Jolt_Coffee_Promo.git"
            },
            {
                id          : 3,
                title       : "Redwood State - Responsive Newsletter",
                nav_title   : "Redwood State",
                active      : true,
                description : 
                    "A responsive HTML email newsletter designed for the mock institution, Redwood State University. It features a long-form, responsive layout optimized for various screen sizes and devices, balancing multiple articles seamlessly and including adaptive dark mode support for enhanced readability.",
                previewImg  : "images/redwood-weekly-preview.png",
                pageLink    : "https://jequisenberry.github.io/Redwood_University_Weekly/",
                gitLink     : "https://github.com/jequisenberry/Redwood_University_Weekly.git"
            },
            {
                id          : 4,
                title       : "Polaroid -  Multimedia Promo",
                nav_title   : "Polaroid Promo",
                active      : true,
                description :
                    "A multimedia mock promotional email for the Polaroid brand, featuring dynamic elements like GIFs and videos with fallback support to ensure compatibility across email clients. The responsive design adapts seamlessly to mobile, tablet, and desktop screens, while dark mode support enhances readability and user experience.",
                previewImg  : "images/polaroid-preview.png",
                pageLink    : "https://jequisenberry.github.io/Polaroid_Promo/",
                gitLink     : "https://github.com/jequisenberry/Polaroid_Promo.git"
            }
        ]
    },

    Initializer() {
        const Element = this.Doc_Elements;
        const Profile = this.Site_Data.My_Profile;

        // Header
        Element.Header.Name.textContent             = Profile.Name;
        Element.Header.Title.textContent            = Profile.Title;
        Element.Header.Title_Info.textContent       = Profile.Title_Info

        // Nav
        this.Populate_Nav();

        // About Me
        Element.About_Me.Content_Text.textContent   = Profile.About_Me;

        // Contact
        Element.Contact.Contact_Email.textContent = Profile.Email_Link;
        Element.Contact.Contact_Email.setAttribute('href', `mailto:${Profile.Email_Link}`);
        
        Element.Contact.Contact_Resume.setAttribute('href', Profile.Resume_Link);
        Element.Contact.Contact_Resume.setAttribute('download', Profile.Resume_Link);
        
        Element.Contact.Contact_Linked_In.setAttribute('href', Profile.Linked_In_Link);
        Element.Contact.Contact_Linked_In.setAttribute('target', '_blank');
        Element.Contact.Contact_Linked_In.setAttribute('rel', 'noopener noreferrer');
        
        Element.Contact.Contact_Github.setAttribute('href', Profile.GitHub_Link);
        Element.Contact.Contact_Github.setAttribute('target', '_blank');
        Element.Contact.Contact_Github.setAttribute('rel', 'noopener noreferrer');

        // Project
        this.Populate_Project();
        
    },

    Populate_Nav() {

        const Nav_Project  = this.Doc_Elements.Nav.Nav_Project;
        const Projects  = this.Site_Data.Projects

        const projectList = document.createElement('ul');
        projectList.classList.add('sub-list');
        projectList.classList.add('hidden');
            
        // Event Listeners
        Nav_Project.addEventListener('click', () => {
            projectList.classList.toggle('hidden');
        });

        Nav_Project.addEventListener('mouseover', () => {
            if (projectList.classList.contains('hidden')) {
                projectList.classList.remove('hidden')
            }
        });

        Nav_Project.addEventListener('mouseout', () => {
            if (!projectList.classList.contains('hidden')) {
                projectList.classList.add('hidden')
            }
        });                    
        
        // Add list items
        Projects.forEach(project => {
            
            if(project.active) {

                const projectListItem = document.createElement('li');
                
                const projectAttribute = document.createElement('a');
                projectAttribute.setAttribute('href', `#project-${project.id}`);
                projectAttribute.textContent = project.nav_title;

                projectListItem.appendChild(projectAttribute);
                projectList.appendChild(projectListItem);

            }

        });
    
        Nav_Project.appendChild(projectList);

    },

    Populate_Project() {

        const Projects          = this.Site_Data.Projects;
        const Project_Element   = this.Doc_Elements.Project.Project_Contents;

        Projects.forEach((project) => {
            if (project.active) {
    
                // Create a project item in the project section
                const projectElement = document.createElement('div');
                projectElement.classList.add('project-item-container');
                projectElement.setAttribute('id', `project-${project.id}`);
                
                projectElement.innerHTML = `
                    <div class="project-item-content">
                        <img 
                            class="project-item-image"
                            src="${project.previewImg}"
                            alt="${project.title}"
                        >
                        <div class="project-item-text">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                        </div>
                    </div>
                    <div class="project-item-links">
                        <a href="${project.pageLink}">View Project</a>
                        <a href="${project.gitLink}">View GitHub</a>
                    </div>
                `;
    
                Project_Element.appendChild(projectElement);
            }
        });
        
    
    }
    
}




Site_Handler.Initializer();
