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
    title: 'Stage opdracht CMC',
    src: '/images/cmc.png',
    url: '/mijnprojecten/',
  },
]

export const projectDetails: Detail[] = [
  {
    id: 1,
    vak: 'Project DevOps & Security (Bachelor)',
    datum: 'november 2022 - december 2022',
    detailTitle: 'Het casestudie project: de Minecraft app',
    description:
      'Voor het vak DevOps & Security heb ik een casestudy uitgevoerd. Ik koos voor het ontwikkelen van een Windows Forms-applicatie in .NET (C#) met een SQLite databasekoppeling. De afbeeldingen geven een beeld van de werking: de gebruiker kan informatie over Minecraft-blokken, monsters en planten opvragen en zelf data toevoegen. Door dit project heb ik diepgaande ervaring opgedaan met het integreren van databases binnen het .NET-framework.',
    image1: '/images/app.png',
    image2: '/images/output.png',
  },
  {
    id: 2,
    vak: 'Project Requirements Analysis (Bachelor)',
    datum: 'oktober 2022 - december 2022',
    detailTitle: 'Het requirement analysis project: fietsclub Platte Berg',
    description:
      'Tijdens het vak Requirement Analysis heb ik in groepsverband een digitaliseringstraject geanalyseerd voor een fictieve klant (de docent), namelijk fietsclub "Platte Berg". We hebben het volledige analyseproces gesimuleerd door herhaaldelijk met de klant in gesprek te gaan om de behoeften in kaart te brengen. Samen stelden we diverse rapporten, use-case diagrammen en een prototype op. Ik was specifiek verantwoordelijk voor enkele pagina\'s van het prototype en droeg bij aan het eindrapport. Dit project heeft mijn vaardigheden in functionele analyse, klantcommunicatie en professioneel presenteren aanzienlijk versterkt.',
    image1: '/images/usecasediagram.png',
    image2: '/images/platteberg.png',
  },
  {
    id: 3,
    vak: 'Stage IT Professional (Graduaat)',
    datum: 'februari 2025 - mei 2025',
    detailTitle: 'IT Professional: formbuilder voor het klantenportaal',
    description:
      'Als afstudeerproject voor mijn opleiding heb ik stage gelopen bij CMC Online in Dessel. Hier heb ik een Formbuilder ontwikkeld voor het klantenportaal, volledig gebouwd in React. Tijdens dit traject heb ik mijn expertise in datamodellering en prototyping verder uitgebreid en mijn kennis van het React-ecosysteem verdiept. Naast de technische aspecten heb ik waardevolle ervaring opgedaan met professionele soft skills, zoals vergaderen en het iteratief verwerken van feedback. Ik kijk met veel voldoening terug op deze eerste succesvolle kennismaking met het werkveld en ben klaar voor de volgende stap in mijn carrière.',
    image1: '/images/cmc.png',
    image2: '/images/cmc.png',
  },
]
