export const SCHOOL_ADDRESS =
  "179, Luz Church Rd, CIT Colony, Mylapore, Chennai, Tamil Nadu 600004";

export interface Committee {
  code: string;
  name: string;
  delegates: string;
  chair: string;
  viceChair?: string;
  focus: string;
  agenda?: string;
  freezeDate?: string;
  guideUrl?: string;
}

export const committees: Committee[] = [
  {
    code: "UNSC",
    name: "Security Council",
    delegates: "~20 delegates",
    chair: "Krishna Santhanam",
    viceChair: "Vetrivel Kartikeyan",
    focus:
      "The Council charged with maintaining international peace and security — fast-moving debate on the crises that can't wait for consensus.",
    agenda:
      "Maintaining international peace and security in the Arctic: addressing the militarisation of the High North and the risk of great-power confrontation.",
    guideUrl: "/guides/unsc-background-guide.pdf",
  },
  {
    code: "UNHRC",
    name: "Human Rights Council",
    delegates: "~45 delegates",
    chair: "Mekhala Charan",
    viceChair: "Amiya Suhasini Sanjeev",
    focus:
      "Delegates confront violations of human dignity across the globe, balancing state sovereignty against the rights of the individual.",
    agenda:
      "Addressing the case of Singapore and comparable Southeast Asian jurisdictions in the human rights implications of mandatory capital punishment for drug-related offences.",
    guideUrl: "/guides/unhrc-background-guide.pdf",
  },
  {
    code: "DISEC",
    name: "Disarmament & International Security",
    delegates: "~45 delegates",
    chair: "Aarna Karnani",
    viceChair: "Uddhav Gurumoorthy",
    focus:
      "From nuclear non-proliferation to emerging weapons technology — the committee where global security architecture gets negotiated.",
    agenda:
      "Addressing the growing threat of autonomous maritime weapons and attacks on global shipping.",
    guideUrl: "/guides/disec-background-guide.pdf",
  },
  {
    code: "AIPPM",
    name: "All India Political Parties Meet",
    delegates: "~25 delegates",
    chair: "Madhav Gurumoorthy",
    viceChair: "Pranav Kumar",
    focus:
      "A simulation of India's own political landscape, where delegates represent real parties debating the nation's most pressing issues.",
    agenda:
      "Addressing the NEET-UG paper leak crisis and restoring integrity in India's competitive examination system.",
    guideUrl: "/guides/aippm-background-guide.pdf",
  },
  {
    code: "WCC",
    name: "Wartime Crisis Cabinet",
    delegates: "~20 delegates",
    chair: "Advaith Chittezhi",
    viceChair: "Vairavan Karthik Subramanium",
    focus:
      "A high-pressure crisis committee — decisions made in minutes, consequences that unfold in real time as the situation evolves.",
    agenda: "Proliferation of the Somali Civil War.",
    freezeDate: "January 1, 2027",
    guideUrl: "/guides/wcc-background-guide.pdf",
  },
  {
    code: "IPC",
    name: "International Press Corps",
    delegates: "~20 delegates",
    chair: "Jhanvi Vishnu",
    viceChair: "Ahimsa Santhosh",
    focus:
      "Not delegates but journalists — reporting on, interviewing, and holding every other committee accountable across the conference.",
    guideUrl: "/guides/ipc-background-guide.pdf",
  },
  {
    code: "ECOFIN",
    name: "Economic & Financial Committee",
    delegates: "~25 delegates",
    chair: "Sanat Ishwaran Moorthy",
    viceChair: "Shivaansh Rathi",
    focus:
      "Trade, debt, development, and the policy questions behind the global economy — where diplomacy meets the balance sheet.",
    agenda:
      "Reform of the international financial and monetary architecture in the aftermath of the global financial crisis, with particular emphasis on the governance of international financial institutions and the protection of development financing in low-income and emerging economies.",
    freezeDate: "October 5, 2009",
    guideUrl: "/guides/ecofin-background-guide.pdf",
  },
];

export interface SecretariatPerson {
  name: string;
  image?: string;
  blurb?: string;
}

export interface SecretariatRole {
  role: string;
  people: SecretariatPerson[];
  blurb: string;
}

export const secretariat: SecretariatRole[] = [
  {
    role: "Secretary General",
    people: [
      { name: "Mekhala Charan", image: "/secretariat/mekhala.jpeg" },
    ],
    blurb:
      "I’m passionate about economics, sociology, and the complexities of people and society. Outside the MUN circuit, I’m usually reading, debating, watching films, or listening to music. I’ve had a short but eventful MUN journey, and I’m excited to bring that perspective as Secretary-General.",
  },
  {
    role: "Co-Deputy Secretary General",
    people: [{ name: "Krishna Santhanam", image: "/secretariat/krishna.jpeg" }],
    blurb:
      "As your Deputy Secretary-General and UNSC chair, I bring a unique perspective to this conference. Interdisciplinary thinking is core to who I am, and applying knowledge from any part of my life to MUN and debate resonates deeply with me. I hope to help make this event impactful for everyone. See you there 😁",
  },
  {
    role: "Co-Deputy Secretary General",
    people: [{ name: "Aarna Karnani", image: "/secretariat/aarna.jpeg" }],
    blurb:
      "Meet Aarna, an IBDP2 student who enjoys MUNs, debates and public speaking. She has been pursuing Kathak for eight years and co-founded Games Archives, an initiative to revive traditional Indian games. She hopes to pursue economics and explore how it shapes the world around her.",
  },
  {
    role: "Head of Logistics",
    people: [
      {
        name: "Avneet Sharma",
        image: "/secretariat/avneet.jpeg",
        blurb:
          "Being a part of last year's M.CT.M. MUN as the Head of Design and Conference Manager, made me realise how much I love organising the tiniest details and bringing things together. I'm incredibly excited for the second edition and will put my best foot forward to make this year a success as well!",
      },
      { name: "Aadhavan Vetriazhagan", image: "/secretariat/logistics-hi.jpeg" },
    ],
    blurb:
      "I have always been interested in organization, event management, and problem-solving. Other than this I enjoy playing football, playing the piano, and going to the gym. As Head of Logistics, I ensure smooth coordination, efficient planning, and successful MUN execution.",
  },
  {
    role: "Head of Finance",
    people: [
      {
        name: "Navya Rajan",
        image: "/secretariat/navya.jpeg",
        blurb:
          "As an aspiring Economics and Data Analytics student, I am deeply fascinated by market dynamics, and strategic decision-making. Outside of academics, I love reading literature, exploring new ideas, and spending quality time with my friends.",
      },
      { name: "Swetha Krishnan", image: "/secretariat/swetha.jpeg" },
    ],
    blurb:
      "I’ve always been drawn to Economics and Mathematics because I like finding patterns and solving problems. I also enjoy learning and meeting new people with different perspectives. As Head of Finance, I’m excited to bring my ideas to the Organizing Committee and help make this year’s MUN an experience to remember.",
  },
  {
    role: "Head of Delegate Affairs",
    people: [
      { name: "Drishya Chordia", image: "/secretariat/drishya.jpeg" },
      {
        name: "Amiya Suhasini Sanjeev",
        image: "/secretariat/amiya.jpeg",
        blurb:
          "As an aspiring International Relations student, I’m interested in topics like global affairs, diplomacy, and international law. In general, I greatly enjoy singing and performing onstage, along with reading, painting, spending time with my friends, and meeting new people.",
      },
    ],
    blurb:
      "Passionate about diplomatic engagement and delegate welfare. As Head of Delegate Affairs, I serve as the first point of contact for school coordination, delegate allocations, and resolving queries to ensure an inclusive conference for everyone.",
  },
  {
    role: "Head of Marketing",
    people: [
      { name: "Ishaan Watwani", image: "/secretariat/ishaan.jpeg" },
      { name: "Rayaan S", image: "/secretariat/ryaan.jpeg" },
      {
        name: "Rasana Sakthivelan",
        image: "/secretariat/rasana.jpeg",
        blurb:
          "Hello! My name is Rasana, and I am the Co-Head of Marketing with Ishaan and Rayaan. I’ve always enjoyed exploring creativity, communication, and new ideas. I’m passionate about marketing, storytelling, and creating campaigns that bring people together and make an impact.",
      },
    ],
    blurb:
      "Creativity has always been my driving force, and as Marketing Director for this year's M.CT.M. MUN, I've loved turning that passion into content that actually connects with people. From campaigns to online content, our goal is to make every delegate excited to be part of something bigger.",
  },
  {
    role: "Head of Design",
    people: [
      { name: "Sankhya Venkat", image: "/secretariat/sankhya.jpeg" },
      { name: "Ayanah Saif Hashmath", image: "/secretariat/ayanah.jpeg" },
    ],
    blurb:
      "Hello, my name is Sankhya, and I am the Co-Head of Design with Ayanah. I’m a creative and artistic person who loves expressing myself through art and exploring new ideas. I’m always drawn to anything imaginative and enjoy finding inspiration in the world around me.",
  },
  {
    role: "Head of IT",
    people: [{ name: "Arun Alagappan", image: "/secretariat/arun.png" }],
    blurb:
      "Between coding, robotics, and CAD, I've always been drawn to figuring out how things work and then building something better. Basketball keeps me sharp off the screen too. As Head of IT, I oversee the digital infrastructure, ensuring a fast, modern, and reliable online platform for M.CT.M.MUN'26.",
  },
  {
    role: "Head of Media",
    people: [{ name: "Aahan Mhetras", image: "/secretariat/aahan.jpeg" }],
    blurb:
      "With a passion for photography, I aim to capture the energy, debate, and memorable moments of every conference, while leading the media team and serving as Head of Media and Photographer for this year’s MUN.",
  },
  {
    role: "Coordination",
    people: [
      { name: "Miraya Shah", image: "/secretariat/miraya.jpeg" },
      {
        name: "Nischay",
        image: "/secretariat/nischay.jpeg",
        blurb:
          "As a student with a keen interest in business, psychology and strategic decision-making, I am fascinated by the way ideas, people, and organisations come together to create meaningful change. I enjoy exploring current affairs, engaging in discussions, and taking on opportunities that challenge me to think critically. Outside of academics, I love listening to music, playing sports, and spending time with my friends.",
      },
    ],
    blurb:
      "I’m an avid reader and I absolutely love watching horror movies. I wanna major in marketing after graduation and I’m glad to help anyone if they have any queries during the MUN.",
  },
];
