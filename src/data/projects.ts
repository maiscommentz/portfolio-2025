export interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    id: string;
    image?: string;
    image_url?: string;
    color?: string;
    image_scale?: string;
    image_offset_y?: string;
    title: string;
    date: string;
    source: boolean;
    source_link: string;
    demo: boolean;
    demo_link: string;
    description: string;
    stack: string;
    myrole: string;
    gallery_layout?: string;
    gallery?: ProjectImage[];
}

export const projects: Project[] = [
    {
        id: "montedabalaia",
        image: "montedabalaia-logo.webp",
        color: "#006971",
        title: "<b>Monte da Balaia</b> Site vitrine et réservation d'un appartement de vacances en Algarve",
        date: "septembre 2026",
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://monte-da-balaia.com",
        description: "Monte da Balaia est le site vitrine d'un appartement de vacances de 90m² situé à Olhos de Água, en Algarve. Le site met en avant le logement, son balcon de 25m², les piscines et le court de tennis de la résidence, ainsi que le quartier et ses plages, avec pour objectif d'amener les voyageurs à réserver en direct plutôt que par une plateforme.<br><br>Il s'articule autour de pages dédiées à la galerie photo, aux équipements, à l'emplacement et aux avis des voyageurs, complétées par une présentation de l'hôtesse et un formulaire de contact. L'ensemble est traduit en quatre langues (français, anglais, portugais et espagnol) pour toucher aussi bien la clientèle suisse que portugaise et internationale.",
        stack: "Vue.js, Vite, Tailwind CSS, vue-i18n, Umami",
        myrole: "- Conception des maquettes et de la direction artistique du site<br>- Développement complet du frontend avec Vue.js et Tailwind CSS<br>- Mise en place du routage et des pages galerie, équipements, emplacement et avis<br>- Internationalisation du site en quatre langues avec vue-i18n<br>- Intégration du formulaire de contact et du suivi d'audience avec Umami<br>- Optimisation des images et du référencement naturel"
    },
    {
        id: "levelupconcept",
        image: "levelupconcept-logo.webp",
        color: "#0F0F0F",
        title: "<b>Level Up Concept</b> Plateforme de réservation pour un studio de coaching sportif",
        date: "août 2026",
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://levelupconcept.ch",
        description: "Level Up Concept est un studio de coaching sportif et de bien-être situé à Marly, qui réunit deux espaces distincts: un studio mixte et le Studio Woman, exclusivement dédié aux femmes. Le site présente les cours collectifs, le coaching privé et la location des studios, et sert surtout de plateforme de réservation en ligne.<br><br>Au-delà de la vitrine, le projet repose sur une véritable application: un planning alimenté depuis le backend, un tunnel de réservation de cours et de séances, la vente de forfaits payés en ligne via Stripe, le suivi des forfaits achetés par chaque client, et une interface d'administration permettant aux coachs de gérer eux-mêmes leurs cours, leurs sessions et leurs tarifs sur les deux sites.",
        stack: "Vue.js, Vite, Tailwind CSS, Pinia, Axios, Laravel, Stripe",
        myrole: "- Conception des maquettes et de la direction artistique premium du site<br>- Développement du frontend avec Vue.js, Pinia et Tailwind CSS<br>- Conception et développement de l'API REST avec Laravel<br>- Développement du moteur de réservation: planning, sessions de cours et gestion des places<br>- Intégration des paiements en ligne et des forfaits avec Stripe<br>- Développement de l'interface d'administration pour la gestion autonome des cours et des tarifs<br>- Gestion du multi-site pour le studio mixte et le Studio Woman"
    },
    {
        id: "thecinemabill",
        image: "thecinemabill.png",
        title: "<b>The Cinema Bill</b> Convertis ton activité Letterboxd en ticket de caisse stylisé",
        date: "avril 2026",
        source: true,
        source_link: "https://github.com/maiscommentz/thecinemabill",
        demo: true,
        demo_link: "https://thecinemabill.maiscommentz.ch",
        description: "The Cinema Bill est une application web qui convertit l'activité récente d'un profil Letterboxd en un ticket de caisse virtuel et personnalisable. Chaque film devient une ligne du ticket, avec son année, son réalisateur, ses genres et sa durée exacte.<br><br>Les données sont récupérées via le flux RSS de Letterboxd, puis enrichies en parallèle avec l'API TMDB. Le ticket se personnalise entièrement depuis une barre latérale: nombre de films, affichage des notes, sous-titre des lignes, code-barres ou QR code, et quatre thèmes visuels au choix (Classic Thermal, Midnight OLED, Eco-Kraft et Premiere VIP). Le résultat s'exporte en image au format story, prêt à être partagé sur les réseaux sociaux.",
        stack: "Next.js, TypeScript, Tailwind CSS, Framer Motion, API TMDB, RSS Letterboxd, Docker",
        myrole: "- Conception du concept et de la direction artistique brutaliste du ticket<br>- Développement frontend et backend avec Next.js et TypeScript<br>- Parsing du flux RSS Letterboxd et enrichissement parallèle via l'API TMDB<br>- Création des quatre thèmes de ticket et des options de personnalisation<br>- Animations et transitions fluides avec Framer Motion<br>- Génération et export de l'image partageable (code-barres, QR code, format story)<br>- Mise en place de l'intégration et du déploiement continus avec GitHub Actions, Docker et Nginx Proxy Manager",
        gallery: [
            { src: "interface.png", alt: "L'interface de The Cinema Bill, avec la barre latérale de personnalisation et le ticket en cours de génération" },
            { src: "ticket-eco-kraft.webp", alt: "Un ticket généré au thème Eco-Kraft, listant les cinq derniers films vus avec leur note, leur durée et le temps total de visionnage" }
        ]
    },
    {
        id: "pushie",
        image_url: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/icon.png",
        color: "#E0F2FE",
        title: "<b>pushie</b> Ton petit compagnon de code directement dans VS Code",
        date: "février 2026",
        source: true,
        source_link: "https://github.com/maiscommentz/pushie",
        demo: true,
        demo_link: "https://marketplace.visualstudio.com/items?itemName=maiscommentz.pushie",
        description: "pushie est une extension VS Code qui ajoute un petit compagnon virtuel en pixel art directement dans ton éditeur. Connecté à l'API GitHub, il suit tes commits de la semaine sur toutes tes branches et évolue en cinq états selon ta progression vers ton objectif hebdomadaire: Epic, Happy, Neutral, Sad et Dead Puddle. Chaque état a sa propre animation, sa palette et sa réplique.<br><br>pushie n'a pas qu'une jolie tête: sélectionne un bout de code, clique sur <i>Roast my code</i> et il l'envoie à l'IA de ton choix (OpenAI ou Groq) pour te livrer une critique aussi honnête que sarcastique. L'extension est publiée sur le Visual Studio Marketplace.",
        stack: "TypeScript, HTML5, CSS, API VS Code, API GitHub, OpenAI, Groq",
        myrole: "- Développement complet de l'extension VS Code en TypeScript<br>- Création de la webview du compagnon en HTML et CSS<br>- Connexion à l'API GitHub et calcul de l'activité hebdomadaire de commits<br>- Design des assets pixel art et des animations des cinq états<br>- Intégration des APIs d'IA (OpenAI et Groq) pour la fonctionnalité <i>Roast my code</i><br>- Publication et maintenance de l'extension sur le Visual Studio Marketplace",
        gallery_layout: "grid",
        gallery: [
            { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/dead.png", alt: "pushie à l'état Dead Puddle — aucun commit cette semaine" },
            { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/sad.png", alt: "pushie à l'état Sad — 1 à 49% de l'objectif hebdomadaire" },
            { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/neutral.png", alt: "pushie à l'état Neutral — 50 à 79% de l'objectif hebdomadaire" },
            { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/happy.png", alt: "pushie à l'état Happy — 80 à 99% de l'objectif hebdomadaire" },
            { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/epic.png", alt: "pushie à l'état Epic — objectif hebdomadaire atteint" }
        ]
    },
    {
        id: "svy",
        image: "svy-logo.webp",
        color: "#19213A",
        image_scale: "55%",
        image_offset_y: "25%",
        title: "<b>svy.arw</b> Portfolio du photographe sportif Arnaud Savoy",
        date: "février 2026",
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://svy.ch",
        description: "svy.arw est le portfolio d'Arnaud Savoy, photographe sportif suisse spécialisé dans le football et titulaire de la carte de presse AIPS. Le site adopte un design minimaliste et sombre qui laisse toute la place aux images, avec une animation d'introduction sur sa signature manuscrite.<br><br>Les reportages sont organisés en séries filtrables par catégorie (football, animalier, autres), chacune disposant de sa propre page de galerie. L'ensemble du contenu est piloté depuis un CMS headless: Arnaud publie lui-même ses nouvelles séries, ses photos et ses collaborations depuis un studio d'administration, sans avoir à repasser par nous.",
        stack: "Vue.js, Vite, Tailwind CSS, Sanity",
        myrole: "- Conception des maquettes et de la direction artistique minimaliste, avec Arnaud tout au long du projet<br>- Développement complet du frontend avec Vue.js et Tailwind CSS<br>- Création de l'animation d'introduction et des transitions entre les pages<br>- Modélisation du contenu et mise en place du CMS headless Sanity<br>- Développement des galeries filtrables par catégorie et des pages de série<br>- Optimisation du chargement des photos en WebP pour préserver la qualité d'image"
    },
    {
        id: "flashlog",
        image: "flashlog.png",
        title: "<b>Flashlog</b> App mobile pour partager ses ascensions",
        date: "janvier 2025",
        source: false,
        source_link: "",
        demo: false,
        demo_link: "",
        description: "Flashlog est une application mobile qui permet aux utilisateurs de partager leurs ascensions et de se connecter avec d'autres passionnés d'escalade. L'application offre une interface conviviale et intuitive, permettant aux utilisateurs de créer, modifier et visionner leur profil, de suivre d'autres profils et avant tout de partager les blocs qu'on a grimpé dans un des lieux d'escalade disponibles. Ajouté à cela, on retrouve un système de classement avec des points par lieu d'escalade.",
        stack: "Jetpack Compose, Kotlin, Spring Boot, MySQL, Docker",
        myrole: "- Création de maquettes et prototypes sur Figma<br>- Conception des routes de l'API Rest<br>- Conception du schéma de la base de données<br>- Développement de l'application mobile avec Jetpack Compose et Kotlin<br>- Aide au développement de l'API Rest avec Spring Boot<br>- Aide à la mise en place de la base de données avec MySQL<br>- Aide à la mise en place de l'environnement de développement avec Docker<br>- Aide à la mise en place du déploiement automatique de l'API Rest avec Docker et Gitlab CI/CD",
        gallery: [
            { src: "image1.png", alt: "Maquette de l'application mobile" },
            { src: "image3.png", alt: "Architecture du backend" },
            { src: "image2.png", alt: "Schéma de la base de données" }
        ]
    },
    {
        id: "kodee",
        image: "kodee.png",
        title: "<b>kodee</b> Contribution de loin comme de près à tous les projets réalisés",
        date: "novembre 2023 - maintenant",
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://kodee.ch",
        description: "kodee est une agence de développement web qui se concentre sur la création de solutions digitales sur mesure pour ses clients. L'agence offre une gamme complète de services, allant de la conception à la maintenance, en passant par le développement et le déploiement. Grâce à notre équipe d'étudiants en école d'ingénieur, kodee s'engage à fournir des produits de haute qualité qui répondent aux besoins spécifiques de chaque client.",
        stack: "Vue.js, Tailwind CSS, Laravel, MySQL, Docker, et bien plus...",
        myrole: "- Conception des maquettes et prototypes sur Figma<br>- Développement frontend avec Vue.js et Tailwind CSS<br>- Mise en place du déploiement automatique avec Docker et Gitlab CI/CD"
    }
];
