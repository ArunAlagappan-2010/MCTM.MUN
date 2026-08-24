export const SCHOOL_ADDRESS =
  "179, Luz Church Rd, CIT Colony, Mylapore, Chennai, Tamil Nadu 600004";

export interface Committee {
  code: string;
  name: string;
  delegates: string;
  chair: string;
  viceChair?: string;
  focus: string;
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
  },
  {
    code: "UNHRC",
    name: "Human Rights Council",
    delegates: "~45 delegates",
    chair: "Mekhala Charan & Amiya Sanjeev",
    focus:
      "Delegates confront violations of human dignity across the globe, balancing state sovereignty against the rights of the individual.",
  },
  {
    code: "DISEC",
    name: "Disarmament & International Security",
    delegates: "~45 delegates",
    chair: "Aarna Karnani",
    viceChair: "Uddhav Gurumoorthy",
    focus:
      "From nuclear non-proliferation to emerging weapons technology — the committee where global security architecture gets negotiated.",
  },
  {
    code: "AIPPM",
    name: "All India Political Parties Meet",
    delegates: "~25 delegates",
    chair: "Madhav Gurumoorthy",
    viceChair: "Pranav Kumar",
    focus:
      "A simulation of India's own political landscape, where delegates represent real parties debating the nation's most pressing issues.",
  },
  {
    code: "WCC",
    name: "Wartime Crisis Cabinet",
    delegates: "~20 delegates",
    chair: "Advaith Chittezhi",
    viceChair: "Vairavan",
    focus:
      "A high-pressure crisis committee — decisions made in minutes, consequences that unfold in real time as the situation evolves.",
  },
  {
    code: "IPC",
    name: "International Press Corps",
    delegates: "~20 delegates",
    chair: "Jhanvi Vishnu",
    viceChair: "Ahimsa",
    focus:
      "Not delegates but journalists — reporting on, interviewing, and holding every other committee accountable across the conference.",
  },
  {
    code: "ECOFIN",
    name: "Economic & Financial Committee",
    delegates: "~25 delegates",
    chair: "Sanat",
    viceChair: "Shivaansh",
    focus:
      "Trade, debt, development, and the policy questions behind the global economy — where diplomacy meets the balance sheet.",
  },
];

export interface SecretariatRole {
  role: string;
  names: string;
  blurb: string;
  image?: string;
}

export const secretariat: SecretariatRole[] = [
  {
    role: "Secretary General",
    names: "Mekhala Charan",
    blurb: "Sets the vision for the conference and leads the organising committee end to end.",
  },
  {
    role: "Co-Deputy Secretary General",
    names: "Krishna Santhanam",
    blurb: "Works alongside the SG on conference direction, and chairs the Security Council.",
  },
  {
    role: "Co-Deputy Secretary General",
    names: "Aarna Karnani",
    blurb: "Works alongside the SG on conference direction, and chairs DISEC.",
  },
  {
    role: "Head of Logistics",
    names: "Avneet & Aadhaavan",
    blurb: "I have always been interested in organization, event management, and problem-solving. Other than this I enjoy playing football, playing the piano, and going to the gym. As Head of Logistics, I ensure smooth coordination, efficient planning, and successful MUN execution.",
    image: "/secretariat/logistics.jpeg",
  },
  {
    role: "Head of Finance",
    names: "Navya Rajan & Swetha",
    blurb: "Handles registration fees and tracks expenditure across the whole conference.",
  },
  {
    role: "Head of Delegate Affairs",
    names: "Drishya Chordia & Amiya",
    blurb: "First point of contact for delegate queries and school-to-school communication.",
  },
  {
    role: "Head of Marketing",
    names: "Ishaan, Rayaan & Rasana",
    blurb:
      "With a passion for global affairs and creative communication, I ensure every conference reaches a wider audience and am proud to serve as the Marketing Director for this years MUN.",
    image: "/secretariat/ishaan.jpeg",
  },
  {
    role: "Head of Design",
    names: "Sankhya Venkat & Ayanah",
    blurb:
      "Hello! My name is Ayanah, and I am the Co-Head of Design with Sankhya. I’m someone who has always loved being creative, especially through photography and design. I’m curious by nature and enjoy exploring new ideas, experimenting with technology, and finding inspiration in the little things around me. I’m also a huge cat lover!",
    image: "/secretariat/ayanah.jpeg",
  },
  {
    role: "Head of IT",
    names: "Arun",
    blurb: "Keeps the technical side of the conference — this website included — running.",
  },
  {
    role: "Head of Media",
    names: "Aahan",
    blurb:
      "With a passion for photography, I aim to capture the energy, debate, and memorable moments of every conference, while leading the media team and serving as Head of Media and Photographer for this year’s MUN.",
    image: "/secretariat/aahan.jpeg",
  },
  {
    role: "Coordination",
    names: "Miraya Shah & Nischay",
    blurb:
      "I’m an avid reader and I absolutely love watching horror movies. I wanna major in marketing after graduation and I’m glad to help anyone if they have any queries during the MUN.",
    image: "/secretariat/miraya.jpeg",
  },
  {
    role: "Certificate Writing",
    names: "Harshita, Keerthi, Adhitya & Ayanah",
    blurb: "Prepares every delegate and award certificate ahead of time, name by name.",
  },
];
