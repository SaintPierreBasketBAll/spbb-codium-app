# 📱 Intégration des derniers posts Instagram - Page d'accueil SPBB

## 🎯 Objectif

Intégrer dynamiquement les **5 derniers posts Instagram** du club sur la **page d'accueil** du site SPBB (`/`), en respectant strictement :

- le design CSS existant
- la structure actuelle SvelteKit 2
- les bonnes pratiques Svelte 5 (Runes)
- une approche performante et maintenable

---

## 📍 Positionnement dans la page

### Structure attendue :

1. Header
2. Hero Home (existant)
3. 👉 **Section "Actualités / Réseaux sociaux" (NOUVELLE SECTION)**
4. Autres sections existantes
5. Footer

---

## 🔗 Interaction avec le Hero

Ajouter dans le Hero un bouton :

- Texte : `Voir les dernières actualités`
- Action : scroll vers la section social feed
- Implémentation : anchor link (`#social-feed`)

---

## ⚙️ Architecture technique

### 📁 Fichiers à créer

- `src/lib/components/social/SocialFeed.svelte`
- `src/lib/components/social/SocialPostCard.svelte`
- `src/routes/+page.server.js` (ou adapter existant)

---

## 🔄 Récupération des données

### Source :

Instagram Graph API (compte professionnel requis)

### Données attendues :

Normaliser les données sous ce format :

```js
{
  id: string,
  caption: string,
  media_url: string,
  permalink: string,
  timestamp: string,
  platform: 'instagram'
}