export interface Work {
  id: string;
  client: string;
  title: string;
  category: string;
  /** Mux playback ID (tiles + modal). Use this or `vimeoVideoId`, not both. */
  muxPlaybackId?: string;
  /** Vimeo numeric video id when not on Mux yet (e.g. public Vimeo URL). */
  vimeoVideoId?: string;
  /**
   * `fun` = short films on the For Fun tab; omit or `hire` = For Hire (commercial / branded).
   */
  section?: "hire" | "fun";
  /**
   * Crop baked-in letterbox / pillarbox: `1` = no zoom, omit = site default (~1.22),
   * higher = zoom in more (e.g. 1.4–1.7 for heavy mattes).
   */
  scale?: number;
  /** Optional copy shown under the video in the modal lightbox. */
  lightboxDescription?: string;
}

export const works: Work[] = [
  {
    id: "w001",
    client: "KODAK",
    title: "UNDERSTANDING",
    category: "COMMERCIAL",
    muxPlaybackId: "zdFAAb95I3aFy9zDpS02BWTYzHoEufafitXEfBZ2iWyY",
    scale: 1.4,
  },
  {
    id: "w002",
    client: "ESFUERZO",
    title: "TO US",
    category: "BRANDED CONTENT",
    muxPlaybackId: "cs5OTwrwIUIFNQ5biC4vQ4cFmzW01DnJbNC4HUWVposs",
    scale: 1.28,
  },
  {
    id: "w003",
    client: "PURINA",
    title: "APRIL & DIXIE",
    category: "COMMERCIAL",
    muxPlaybackId: "01lMLNuT00V4Lc800S91VfpQHL5IA1d7t1MLmsPBdWX4OE",
    scale: 1.7,
  },
  {
    id: "w004",
    client: "MENTAL HEALTH IS HEALTH",
    title: "YOU",
    category: "COMMERCIAL",
    muxPlaybackId: "dJR76vWL8XwefB02o7KHp6EtDDi71cTnHbFwLMxTeGIw",
    scale: 1.56,
  },
  {
    id: "w005",
    client: "DOORDASH",
    title: "NASCAR",
    category: "COMMERCIAL",
    muxPlaybackId: "bIxd1xU02mVMgU8zg94uGsb028wdAAgEn12fG8fNlM99Q",
    scale: 1,
  },
  {
    id: "w006",
    client: "JAGUAR",
    title: "JOYRIDE",
    category: "COMMERCIAL",
    muxPlaybackId: "admC00b4MqZ3BTb1TLngnuOIxFbbS9lKGNc2MmlDgRiA",
    scale: 1,
  },
  {
    id: "w005",
    client: "CADILLAC",
    title: "DARING ORIGINS: ANTHEM",
    category: "COMMERCIAL",
    muxPlaybackId: "MglFqaTUc5vrvSjeZRA7fyQX7rW7zdIWexyhG0200sS64",
    scale: 1.44,
  },
  {
    id: "w006",
    client: "ETISALAT",
    title: "THE MECHANIC",
    category: "COMMERCIAL",
    muxPlaybackId: "qFUqNSbWcJWOn2ghnpUYk3004VPnD1I01VakBBPeNbY9E",
    scale: 1.7,
  },
  {
    id: "w007",
    client: "MAHINDRA",
    title: "WORKING TOGETHER",
    category: "COMMERCIAL",
    muxPlaybackId: "KXBS8OV922qXXtK702shuikvTBkMfTvmnL00ewTKpfVQc",
    scale: 1,
  },
  {
    id: "w008",
    client: "MAHINDRA",
    title: "FIRST DAY OF WORK",
    category: "COMMERCIAL",
    muxPlaybackId: "02gd7zMKFHKXy4kUOfQnXMGuH00c6jzkkqvVNIb7goHT8",
    scale: 1,
  },
  {
    id: "w009",
    client: "BOARS HEAD",
    title: "COMPROMISE ELSEWHERE",
    category: "COMMERCIAL",
    muxPlaybackId: "KmP1x7ALjObdHz2lb2y00idwpOlYhHzdgFNiegTUvspg",
    scale: 1.7,
  },
  {
    id: "w010",
    client: "MEMORIAL HERMANN",
    title: "CELLIST",
    category: "COMMERCIAL",
    muxPlaybackId: "7GShwC8qj1MjXV022iNoCLEvVoEE2Y02HhoVWAQDfLsws",
    scale: 1.32,
  },
  {
    id: "w011",
    client: "MEMORIAL HERMANN",
    title: "SHOWSTOPPER",
    category: "COMMERCIAL",
    muxPlaybackId: "00Rm00tx7vn7haH3kPG01lEyCjaxAzuI12IDdA30155mL900",
    scale: 1.386,
  },
  {
    id: "w012",
    client: "DOORDASH",
    title: "SNOW",
    category: "COMMERCIAL",
    muxPlaybackId: "IFU3VO1vTWwPV6GWoGptZX01JMyoErUD4YPJQMPPx007A",
    scale: 1,
  },
  {
    id: "w013",
    client: "CASTROL",
    title: "LARRY FITZGERALD",
    category: "COMMERCIAL",
    muxPlaybackId: "Q5zK68QYnos8QURr01rqfcRt6MS00iZQ02PtJnicYJZy6A",
    scale: 1,
  },
  {
    id: "w014",
    client: "AD COUNCIL",
    title: "MAGIC HOUR",
    category: "COMMERCIAL",
    muxPlaybackId: "OA01M6tdnkcqODv4kEp3Y7nnunQGINft93dovegKVhaw",
    scale: 1.34,
  },
  {
    id: "w015",
    client: "AD COUNCIL",
    title: "MUSE",
    category: "COMMERCIAL",
    muxPlaybackId: "68xG8fY8kLa8mVI85Xqa1OKqO7IzSVzkFBXCCFDfbYg",
    scale: 1.34,
  },
  {
    id: "w016",
    client: "IKEA",
    title: "FIRST APARTMENT",
    category: "COMMERCIAL",
    muxPlaybackId: "97vBJI8mqdUOc02701spysvjDSFtMwPIbhTiQ9b700l1DM",
    scale: 1.34,
  },
  {
    id: "w017",
    client: "CADILLAC",
    title: "TREE HUNTING",
    category: "COMMERCIAL",
    muxPlaybackId: "ZS1pcXccM7zvfRGygTovnPNp801zbfJP027DV6emJWCMM",
    scale: 1.7,
  },
  {
    id: "w018",
    client: "DODGE",
    title: "SLEEP",
    category: "COMMERCIAL",
    muxPlaybackId: "oKn97aSQotfNFbpd3imZ7XuyqvaQbwvocpZ02OoSYcJo",
    scale: 1.28,
  },
  {
    id: "w019",
    client: "MD LOTTO",
    title: "SANTA, IS THAT YOU?",
    category: "COMMERCIAL",
    muxPlaybackId: "HnR4uMimIVxx9oGXKMkurZ2jUr00GrSLntxkBZ9lpGSc",
    scale: 1,
  },
  {
    id: "w021",
    client: "NHTSA",
    title: "WORRIED SICK",
    category: "COMMERCIAL",
    muxPlaybackId: "buS5LOZv9jL656A00gBKIwv8UbYmFvXtofFiK01xQgIj8",
    scale: 1.344,
  },
  {
    id: "w022",
    client: "NJM",
    title: "THE OPEN ROAD",
    category: "COMMERCIAL",
    muxPlaybackId: "JZwMHJvCYuGldKyb167i92B529yCTj02jWfAyxJKge100",
    scale: 1,
  },
  {
    id: "w023",
    client: "NOWNESS",
    title: "CHIBI, JAPAN'S TALLEST MAN",
    category: "SHORT FILM",
    muxPlaybackId: "qZenk4YGGMPY5o96FdTouwACY02ykRv8bb00cJCZiJ59M",
    scale: 1.48,
    section: "fun",
    lightboxDescription:
      "I went to Japan and spent time with the tallest person in the country and the film is not really about being tall so much as it is about moving through a world that wasn't built for you and what that looks like in a body over a lifetime, what it does to the way you hold yourself and the way you enter a room and the way you understand the space between yourself and everything around you.\n\nIt's one of the most universal things, the experience of not quite fitting, of the world being close but not quite right.",
  },
  {
    id: "w024",
    client: "PEDIGREE",
    title: "FUELING LIFE'S FIRSTS",
    category: "COMMERCIAL",
    muxPlaybackId: "8rKeRr01hLCQyIoqnHyrwtJQw3rmwSwO0101MAE7lvMLoA",
    scale: 1,
  },
  {
    id: "w026",
    client: "PURINA",
    title: "PRO PLAN - CAT",
    category: "COMMERCIAL",
    muxPlaybackId: "U8fRPXYr01Vu00AybjG01gWOtCKTTnLmdc9atUMKTzm01qw",
    scale: 1,
  },
  {
    id: "w027",
    client: "SHORT FILM",
    title: "WONDERLAND",
    category: "SHORT FILM",
    muxPlaybackId: "585uOm7bD1uDBfu2yJrPhK5RE129SBDJhAy01RUX902to",
    scale: 1.38,
    section: "fun",
    lightboxDescription:
      "In 2013 I went out for a month to make something about what it actually feels like to work in the creative industry.\n\nWe talked to people who were genuinely willing to be transparent about the mess of it and the pursuit of something you believe in inside a system that doesn't always believe in the same things you do",
  },
  {
    id: "w028",
    client: "THE HOME DEPOT",
    title: "FATHER IN LAW",
    category: "COMMERCIAL",
    muxPlaybackId: "U532tmfcXcvaIzsyuWihiCJigayY4AAfIHU7SMXg5u00",
    scale: 1.4,
  },
  {
    id: "w029",
    client: "SHORT FILM",
    title: "THE MINDLESS MENACE OF VIOLENCE",
    category: "SHORT FILM",
    muxPlaybackId: "yE800z00amAcmwsaBODyVjbI301nbyPnHvGjwjLpaAVk01g",
    scale: 1.7,
    section: "fun",
    lightboxDescription:
      "Robert F. Kennedy gave this speech on April 4th 1968 in Indianapolis the night Martin Luther King was killed. He was on a plane when he found out and he landed and he went to the crowd that was waiting for him and he put down the speech he was supposed to give and gave a different one.",
  },
  {
    id: "w030",
    client: "MAYA",
    title: "RANCHO SUPER MAC",
    category: "SHORT FILM",
    vimeoVideoId: "960749427",
    scale: 1.22,
    section: "fun",
    lightboxDescription:
      "Someone told me there was a dog camp three hours northeast of Mexico City where dogs ran free and swam in lakes and perched on waterfalls and I believed all of it immediately and completely, I didn't need more information.\n\nI needed someone to watch my husky (Keanu) and I reached out to Manuel who owns the camp and he said yes and the next day he drove his truck into Mexico City and I handed him my dog and watched them drive away and then I left the country and heard nothing for several days. I had given something I loved to a stranger and I had no information about whether the stranger understood what he was holding and there is no good way to sit with that.\n\nThen I got two dozen photos on WhatsApp all at once. Manuel had been going out every day with his DSLR and saving them up. Keanu was in the mud, in the water, running with other dogs, completely unrecognizable as the animal who lived with me in a city apartment, and I stood there looking at my phone. He was just a dog. He was finally just a dog.\n\nA few months later I drove out there with Scott Hanson and we filmed it. The dogs, the ranch, Manuel. We set up an interview and Manuel started talking about the history of the camp and how it started and then something shifted and he went somewhere else.\n\nThe film that was supposed to be about dogs running around a beautiful place in Mexico became a film about what an animal can do for a person who has run out of other options, and I don't know how to say that without it sounding like something it isn't.",
  },
];

/** Display order on the For Fun tab: Chibi → Rancho Super Mac → Wonderland → Mindless Menace */
const FUN_ORDER: Record<string, number> = {
  w023: 0,
  w030: 1,
  w027: 2,
  w029: 3,
};

export function getWorksForHire(): Work[] {
  return works.filter((w) => w.section !== "fun");
}

export function getWorksForFun(): Work[] {
  const fun = works.filter((w) => w.section === "fun");
  return [...fun].sort(
    (a, b) => (FUN_ORDER[a.id] ?? 99) - (FUN_ORDER[b.id] ?? 99)
  );
}

/** Stable React key / workprint seed for Mux or Vimeo-backed pieces. */
export function workMediaKey(work: Work): string {
  return work.muxPlaybackId ?? `vimeo-${work.vimeoVideoId ?? work.id}`;
}
