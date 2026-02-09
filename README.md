# ERECApluriel - Site Web

Site web de l'expert-comptable ERECApluriel, présent dans tout le Sud-Ouest avec 15 agences.

## 🎨 Direction artistique : "Territoire Vivant"

Une identité visuelle chaleureuse et authentique, inspirée par les terres du Sud-Ouest :
- **Terracotta (#C65D3B)** - Chaleur méditerranéenne
- **Océan (#2E6B75)** - Profondeur et sérénité
- **Abricot (#F4A261)** - Touches lumineuses
- **Sable (#F7F5F3)** - Fond naturel et apaisant
- **Terre brûlée (#2C2A28)** - Textes et contrastes

## 🚀 Stack Technique

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📦 Installation

```bash
# Cloner le repository
git clone <repository-url>
cd erecapluriel

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

Le site sera disponible sur `http://localhost:3000`

## 🏗️ Structure du projet

```
erecapluriel/
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux + animations
│   ├── layout.tsx         # Layout racine avec polices
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ProfilesSection.tsx
│   ├── MapSection.tsx
│   ├── ExpertisesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── NewsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/                   # Utilitaires et données
│   └── data.ts
├── types/                 # Types TypeScript
│   └── index.ts
├── public/               # Assets statiques
├── next.config.ts        # Configuration Next.js
├── package.json
├── tsconfig.json
└── README.md
```

## ✨ Animations implémentées

1. **Hero** : Dégradé terracotta→océan en mouvement lent (15s loop CSS)
2. **Carte agences** : Apparition progressive des pins avec stagger 50ms (on scroll)
3. **Profils** : Cards qui lèvent légèrement au hover (+ translateY -4px, 200ms)
4. **Témoignages** : Fade-in doux, crossfade automatique (6s)

## 🎭 Typographie

- **Titres** : Sora (Google Fonts) - Moderne et géométrique
- **Corps** : Inter - Lisible et professionnel
- **Citations** : Crimson Text Italic - Élégance classique

## 📱 Responsive

Design mobile-first :
- Mobile : < 640px
- Tablet : 640px - 1024px
- Desktop : > 1024px

## 🔧 Configuration de build

Le site est configuré pour un export statique (`output: 'export'`).
Le dossier de sortie est `dist/`.

## 📄 Licence

© 2025 ERECApluriel. Tous droits réservés.
Réalisé par Kabuki Team.