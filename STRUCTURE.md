# ERECApluriel - Structure du projet

## 📁 Arborescence complète

```
erecapluriel/
├── app/                          # App Router Next.js 15
│   ├── globals.css              # Styles globaux + animations CSS
│   ├── layout.tsx               # Layout avec polices Google (Sora, Inter, Crimson Text)
│   └── page.tsx                 # Page d'accueil (assemble tous les composants)
│
├── components/                   # Composants React
│   ├── Header.tsx               # Navigation fixe avec menu mobile
│   ├── HeroSection.tsx          # Hero avec dégradé animé + stats
│   ├── ProfilesSection.tsx      # 6 profils clients avec hover effect
│   ├── MapSection.tsx           # Carte Sud-Ouest + 20 pins animés
│   ├── ExpertisesSection.tsx    # 12 expertises avec icônes
│   ├── TestimonialsSection.tsx  # Carousel témoignages (autoplay 6s)
│   ├── NewsSection.tsx          # Section événements clients
│   ├── ContactSection.tsx       # Formulaire + infos contact
│   └── Footer.tsx               # Footer avec liens sociaux
│
├── lib/                         # Données et utilitaires
│   └── data.ts                  # Agences, profils, expertises, témoignages
│
├── types/                       # Types TypeScript
│   └── index.ts                 # Interfaces (Agency, Profile, etc.)
│
├── public/                      # Assets statiques (images, fonts)
│
├── .gitignore                   # Fichiers à ignorer par Git
├── next-env.d.ts               # Types Next.js (auto-généré)
├── next.config.ts              # Configuration (export statique)
├── package.json                # Dépendances
├── postcss.config.mjs          # Configuration PostCSS
├── README.md                   # Documentation
└── tsconfig.json               # Configuration TypeScript
```

## 🎨 Palette de couleurs

```css
--color-terracotta: #C65D3B   /* Principal - boutons, accents */
--color-ocean: #2E6B75        /* Secondaire - sections, liens */
--color-abricot: #F4A261      /* Accent - highlights, hover */
--color-sable: #F7F5F3        /* Fond - background */
--color-terre: #2C2A28        /* Texte - titres, corps */
```

## ✨ Animations

| Élément | Animation | Technologie |
|---------|-----------|-------------|
| Hero background | Dégradé en mouvement 15s | CSS @keyframes |
| Pins carte | Apparition stagger 50ms | Framer Motion |
| Cards profils | Hover translateY -4px | CSS transition |
| Témoignages | Crossfade 6s autoplay | Framer Motion |

## 📱 Breakpoints responsive

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Commandes

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build
```

## 📦 Dépendances principales

- next: ^15.1.6
- react: ^19.0.0
- framer-motion: ^12.4.1
- lucide-react: ^0.475.0
- tailwindcss: ^4.0.0

## 📝 Contenu

- **20 agences** listées dans lib/data.ts
- **6 profils** clients avec icônes
- **12 expertises** avec icônes Lucide
- **4 témoignages** dans le carousel
- Formulaire de contact fonctionnel
- Horaires d'ouverture complètes