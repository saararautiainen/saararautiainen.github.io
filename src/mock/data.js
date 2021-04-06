import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Saara Rautiainen // Digital Designer', // e.g: 'Name | Developer'
  lang: 'fin, eng', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Saara Rautiainen',
  subtitle: 'A digital designer and front-end developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Currently studying Human-Technology Interaction (MSc) at Tampere University, minoring in media studies',
  paragraphTwo:
    'I completed my BSc on Digital Media at the University of the West of England, spending a year abroad at ITU Copenhagen studying Digital Media and Design. Previous professional role SAP Fiori/UI5 consultant and front-end developer at CGI.',
  paragraphThree:
    'An advocate of delightful technology. Interested in interaction design, front-end development, games and assistive technologies.',
  webskills:
    'HTML5, CSS3, SASS, Javascript, React, Node.js, Python, MongoDB/Mongoose, Jenkins, Git/Gitlab.',
  uxskills:
    'UX research, User-Centered Design, Co-Design, Design Thinking, Workshop Facilitation, Wireframing and Prototyping.',
  tools: 'Illustrator, Photoshop, Adobe XD, Figma, Sketch, Heroku, Wordpress.',
  resume: 'SaaraCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    path: 'bristolsound',
    img: 'saving_bristol_sound.png',
    solutionimgs: ['bristolsound-concept-1.png'],
    processimgs: [
      'bristolsound-explore.png',
      'bristolsound-ideation-1.png',
      'bristolsound-prototyping-1.png',
    ],
    imgs: '',
    title: 'Saving Bristol Sound',
    info:
      'Interaction design research and design project showcasing the musical history of Bristol. The primary focus was on conducting extensive research on locations, topics and interactions which could be applied to the design of a prototype. The project concentrates on the coming together of these aspects in order to use interactivity as a tool to express emotion and create meaningful experiences.',
    info2:
      'We designed an open space which the user could freely explore to interact with the space with their movement. This application will provide audio, varying from chanting crowds to musical performances. The sound level is dictated by the users position in the installation. ',
    technologies: ['Sketchup'],
    problem:
      'During the last few years Bristol has seen demonstrations against housing developers jeopardizing the operating of grassroots music venues, making it clear that it is a political issue with an emotional charge. The aim of Saving Bristol Sound was to convey these feelings to a larger audience through an interactive installation. For this we had to consider ways of capturing such an abstract concept as emotion, which can be reflected in various forms that can be open for interpretation. ',
    process:
      'Our research started at an exhibition called Seven Decades of Sound, hosted by the M-Shed in Bristol. It focused on the evolution of the city’s music scene over the last seventy years, and along with providing us inspiration for our topic, it featured a variety of interactive experiences. These included a booth equipped with headphones that users could use to listen to the ambience at various venues. This was of interest to us as it engaged with an audience that may not frequently visit these locales, and succeeded in telling a story of what the Bristolian music scene sounds and feels like. To carry out our future research , we mapped out integral topics, research questions and methods. The focus was on reaching out to Bristolians associated with iconic venues that have either been closed, or under the threat of closure, to gain firsthand information on why these venues are so beloved by Bristolians. Desk research was done to gain deeper understanding on why gentrification has led to this development, after which some on-site observation was conducted at yet another legendary Bristol venue, The Exchange. The field research provided proof of these venues cultivating discussion, social movement and networking opportunities as individuals from all over the South West would gather together mostly for the music, but also the community.',
    solution:
      'To pay homage to the Bristol music scene and the lasting impact it has had on the community and individuals, our installation would have to reflect the sentiment these locations hold. The solution was to capture individuals’ specific moments related to venues, something even a newcomer would comprehend as a meaningful occasion.  This would render the installation from being solely informative to it being a purposeful piece, inviting the user to take a journey to the mind of a collective with a strong connection to the music scene in Bristol. By introducing this new perspective, even someone with no insights on the subject would become more acquainted with the topic and evoke an emotional response',
    url: '',
    keywords: 'Interaction Design, Prototyping, Experience Design',
    videourl: 'https://player.vimeo.com/video/304749700',
    contributors: 'Alan Long, Ryan Avery, Saara Rautiainen',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    path: 'givr',
    img: 'givr_poster.png',
    solutionimgs: ['givr-chat.webp', 'givr-map.webp', 'givr-result.webp', 'givr-search.webp'],
    processimgs: ['givr-thematic1.png', 'givr-thematic2.png', 'givr-wireframing.png'],
    imgs: '',
    title: 'Givr',
    info:
      'Givr explores how technological solutions can help improve current societal issues. The platform functions as a communication platform for Bristolians and Bristolian charities, creating a more equal distribution of resource donations in the city.',
    info2:
      'The final prototype was designed after extensive interviews with non-profit organisations in Bristol.',
    problem:
      'Our project is addressing the homeless situation in Bristol and the lack of communication between the hubs. During our interview phase with different people from homeless organisations in Bristol, we have realised that the charities from the north of Bristol are dealing with an overflow of resources donated while the ones from the south are dealing with the opposite situation. Therefore, we chose to focus on creating a communication platform which would enable the general public to donate to charities/organisations in Bristol based upon their requests.',
    process:
      'Interviews were conducted to gain expert knowledge of the subject and as interviewing homeless people directly was not an option due to their vulnerable status, we decided to go to the organisations dealing with homelessness in Bristol. Themes that multiple interviewees mentioned were the collaboration between the general public and homeless charities, and the uneven distribution of resources between the north and south of Bristol. During our interview phase, we realised that the charities from the north of Bristol are dealing with an overflow of resources donated while the ones from the south are dealing with the opposite situation. Therefore, we chose to focus on creating a communication platform which would enable the general public to donate to charities/organisations in Bristol based upon their requests.',
    solution:
      'Research findings led to the idea of a platform which enables communication between the general public, charities and organisations with the aim of bridging the current communication gap and better distributing resources. The prototype was initially planned to allow users to make both requests and offers, similar to Tinder’s matching system . The user would input an item they would like to donate and be matched with the nearest three charities that had previously requested the item. After thorough discussion regarding endless possibilities of items and situations, we chose to add a login screen for charities/organisations only, allowing them to make both requests and offers, while presenting the general public with the nearest locations for donating what local charities/organisations are in need of.  A spokesperson from Caring in Bristol noted during user testing, that the application would be more suitable for smaller, street-based volunteer teams than big organisations. The changes were implemented and the second iteration of the concept was then tested with a representative of Julian Trust, who found the concept feasible and of interest also for his own organisation.',
    url: '',
    keywords: 'UX/UI design, UX research, Graphic Design, Mobile App Design',
    videourl: 'https://vimeo.com/341074275',
    contributors:
      'Alan Long, Ryan Avery, Saara Rautiainen, Teodora Muresan, Nikki Pantony, Rajon Rahman',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    path: 'robotux',
    img: 'nao-cover.png',
    solutionimgs: ['uxro-solution.png'],

    processimgs: [
      'uxro-problemspace.png',
      'uxro-interaction-flow.png',
      'uxro-attitudes.png',
      'uxro-interviewfind.png',
    ],
    imgs: '',
    title: 'Social Robotics - Pepper the Language Tutor',
    info:
      'The project examines the possibilities and challenges of utilizing social robots in foreign language learning. The user research of the project aimed to focus on the cross-cultural aspect of Human-Robot Interaction (HRI) in Robot-Assisted Language Learning (RALL) and look into the attitudes surrounding social robotics. We had the opportunity of learning about social robotics from the talented Minja Axelsson, and utilizing co-creation canvases designed by her in our project. ',
    info2:
      'The project was conducted in the Autumn of 2020, which called for creativity and flexibility, as the research, ideation and implementation was conducted between two countries on Zoom and Mural.',
    problem:
      'Our objective for the project was to research our target users’ attitudes towards social robots, especially in the realm of language-learning. There was an emphasis on cross-culturality, which is why for two target groups were decided on: students from Finland as well as Southeast Asia. We wanted to find out if there were any differences between the cultures in regards to the acceptance of the robot, their cultural needs in language learning as well as their expectations from a social robot. The co-creation canvases used are designed by Minja Axelsson.',
    process:
      'A preliminary user study was conducted with two target groups consisting of Finnish and South-Asian participants. The participants of the study were mostly students or users from a similar age group. The pre-study aimed to focus on the cross-cultural aspect of Human-Robot Interaction (HRI) in Robot-Assisted Language Learning (RALL) and look into the attitudes surrounding social robotics. The pre-study consisted of semi-structured interviews and a survey, which included questions regarding the participants’ perceptions of robots as language tutors, as well as the impact the robots could have on their language learning goals. The language learning goals of the participants and their attitudes towards social robots did not differ significantly between the target groups, however, there were some differences in ways in which Finnish and South-Asians generally approached language learning, and what they expected from the robot.',
    solution:
      'The solution accommodates different types of language learners with varying requirements from our findings. Through utilizing a human-centered approach we distinguished three different study topics that students may want to focus on, regarding their learning goals: vocabulary, practical study, and conversation. The design was implemented on Pepper robot and the prototype of the concept was then evaluated by participants who filled out a user evaluation survey. The prototype was received well, but the responses in the final survey, as well as the first one, revealed some hesitation toward interacting with a social robot, and doubts about their skills. The overall attitudes were nevertheless positive and suggested that the participants could see the robot utilized as a motivator for young students, for instance. As the majority of the participants were still rather skeptical, we concluded that within the frames of current technology, robots can help improve language learning by increasing engagement and motivation but still pose limitations. Thus, social robots are best utilized as tools for learning or tutors for extra practice.',
    url: '',
    keywords: 'UX design, UX research, Social Robotics, Assistive technologies',
    videourl: 'https://youtu.be/GVa0C_OLZcY',
    contributors: 'Ishan Regmi, Venla Kamppari, Saara Rautiainen',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am always open for a chat!',
  btn: 'Email me',
  email: 'saara.a.rautiainen@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'behance',
      url: 'https://www.behance.net/saaraaraut1577',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/saara-rautiainen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/saararautiainen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
