export interface ProjectImage {
    src: string;
    alt: string;
}

export interface ProjectStat {
    value: string;
    label: string;
}

/** Paragraphes libres. Le HTML inline est autorisé (<br>, <b>, <i>, <a>...). */
export interface TextSection {
    type: "text";
    title?: string;
    content: string;
}

/** Liste à puces. Le HTML inline est autorisé dans chaque item. */
export interface ListSection {
    type: "list";
    title?: string;
    items: string[];
}

/** Technologies ou mots-clés affichés en pastilles. */
export interface TagsSection {
    type: "tags";
    title?: string;
    items: string[];
}

/** Citation mise en avant (avis client, retour d'utilisateur...). */
export interface QuoteSection {
    type: "quote";
    title?: string;
    content: string;
    author?: string;
    role?: string;
}

/** Quelques chiffres clés affichés en ligne. */
export interface StatsSection {
    type: "stats";
    title?: string;
    items: ProjectStat[];
}

/**
 * Galerie d'images. Un `src` commençant par http est utilisé tel quel,
 * sinon il est résolu dans /images/projects/<id du projet>/.
 */
export interface GallerySection {
    type: "gallery";
    title?: string;
    layout?: "grid" | "stack";
    images: ProjectImage[];
}

export type ProjectSection =
    | TextSection
    | ListSection
    | TagsSection
    | QuoteSection
    | StatsSection
    | GallerySection;

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
    /** Contenu de la page, rendu dans l'ordre déclaré ici. */
    sections: ProjectSection[];
}

export const projects: Project[] = [
    {
        id: "themilkyway",
        image: "themilkyway-logo.webp",
        color: "#080B12",
        title: "<b>The Milky Way</b> Descendre de la Galaxie jusqu'aux lunes, avec les vrais chiffres",
        date: "octobre 2026",
        source: true,
        source_link: "https://github.com/maiscommentz/the-milky-way",
        demo: true,
        demo_link: "https://themilkyway.maiscommentz.ch",
        sections: [
            {
                type: "text",
                title: "Description",
                content: "The Milky Way est un visualiseur qui fait descendre le regard niveau par niveau: on ouvre la page sur la Galaxie, le Soleil y est marqué à sa vraie place, 8,178 kpc du centre sur le bras d'Orion. On clique dessus et on tombe dans le Système solaire, où les huit planètes suivent leurs véritables orbites elliptiques, placées à partir de leurs éléments J2000. De là on continue vers les planètes, puis vers leurs lunes.<br><br>Rien sur ce chemin n'est généré ni aléatoire: ce sont les objets réels, avec leurs grandeurs mesurées. Un panneau d'inspection affiche pour chaque corps sélectionné ses caractéristiques, de la classe spectrale du Soleil à sa température et son âge."
            },
            {
                type: "gallery",
                title: "Aperçu",
                images: [
                    { src: "galaxie.webp", alt: "La vue d'ouverture: la Galaxie en nuage de points, avec le Système solaire marqué d'un cercle sur le bras d'Orion" },
                    { src: "moteur-nbody.webp", alt: "La page bac à sable du moteur N-corps, avec le choix de l'intégrateur et du solveur et la dérive d'énergie affichée en direct" }
                ]
            },
            {
                type: "text",
                title: "Le moteur en dessous",
                content: "La vue repose sur un moteur N-corps écrit de zéro avant elle, couche par couche en partant des vecteurs. Il n'est pas nécessaire pour regarder la Galaxie — rien sur le chemin principal ne résout la gravité — et il vit sur ses propres pages: comparaison d'Euler, Euler semi-implicite et Velocity Verlet sur la conservation de l'énergie, galaxie générée procéduralement à 16 000 particules sur le GPU, et mesures WebGPU.<br><br>Il en est sorti un octree Barnes-Hut aplati en tableaux typés et parcouru sans récursion, et un pipeline de calcul WebGPU écrit à la main qui affiche directement depuis son buffer, sans jamais le relire côté CPU."
            },
            {
                type: "text",
                title: "Comment il a été construit",
                content: "Une grande partie a été vibe-codée, et c'était le but. L'objectif n'a jamais été d'écrire chaque ligne à la main: il était de comprendre l'astrophysique en dessous, et de pouvoir dire d'où vient chaque nombre et ce qu'il vaut. C'est là qu'est passé l'effort."
            },
            {
                type: "text",
                title: "Le carnet de bord",
                content: "Le dossier <code>docs/</code> accompagne le code: ce qui a été mesuré, ce qui a été décidé et pourquoi, et ce qui s'est mal passé. Il garde les erreurs, y compris les mesures fausses dans le sens flatteur — comme ce benchmark qui chronométrait une allocation de 64 Mo à l'intérieur de sa propre boucle et faisait passer le GPU pour 9,8 fois plus rapide, au lieu des 6,2 réels.<br><br>Chaque relation utilisée est écrite dans <code>docs/approximations.md</code> avec ce qu'elle représente, où elle cesse d'être valable, et pourquoi elle suffit ici. C'est un visualiseur pédagogique et approximatif, pas un modèle scientifique, et il le dit."
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["TypeScript", "Vite", "Three.js", "WebGL", "WebGPU", "WGSL", "Vitest", "Docker", "nginx"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Modélisation de la Galaxie et du Système solaire à partir de données astronomiques réelles (éléments orbitaux J2000)",
                    "Développement du moteur N-corps de zéro: vecteurs, intégrateurs, octree Barnes-Hut aplati en tableaux typés",
                    "Écriture d'un pipeline de calcul WebGPU en WGSL, rendu direct depuis le buffer sans relecture CPU",
                    "Rendu Three.js du nuage de points et de la navigation hiérarchique entre les niveaux",
                    "Suite de tests avec Vitest et benchmarks de performance avec protocole de mesure documenté",
                    "Documentation de chaque approximation, de ses limites et des erreurs de mesure rencontrées",
                    "Mise en place de l'intégration et du déploiement continus avec GitHub Actions, Docker et nginx"
                ]
            }
        ]
    },
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "Monte da Balaia est le site vitrine d'un appartement de vacances de 90m² situé à Olhos de Água, en Algarve. Le site met en avant le logement, son balcon de 25m², les piscines et le court de tennis de la résidence, ainsi que le quartier et ses plages, avec pour objectif d'amener les voyageurs à réserver en direct plutôt que par une plateforme.<br><br>Il s'articule autour de pages dédiées à la galerie photo, aux équipements, à l'emplacement et aux avis des voyageurs, complétées par une présentation de l'hôtesse et un formulaire de contact. L'ensemble est traduit en quatre langues (français, anglais, portugais et espagnol) pour toucher aussi bien la clientèle suisse que portugaise et internationale."
            },
            {
                type: "gallery",
                title: "Aperçu du site",
                images: [
                    { src: "accueil.webp", alt: "La page d'accueil, avec la piscine de la résidence en pleine largeur et le sélecteur de langue dans la navigation" },
                    { src: "galerie.webp", alt: "La galerie photo, filtrable pièce par pièce: piscine, jardin, salon, cuisine, chambres et salles de bain" },
                    { src: "emplacement.webp", alt: "La page emplacement, qui situe le logement à Olhos de Água avec les distances à pied vers la plage et les commerces" }
                ]
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["Vue.js", "Vite", "Tailwind CSS", "vue-i18n", "Sanity", "Umami"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Conception des maquettes et de la direction artistique du site",
                    "Développement complet du frontend avec Vue.js et Tailwind CSS",
                    "Mise en place du routage et des pages galerie, équipements, emplacement et avis",
                    "Internationalisation du site en quatre langues avec vue-i18n",
                    "Intégration du formulaire de contact et du suivi d'audience avec Umami",
                    "Optimisation des images et du référencement naturel"
                ]
            }
        ]
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "Level Up Concept est un studio de coaching sportif et de bien-être situé à Marly, qui réunit deux espaces distincts: un studio mixte et le Studio Woman, exclusivement dédié aux femmes. Le site présente les cours collectifs, le coaching privé et la location des studios, et sert surtout de plateforme de réservation en ligne."
            },
            {
                type: "text",
                title: "Bien plus qu'une vitrine",
                content: "Le projet repose sur une véritable application: un planning alimenté depuis le backend, un tunnel de réservation de cours et de séances, la vente de forfaits payés en ligne via Stripe, le suivi des forfaits achetés par chaque client, et une interface d'administration permettant aux coachs de gérer eux-mêmes leurs cours, leurs sessions et leurs tarifs sur les deux sites."
            },
            {
                type: "gallery",
                title: "Aperçu du site",
                images: [
                    { src: "accueil.webp", alt: "La page d'accueil du studio mixte, dans son habillage sombre et doré" },
                    { src: "reservation.webp", alt: "La première étape du tunnel de réservation, avec le choix entre acheter un forfait et réserver une séance" },
                    { src: "studio-woman.webp", alt: "Le planning hebdomadaire du Studio Woman, qui reprend la même application avec son propre habillage clair" }
                ]
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["Vue.js", "Vite", "Tailwind CSS", "Pinia", "Axios", "Laravel", "Stripe"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Conception des maquettes et de la direction artistique premium du site",
                    "Développement du frontend avec Vue.js, Pinia et Tailwind CSS",
                    "Conception et développement de l'API REST avec Laravel",
                    "Développement du moteur de réservation: planning, sessions de cours et gestion des places",
                    "Intégration des paiements en ligne et des forfaits avec Stripe",
                    "Développement de l'interface d'administration pour la gestion autonome des cours et des tarifs",
                    "Gestion du multi-site pour le studio mixte et le Studio Woman"
                ]
            }
        ]
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "The Cinema Bill est une application web qui convertit l'activité récente d'un profil Letterboxd en un ticket de caisse virtuel et personnalisable. Chaque film devient une ligne du ticket, avec son année, son réalisateur, ses genres et sa durée exacte.<br><br>Les données sont récupérées via le flux RSS de Letterboxd, puis enrichies en parallèle avec l'API TMDB. Le ticket se personnalise entièrement depuis une barre latérale: nombre de films, affichage des notes, sous-titre des lignes, code-barres ou QR code, et quatre thèmes visuels au choix (Classic Thermal, Midnight OLED, Eco-Kraft et Premiere VIP). Le résultat s'exporte en image au format story, prêt à être partagé sur les réseaux sociaux."
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "API TMDB", "RSS Letterboxd", "Docker"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Conception du concept et de la direction artistique brutaliste du ticket",
                    "Développement frontend et backend avec Next.js et TypeScript",
                    "Parsing du flux RSS Letterboxd et enrichissement parallèle via l'API TMDB",
                    "Création des quatre thèmes de ticket et des options de personnalisation",
                    "Animations et transitions fluides avec Framer Motion",
                    "Génération et export de l'image partageable (code-barres, QR code, format story)",
                    "Mise en place de l'intégration et du déploiement continus avec GitHub Actions, Docker et Nginx Proxy Manager"
                ]
            },
            {
                type: "gallery",
                title: "Galerie",
                images: [
                    { src: "interface.png", alt: "L'interface de The Cinema Bill, avec la barre latérale de personnalisation et le ticket en cours de génération" },
                    { src: "ticket-eco-kraft.webp", alt: "Un ticket généré au thème Eco-Kraft, listant les cinq derniers films vus avec leur note, leur durée et le temps total de visionnage" }
                ]
            }
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "pushie est une extension VS Code qui ajoute un petit compagnon virtuel en pixel art directement dans ton éditeur. Connecté à l'API GitHub, il suit tes commits de la semaine sur toutes tes branches et évolue en cinq états selon ta progression vers ton objectif hebdomadaire: Epic, Happy, Neutral, Sad et Dead Puddle. Chaque état a sa propre animation, sa palette et sa réplique."
            },
            {
                type: "stats",
                items: [
                    { value: "5", label: "états du compagnon" },
                    { value: "2", label: "fournisseurs d'IA au choix" }
                ]
            },
            {
                type: "gallery",
                title: "L'évolution de pushie",
                layout: "grid",
                images: [
                    { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/dead.png", alt: "pushie à l'état Dead Puddle — aucun commit cette semaine" },
                    { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/sad.png", alt: "pushie à l'état Sad — 1 à 49% de l'objectif hebdomadaire" },
                    { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/neutral.png", alt: "pushie à l'état Neutral — 50 à 79% de l'objectif hebdomadaire" },
                    { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/happy.png", alt: "pushie à l'état Happy — 80 à 99% de l'objectif hebdomadaire" },
                    { src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/epic.png", alt: "pushie à l'état Epic — objectif hebdomadaire atteint" }
                ]
            },
            {
                type: "text",
                title: "Roast my code",
                content: "pushie n'a pas qu'une jolie tête: sélectionne un bout de code, clique sur <i>Roast my code</i> et il l'envoie à l'IA de ton choix (OpenAI ou Groq) pour te livrer une critique aussi honnête que sarcastique. L'extension est publiée sur le Visual Studio Marketplace."
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["TypeScript", "HTML5", "CSS", "API VS Code", "API GitHub", "OpenAI", "Groq"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Développement complet de l'extension VS Code en TypeScript",
                    "Création de la webview du compagnon en HTML et CSS",
                    "Connexion à l'API GitHub et calcul de l'activité hebdomadaire de commits",
                    "Design des assets pixel art et des animations des cinq états",
                    "Intégration des APIs d'IA (OpenAI et Groq) pour la fonctionnalité <i>Roast my code</i>",
                    "Publication et maintenance de l'extension sur le Visual Studio Marketplace"
                ]
            }
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "svy.arw est le portfolio d'Arnaud Savoy, photographe sportif suisse spécialisé dans le football et titulaire de la carte de presse AIPS. Le site adopte un design minimaliste et sombre qui laisse toute la place aux images, avec une animation d'introduction sur sa signature manuscrite.<br><br>Les reportages sont organisés en séries filtrables par catégorie (football, animalier, autres), chacune disposant de sa propre page de galerie."
            },
            {
                type: "gallery",
                title: "Aperçu du site",
                images: [
                    { src: "hero.webp", alt: "La page d'accueil: le nom d'Arnaud en grand sur une photo de lui en plein reportage" },
                    { src: "galerie.webp", alt: "La page My Work, avec les reportages filtrables par catégorie: football, animalier et autres" },
                    { src: "serie.webp", alt: "La page d'un reportage, ici l'Ironman 70.3, avec son titre, sa catégorie, sa date, son texte d'introduction et sa galerie" }
                ]
            },
            {
                type: "text",
                title: "Un site qu'Arnaud fait vivre seul",
                content: "L'ensemble du contenu est piloté depuis un CMS headless: Arnaud publie lui-même ses nouvelles séries, ses photos et ses collaborations depuis un studio d'administration, sans avoir à repasser par nous."
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["Vue.js", "Vite", "Tailwind CSS", "Sanity"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Conception des maquettes et de la direction artistique minimaliste, avec Arnaud tout au long du projet",
                    "Développement complet du frontend avec Vue.js et Tailwind CSS",
                    "Création de l'animation d'introduction et des transitions entre les pages",
                    "Modélisation du contenu et mise en place du CMS headless Sanity",
                    "Développement des galeries filtrables par catégorie et des pages de série"
                ]
            }
        ]
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "Flashlog est une application mobile qui permet aux utilisateurs de partager leurs ascensions et de se connecter avec d'autres passionnés d'escalade. L'application offre une interface conviviale et intuitive, permettant aux utilisateurs de créer, modifier et visionner leur profil, de suivre d'autres profils et avant tout de partager les blocs qu'on a grimpé dans un des lieux d'escalade disponibles. Ajouté à cela, on retrouve un système de classement avec des points par lieu d'escalade."
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["Jetpack Compose", "Kotlin", "Spring Boot", "MySQL", "Docker"]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Création de maquettes et prototypes sur Figma",
                    "Conception des routes de l'API Rest",
                    "Conception du schéma de la base de données",
                    "Développement de l'application mobile avec Jetpack Compose et Kotlin",
                    "Aide au développement de l'API Rest avec Spring Boot",
                    "Aide à la mise en place de la base de données avec MySQL",
                    "Aide à la mise en place de l'environnement de développement avec Docker",
                    "Aide à la mise en place du déploiement automatique de l'API Rest avec Docker et Gitlab CI/CD"
                ]
            },
            {
                type: "gallery",
                title: "Galerie",
                images: [
                    { src: "image1.png", alt: "Maquette de l'application mobile" },
                    { src: "image3.png", alt: "Architecture du backend" },
                    { src: "image2.png", alt: "Schéma de la base de données" }
                ]
            }
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
        sections: [
            {
                type: "text",
                title: "Description",
                content: "kodee est une agence de développement web qui se concentre sur la création de solutions digitales sur mesure pour ses clients. L'agence offre une gamme complète de services, allant de la conception à la maintenance, en passant par le développement et le déploiement. Grâce à notre équipe d'étudiants en école d'ingénieur, kodee s'engage à fournir des produits de haute qualité qui répondent aux besoins spécifiques de chaque client."
            },
            {
                type: "tags",
                title: "Technologies utilisées",
                items: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL", "Docker", "et bien plus..."]
            },
            {
                type: "list",
                title: "Ma contribution",
                items: [
                    "Conception des maquettes et prototypes sur Figma",
                    "Développement frontend avec Vue.js et Tailwind CSS",
                    "Mise en place du déploiement automatique avec Docker et Gitlab CI/CD"
                ]
            }
        ]
    }
];
