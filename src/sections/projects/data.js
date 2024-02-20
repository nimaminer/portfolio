import parse from 'html-react-parser'

export const data = [
    {
        border: "4px solid #00F9AE",
        projectType: "'University Project'",
        title: "DailyFlow",
        mainText: parse(`DailyFlow serves as a self-organization multi-model app designed to assist university students in managing their academic and personal schedules, offering stress-relief resources, evaluating the balance between study and life, and fostering a sense of accountability and motivation through a community forum.<br></br>The genesis of DailyFlow was motivated by the intention to promote a more sustainable study/life balance among university students. It aims to address their specific needs and frustrations, ultimately enhancing their mental well-being. The ultimate goal was to develop an app that empowers university students to efficiently organize their lives, embrace a more balanced lifestyle, and significantly reduce the elevated stress levels resulting from academic and professional commitments.`),
        firstText: ["Tools:", parse(`<strong>Figma, Adobe Premiere Pro, Office 365, Miro, Loop11.</strong>`)],
        secondText: ["Design Methods:",  parse(`<strong>Primary & Secondary Research </strong>(background research, questionnaires, interviews, diary studies, storyboards, personas, and thematic analysis), <strong>Ideation</strong> (brainstorming, reverse thinking, challenge assumption, and crazy 8s), <strong>Prototyping</strong> (sketches, wireframes, and mid-high fidelity mock-ups), <strong>Testing</strong> (think aloud protocols, cognitive walkthroughs, loop11 testing, and heuristic evaluations), <strong>Presentations</strong> (in-person & recorded presentations, creating a promotional video for the final product).`)],
        mBottom: 70,
        imageOneSrc: "images/projects/dailyflow/phone.png",
        imageOneAlt: "Image of dailyflow's layout on iphone 13 pro",
        imageOneWidth: 460,
        imageTwoSrc: "images/projects/dailyflow/mac.png",
        imageTwoAlt: "Image of dailyflow's layout on mac",
        imageTwoWidth: 450,
        secInfoText: "Unit Of Study: DECO2200: Interaction Design Studio",
        buttonProps: ["#00F9AE", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Full Design Process / Deliverables", 25, "#000000", 440, 50],
        id: "dailyflow",
        isOpen: false
    },
    {
        border: "4px solid #00F9AE",
        projectType: "'University Project'",
        title: "Sounds Media",
        mainText: parse(`"Sounds Media" is a web application created to monitor users' media consumption, with a primary emphasis on tracking the songs played on Spotify. The application relies on the Spotify API to collect accurate and current song data, ensuring users receive dependable information. Through the API, the web app can also observe individual users' preferences for songs, artists, and genres on Spotify. Users can choose to automatically track their Spotify activity, while also having the option to manually add songs to their collection, allowing for more flexible data inputs.<br></br>Sounds aims to provide a comprehensive understanding of users' music preferences by analyzing the total number of songs listened to in the past week, identifying main artists frequently played, highlighting primary songs repeatedly enjoyed, and tracking the main genres engaged with.`),
        firstText: ["Tools:", parse(`<strong>Figma, GitHub, Visual Studio Code, Node JS, Git, Slides, APIs, Adobe Illustrator.</strong>`)],
        secondText: ["Languages:", parse(`<strong>HTML, CSS, JavaScript</strong>`)],
        thirdText: ["Design Methods: ",  parse(`<strong>Prototyping</strong> (wireframes, and mid-high fidelity mock-ups), logo illustration`)],
        mBottom: 45,
        imageOneSrc: "images/projects/sounds-media/pc.png",
        imageOneAlt: "Image of Sounds Media's layout on desktop",
        imageOneWidth: 460,
        imageTwoSrc: "images/projects/sounds-media/phone.png",
        imageTwoAlt: "Image of Sounds Media's layout on iphone 14 pro",
        imageTwoWidth: 390,
        secInfoText: "Unit Of Study: DECO2017 Advanced Web Design",
        buttonProps: ["#00F9AE", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Documentation / Code", 25, "#000000", 310, 50],
        id: "sounds-media",
        isOpen: false
    },
    {
        border: "4px solid #00F9AE",
        projectType: "'University Project'",
        title: '"Iron"Man',
        mainText: parse(`"Iron" Man emerged as a superhero focused on household tasks, an inventive persona crafted to guide master the use of multiple 3D modeling software. In addition to the superhero character, the project expands to include the creation of an entire brand, complete with its own chocolate bar and distinctive wrapper. The venture extends further by crafting 3D models representing "Iron”Man's source of power and his arch-nemesis.<br></br>The primary objective behind this project was to gain insights into the process of introducing a newly conceptualized product to the market. This involves the development of brand posters that showcase the superhero persona and its associated products. The culmination of the project includes presenting these posters to potential buyers, providing a practical and hands-on experience in both the technical aspects of 3D modeling and the entrepreneurial aspects of product branding and marketing.`),
        firstText: ["Tools:", parse(`<strong>Blender, Fusion360, Rhino7, 3DPrinterOS, Cura, Adobe Photoshop, Adobe InDesign.</strong>`)],
        secondText: ["Skills:", parse(`<strong>Creating millimeter precise 3D models, Creating and applying materials, Using 3D printers, Crafting promotional posters.</strong>`)],
        mBottom: 20,
        imageOneSrc: "images/projects/ironman/materials.png",
        imageOneAlt: "Image of three materials made in Blender",
        imageOneWidth: 470,
        imageTwoSrc: "images/projects/ironman/poster.png",
        imageTwoAlt: "Image of billboard showing IronMan's promotional poster",
        imageTwoWidth: 480,
        secInfoText: "Unit Of Study: DECO2018 3D Modelling And Fabrication",
        buttonProps: ["#00F9AE", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Full Design Process", 25, "#000000", 275, 50],
        id: "ironman",
        isOpen: false
    },
    {
        border: "4px solid #00F9AE",
        projectType: "'University Project'",
        title: 'VirtualLife',
        mainText: parse(`VirtualLife was conceived as a speculative fiction narrative to illustrate the future landscape of data and its utilization by individuals and organizations. This narrative envisions a dystopian future where corporations wield extensive and invasive influence over the behavior of citizens. This influence is a consequence of the widespread adoption of a hyper-immersive virtual reality (VR) simulation game known as "VirtualLife." In this future scenario, the technology "mines" the thoughts and actions of users through a VR headset, with the extracted data being utilized to power targeted marketing and artificial intelligence algorithms. The addictive nature of "VirtualLife" has led many individuals to lose touch with reality.<br></br>The primary goal of this project was to delve into the realm of data mining and assess the responsible use of data. This objective was achieved through extensive research into various responsible design topics, including privacy, autonomy, life-centered design, and others.`),
        firstText: ["Skills:", parse(`<strong>Responsible design, ethical considerations, communication, critical thinking, constructing detailed case studies & annotated bibliographies.</strong>`)],
        secondText: ["Design Methods:", parse(`<strong>Background Research, Ideation</strong> (brainstorming), <strong>Presentations</strong> (in-person & recorded presentations, creating a podcast).`)],
        mBottom: 80,
        imageOneSrc: "images/projects/virtuallife/vr.png",
        imageOneAlt: "Image of VirtualLife's VR Headset",
        imageOneWidth: 550,
        secInfoText: "Unit Of Study: DECO2015 Responsible Design For Innovation ",
        buttonProps: ["#00F9AE", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Case Studies / Magazine / Podcast", 25, "#000000", 450, 50],
        id: "virtuallife",
        isOpen: false
    },
    {
        border: "4px solid #00F9AE",
        projectType: "'University Project'",
        title: 'The Line',
        mainText: parse(`"The Line" presents a comprehensive solution that integrates physical, spatial, and digital elements in design to tackle a specific problem statement. Its primary aim is to prompt commuters to actively engage with their community, fostering awareness beyond their individual perspectives. It serves as a catalyst for discussions among commuters and facilitates interaction with other stations in the vicinity.<br></br>The mechanism involves displaying a daily statement on a large physical screen at the central part of the station. Commuters can digitally cast their votes using either their phones (via an app or web app) or their Opal cards (linked to a Line account: votes are registered based on the commuters' chosen paths to enter the station).The resulting data is visually represented to show how individual opinions align with those of other commuters within the same station. Additionally, this visualization is compared with the outcomes from other stations; And for those keen to delve deeper into the opinions expressed, a comment tool is available within the connected app.`),
        firstText: ["Tools:", parse(`<strong>Adobe XD, Adobe Premiere Pro, Adobe Illustrator, Miro.</strong>`)],
        secondText: ["Design Methods: ", parse(`<strong>Primary & Secondary Research</strong> (background research, questionnaires, interviews, observations, storyboards, personas, insight analysis, and thematic analysis), <strong>Ideation, Prototyping</strong> (sketches, wireframes, and mid-high fidelity mock-ups), <strong>Testing</strong> (think aloud protocols), <strong>Presentations</strong> (in-person & recorded presentations, creating a promotional video for the final product).`)],
        mBottom: 30,
        imageOneSrc: "images/projects/the-line/phone.png",
        imageOneAlt: "Image of The line's layout on Iphone 14",
        imageOneWidth: 470,
        imageTwoSrc: "images/projects/the-line/poster.png",
        imageTwoAlt: "Image of billboard showing The Line's promotional poster",
        imageTwoWidth: 470,
        secInfoText: "Unit Of Study: DECO2014 User Experience Design Studio",
        buttonProps: ["#00F9AE", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Full Design Process / Deliverables", 25, "#000000", 440, 50],
        id: "the-line",
        isOpen: false
    },
    {
        border: "4px solid #FF7F38",
        projectType: "'University Project'",
        title: 'Chat Forum Moderator',
        mainText: parse(`In this assignment, my primary responsibility involved developing a program named moderator.py, designed to oversee a chat forum. Additionally, I created a testing program for moderator.py. The moderator program is structured into various components, encompassing command line argument handling, file reading and writing, text replacement, and class implementation.<br></br>The primary objective of this project was to demonstrate proficiency in programming skills necessary for constructing a self-sufficient moderator program. This program has the capability to censor specific words, track the count of comments and replies, assign positive or negative points based on these metrics, and document all findings in a distinct file.`),
        firstText: ["Languages:", parse(`<strong>Python</strong>`)],
        secondText: ["Skills:", parse(`<strong>Utilizing: variables, functions, conditionals, loops, arrays, test cases, file input/output, classes, objects, recursion, and multi-dimensional arrays.</strong>`)],
        mBottom: 80,
        imageOneSrc: "images/projects/chat-forum-moderator/laptop.png",
        imageOneAlt: "Image of The Chat Forum Moderator's code on a laptop screen",
        imageOneWidth: 550,
        secInfoText: "Unit Of Study: INFO1110 Introduction to Programming",
        buttonProps: ["#FF7F38", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Documentation / Code", 25, "#FFFFFF", 320, 50],
        id: "chat-moderator",
        isOpen: false
    },
    {
        border: "4px solid #FF7F38",
        projectType: "'University Project'",
        title: 'The Time Vessel',
        mainText: parse(`"Time Vessel" played a crucial role within a creative coding module that focused on utilizing p5.js, a JavaScript library, to create interactive digital artworks. The main goal of this module was to generate a piece of art that could function as a personalized landing page for an assigned brand. The "Time Vessel" project was highly commendable, seamlessly merging the realms of programming and design. Moreover, it served as a valuable educational tool, offering a deeper understanding of businesses and their unique requirements for effective landing pages.<br></br>In addition to mastering the necessary design and programming skills for crafting such artwork, this project also provided valuable insights into the experience of following specific guidelines set by a company or clients."Time Vessel" focuses specifically on a New Zealand-based boat rental company, with the goal of presenting the company's primary services in a playful manner through an interactive artwork. This artwork is intended for use on the company's main website as its landing page.`),
        firstText: ["Tools:", parse(`<strong>P5.JS editor, Visual Studio Code.</strong>`)],
        secondText: ["Skills: ", parse(`<strong>Creating JavaScript based interactive artworks, following instructions and guidelines, creating landing pages.</strong>`)],
        mBottom: 60,
        imageOneSrc: "images/projects/the-time-vessel/pc.png",
        imageOneAlt: "Image of The Time Vessel's visual layout on a monitor",
        imageOneWidth: 460,
        imageTwoSrc: "images/projects/the-time-vessel/phone.png",
        imageTwoAlt: "Image of The Time Vessel's visual layout on an Iphone 14 pro",
        imageTwoWidth: 150,
        secInfoText: "Unit Of Study: DECO1012 Design Programming",
        buttonProps: ["#FF7F38", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Documentation / Code", 25, "#FFFFFF", 320, 50],
        id: "the-time-vessel",
        isOpen: false
    },
    {
        border: "4px solid #FF7F38",
        projectType: "'University Project'",
        title: 'Data Structure Studies',
        mainText: parse(`Exploring data structures was a crucial aspect of my programming journey, which provided valuable insights into the storage, modification, sorting, and deletion of data. Although this three-month study did not introduce me to new programming languages, it significantly deepened my understanding of Python and its practical applications in the industry.<br></br>Delving into data structures and algorithms not only elevated my programming skills but also had a profound impact on my role as a designer. This is because effective problem-solving, a crucial aspect of programming, goes beyond merely writing code; it involves finding the most efficient solutions that consume minimal space and execute in the shortest amount of time. As a result, this study not only enhanced my technical skills but also sharpened my problem-solving abilities, proving beneficial in both programming and design contexts.`),
        firstText: ["Tools:", parse(`<strong>Visual Studio Code</strong>`)],
        secondText: ["Languages:", parse(`<strong>Python</strong>`)],
        thirdText: ["Skills:",  parse(`<strong>Utilizing: singly-doubly lists, trees, priority queues (list-heap based), separate chaining, open addressing, Cuckoo hashing, graphs, divide and conquer algorithms.</strong>`)],
        mBottom: 80,
        imageOneSrc: "images/projects/data-structure-studies/mac.png",
        imageOneAlt: "Image of a data structure coding assignment on a mac",
        imageOneWidth: 550,
        secInfoText: "Unit Of Study: COMP2123 Data Structures and Algorithms",
        buttonProps: ["#FF7F38", "0px 5px 5px rgba(0, 0, 0, 0.25)", "Deliverables", 25, "#FFFFFF", 200, 50],
        id: "data-structure-studies",
        isOpen: false
    }
]