import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "JavaScript Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // // {
    // //     name: "docker",
    // //     icon: docker,
    // // },
];

const experiences = [
    {
        title: "Projet Booki",
        company_name: "OpenClassrooms",
        icon: tesla,
        iconBg: "#383E56",
        date: "Juin 2022 - Juil 2022",
        points: [
            "Site web vitrine développé à partir d'une maquette en partant de zéro, utilisation de HTML et CSS.",
            "Premier projet réaliser avec openclassrroms qui m'a permis d'apprendre les bases du développement.",
            "Egalement confronté aux premiers problèmes que j'ai du résoudre bien accompagné par mon mentor.",
            "Utilisation des outils de versionning git, et github.",
            "Site web responsive avec les médias queries développé en desktop first avec une version tablette et mobile.",
        ],
    },
    {
        title: "Projet Oh My Food!",
        company_name: "OpenClassrooms",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Juil 2022 - Sept 2022",
        points: [
            "Site web vitrine développé avec HTML et CSS, et ajout des animations avec les key-frames.",
            "Site web responsive, mobile first, tablette et desktop.",
            "L'utilisation des animations améliore l'intéractions avec l'utilisateur.",
            "Utilisation des outils de versionning git, et github.",
        ],
    },
    {
        title: "Projet Kanap",
        company_name: "OpenClassrooms",
        icon: tesla,
        iconBg: "#383E56",
        date: "Sept 2022 - Oct 2022",
        points: [
            "Premier site web développé en JavaScript (pur) coté Front-End.",
            "Le défi pour ce site était d'apprendre un premier language de programmation et de comprendre et mettre en pratique les concepts.",
            "Beaucoup de fonctionnalité mise en place notament sur la sécurité et la fiabilité des données.",
            "Site permettant de récupérer les informations sur l'utilasteur grâce à un formulaire.",
            "Utililsation des Regex pour le formulaire de saisi pour mieux encadrer les informations.",
            "Utilisation d'une API, mise en place de test unitaires pour éviter les erreurs de production.",
        ],
    },
    {
        title: "Projet Hot Takes",
        company_name: "OpenClassrooms",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Oct 2022",
        points: [
            "Création d'une API-Rest côté Back, utilisation de Mongo DB pour la base de données.",
            "Sécurisation des informations utilisateur avec JavaScrript et ses dépences.",
            "Utilisation de Postman-Express, Helmet, ... pour la sécurité.",
            "Possibilité d'enregister plusieurs comptes utilisateurs, pour les admins possibilités de modifications avancées, pour visiteurs possibilités de likes uniquement.",
            "Pour les admins fonctionnalités de : création de sauce, description, choix de photos, degré de piquant de la sauce,...",
        ],
    },
    {
        title: "Projet Kasa",
        company_name: "OpenClassrooms",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Projet FullStack en React/JavaScript, pour une application de location de logement.",
            "Nombreuses fonctionnalités développé: carrousel d'images, menu déroulant, composant réutilsable grâce à Reaact,...",
        ],
    },
    {
        title: "Projet La Panthere",
        company_name: "OpenClassrooms",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Janv 2023",
        points: [
            "Optimisations d'un site web existant, réorganisation du site pour améliorer sa visibilité.",
            "Stratégie SEO mise en place pour améliorer le référencement dans les pages recherche, meilleur pertinence du site donc de sa visilbilité.",
            "Amélioration de l'accessibilité pour permettre une meilleure visibilité de tous, cela participe également à améliorer efficience du site.",
            "Utilisation d'outils de mesures comme google analytics, Lighthouse pour l'accessibilité et la performance du site, règles WCAG 2.1 pour accessibilté,...",
            "Site sans errreurs aux W3.org validator.",
        ],
    },
];

// const testimonials = [
//     {
//         testimonial:
//             "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//         name: "Sara Lee",
//         designation: "CFO",
//         company: "Acme Co",
//         image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//         testimonial:
//             "I've never met a web developer who truly cares about their clients' success like Rick does.",
//         name: "Chris Brown",
//         designation: "COO",
//         company: "DEF Corp",
//         image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//         testimonial:
//             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//         name: "Lisa Wang",
//         designation: "CTO",
//         company: "456 Enterprises",
//         image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
// ];

const projects = [
    {
        name: "Booki",
        description:
            "Site web qui permet aux usagers de trouver des hébergements et des activitées dans la ville de leur choix, site responsive, desktop First.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Git, Github",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/7CedDev/BookiProject2OC",
    },
    {
        name: "Oh My Food!",
        description:
            "Site 100% mobile qui répertorie les menus de restaurants gastronomiques, gestions des animations en CSS.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS, keyframes",
                color: "green-text-gradient",
            },
            {
                name: "Git,Github",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/7CedDev/OhmyfoodProject3OC",
    },
    {
        name: "Agence La Panthère",
        description:
            "Améliorer la visibilité d'un site web existant, en travaillant sur le référencement 'SEO' et améliorer l'accessibililté pour les personnes atteintes d'un handicap.",
        tags: [
            {
                name: "SEO",
                color: "blue-text-gradient",
            },
            {
                name: "Accessibilité",
                color: "green-text-gradient",
            },
            {
                name: " JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/7CedDev/OCProject4AgenceLaPanthere",
    },
    {
        name: "Kanap",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: shopify,
        source_code_link: "https://github.com/7CedDev/",
    },
    {
        name: "Hot Takes",
        description:
            "Construction d'une API sécurisée pour un site de critiques de sauces piiquantes. Coté Back-end gestion de l'authentification et sécurité des données clients.",
        tags: [
            {
                name: "Nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB, Mongoose",
                color: "green-text-gradient",
            },
            {
                name: "Backend",
                color: "pink-text-gradient",
            },
        ],
        image: starbucks,
        source_code_link: "https://github.com/7CedDev/",
    },
    {
        name: "Kasa",
        description:
            "Création d'une application web front et back end de location immobilière avec React.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJs, Figma",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: meta,
        source_code_link: "https://github.com/7CedDev/Projet7Kasa",
    },
];

export { services, technologies, experiences, /*testimonials,*/ projects };