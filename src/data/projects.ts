import type {Project} from '@/interfaces/Project.ts'
import type {Detail} from '@/interfaces/Detail.ts'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Casestudy Minecraftapp',
    src: '/images/app.png',
    url: '/mijnprojecten/',
  },
  {
    id: 2,
    title: 'Analyseproject fietsclub platteberg',
    src: '/images/usecasediagram.png',
    url: '/mijnprojecten/',
  },
  {
    id: 3,
    title: 'Web Application Project PHP',
    src: '/images/ProjectPHPCode.png',
    url: '/mijnprojecten/',
  },
  {
    id: 4,
    title: 'Stage opdracht CMC',
    src: '/images/cmc.png',
    url: '/mijnprojecten/',
  },
]

export const projectDetails: Detail[] = [
  {
    id: 1,
    vak: 'Project DevOps en Security (Bachelor)',
    datum: 'november 2022 - december 2022',
    detailTitle: 'Het casestudie project: de minecraft app',
    description:
      'Voor het vak DevOps and security heb ik een case study gemaakt. Er waren verschillende opties, ik koos voor een applicatie maken met .NET in C# met Windows form, en een database connectie, in mijn geval Sqlite. De afbeeldingen hiernaast geven een idee hoe de app werkt. Het idee van de app is dat de gebruiker data uit een database kan opvragen. Deze data is info over de verschillende blokken/monsters/planten van Minecraft. De gebruiker kan zelf ook data toevoegen. Alle data zit opgeslagen in een database, een SqliteDB. Hierdoor heb ik geleerd te werken met C# in .NET met een DB.',
    image1: '/images/app.png',
    image2: '/images/output.png',
  },
  {
    id: 2,
    vak: 'Project Requirements Analysis (Bachelor)',
    datum: 'oktober 2022 - december 2022',
    detailTitle: 'Het requirement analysis project: fietsclub platte berg',
    description:
      'Voor het vak Requirement Analysis heb ik in groep een analyse gemaakt van een opdracht van een klant (in werkelijkheid een docent). In het geval van mijn groep ging het om een fietsclub "platte berg" die nood had aan digitalisering. Tijdens het project zijn we meermaals bij de "klant" langsgegaan om de analyse zo goed mogelijk te simuleren, en te leren hoe dit er in het echt, in IT-bedrijven aan toe gaat. Voor het project hebben we in groep meerdere rapporten uitgewerkt, en een prototype. Het use case diagram en het prototype wat we gemaakt hebben is hierboven te zien. Ikzelf heb voor dit groepswerk gewerkt aan een paar pagina\'s van het prototype, en gezamelijk meegeholpen aan het rapport en het use case diagram. Ik heb tijdens dit project veel geleerd over de stappen van het analyseproces, het maken van use case diagrammen, opstellen van rapporten, en analyseren in het algemeen. Daarnaast heb ik ook geleerd over communiceren met de klant, presenteren van werk, en samen met de klant meedenken over het product.',
    image1: '/images/usecasediagram.png',
    image2: '/images/platteberg.png',
  },
  {
    id: 3,
    vak: 'Project PHP (Bachelor)',
    datum: 'februari 2023 - juni 2023',
    detailTitle: 'PHP project: de magazijnbeheer-webapplicatie',
    description:
      'Tijdens het PHP project is het de bedoeling de leerstof van het vak web application in PHP in de praktijk te brengen. Ook de leerstof uit het vak Requirement Analysis komt erbij. Tijdens een eerder project voor Requirement Analysis is er een analyserapport opgesteld voor een "klant" (docent die deze rol speelt), net zoals met het analyseproject. Dit project is ook te vinden tussen mijn projecten. De bedoeling van dit project is dat het analyserapport wordt omgezet in een echt werkende web-applicatie, voor de klant. In dit geval gaat het om een klant die een magazijnbeheer-applicatie wil om zijn magazijn mee te beheren. Het project wordt uitgewerkt in Laravel. Het project is begonnen met het maken van de database, zoals beschreven in het rapport. Daarna ben ik met het team begonnen met de views te maken, bijvoorbeeld de functie om te kijken welke producten in het magazijn beschikbaar zijn. Voor dit project heb ik met een teamlid samen de database opgezet, en daarnaast een aantal views gemaakt. Ook heb ik meegeholpen met de hosting van de site. Waar ik eerst individueel aan Laravel webapplicaties werkte, doe ik dit nu in team. Het meeste leer ik bij dit project bij uit het in team samenwerken aan een laravel web-app. Maar ook mijn kennis van laravel zelf wordt verder uitgebreid, dankzij het teamwerk en de grootte van het project. Daarnaast heb ik bij de voorbereidingen mijn skills op het gebied van analyse ook verder ontwikkeld.',
    image1: '/images/ProjectPHPCode.png',
    image2: '/images/ProjectPHPSite.png',
  },
  {
    id: 4,
    vak: 'Stage IT Professional (Graduaat)',
    datum: 'februari 2025 - mei 2025',
    detailTitle: 'IT Professional: formbuilder voor het klantenportaal van het bedrijf',
    description:
      'Als afsluiter van mijn opleiding heb ik voor CMC Online in Dessel tijdens mijn stage een formbuilder ontwikkeld voor het klantenportaal. Deze is gemaakt in React. Tijdens dit project heb ik mijn skills op het gebied van datamodelleren en prototyping verbeterd. Daarnaast is mijn kennis van React gegroeid, net als mijn kennis van verschillende packages die voor React beschikbaar zijn. Ook heeft dit project mij de kans geboden om mijn soft skills te verbeteren, zoals vergaderen en feedback vragen aan de werkplekbegeleider. Tot slot heb ik tijdens het werken aan het project ook een goed idee gekregen hoe het werken in het werkveld eraan toe gaat. Na dit project ben ik blij dat ik mijn eerste kennismaking met het werkveld bij CMC Online mocht beleven, en kijk dan ook dankbaar terug en vol goede moed vooruit naar mijn verdere carrière in het werkveld!',
    image1: '/images/cmc.png',
    image2: '/images/cmc.png',
  },
]
