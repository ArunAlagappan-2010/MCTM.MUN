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
    blurb:
      "As Secretary General of M.CT.M.MUN'26, I lead the executive committee in shaping an engaging, diplomatic, and transformative conference experience. Dedicated to international relations and policy debate, I look forward to welcoming delegates to an unforgettable edition.",
  },
  {
    role: "Co-Deputy Secretary General",
    names: "Krishna Santhanam",
    blurb:
      "Serving as Co-Deputy Secretary General and Chair of the Security Council, I oversee conference operations and procedural excellence. Passionate about geopolitics and crisis resolution, I aim to foster rigorous, high-level debate on the floor.",
  },
  {
    role: "Co-Deputy Secretary General",
    names: "Aarna Karnani",
    blurb:
      "As Co-Deputy Secretary General and DISEC Chair, I work closely with the leadership team to ensure a seamless delegate experience. Committed to disarmament diplomacy, I strive to make committee sessions both challenging and rewarding.",
  },
  {
    role: "Head of Logistics",
    names: "Avneet & Aadhaavan",
    blurb:
      "I have always been interested in organization, event management, and problem-solving. Other than this I enjoy playing football, playing the piano, and going to the gym. As Head of Logistics, I ensure smooth coordination, efficient planning, and successful MUN execution.",
    image: "/secretariat/logistics.jpeg",
  },
  {
    role: "Head of Finance",
    names: "Navya Rajan & Swetha",
    blurb:
      "I’ve always been drawn to Economics and Mathematics because I like finding patterns and solving problems. I also enjoy learning and meeting new people with different perspectives. As Head of Finance, I’m excited to bring my ideas to the Organizing Committee and help make this year’s MUN an experience to remember.",
    image: "/secretariat/swetha.jpeg",
  },
  {
    role: "Head of Delegate Affairs",
    names: "Drishya Chordia & Amiya",
    blurb:
      "Passionate about diplomatic engagement and delegate welfare. As Head of Delegate Affairs, I serve as the first point of contact for school coordination, delegate allocations, and resolving queries to ensure an inclusive conference for everyone.",
    image: "/secretariat/drishya.jpeg",
  },
  {
    role: "Head of Marketing",
    names: "Ishaan, Rayaan & Rasana",
    blurb:
      "Creativity has always been my driving force, and as Marketing Director for this year's M.CT.M. MUN, I've loved turning that passion into content that actually connects with people. From campaigns to online content, our goal is to make every delegate excited to be part of something bigger.",
    image: "/secretariat/ryaan.jpeg",
  },
  {
    role: "Head of Design",
    names: "Sankhya Venkat & Ayanah",
    blurb:
      "Hello, my name is Sankhya, and I am the Co-Head of Design with Ayanah. I’m a creative and artistic person who loves expressing myself through art and exploring new ideas. I’m always drawn to anything imaginative and enjoy finding inspiration in the world around me.",
    image: "/secretariat/sankhya.jpeg",
  },
  {
    role: "Head of IT",
    names: "Arun",
    blurb:
      "Passionate about software development, systems architecture, and web technology. As Head of IT, I oversee the digital infrastructure, ensuring a fast, modern, and reliable online platform for M.CT.M.MUN'26.",
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
    blurb:
      "Our team is dedicated to accuracy and precision, carefully crafting and verifying every delegate and award certificate to celebrate excellence and memorable achievements at M.CT.M.MUN'26.",
  },
];
