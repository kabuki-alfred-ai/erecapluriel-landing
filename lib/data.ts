// Données réelles scrapées du site ERECApluriel

export const siteData = {
  name: "ERECApluriel",
  tagline: "Cabinets d'expertise comptable et gestion d'entreprise Bordeaux et Sud-Ouest",
  description: "20 agences, 6 profils clients, 12 expertises pour accompagner votre entreprise",
  
  contact: {
    address: "10 Rue Furtado, 33800 Bordeaux",
    phone: "05 56 33 39 30",
    email: "contact@erecapluriel.fr",
    social: {
      linkedin: "https://www.linkedin.com/company/erecapluriel",
      facebook: "https://www.facebook.com/erecapluriel",
      youtube: "https://www.youtube.com/channel/UCfqiPtmg7cGcU_yTzC2yUpQ"
    }
  },

  agencies: [
    {
      id: "bordeaux-furtado",
      name: "Bordeaux - Rue Furtado",
      address: "10, rue Furtado",
      city: "33800 Bordeaux",
      phone: "05 56 33 39 30",
      email: "bordeaux@erecapluriel.fr",
      hours: "Lundi au Jeudi : 8h45-12h30 / 13h30-17h30 | Vendredi : 8h45-12h45",
      mapUrl: "https://maps.google.com/?q=10+rue+Furtado+33800+Bordeaux"
    },
    {
      id: "bordeaux-tourny",
      name: "Bordeaux - Allées de Tourny",
      address: "46 Allées de Tourny",
      city: "33000 Bordeaux",
      phone: "05 56 86 04 22",
      email: "bordeaux-tourny@erecapluriel.fr",
      hours: "Lundi au Vendredi : 9h-12h30 / 13h30-18h",
      mapUrl: "https://maps.google.com/?q=46+Allées+de+Tourny+33000+Bordeaux"
    },
    {
      id: "pessac",
      name: "Pessac",
      address: "6 bis, Av. du Général Leclerc",
      city: "33600 Pessac",
      phone: "05 47 50 15 20",
      email: "pessac@erecapluriel.fr",
      hours: "Lundi au Jeudi : 9h-13h / 14h-18h | Vendredi : 9h-13h / 14h-17h",
      mapUrl: "https://maps.google.com/?q=6+bis+Av+Général+Leclerc+33600+Pessac"
    },
    {
      id: "merignac",
      name: "Mérignac",
      address: "81 Av. de Magudas",
      city: "33700 Mérignac",
      phone: "05 56 12 18 52",
      email: "merignac@erecapluriel.fr",
      hours: "Lundi au Vendredi : 9h-17h",
      mapUrl: "https://maps.google.com/?q=81+Av+de+Magudas+33700+Mérignac",
      note: "Anciennement Groupe CAEC - Rejoint ERECApluriel en septembre 2023"
    },
    {
      id: "pauillac",
      name: "Pauillac",
      address: "9, rue Franklin",
      city: "33250 Pauillac",
      phone: "05 56 59 06 38",
      email: "pauillac@erecapluriel.fr",
      hours: "Lundi au Jeudi : 9h-12h / 14h-17h | Vendredi : 9h-12h",
      mapUrl: "https://maps.google.com/?q=9+rue+Franklin+33250+Pauillac",
      specialty: "Spécialisée en bénéfice agricole (Médoc viticole)"
    },
    { id: "andernos", name: "Andernos", city: "Andernos-les-Bains" },
    { id: "artigues", name: "Artigues", city: "Artigues-près-Bordeaux" },
    { id: "bayonne", name: "Bayonne", city: "Bayonne" },
    { id: "biganos", name: "Biganos", city: "Biganos" },
    { id: "gujan-mestras", name: "Gujan-Mestras", city: "Gujan-Mestras" },
    { id: "hossegor", name: "Hossegor", city: "Soorts-Hossegor" },
    { id: "lacanau", name: "Lacanau", city: "Lacanau" },
    { id: "langon", name: "Langon", city: "Langon" },
    { id: "la-rochelle", name: "La Rochelle", city: "La Rochelle" },
    { id: "lege-cap-ferret", name: "Lège-Cap-Ferret", city: "Lège-Cap-Ferret" },
    { id: "lesparre", name: "Lesparre", city: "Lesparre-Médoc" },
    { id: "les-sables", name: "Les Sables-d'Olonne", city: "Les Sables-d'Olonne" },
    { id: "lucon", name: "Luçon", city: "Luçon" },
    { id: "parentis", name: "Parentis", city: "Parentis-en-Born" },
    { id: "saint-andre", name: "Saint-André-de-Cubzac", city: "Saint-André-de-Cubzac" },
    { id: "salles", name: "Salles", city: "Salles" }
  ],

  expertises: [
    {
      title: "Comptabilité & Fiscalité",
      description: "Tenue comptable, bilans, déclarations fiscales, optimisation fiscale",
      icon: "Calculator"
    },
    {
      title: "Paie & Ressources humaines",
      description: "Gestion de paie, contrats, droit social, formation",
      icon: "Users"
    },
    {
      title: "Juridique des sociétés",
      description: "Constitution, modification, cession de sociétés",
      icon: "Scale"
    },
    {
      title: "Conseil en gestion",
      description: "Accompagnement stratégique, tableaux de bord",
      icon: "TrendingUp"
    },
    {
      title: "Audit",
      description: "Commissariat aux comptes, audit légal et contractuel",
      icon: "Search"
    },
    {
      title: "Services administratifs",
      description: "Externalisation administrative, secrétariat",
      icon: "Clipboard"
    },
    {
      title: "Conseil patrimonial",
      description: "Protection sociale, gestion de patrimoine, retraite",
      icon: "Shield"
    },
    {
      title: "Entreprise en difficulté",
      description: "Prévention, redressement judiciaire, liquidation",
      icon: "AlertTriangle"
    },
    {
      title: "Digitalisation",
      description: "Transition numérique, dématérialisation, outils collaboratifs",
      icon: "Monitor"
    },
    {
      title: "Consolidation & Reporting",
      description: "Établissements de consolidation, reporting financier",
      icon: "PieChart"
    },
    {
      title: "RSE",
      description: "Responsabilité Sociétale des Entreprises, bilan carbone",
      icon: "Leaf"
    }
  ],

  profiles: [
    {
      title: "Créateur",
      description: "Accompagnement dans la création de votre entreprise",
      icon: "Rocket"
    },
    {
      title: "En croissance",
      description: "Optimisation et structuration de votre développement",
      icon: "TrendingUp"
    },
    {
      title: "Cédant",
      description: "Préparation et réalisation de la transmission",
      icon: "HandCoins"
    },
    {
      title: "Repreneur",
      description: "Due diligence et accompagnement dans la reprise",
      icon: "Briefcase"
    },
    {
      title: "Entreprise en difficulté",
      description: "Solutions pour redresser la situation",
      icon: "LifeBuoy"
    },
    {
      title: "Dirigeant & Patrimoine",
      description: "Gestion patrimoniale et protection sociale",
      icon: "UserCog"
    }
  ],

  sectors: [
    "BTP", "Immobilier", "CHR – HPA", "Santé", "Commerçant", 
    "Comptes de campagne", "Agriculture / Viticulture", "Industries",
    "Professions libérales", "Transports", "Services à la personne"
  ],

  testimonials: [
    {
      name: "Thomas Fondevila",
      role: "Expert-comptable et Commissaire aux comptes associé",
      agency: "Bordeaux",
      quote: "Participer à l'aventure entrepreneuriale de nos clients vers le chemin du succès.",
      fullQuote: "Créer et développer son entreprise est un long processus de construction, de prise de risques, et de succès, dans lequel l'expert-comptable doit jouer un rôle de coach, de supporter et de garde-fou pour le dirigeant. Notre ambition : écouter nos clients, parfois les challenger, les protéger et les conseiller dans toutes les décisions stratégiques d'entrepreneur."
    },
    {
      name: "Sébastien Granghon",
      role: "Expert-comptable",
      agency: "Bordeaux / Pessac",
      quote: "Bien connaitre nos clients pour les aiguiller.",
      fullQuote: "Je reste le plus à l'écoute possible pour anticiper les demandes des dirigeants, les conseiller et les rassurer dans leurs démarches. Le rendez-vous bilan et les points réguliers sont indispensables. L'anticipation est la clé dans le contexte économique actuel."
    },
    {
      name: "Séverine Triau",
      role: "Responsable d'agence",
      agency: "Pauillac",
      quote: "Maintenir un contact régulier avec mes clients pour s'adapter à leurs besoins.",
      fullQuote: "Je suis très attachée à l'ADN d'ERECApluriel : compétence et relation humaine. Ces deux piliers du développement de notre cabinet sont les fondamentaux pour offrir le meilleur service à nos clients. Le Médoc étant une région agricole et viticole, je me suis spécialisée en bénéfice agricole."
    },
    {
      name: "Isabelle Errard",
      role: "Experte-comptable",
      agency: "Bordeaux / Pauillac",
      quote: "M'engager auprès de mes clients, pour contribuer à l'atteinte de leurs objectifs."
    },
    {
      name: "Christophe Caron",
      role: "Expert-comptable",
      agency: "Bordeaux",
      quote: "L'expert-comptable est devenu un expert conseil."
    },
    {
      name: "Vincent Nigro",
      role: "Expert-comptable",
      agency: "Bordeaux",
      quote: "Chaque client est une histoire, chaque collaborateur est un pilier, chaque jour est une nouvelle opportunité."
    },
    {
      name: "Florence Lapeyrere",
      role: "Experte-comptable",
      agency: "Mérignac",
      quote: "Être là pour nos clients, chaque jour avec dévouement."
    },
    {
      name: "Céline Wangermez",
      role: "Experte-comptable",
      agency: "Mérignac",
      quote: "La confiance de nos clients est notre priorité, chaque interaction compte."
    }
  ],

  introText: `De nos jours, le commerce mondial est en perpétuelle évolution et il faut parfois savoir prendre des décisions rapides pour rester compétitif ou décrocher de nouveaux marchés... C'est ici que l'aide et le conseil de son expert-comptable peut s'avérer crucial pour minimiser au maximum le risque d'erreur dans sa stratégie commerciale.

La notion de proximité avec nos clients a toujours fait partie de notre façon de concevoir un partenariat efficace avec les entreprises en nous plaçant comme collaborateur comptable à disposition de la société.

Quel que soit le secteur d'activité de notre clientèle, industrie, professions libérales, commerces, agriculture, transport, CHR, les différents secteurs de la santé, les services à la personne... quelle que soit la taille de l'entreprise : TPE, PME/PMI ou grands groupes, nous mettons à disposition de nos clients des solutions de suivis sur mesure.`
};
