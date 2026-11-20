// Le domaine déjà déclaré dans le site est conservé ; les alias DNS restent à valider.
export const siteOrigin = 'https://www.spbb.re';
const pages = {
 '/leclub/presentationduclub': ['Le club Saint-Pierre Basket Ball', 'Découvrez le SPBB, son histoire et ses activités de basket à Saint-Pierre, La Réunion.'],
 '/leclub/lebureau': ['L’équipe dirigeante du SPBB', 'Découvrez les bénévoles et les fonctions de l’équipe dirigeante du Saint-Pierre Basket Ball.'],
 '/leclub/lesprojets': ['Les projets du SPBB', 'Les projets sportifs et associatifs du Saint-Pierre Basket Ball à La Réunion.'],
 '/leclub/lestafftechnique': ['Le staff technique du SPBB', 'L’encadrement sportif des équipes du Saint-Pierre Basket Ball.'],
 '/leclub/lespartenaires': ['Les partenaires du SPBB', 'Découvrez les partenaires qui accompagnent le Saint-Pierre Basket Ball.'],
 '/leclub/faireundon': ['Soutenir le Saint-Pierre Basket Ball', 'Découvrez comment soutenir les activités du club SPBB à Saint-Pierre, La Réunion.'],
 '/infospratiques/lesgymnases': ['Les gymnases du SPBB à Saint-Pierre', 'Retrouvez les salles et lieux d’entraînement du Saint-Pierre Basket Ball.'],
 '/nosequipes/ecoledebasket': ['École de basket à Saint-Pierre', 'Découvrez l’école de basket du SPBB pour les enfants à Saint-Pierre, La Réunion.'],
 '/nosequipes/u13': ['Les équipes U13 du SPBB', 'Découvrez la catégorie U13 du Saint-Pierre Basket Ball.'],
 '/nosequipes/u15': ['Les équipes U15 du SPBB', 'Découvrez la catégorie U15 du Saint-Pierre Basket Ball.'],
 '/nosequipes/u18': ['Les équipes U18 du SPBB', 'Découvrez la catégorie U18 du Saint-Pierre Basket Ball.'],
 '/nosequipes/u18/u18filles': ['L’équipe U18 filles du SPBB', 'Découvrez l’équipe U18 féminine du Saint-Pierre Basket Ball.'],
 '/nosequipes/seniorsfilles': ['Les équipes seniors féminines du SPBB', 'Découvrez le basket senior féminin au Saint-Pierre Basket Ball.'],
 '/nosequipes/seniorsgarcons/saison2024-2025': ['Seniors garçons — archives 2024/2025', 'Retrouvez les équipes seniors masculines du SPBB pour la saison 2024/2025.'],
 '/nosequipes/seniorsgarcons/saison2024-2025/equipesseniors': ['Équipes seniors — archives 2024/2025', 'Les équipes seniors masculines du SPBB lors de la saison 2024/2025.'],
 '/nosequipes/seniorsgarcons/saison2024-2025/equipesseniors/equipe1': ['Seniors garçons 1 — archives 2024/2025', 'L’équipe première masculine du SPBB lors de la saison 2024/2025.'],
 '/nosequipes/seniorsgarcons/saison2024-2025/equipesseniors/equipe2': ['Seniors garçons 2 — archives 2024/2025', 'L’équipe deuxième masculine du SPBB lors de la saison 2024/2025.'],
 '/': ['Club de basket à Saint-Pierre, La Réunion', 'Site officiel du SPBB : inscription basket 2026/2027, deux séances d’essai, école de basket, équipes et entraînements à Saint-Pierre (974).'],
 '/inscription': ['Inscription basket 2026/2027 à Saint-Pierre', 'Nouveau licencié, renouvellement ou mutation : découvrez les étapes et documents pour vous inscrire au Saint-Pierre Basket Ball.'],
 '/infospratiques/leshoraires': ['Entraînements de basket 2026/2027', 'Consultez le planning provisoire du SPBB par catégorie, les créneaux et gymnases à Saint-Pierre, La Réunion.'],
 '/infospratiques/adhesion': ['Essais et adhésion au SPBB', 'Deux séances d’essai offertes avant une nouvelle inscription : modalités, cotisation et contacts du club de basket à Saint-Pierre.'],
 '/infospratiques/tarifsetaides': ['Tarifs et aides basket 2026/2027', 'Cotisation au Saint-Pierre Basket Ball et conditions officielles du Pass Sport 2026/2027 pour les familles.'],
 '/contact': ['Contacter Saint-Pierre Basket Ball', 'Contactez le SPBB pour vos questions sur le basket à Saint-Pierre, les entraînements et les inscriptions.'],
 '/politiquedecookies': ['Politique de cookies', 'Comprenez et gérez vos préférences pour les cartes et médias externes du site SPBB.'],
 '/mentionslegales': ['Mentions légales', 'Informations sur l’association Saint-Pierre Basket Ball, l’éditeur et l’hébergement du site officiel.'],
 '/Politiquedeconfidentialite': ['Politique de confidentialité', 'Informations sur les données personnelles et vos droits auprès du Saint-Pierre Basket Ball.']
};
export function seoFor(path) {
 const clean = path.replace(/\/$/, '') || '/';
 const title = clean.split('/').filter(Boolean).pop()?.replaceAll('-', ' ') || 'Saint-Pierre Basket Ball';
 const [name, description] = pages[clean] || [title.charAt(0).toUpperCase() + title.slice(1), 'Découvrez les équipes, la vie du club et les informations pratiques du Saint-Pierre Basket Ball à La Réunion.'];
 return { title: name, description };
}
