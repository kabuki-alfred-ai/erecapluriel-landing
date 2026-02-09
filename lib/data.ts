import { Agency, Profile, Expertise, Testimonial } from "@/types";

export const agencies: Agency[] = [
  { id: "1", name: "ERECApluriel", city: "Bordeaux", x: 58, y: 52 },
  { id: "2", name: "ERECApluriel", city: "Arcachon", x: 45, y: 62 },
  { id: "3", name: "ERECApluriel", city: "La Rochelle", x: 28, y: 38 },
  { id: "4", name: "ERECApluriel", city: "Bayonne", x: 25, y: 75 },
  { id: "5", name: "ERECApluriel", city: "Andernos", x: 42, y: 58 },
  { id: "6", name: "ERECApluriel", city: "Artigues", x: 60, y: 50 },
  { id: "7", name: "ERECApluriel", city: "Biganos", x: 40, y: 65 },
  { id: "8", name: "ERECApluriel", city: "Gujan-Mestras", x: 43, y: 64 },
  { id: "9", name: "ERECApluriel", city: "Hossegor", x: 30, y: 72 },
  { id: "10", name: "ERECApluriel", city: "Lacanau", x: 38, y: 55 },
  { id: "11", name: "ERECApluriel", city: "Langon", x: 55, y: 62 },
  { id: "12", name: "ERECApluriel", city: "Lège-Cap-Ferret", x: 40, y: 60 },
  { id: "13", name: "ERECApluriel", city: "Lesparre", x: 35, y: 48 },
  { id: "14", name: "ERECApluriel", city: "Les Sables-d'Olonne", x: 25, y: 25 },
  { id: "15", name: "ERECApluriel", city: "Luçon", x: 30, y: 22 },
  { id: "16", name: "ERECApluriel", city: "Mérignac", x: 56, y: 50 },
  { id: "17", name: "ERECApluriel", city: "Parentis", x: 35, y: 68 },
  { id: "18", name: "ERECApluriel", city: "Pauillac", x: 50, y: 48 },
  { id: "19", name: "ERECApluriel", city: "Saint-André-de-Cubzac", x: 58, y: 46 },
  { id: "20", name: "ERECApluriel", city: "Salles", x: 48, y: 70 },
];

export const profiles: Profile[] = [
  {
    id: "1",
    title: "Créateur d'entreprise",
    description: "Du business plan à l'immatriculation, nous vous guidons dans chaque étape de la création de votre entreprise.",
    icon: "Rocket",
  },
  {
    id: "2",
    title: "En croissance",
    description: "Accompagnement stratégique pour structurer votre développement et sécuriser votre expansion.",
    icon: "TrendingUp",
  },
  {
    id: "3",
    title: "Cédant",
    description: "Préparation et optimisation de la cession de votre entreprise pour valoriser votre patrimoine.",
    icon: "Handshake",
  },
  {
    id: "4",
    title: "Repreneur",
    description: "Due diligence et structuration juridique pour une acquisition sécurisée et performante.",
    icon: "Target",
  },
  {
    id: "5",
    title: "Entreprise en difficulté",
    description: "Diagnostic préventif et solutions de redressement pour sécuriser votre activité.",
    icon: "LifeBuoy",
  },
  {
    id: "6",
    title: "Dirigeant & Gestion patrimoniale",
    description: "Optimisation fiscale et patrimoniale personnalisée pour protéger et faire fructifier vos biens.",
    icon: "Shield",
  },
];

export const expertises: Expertise[] = [
  { id: "1", title: "Comptabilité & fiscalité", icon: "Calculator" },
  { id: "2", title: "Paie & Ressources humaines", icon: "Users" },
  { id: "3", title: "Juridique des sociétés", icon: "Scale" },
  { id: "4", title: "Conseil en gestion", icon: "LineChart" },
  { id: "5", title: "Audit", icon: "Search" },
  { id: "6", title: "Services administratifs", icon: "FileText" },
  { id: "7", title: "Conseil patrimonial", icon: "Gem" },
  { id: "8", title: "Protection sociale", icon: "Heart" },
  { id: "9", title: "Entreprise en difficulté", icon: "AlertTriangle" },
  { id: "10", title: "Digitalisation", icon: "Monitor" },
  { id: "11", title: "Consolidation & Reporting", icon: "BarChart3" },
  { id: "12", title: "RSE", icon: "Leaf" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "ERECApluriel a été un véritable partenaire dans le développement de notre entreprise. Leur réactivité et leur expertise nous ont permis de nous concentrer sur notre cœur de métier.",
    author: "Marie Dubois",
    company: "Dubois Construction",
    location: "Bordeaux",
  },
  {
    id: "2",
    quote: "Un cabinet à taille humaine avec une expertise de grande envergure. Je recommande vivement leur accompagnement pour la gestion patrimoniale.",
    author: "Pierre Martin",
    company: "Martin & Associés",
    location: "Arcachon",
  },
  {
    id: "3",
    quote: "Grâce à ERECApluriel, nous avons réussi notre transmission familiale dans les meilleures conditions. Leur accompagnement a été précieux.",
    author: "Jeanne Lefebvre",
    company: "Vignobles Lefebvre",
    location: "Pauillac",
  },
  {
    id: "4",
    quote: "L'équipe est disponible, compétente et proactive. Un vrai soutien pour notre croissance sur le littoral atlantique.",
    author: "Thomas Bernard",
    company: "Bernard Immobilier",
    location: "La Rochelle",
  },
];