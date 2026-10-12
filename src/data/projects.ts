import type { Localized, LocalizedList } from '@/composables/useLocalized'

export interface ProjectImage {
    src: string;
    alt: Localized;
}

export interface ProjectStat {
    value: string;
    label: Localized;
}

/** Paragraphes libres. Le HTML inline est autorisé (<br>, <b>, <i>, <a>...). */
export interface TextSection {
    type: "text";
    title?: Localized;
    content: Localized;
}

/** Liste à puces. Le HTML inline est autorisé dans chaque item. */
export interface ListSection {
    type: "list";
    title?: Localized;
    items: LocalizedList;
}

/** Technologies ou mots-clés affichés en pastilles. */
export interface TagsSection {
    type: "tags";
    title?: Localized;
    items: LocalizedList;
}

/** Citation mise en avant (avis client, retour d'utilisateur...). */
export interface QuoteSection {
    type: "quote";
    title?: Localized;
    content: Localized;
    author?: string;
    role?: Localized;
}

/** Quelques chiffres clés affichés en ligne. */
export interface StatsSection {
    type: "stats";
    title?: Localized;
    items: ProjectStat[];
}

/**
 * Galerie d'images. Un `src` commençant par http est utilisé tel quel,
 * sinon il est résolu dans /images/projects/<id du projet>/.
 */
export interface GallerySection {
    type: "gallery";
    title?: Localized;
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
    title: Localized;
    date: Localized;
    source: boolean;
    source_link: string;
    demo: boolean;
    demo_link: string;
    /** Contenu de la page, rendu dans l'ordre déclaré ici. */
    sections: ProjectSection[];
}

// Titres de section réutilisés d'un projet à l'autre.
const DESCRIPTION = { fr: "Description", en: "Overview" };
const STACK = { fr: "Technologies utilisées", en: "Built with" };
const MYROLE = { fr: "Ma contribution", en: "What I did" };
const GALLERY = { fr: "Galerie", en: "Gallery" };
const PREVIEW = { fr: "Aperçu du site", en: "A look at the site" };

export const projects: Project[] = [
    {
        id: "themilkyway",
        image: "themilkyway-logo.webp",
        color: "#080B12",
        title: {
            fr: "<b>The Milky Way</b> Descendre de la Galaxie jusqu'aux lunes, avec les vrais chiffres",
            en: "<b>The Milky Way</b> From the Galaxy down to the moons, with the real numbers"
        },
        date: { fr: "octobre 2026", en: "October 2026" },
        source: true,
        source_link: "https://github.com/maiscommentz/the-milky-way",
        demo: true,
        demo_link: "https://themilkyway.maiscommentz.ch",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "The Milky Way est un visualiseur qui fait descendre le regard niveau par niveau: on ouvre la page sur la Galaxie, le Soleil y est marqué à sa vraie place, 8,178 kpc du centre sur le bras d'Orion. On clique dessus et on tombe dans le Système solaire, où les huit planètes suivent leurs véritables orbites elliptiques, placées à partir de leurs éléments J2000. De là on continue vers les planètes, puis vers leurs lunes.<br><br>Rien sur ce chemin n'est généré ni aléatoire: ce sont les objets réels, avec leurs grandeurs mesurées. Un panneau d'inspection affiche pour chaque corps sélectionné ses caractéristiques, de la classe spectrale du Soleil à sa température et son âge.",
                    en: "The Milky Way is a visualiser that steps the view down one level at a time. It opens on the Galaxy, with the Sun marked where it belongs, 8.178 kpc out on the Orion Spur. Click it and you drop into the Solar System, where the eight planets sit on their real elliptical orbits, placed from their J2000 elements. From there you keep going, to the planets and then to their moons.<br><br>Nothing along that path is generated or random: these are the real objects, with their measured numbers. An inspector panel shows the properties of whichever body is selected, from the Sun's spectral class to its temperature and age."
                }
            },
            {
                type: "gallery",
                title: { fr: "Aperçu", en: "A look at it" },
                images: [
                    {
                        src: "galaxie.webp",
                        alt: {
                            fr: "La vue d'ouverture: la Galaxie en nuage de points, avec le Système solaire marqué d'un cercle sur le bras d'Orion",
                            en: "The opening view: the Galaxy as a point cloud, with the Solar System circled on the Orion Spur"
                        }
                    },
                    {
                        src: "moteur-nbody.webp",
                        alt: {
                            fr: "La page bac à sable du moteur N-corps, avec le choix de l'intégrateur et du solveur et la dérive d'énergie affichée en direct",
                            en: "The N-body engine sandbox, with the integrator and solver selectors and the energy drift shown live"
                        }
                    }
                ]
            },
            {
                type: "text",
                title: { fr: "Le moteur en dessous", en: "The engine underneath" },
                content: {
                    fr: "La vue repose sur un moteur N-corps écrit de zéro avant elle, couche par couche en partant des vecteurs. Il n'est pas nécessaire pour regarder la Galaxie — rien sur le chemin principal ne résout la gravité — et il vit sur ses propres pages: comparaison d'Euler, Euler semi-implicite et Velocity Verlet sur la conservation de l'énergie, galaxie générée procéduralement à 16 000 particules sur le GPU, et mesures WebGPU.<br><br>Il en est sorti un octree Barnes-Hut aplati en tableaux typés et parcouru sans récursion, et un pipeline de calcul WebGPU écrit à la main qui affiche directement depuis son buffer, sans jamais le relire côté CPU.",
                    en: "The view sits on an N-body engine written from scratch before it, layer by layer, starting from vectors. It isn't needed to look at the Galaxy — nothing on the main path solves gravity at all — and it lives on its own pages: Euler, semi-implicit Euler and Velocity Verlet compared on energy conservation, a procedurally generated galaxy running 16,000 particles on the GPU, and WebGPU measurements.<br><br>A few things came out of it: a Barnes-Hut octree flattened into typed arrays and traversed without recursion, and a hand-written WebGPU compute pipeline that renders straight from its buffer, without ever reading it back on the CPU."
                }
            },
            {
                type: "text",
                title: { fr: "Comment il a été construit", en: "How this was built" },
                content: {
                    fr: "Une grande partie a été vibe-codée, et c'était le but. L'objectif n'a jamais été d'écrire chaque ligne à la main: il était de comprendre l'astrophysique en dessous, et de pouvoir dire d'où vient chaque nombre et ce qu'il vaut. C'est là qu'est passé l'effort.",
                    en: "A large part of this was vibe-coded, and that was the point. The goal was never to write every line by hand: it was to understand the astrophysics underneath, and to be able to say where each number comes from and what it is worth. That is where the effort went."
                }
            },
            {
                type: "text",
                title: { fr: "Le carnet de bord", en: "The log" },
                content: {
                    fr: "Le dossier <code>docs/</code> accompagne le code: ce qui a été mesuré, ce qui a été décidé et pourquoi, et ce qui s'est mal passé. Il garde les erreurs, y compris les mesures fausses dans le sens flatteur — comme ce benchmark qui chronométrait une allocation de 64 Mo à l'intérieur de sa propre boucle et faisait passer le GPU pour 9,8 fois plus rapide, au lieu des 6,2 réels.<br><br>Chaque relation utilisée est écrite dans <code>docs/approximations.md</code> avec ce qu'elle représente, où elle cesse d'être valable, et pourquoi elle suffit ici. C'est un visualiseur pédagogique et approximatif, pas un modèle scientifique, et il le dit.",
                    en: "The <code>docs/</code> folder is the notebook that goes with the code: what was measured, what was decided and why, and what went wrong. It keeps the mistakes, including the measurements that were wrong in the flattering direction — like a benchmark that was timing a 64 MB allocation inside its own loop and made the GPU look 9.8 times faster than the 6.2 it really was.<br><br>Every relation used is written down in <code>docs/approximations.md</code> with what it represents, where it stops being valid, and why it is good enough here. This is an approximate, educational visualiser, not a scientific model, and it says so."
                }
            },
            {
                type: "tags",
                title: STACK,
                items: ["TypeScript", "Vite", "Three.js", "WebGL", "WebGPU", "WGSL", "Vitest", "Docker", "nginx"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Modélisation de la Galaxie et du Système solaire à partir de données astronomiques réelles (éléments orbitaux J2000)",
                        "Développement du moteur N-corps de zéro: vecteurs, intégrateurs, octree Barnes-Hut aplati en tableaux typés",
                        "Écriture d'un pipeline de calcul WebGPU en WGSL, rendu direct depuis le buffer sans relecture CPU",
                        "Rendu Three.js du nuage de points et de la navigation hiérarchique entre les niveaux",
                        "Suite de tests avec Vitest et benchmarks de performance avec protocole de mesure documenté",
                        "Documentation de chaque approximation, de ses limites et des erreurs de mesure rencontrées",
                        "Mise en place de l'intégration et du déploiement continus avec GitHub Actions, Docker et nginx"
                    ],
                    en: [
                        "Modelled the Galaxy and the Solar System from real astronomical data (J2000 orbital elements)",
                        "Built the N-body engine from scratch: vectors, integrators, a Barnes-Hut octree flattened into typed arrays",
                        "Wrote a WebGPU compute pipeline in WGSL that renders straight from the buffer, with no CPU readback",
                        "Three.js rendering of the point cloud and of the hierarchical navigation between levels",
                        "Test suite with Vitest, and performance benchmarks with a documented measurement protocol",
                        "Documented every approximation, its limits, and the measurement mistakes made along the way",
                        "Set up continuous integration and deployment with GitHub Actions, Docker and nginx"
                    ]
                }
            }
        ]
    },
    {
        id: "montedabalaia",
        image: "montedabalaia-logo.webp",
        color: "#006971",
        title: {
            fr: "<b>Monte da Balaia</b> Site vitrine et réservation d'un appartement de vacances en Algarve",
            en: "<b>Monte da Balaia</b> Showcase and direct booking site for a holiday flat in the Algarve"
        },
        date: { fr: "septembre 2026", en: "September 2026" },
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://monte-da-balaia.com",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "Monte da Balaia est le site vitrine d'un appartement de vacances de 90m² situé à Olhos de Água, en Algarve. Le site met en avant le logement, son balcon de 25m², les piscines et le court de tennis de la résidence, ainsi que le quartier et ses plages, avec pour objectif d'amener les voyageurs à réserver en direct plutôt que par une plateforme.<br><br>Il s'articule autour de pages dédiées à la galerie photo, aux équipements, à l'emplacement et aux avis des voyageurs, complétées par une présentation de l'hôtesse et un formulaire de contact. L'ensemble est traduit en quatre langues (français, anglais, portugais et espagnol) pour toucher aussi bien la clientèle suisse que portugaise et internationale.",
                    en: "Monte da Balaia is the showcase site for a 90 m² holiday flat in Olhos de Água, in the Algarve. It puts forward the flat, its 25 m² balcony, the pools and tennis court of the residence, and the neighbourhood and its beaches, with one goal: getting travellers to book directly rather than through a platform.<br><br>It is built around dedicated pages for the photo gallery, the amenities, the location and the guest reviews, rounded off with a page about the host and a contact form. The whole site is translated into four languages (French, English, Portuguese and Spanish) to reach Swiss, Portuguese and international guests alike."
                }
            },
            {
                type: "gallery",
                title: PREVIEW,
                images: [
                    {
                        src: "accueil.webp",
                        alt: {
                            fr: "La page d'accueil, avec la piscine de la résidence en pleine largeur et le sélecteur de langue dans la navigation",
                            en: "The home page, with the residence pool running full width and the language picker in the navigation"
                        }
                    },
                    {
                        src: "galerie.webp",
                        alt: {
                            fr: "La galerie photo, filtrable pièce par pièce: piscine, jardin, salon, cuisine, chambres et salles de bain",
                            en: "The photo gallery, filterable room by room: pool, garden, living room, kitchen, bedrooms and bathrooms"
                        }
                    },
                    {
                        src: "emplacement.webp",
                        alt: {
                            fr: "La page emplacement, qui situe le logement à Olhos de Água avec les distances à pied vers la plage et les commerces",
                            en: "The location page, placing the flat in Olhos de Água with walking distances to the beach and the shops"
                        }
                    }
                ]
            },
            {
                type: "tags",
                title: STACK,
                items: ["Vue.js", "Vite", "Tailwind CSS", "vue-i18n", "Sanity", "Umami"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Conception des maquettes et de la direction artistique du site",
                        "Développement complet du frontend avec Vue.js et Tailwind CSS",
                        "Mise en place du routage et des pages galerie, équipements, emplacement et avis",
                        "Internationalisation du site en quatre langues avec vue-i18n",
                        "Intégration du formulaire de contact et du suivi d'audience avec Umami",
                        "Optimisation des images et du référencement naturel"
                    ],
                    en: [
                        "Designed the mockups and the art direction of the site",
                        "Built the whole frontend with Vue.js and Tailwind CSS",
                        "Set up the routing and the gallery, amenities, location and reviews pages",
                        "Internationalised the site into four languages with vue-i18n",
                        "Wired the contact form and the audience tracking with Umami",
                        "Image optimisation and search engine optimisation"
                    ]
                }
            }
        ]
    },
    {
        id: "levelupconcept",
        image: "levelupconcept-logo.webp",
        color: "#0F0F0F",
        title: {
            fr: "<b>Level Up Concept</b> Plateforme de réservation pour un studio de coaching sportif",
            en: "<b>Level Up Concept</b> Booking platform for a personal training studio"
        },
        date: { fr: "août 2026", en: "August 2026" },
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://levelupconcept.ch",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "Level Up Concept est un studio de coaching sportif et de bien-être situé à Marly, qui réunit deux espaces distincts: un studio mixte et le Studio Woman, exclusivement dédié aux femmes. Le site présente les cours collectifs, le coaching privé et la location des studios, et sert surtout de plateforme de réservation en ligne.",
                    en: "Level Up Concept is a training and wellness studio in Marly that runs two distinct spaces: a mixed studio and the Studio Woman, for women only. The site presents the group classes, the private coaching and the studio rental — and above all, it works as an online booking platform."
                }
            },
            {
                type: "text",
                title: { fr: "Bien plus qu'une vitrine", en: "More than a showcase" },
                content: {
                    fr: "Le projet repose sur une véritable application: un planning alimenté depuis le backend, un tunnel de réservation de cours et de séances, la vente de forfaits payés en ligne via Stripe, le suivi des forfaits achetés par chaque client, et une interface d'administration permettant aux coachs de gérer eux-mêmes leurs cours, leurs sessions et leurs tarifs sur les deux sites.",
                    en: "There is a real application behind it: a schedule fed from the backend, a booking funnel for classes and sessions, packages sold and paid online through Stripe, per-client tracking of the packages they bought, and an admin interface that lets the coaches manage their own classes, sessions and prices across both locations."
                }
            },
            {
                type: "gallery",
                title: PREVIEW,
                images: [
                    {
                        src: "accueil.webp",
                        alt: {
                            fr: "La page d'accueil du studio mixte, dans son habillage sombre et doré",
                            en: "The home page of the mixed studio, in its dark and gold theme"
                        }
                    },
                    {
                        src: "reservation.webp",
                        alt: {
                            fr: "La première étape du tunnel de réservation, avec le choix entre acheter un forfait et réserver une séance",
                            en: "The first step of the booking funnel, choosing between buying a package and booking a session"
                        }
                    },
                    {
                        src: "studio-woman.webp",
                        alt: {
                            fr: "Le planning hebdomadaire du Studio Woman, qui reprend la même application avec son propre habillage clair",
                            en: "The weekly schedule of the Studio Woman, the same application in its own light theme"
                        }
                    }
                ]
            },
            {
                type: "tags",
                title: STACK,
                items: ["Vue.js", "Vite", "Tailwind CSS", "Pinia", "Axios", "Laravel", "Stripe"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Conception des maquettes et de la direction artistique premium du site",
                        "Développement du frontend avec Vue.js, Pinia et Tailwind CSS",
                        "Conception et développement de l'API REST avec Laravel",
                        "Développement du moteur de réservation: planning, sessions de cours et gestion des places",
                        "Intégration des paiements en ligne et des forfaits avec Stripe",
                        "Développement de l'interface d'administration pour la gestion autonome des cours et des tarifs",
                        "Gestion du multi-site pour le studio mixte et le Studio Woman"
                    ],
                    en: [
                        "Designed the mockups and the premium art direction of the site",
                        "Built the frontend with Vue.js, Pinia and Tailwind CSS",
                        "Designed and built the REST API with Laravel",
                        "Built the booking engine: schedule, class sessions and seat management",
                        "Integrated online payments and packages with Stripe",
                        "Built the admin interface so the coaches manage their own classes and prices",
                        "Handled the multi-location setup for the mixed studio and the Studio Woman"
                    ]
                }
            }
        ]
    },
    {
        id: "thecinemabill",
        image: "thecinemabill.png",
        title: {
            fr: "<b>The Cinema Bill</b> Convertis ton activité Letterboxd en ticket de caisse stylisé",
            en: "<b>The Cinema Bill</b> Turn your Letterboxd activity into a stylised receipt"
        },
        date: { fr: "avril 2026", en: "April 2026" },
        source: true,
        source_link: "https://github.com/maiscommentz/thecinemabill",
        demo: true,
        demo_link: "https://thecinemabill.maiscommentz.ch",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "The Cinema Bill est une application web qui convertit l'activité récente d'un profil Letterboxd en un ticket de caisse virtuel et personnalisable. Chaque film devient une ligne du ticket, avec son année, son réalisateur, ses genres et sa durée exacte.<br><br>Les données sont récupérées via le flux RSS de Letterboxd, puis enrichies en parallèle avec l'API TMDB. Le ticket se personnalise entièrement depuis une barre latérale: nombre de films, affichage des notes, sous-titre des lignes, code-barres ou QR code, et quatre thèmes visuels au choix (Classic Thermal, Midnight OLED, Eco-Kraft et Premiere VIP). Le résultat s'exporte en image au format story, prêt à être partagé sur les réseaux sociaux.",
                    en: "The Cinema Bill is a web app that turns the recent activity of a Letterboxd profile into a virtual, customisable receipt. Each film becomes a line item, with its year, director, genres and exact runtime.<br><br>The data comes from the Letterboxd RSS feed, then gets enriched in parallel with the TMDB API. The receipt is fully customisable from a sidebar: number of films, ratings on or off, what each line shows underneath, barcode or QR code, and four visual themes (Classic Thermal, Midnight OLED, Eco-Kraft and Premiere VIP). The result exports as a story-sized image, ready to share on social media."
                }
            },
            {
                type: "tags",
                title: STACK,
                items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "TMDB API", "Letterboxd RSS", "Docker"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Conception du concept et de la direction artistique brutaliste du ticket",
                        "Développement frontend et backend avec Next.js et TypeScript",
                        "Parsing du flux RSS Letterboxd et enrichissement parallèle via l'API TMDB",
                        "Création des quatre thèmes de ticket et des options de personnalisation",
                        "Animations et transitions fluides avec Framer Motion",
                        "Génération et export de l'image partageable (code-barres, QR code, format story)",
                        "Mise en place de l'intégration et du déploiement continus avec GitHub Actions, Docker et Nginx Proxy Manager"
                    ],
                    en: [
                        "Came up with the concept and the brutalist art direction of the receipt",
                        "Frontend and backend development with Next.js and TypeScript",
                        "Parsed the Letterboxd RSS feed and enriched it in parallel through the TMDB API",
                        "Built the four receipt themes and the customisation options",
                        "Smooth animations and transitions with Framer Motion",
                        "Generated and exported the shareable image (barcode, QR code, story format)",
                        "Set up continuous integration and deployment with GitHub Actions, Docker and Nginx Proxy Manager"
                    ]
                }
            },
            {
                type: "gallery",
                title: GALLERY,
                images: [
                    {
                        src: "interface.png",
                        alt: {
                            fr: "L'interface de The Cinema Bill, avec la barre latérale de personnalisation et le ticket en cours de génération",
                            en: "The Cinema Bill interface, with the customisation sidebar and the receipt being generated"
                        }
                    },
                    {
                        src: "ticket-eco-kraft.webp",
                        alt: {
                            fr: "Un ticket généré au thème Eco-Kraft, listant les cinq derniers films vus avec leur note, leur durée et le temps total de visionnage",
                            en: "A receipt in the Eco-Kraft theme, listing the last five films watched with their rating, runtime and total watch time"
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "pushie",
        image_url: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/icon.png",
        color: "#E0F2FE",
        title: {
            fr: "<b>pushie</b> Ton petit compagnon de code directement dans VS Code",
            en: "<b>pushie</b> Your little coding buddy, right inside VS Code"
        },
        date: { fr: "février 2026", en: "February 2026" },
        source: true,
        source_link: "https://github.com/maiscommentz/pushie",
        demo: true,
        demo_link: "https://marketplace.visualstudio.com/items?itemName=maiscommentz.pushie",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "pushie est une extension VS Code qui ajoute un petit compagnon virtuel en pixel art directement dans ton éditeur. Connecté à l'API GitHub, il suit tes commits de la semaine sur toutes tes branches et évolue en cinq états selon ta progression vers ton objectif hebdomadaire: Epic, Happy, Neutral, Sad et Dead Puddle. Chaque état a sa propre animation, sa palette et sa réplique.",
                    en: "pushie is a VS Code extension that puts a little pixel-art companion right inside your editor. Hooked up to the GitHub API, he tracks your commits for the week across all your branches and evolves through five states depending on how close you are to your weekly goal: Epic, Happy, Neutral, Sad and Dead Puddle. Each state has its own animation, palette and voice line."
                }
            },
            {
                type: "stats",
                items: [
                    { value: "5", label: { fr: "états du compagnon", en: "companion states" } },
                    { value: "2", label: { fr: "fournisseurs d'IA au choix", en: "AI providers to choose from" } }
                ]
            },
            {
                type: "gallery",
                title: { fr: "L'évolution de pushie", en: "The evolution of pushie" },
                layout: "grid",
                images: [
                    {
                        src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/dead.png",
                        alt: { fr: "pushie à l'état Dead Puddle — aucun commit cette semaine", en: "pushie in the Dead Puddle state — no commits this week" }
                    },
                    {
                        src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/sad.png",
                        alt: { fr: "pushie à l'état Sad — 1 à 49% de l'objectif hebdomadaire", en: "pushie in the Sad state — 1 to 49% of the weekly goal" }
                    },
                    {
                        src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/neutral.png",
                        alt: { fr: "pushie à l'état Neutral — 50 à 79% de l'objectif hebdomadaire", en: "pushie in the Neutral state — 50 to 79% of the weekly goal" }
                    },
                    {
                        src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/happy.png",
                        alt: { fr: "pushie à l'état Happy — 80 à 99% de l'objectif hebdomadaire", en: "pushie in the Happy state — 80 to 99% of the weekly goal" }
                    },
                    {
                        src: "https://raw.githubusercontent.com/maiscommentz/pushie/main/media/epic.png",
                        alt: { fr: "pushie à l'état Epic — objectif hebdomadaire atteint", en: "pushie in the Epic state — weekly goal reached" }
                    }
                ]
            },
            {
                type: "text",
                title: "Roast my code",
                content: {
                    fr: "pushie n'a pas qu'une jolie tête: sélectionne un bout de code, clique sur <i>Roast my code</i> et il l'envoie à l'IA de ton choix (OpenAI ou Groq) pour te livrer une critique aussi honnête que sarcastique. L'extension est publiée sur le Visual Studio Marketplace.",
                    en: "pushie isn't just a pretty face: select a block of code, hit <i>Roast my code</i>, and he sends it to the AI of your choice (OpenAI or Groq) to deliver a critique that is as honest as it is sarcastic. The extension is published on the Visual Studio Marketplace."
                }
            },
            {
                type: "tags",
                title: STACK,
                items: ["TypeScript", "HTML5", "CSS", "VS Code API", "GitHub API", "OpenAI", "Groq"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Développement complet de l'extension VS Code en TypeScript",
                        "Création de la webview du compagnon en HTML et CSS",
                        "Connexion à l'API GitHub et calcul de l'activité hebdomadaire de commits",
                        "Design des assets pixel art et des animations des cinq états",
                        "Intégration des APIs d'IA (OpenAI et Groq) pour la fonctionnalité <i>Roast my code</i>",
                        "Publication et maintenance de l'extension sur le Visual Studio Marketplace"
                    ],
                    en: [
                        "Built the whole VS Code extension in TypeScript",
                        "Created the companion webview in HTML and CSS",
                        "Connected the GitHub API and computed the weekly commit activity",
                        "Designed the pixel-art assets and the animations for all five states",
                        "Integrated the AI APIs (OpenAI and Groq) for the <i>Roast my code</i> feature",
                        "Published and maintained the extension on the Visual Studio Marketplace"
                    ]
                }
            }
        ]
    },
    {
        id: "svy",
        image: "svy-logo.webp",
        color: "#19213A",
        image_scale: "55%",
        image_offset_y: "25%",
        title: {
            fr: "<b>svy.arw</b> Portfolio du photographe sportif Arnaud Savoy",
            en: "<b>svy.arw</b> Portfolio for sports photographer Arnaud Savoy"
        },
        date: { fr: "février 2026", en: "February 2026" },
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://svy.ch",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "svy.arw est le portfolio d'Arnaud Savoy, photographe sportif suisse spécialisé dans le football et titulaire de la carte de presse AIPS. Le site adopte un design minimaliste et sombre qui laisse toute la place aux images, avec une animation d'introduction sur sa signature manuscrite.<br><br>Les reportages sont organisés en séries filtrables par catégorie (football, animalier, autres), chacune disposant de sa propre page de galerie.",
                    en: "svy.arw is the portfolio of Arnaud Savoy, a Swiss sports photographer specialised in football and an AIPS press card holder. The site goes for a dark, minimal design that leaves all the room to the images, opening on an animation of his handwritten signature.<br><br>The shoots are organised into series, filterable by category (football, wildlife, others), each with its own gallery page."
                }
            },
            {
                type: "gallery",
                title: PREVIEW,
                images: [
                    {
                        src: "hero.webp",
                        alt: {
                            fr: "La page d'accueil: le nom d'Arnaud en grand sur une photo de lui en plein reportage",
                            en: "The home page: Arnaud's name set large over a photo of him out on a shoot"
                        }
                    },
                    {
                        src: "galerie.webp",
                        alt: {
                            fr: "La page My Work, avec les reportages filtrables par catégorie: football, animalier et autres",
                            en: "The My Work page, with the shoots filterable by category: football, wildlife and others"
                        }
                    },
                    {
                        src: "serie.webp",
                        alt: {
                            fr: "La page d'un reportage, ici l'Ironman 70.3, avec son titre, sa catégorie, sa date, son texte d'introduction et sa galerie",
                            en: "A single shoot page, here the Ironman 70.3, with its title, category, date, intro text and gallery"
                        }
                    }
                ]
            },
            {
                type: "text",
                title: { fr: "Un site qu'Arnaud fait vivre seul", en: "A site Arnaud runs on his own" },
                content: {
                    fr: "L'ensemble du contenu est piloté depuis un CMS headless: Arnaud publie lui-même ses nouvelles séries, ses photos et ses collaborations depuis un studio d'administration, sans avoir à repasser par nous.",
                    en: "All the content is driven from a headless CMS: Arnaud publishes his new series, his photos and his collaborations himself from an admin studio, without having to come back to us."
                }
            },
            {
                type: "tags",
                title: STACK,
                items: ["Vue.js", "Vite", "Tailwind CSS", "Sanity"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Conception des maquettes et de la direction artistique minimaliste, avec Arnaud tout au long du projet",
                        "Développement complet du frontend avec Vue.js et Tailwind CSS",
                        "Création de l'animation d'introduction et des transitions entre les pages",
                        "Modélisation du contenu et mise en place du CMS headless Sanity",
                        "Développement des galeries filtrables par catégorie et des pages de série"
                    ],
                    en: [
                        "Designed the mockups and the minimal art direction, with Arnaud involved throughout",
                        "Built the whole frontend with Vue.js and Tailwind CSS",
                        "Created the intro animation and the transitions between pages",
                        "Modelled the content and set up the Sanity headless CMS",
                        "Built the category-filterable galleries and the individual series pages"
                    ]
                }
            }
        ]
    },
    {
        id: "flashlog",
        image: "flashlog.png",
        title: {
            fr: "<b>Flashlog</b> App mobile pour partager ses ascensions",
            en: "<b>Flashlog</b> Mobile app for sharing your climbs"
        },
        date: { fr: "janvier 2025", en: "January 2025" },
        source: false,
        source_link: "",
        demo: false,
        demo_link: "",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "Flashlog est une application mobile qui permet aux utilisateurs de partager leurs ascensions et de se connecter avec d'autres passionnés d'escalade. L'application offre une interface conviviale et intuitive, permettant aux utilisateurs de créer, modifier et visionner leur profil, de suivre d'autres profils et avant tout de partager les blocs qu'on a grimpé dans un des lieux d'escalade disponibles. Ajouté à cela, on retrouve un système de classement avec des points par lieu d'escalade.",
                    en: "Flashlog is a mobile app that lets climbers share their ascents and connect with other enthusiasts. It offers a friendly, straightforward interface where users create, edit and view their profile, follow other climbers, and above all log the boulders they have climbed at any of the available gyms. On top of that sits a ranking system, with points awarded per gym."
                }
            },
            {
                type: "tags",
                title: STACK,
                items: ["Jetpack Compose", "Kotlin", "Spring Boot", "MySQL", "Docker"]
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Création de maquettes et prototypes sur Figma",
                        "Conception des routes de l'API Rest",
                        "Conception du schéma de la base de données",
                        "Développement de l'application mobile avec Jetpack Compose et Kotlin",
                        "Aide au développement de l'API Rest avec Spring Boot",
                        "Aide à la mise en place de la base de données avec MySQL",
                        "Aide à la mise en place de l'environnement de développement avec Docker",
                        "Aide à la mise en place du déploiement automatique de l'API Rest avec Docker et Gitlab CI/CD"
                    ],
                    en: [
                        "Created the mockups and prototypes in Figma",
                        "Designed the REST API routes",
                        "Designed the database schema",
                        "Built the mobile app with Jetpack Compose and Kotlin",
                        "Helped build the REST API with Spring Boot",
                        "Helped set up the database with MySQL",
                        "Helped set up the development environment with Docker",
                        "Helped set up automated deployment of the REST API with Docker and GitLab CI/CD"
                    ]
                }
            },
            {
                type: "gallery",
                title: GALLERY,
                images: [
                    { src: "image1.png", alt: { fr: "Maquette de l'application mobile", en: "Mockup of the mobile app" } },
                    { src: "image3.png", alt: { fr: "Architecture du backend", en: "Backend architecture" } },
                    { src: "image2.png", alt: { fr: "Schéma de la base de données", en: "Database schema" } }
                ]
            }
        ]
    },
    {
        id: "kodee",
        image: "kodee.png",
        title: {
            fr: "<b>kodee</b> Contribution de loin comme de près à tous les projets réalisés",
            en: "<b>kodee</b> A hand in every project the agency has shipped"
        },
        date: { fr: "novembre 2023 - maintenant", en: "November 2023 - present" },
        source: false,
        source_link: "",
        demo: true,
        demo_link: "https://kodee.ch",
        sections: [
            {
                type: "text",
                title: DESCRIPTION,
                content: {
                    fr: "kodee est une agence de développement web qui se concentre sur la création de solutions digitales sur mesure pour ses clients. L'agence offre une gamme complète de services, allant de la conception à la maintenance, en passant par le développement et le déploiement. Grâce à notre équipe d'étudiants en école d'ingénieur, kodee s'engage à fournir des produits de haute qualité qui répondent aux besoins spécifiques de chaque client.",
                    en: "kodee is a web development agency focused on building bespoke digital solutions for its clients. It covers the full range, from design to maintenance, by way of development and deployment. With our team of engineering students, kodee is committed to delivering high-quality products that answer each client's specific needs."
                }
            },
            {
                type: "tags",
                title: STACK,
                items: {
                    fr: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL", "Docker", "et bien plus..."],
                    en: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL", "Docker", "and plenty more..."]
                }
            },
            {
                type: "list",
                title: MYROLE,
                items: {
                    fr: [
                        "Conception des maquettes et prototypes sur Figma",
                        "Développement frontend avec Vue.js et Tailwind CSS",
                        "Mise en place du déploiement automatique avec Docker et Gitlab CI/CD"
                    ],
                    en: [
                        "Designed the mockups and prototypes in Figma",
                        "Frontend development with Vue.js and Tailwind CSS",
                        "Set up automated deployment with Docker and GitLab CI/CD"
                    ]
                }
            }
        ]
    }
];
