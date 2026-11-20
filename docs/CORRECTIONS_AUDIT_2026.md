# Corrections de l’audit SPBB

État au 24 octobre 2026. Modifications locales ; aucune publication effectuée.

Source : Audit_site_internet_SPBB_septembre_2026.docx fourni par Frédéric Morel.

## Corrections appliquées

| Constat | Intervention |
| --- | --- |
| Contenu de développement et actualités génériques | Suppression du message technique et des cinq publications fictives. Le flux Instagram serveur existant reste utilisé lorsqu’il fonctionne ; sinon, un lien vers le compte officiel est présenté. Aucun flux de production n’a été déclaré validé. |
| Ancienne saison dans les inscriptions | Passage à 2026/2027, remplacement du certificat médical manquant par le PDF disponible et redirection permanente de /sinscrire vers /inscription. Les archives sportives 2024/2025 sont conservées et identifiées dans leurs titres SEO. |
| Accueil peu orienté vers les démarches | Quatre accès directs : essais, inscription, entraînements, tarifs et aides. Saison et inscriptions en cours affichées. |
| Parcours d’inscription | Étapes adaptées aux nouveaux licenciés, renouvellements et mutations, avec choix du profil et liste documentaire correspondante. Boutons accessibles au clavier. |
| Planning | Conservation du planning provisoire 2026/2027 existant. Ajout explicite du lieu à confirmer pour les deux créneaux U13 concernés et correction de la hiérarchie des titres. |
| Pass Sport ancien | Mise à jour des conditions officielles 2026/2027 : 50 euros, période du 1er septembre au 31 décembre 2026, publics éligibles et lien vers les conditions officielles. |
| Cookies | Aucun chargement des iframes avant autorisation. Acceptation, refus et personnalisation ; retrait via le pied de page ; mémorisation du choix six mois. Images du flux Instagram également conditionnées à l’accord. Suppression du script Instagram automatique sur la page adhésion. |
| Pages juridiques | Suppression du consentement par poursuite de navigation, correction de liens, actualisation des informations sur les services externes et correction de balises mal fermées. La politique de confidentialité n’annonce plus de formulaire de newsletter inexistant. |
| Pied de page | Année dynamique, lien Instagram du club, lien de gestion des préférences. |
| SEO | Titres et descriptions par page, URL canonique, Open Graph, données structurées SportsOrganization et BreadcrumbList valides, sitemap et robots.txt. Pas de faux événement ajouté. |
| Navigation | Accès entraînements et actualités, inscription visible hors du menu sur mobile, lien d’évitement et indication de focus. |

## Vérifications effectuées

- 29 URL locales contrôlées, dont sitemap et robots.txt : réponses HTTP 200 après suivi des redirections.
- /sinscrire : redirection HTTP 308 vers /inscription.
- JSON-LD des pages : analysé sans erreur ; présence des URL canoniques vérifiée.
- 10 PDF uniques référencés par les inscriptions : accessibles.
- Navigateur sur ordinateur : accueil et inscriptions inspectés ; parcours du planning consulté.
- Consentement testé sur le planning : 0 iframe avant choix, 0 après refus, 1 après acceptation, 0 après retrait.
- git diff --check : propre.
- Compilation Vite client et serveur : réussie. Des avertissements CSS et accessibilité préexistants subsistent ; aucune conformité WCAG complète n’est déclarée.
- Commande npm.cmd run build : échec à l’étape adapter-vercel, après compilation, sur EPERM lors de la lecture de .vercel/output/static/images. Des essais précédents ont aussi rencontré EISDIR et ENOTEMPTY. La création complète du paquet Vercel n’est pas validée sous Windows.
- Vérification mobile interrompue par la connexion navigateur : non validée. Aucun score Lighthouse n’a été mesuré.

## Informations confirmées par le club et points restant à valider

1. Bureau confirmé par le secrétaire général et mis à jour : Laurent PARATA, président ; Frédéric MOREL, secrétaire général ; Hamza PANCHBAYA, trésorier ; Anli-Saïd SOUFFOU, secrétaire adjoint.
2. Moyens de paiement confirmés et harmonisés sur adhésion, tarifs et inscriptions : paiement en ligne FFBB / HelloAsso fortement privilégié ; chèques et espèces si paiement en ligne impossible ; trois échéances maximum ; remise des chèques à l’encaissement le 5 du mois, ni avant ni après.
3. Réductions familles confirmées et affichées : 2 licences −10 %, 3 licences −15 %, 4 licences et plus −20 %. Les pourcentages sont affichés sans calcul automatique ni hypothèse sur leur cumul avec les aides.
4. Domaine définitif : www.spbb.re, déjà déclaré dans le site, reste la référence dans les métadonnées et le sitemap. Redirections des autres domaines, DNS et Search Console non modifiés.
5. RGPD complet : durées exactes de conservation, bases légales, accès administratifs, sous-traitants et transferts des formulaires externes à documenter avec le club. Les présentes corrections ne constituent pas un audit juridique complet.
6. Flux Instagram : vérifier les publications réelles après déploiement et configuration du service ; pas de nouvelle interface d’administration ajoutée.
7. Contrôle Lighthouse mobile et audit WCAG complet à effectuer dans un navigateur disponible, idéalement après déploiement.
8. Informations de publication et d’hébergement des mentions légales à confirmer avec le responsable du site.

## Sources publiques vérifiées

- Pass Sport : https://www.education.gouv.fr/le-pass-sport-458742
- Conditions et éligibilité : https://www.pass.sports.gouv.fr/v2/structures
- Consentement et refus : https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs
