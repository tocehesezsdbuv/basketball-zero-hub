const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const tabLinks = document.querySelectorAll("[data-tab-link]");
const regionButtons = document.querySelectorAll("[data-region-tab]");
const regionNameNodes = document.querySelectorAll("[data-region-name]");
const switchButtons = document.querySelectorAll("[data-switch-group]");
const switchPanels = document.querySelectorAll("[data-switch-panel]");
const onesPresentRows = document.querySelector(
  '[data-switch-panel="ones-era"][data-switch-value="ones-present"] .leaderboard-rows'
);
const onesUnrankedPanel = document.querySelector('[data-switch-panel="ones-era"][data-switch-value="ones-unranked"]');
const onesAlltimePanel = document.querySelector('[data-switch-panel="ones-era"][data-switch-value="ones-alltime"]');
const twosPresentPanel = document.querySelector('[data-switch-panel="twos-era"][data-switch-value="twos-present"]');
const twosUnrankedPanel = document.querySelector('[data-switch-panel="twos-era"][data-switch-value="twos-unranked"]');
const twosAlltimePanel = document.querySelector('[data-switch-panel="twos-era"][data-switch-value="twos-alltime"]');
const scrimMetricButtons = document.querySelectorAll("[data-scrim-metric]");
const scrimStatModeButtons = document.querySelectorAll("[data-scrim-stat-mode]");
const scrimStatModeSwitcher = document.getElementById("scrimStatModeSwitcher");
const scrimLeaderboardRows = document.getElementById("scrimLeaderboardRows");
const scrimMetricLabel = document.getElementById("scrimMetricLabel");
const scrimSpotlightName = document.getElementById("scrimSpotlightName");
const scrimSpotlightDescription = document.getElementById("scrimSpotlightDescription");
const scrimNotesList = document.getElementById("scrimNotesList");
const scrimHistoryRows = document.querySelectorAll("[data-scrim-history]");
const scrimHistoryName = document.getElementById("scrimHistoryName");
const scrimHistoryDescription = document.getElementById("scrimHistoryDescription");
const scrimHistoryNotesList = document.getElementById("scrimHistoryNotesList");
const historyScrimSessionRows = document.querySelectorAll("[data-history-scrim-session]");
const historyScrimSessionsList = document.getElementById("historyScrimSessionsList");
const historyScrimSessionName = document.getElementById("historyScrimSessionName");
const historyScrimSessionDescription = document.getElementById("historyScrimSessionDescription");
const historyScrimSessionImages = document.getElementById("historyScrimSessionImages");
const historyScrimSessionNotes = document.getElementById("historyScrimSessionNotes");
const historyOnesSessionsList = document.getElementById("historyOnesSessionsList");
const historyOnesSessionName = document.getElementById("historyOnesSessionName");
const historyOnesSessionDescription = document.getElementById("historyOnesSessionDescription");
const historyOnesSessionImages = document.getElementById("historyOnesSessionImages");
const historyOnesSessionNotes = document.getElementById("historyOnesSessionNotes");
const trackedPlayersCount = document.getElementById("trackedPlayersCount");
const heroPanelTitle = document.getElementById("heroPanelTitle");
const heroPanelDescription = document.getElementById("heroPanelDescription");
const legendLinks = document.querySelectorAll(".legend-link");
const hubSection = document.getElementById("hub");

const heroPanelSlides = [
  {
    title: "Built for the scene.",
    description:
      "Track the best 1v1 players, rising names, and standout performers across the Basketball Zero scene in one clean ranking hub.",
  },
  {
    title: "More than one leaderboard.",
    description:
      "Follow present rankings, off-board contenders, all-time names, and sanctioned scrim standouts without everything feeling scattered.",
  },
  {
    title: "A live record of the meta.",
    description:
      "From top ladder placements to archived scrims and legends, the hub is meant to show who stands out and how the scene keeps shifting.",
  },
];

const onesPresentRegionBoards = {
  OCE: [
    { rank: 1, player: "Serenity", username: "@EmasHubbyX", avatar: "assets/serenity.webp", elo: "N/A", tier: "S Rank", tierClass: "rank-tier-gold" },
    { rank: 2, player: "Cheese", username: "@GetALifKid", avatar: "assets/Cheese.webp", elo: "9k", tier: "S Rank", tierClass: "rank-tier-silver" },
    { rank: 3, player: "Shoop", username: "@asdfgdfgsdfaasesdf", avatar: "assets/shoop.webp", elo: "10k+", tier: "S Rank", tierClass: "rank-tier-bronze" },
    { rank: 4, player: "Moon", username: "@awmmoony", avatar: "assets/moon.webp", elo: "N/A", tier: "A Rank", tierClass: "rank-tier-plain" },
    { rank: 5, player: "Literalgod", username: "@otyuehfgvbcdsewxazqo", avatar: "assets/literal.webp", elo: "5k", tier: "A Rank", tierClass: "rank-tier-plain" },
    { rank: 6, player: "Gnome", username: "@X2Get_Gnomed", avatar: "assets/gnome.webp", elo: "N/A", tier: "B Rank", tierClass: "rank-tier-plain" },
    { rank: 7, player: "Gary", username: "@IDoFloss", avatar: "assets/gary.webp", elo: "4k+", tier: "B Rank", tierClass: "rank-tier-plain" },
    { rank: 8, player: "Tenkyu", username: "@T3nkyuuu", avatar: "assets/Tenkyu.webp", elo: "N/A", tier: "B Rank", tierClass: "rank-tier-plain" },
    { rank: 9, player: "Arthur", username: "@xXlxckyXxyt", avatar: "assets/arthur.webp", elo: "N/A", tier: "B Rank", tierClass: "rank-tier-plain" },
    { rank: 10, player: "Astral", username: "@sprytral", avatar: "assets/astral.webp", elo: "N/A", tier: "B Rank", tierClass: "rank-tier-plain" },
  ],
  AS: [
    { rank: 1, player: "Rshud", username: "@Rex_breaker", avatar: "assets/Rshud.webp", elo: "N/A", tier: "S Rank", tierClass: "rank-tier-gold" },
    { rank: 2, player: "Mom", username: "@m4rnr", avatar: "assets/mom.webp", elo: "N/A", tier: "S Rank", tierClass: "rank-tier-silver" },
  ],
  EU: [
    { rank: 1, player: "yznx", username: "@theblackgamerital", avatar: "assets/yznx.webp", elo: "N/A", tier: "S Rank", tierClass: "rank-tier-gold" },
  ],
};

const onesPresentRegionSpotlights = {
  OCE: "Serenity",
  AS: "Rshud",
  EU: "yznx",
};

const regionSpecificRankingPanels = {
  onesUnranked: onesUnrankedPanel,
  onesAlltime: onesAlltimePanel,
  twosPresent: twosPresentPanel,
  twosUnranked: twosUnrankedPanel,
  twosAlltime: twosAlltimePanel,
};

const regionSpecificRankingMarkup = Object.fromEntries(
  Object.entries(regionSpecificRankingPanels).map(([key, panel]) => [key, panel?.innerHTML || ""])
);

let activeScrimStatMode = "avg";

function setRegion(regionCode) {
  document.body.dataset.activeRegion = regionCode;

  regionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.regionTab === regionCode);
  });

  regionNameNodes.forEach((node) => {
    node.textContent = regionCode;
  });

  if (regionCode === "OCE" || regionCode === "AS" || regionCode === "EU") {
    renderPresentBoard(regionCode);
    renderRegionSpecificRankingPanels(regionCode);
    const activeMetric = document.querySelector("[data-scrim-metric].active")?.dataset.scrimMetric || "overall";
    renderScrimBoard(activeMetric);
    renderHistoryScrimSession();
  }

  renderHistoryOnesSession();
}

const scrimRegions = {
  OCE: {
    defaultPlayer: "Shoop",
    players: {
      Shoop: { username: "@asdfgdfgsdfaasesdf", avatar: "assets/shoop.webp", games: 2, points: 29, assists: 7, blocks: 4, ankleBreaks: 2, bestPoints: 23, bestAssists: 4, bestBlocks: 2, bestAnkleBreaks: 1 },
      Cheese: { username: "@GetALifKid", avatar: "assets/Cheese.webp", games: 2, points: 30, assists: 3, blocks: 6, ankleBreaks: 0, bestPoints: 18, bestAssists: 2, bestBlocks: 3, bestAnkleBreaks: 0 },
      Moon: { username: "@awmmoony", avatar: "assets/moon.webp", games: 2, points: 9, assists: 11, blocks: 2, ankleBreaks: 6, bestPoints: 6, bestAssists: 7, bestBlocks: 2, bestAnkleBreaks: 6 },
      Kol: { username: "@k0lxn", avatar: "assets/kol.webp", games: 1, points: 15, assists: 3, blocks: 0, ankleBreaks: 4, bestPoints: 15, bestAssists: 3, bestBlocks: 0, bestAnkleBreaks: 4 },
      idk: { username: "@superstylerockstar", avatar: "assets/idk.webp", games: 2, points: 18, assists: 2, blocks: 1, ankleBreaks: 1, bestPoints: 15, bestAssists: 2, bestBlocks: 1, bestAnkleBreaks: 1 },
      Dio: { username: "@bekfestgod7", avatar: "assets/dio.webp", games: 2, points: 23, assists: 3, blocks: 0, ankleBreaks: 3, bestPoints: 20, bestAssists: 3, bestBlocks: 0, bestAnkleBreaks: 2 },
      Sabre: { username: "@Xxdj_probroxX", avatar: "assets/sabre.webp", games: 1, points: 0, assists: 0, blocks: 0, ankleBreaks: 1, bestPoints: 0, bestAssists: 0, bestBlocks: 0, bestAnkleBreaks: 1 },
      Umbra: { username: "@Endbringerv", avatar: "assets/umbra.webp", games: 1, points: 2, assists: 0, blocks: 0, ankleBreaks: 0, bestPoints: 2, bestAssists: 0, bestBlocks: 0, bestAnkleBreaks: 0 },
    },
    sessions: {
      "OCE BBZ 001": {
        description: "June 30 sanctioned scrims with two logged scoreboards. The strongest visible performances came from Shoop, Cheese, Moon, Kol, and idk.",
        subtitle: "30/06/2026",
        images: [
          { src: "assets/scrim-2026-06-30-1.png", alt: "30/06/2026 sanctioned scrim #1 scoreboard" },
          { src: "assets/scrim-2026-06-30-2.png", alt: "30/06/2026 sanctioned scrim #2 scoreboard" },
        ],
        notes: [],
      },
    },
  },
  AS: {
    defaultPlayer: "Shoop",
    players: {
      Shoop: { displayName: "Shoop", username: "@asdfgdfgsdfaasesdf", avatar: "assets/shoop.webp", games: 7, points: 92, assists: 8, blocks: 6, ankleBreaks: 16, bestPoints: 21, bestAssists: 5, bestBlocks: 2, bestAnkleBreaks: 5 },
      Qwertyezeu: { displayName: "Quinn", username: "@Qwertyezeu", avatar: "assets/quinn.webp", games: 3, points: 66, assists: 8, blocks: 4, ankleBreaks: 4, bestPoints: 33, bestAssists: 3, bestBlocks: 2, bestAnkleBreaks: 3 },
      RSHUD: {
        displayName: "Rshud",
        username: "@Rex_breaker",
        avatar: "assets/Rshud.webp",
        games: 4,
        points: 133,
        assists: 6,
        blocks: 14,
        ankleBreaks: 10,
        bestPoints: 48,
        bestAssists: 3,
        bestBlocks: 7,
        bestAnkleBreaks: 4,
      },
      "1_43213": { displayName: "Mikaela", username: "@1_43213", avatar: "assets/mikaela.webp", games: 2, points: 26, assists: 9, blocks: 2, ankleBreaks: 4, bestPoints: 18, bestAssists: 6, bestBlocks: 2, bestAnkleBreaks: 3 },
      Cheokhimisthebest: { displayName: "Cheok", username: "@Cheokhimisthebest", avatar: "assets/cheok.webp", games: 3, points: 27, assists: 10, blocks: 1, ankleBreaks: 2, bestPoints: 15, bestAssists: 6, bestBlocks: 1, bestAnkleBreaks: 1 },
      Dragon_zuen: { displayName: "Tokumei", username: "@Dragon_zuen", avatar: "assets/Tokumei.webp", games: 3, points: 22, assists: 13, blocks: 3, ankleBreaks: 3, bestPoints: 12, bestAssists: 6, bestBlocks: 2, bestAnkleBreaks: 1 },
      Clairss_Seupay: { displayName: "Caell", username: "@Clairss_Seupay", avatar: "assets/caell.webp", games: 3, points: 14, assists: 12, blocks: 7, ankleBreaks: 3, bestPoints: 6, bestAssists: 5, bestBlocks: 3, bestAnkleBreaks: 2 },
      NIGHTMARE88REAPER: { displayName: "Tax", username: "@NIGHTMARE88REAPER", avatar: "assets/Tax.webp", games: 6, points: 36, assists: 19, blocks: 11, ankleBreaks: 13, bestPoints: 13, bestAssists: 5, bestBlocks: 6, bestAnkleBreaks: 4 },
      bigman222242: { displayName: "Ogre", username: "@bigman222242", avatar: "assets/ogre.webp", games: 2, points: 20, assists: 1, blocks: 8, ankleBreaks: 1, bestPoints: 11, bestAssists: 1, bestBlocks: 5, bestAnkleBreaks: 1 },
      Sabre: { displayName: "Sabre", username: "@Xxdj_probroxX", avatar: "assets/sabre.webp", games: 3, points: 17, assists: 8, blocks: 0, ankleBreaks: 4, bestPoints: 8, bestAssists: 5, bestBlocks: 0, bestAnkleBreaks: 2 },
      D34THSC4RX: { displayName: "Near", username: "@D34THSC4RX", avatar: "assets/Near.webp", games: 2, points: 22, assists: 3, blocks: 1, ankleBreaks: 5, bestPoints: 14, bestAssists: 2, bestBlocks: 1, bestAnkleBreaks: 3 },
      gexnchfesMwzdcf: { displayName: "Renoxis", username: "@gexnchfesMwzdcf", avatar: "assets/renoxis.webp", games: 2, points: 17, assists: 2, blocks: 3, ankleBreaks: 2, bestPoints: 9, bestAssists: 2, bestBlocks: 2, bestAnkleBreaks: 2 },
      Lynx1lynz: { displayName: "Zayne", username: "@Lynx1lynz", avatar: "assets/Zayne.webp", games: 7, points: 79, assists: 18, blocks: 10, ankleBreaks: 9, bestPoints: 17, bestAssists: 5, bestBlocks: 3, bestAnkleBreaks: 3 },
      sammm123911: { displayName: "4", username: "@sammm123911", avatar: "assets/4.webp", games: 2, points: 9, assists: 7, blocks: 2, ankleBreaks: 3, bestPoints: 6, bestAssists: 5, bestBlocks: 2, bestAnkleBreaks: 3 },
      featherlyga: { displayName: "Willow", username: "@featherlyga", avatar: "assets/willow.webp", games: 2, points: 22, assists: 8, blocks: 1, ankleBreaks: 1, bestPoints: 14, bestAssists: 4, bestBlocks: 1, bestAnkleBreaks: 1 },
      xXBlack_HXx: { displayName: "Nyso", username: "@nyso", avatar: "assets/nyso.webp", games: 3, points: 21, assists: 13, blocks: 1, ankleBreaks: 8, bestPoints: 9, bestAssists: 7, bestBlocks: 1, bestAnkleBreaks: 4 },
      MelsKelvingts: { displayName: "MelsKelvingts", username: "@yur1plisetskyfan123", avatar: "assets/mels.webp", games: 3, points: 24, assists: 8, blocks: 4, ankleBreaks: 2, bestPoints: 13, bestAssists: 4, bestBlocks: 3, bestAnkleBreaks: 2 },
      godusoopmam: { displayName: "Usoop", username: "@usoop", avatar: "assets/usoop.webp", games: 3, points: 20, assists: 15, blocks: 5, ankleBreaks: 4, bestPoints: 9, bestAssists: 6, bestBlocks: 2, bestAnkleBreaks: 2 },
      m4rnr: { displayName: "Mom", username: "@m4rnr", avatar: "assets/mom.webp", games: 3, points: 38, assists: 7, blocks: 1, ankleBreaks: 3, bestPoints: 18, bestAssists: 3, bestBlocks: 1, bestAnkleBreaks: 1 },
      gamer05095: { displayName: "Spiral", username: "@Spiral", avatar: "assets/spiral.webp", games: 4, points: 35, assists: 15, blocks: 4, ankleBreaks: 4, bestPoints: 18, bestAssists: 6, bestBlocks: 3, bestAnkleBreaks: 2 },
      "80brickz": { displayName: "Brickz", username: "@80brickz", avatar: "assets/brickz.webp", games: 3, points: 11, assists: 7, blocks: 2, ankleBreaks: 3, bestPoints: 9, bestAssists: 4, bestBlocks: 1, bestAnkleBreaks: 3 },
      bigmacy142: { displayName: "Bigmac", username: "@bigmacy142", avatar: "assets/mac.webp", games: 1, points: 6, assists: 4, blocks: 1, ankleBreaks: 1, bestPoints: 6, bestAssists: 4, bestBlocks: 1, bestAnkleBreaks: 1 },
      K0lxn: { displayName: "Kol", username: "@k0lxn", avatar: "assets/kol.webp", games: 4, points: 56, assists: 9, blocks: 2, ankleBreaks: 8, bestPoints: 21, bestAssists: 5, bestBlocks: 1, bestAnkleBreaks: 3 },
      meblack0609: { displayName: "Babi", username: "@meblack0609", avatar: "assets/babi.webp", games: 3, points: 55, assists: 11, blocks: 2, ankleBreaks: 6, bestPoints: 23, bestAssists: 4, bestBlocks: 1, bestAnkleBreaks: 2 },
      awmmoony: { displayName: "Moon", username: "@awmmoony", avatar: "assets/moon.webp", games: 1, points: 0, assists: 1, blocks: 5, ankleBreaks: 0, bestPoints: 0, bestAssists: 1, bestBlocks: 5, bestAnkleBreaks: 0 },
      robloxxD0610s: { displayName: "Dyberki", username: "@robloxxD0610s", avatar: "assets/dyberki.webp", games: 3, points: 16, assists: 7, blocks: 5, ankleBreaks: 7, bestPoints: 13, bestAssists: 4, bestBlocks: 2, bestAnkleBreaks: 3 },
      JENOS_ONEPUNCH: { displayName: "1975", username: "@JENOS_ONEPUNCH", avatar: "assets/1975.webp", games: 1, points: 11, assists: 3, blocks: 2, ankleBreaks: 0, bestPoints: 11, bestAssists: 3, bestBlocks: 2, bestAnkleBreaks: 0 },
      specter_108: { displayName: "Spec", username: "@specter_108", avatar: "assets/Spec.webp", games: 2, points: 27, assists: 6, blocks: 2, ankleBreaks: 0, bestPoints: 18, bestAssists: 4, bestBlocks: 1, bestAnkleBreaks: 0 },
      Mxlvora: { displayName: "Mxl", username: "@Mxlvora", avatar: "assets/Mxl.webp", games: 1, points: 20, assists: 4, blocks: 0, ankleBreaks: 2, bestPoints: 20, bestAssists: 4, bestBlocks: 0, bestAnkleBreaks: 2 },
      Reset35148732: { displayName: "Mukbang", username: "@Reset35148732", avatar: "assets/mukbang.webp", games: 1, points: 42, assists: 1, blocks: 2, ankleBreaks: 2, bestPoints: 42, bestAssists: 1, bestBlocks: 2, bestAnkleBreaks: 2 },
      kitty1555: { displayName: "Kitty", username: "@kitty1555", avatar: "assets/Kitty.webp", games: 1, points: 3, assists: 3, blocks: 1, ankleBreaks: 6, bestPoints: 3, bestAssists: 3, bestBlocks: 1, bestAnkleBreaks: 6 },
      hussainaltacc_8: { displayName: "Hussain", username: "@hussainaltacc_8", avatar: "assets/Hussain.webp", games: 1, points: 0, assists: 3, blocks: 1, ankleBreaks: 0, bestPoints: 0, bestAssists: 3, bestBlocks: 1, bestAnkleBreaks: 0 },
      Kur_ai1: { displayName: "Amasawa", username: "@Kur_ai1", avatar: "assets/Amasawa.webp", games: 1, points: 3, assists: 1, blocks: 0, ankleBreaks: 2, bestPoints: 3, bestAssists: 1, bestBlocks: 0, bestAnkleBreaks: 2 },
      Enrique_cheeks: { displayName: "Homeless", username: "@Enrique_cheeks", avatar: "assets/homeless.webp", games: 2, points: 17, assists: 4, blocks: 3, ankleBreaks: 2, bestPoints: 12, bestAssists: 3, bestBlocks: 3, bestAnkleBreaks: 2 },
    },
    sessions: {
      "AS BBZ 006": {
        description: "July 6 added another logged AS scrim. Reset35148732 posted the biggest scoring line, while Quinn, Spec, Cheok, and Spiral all added to their running totals and several new names entered the tracked pool.",
        subtitle: "06/07/2026",
        images: [
          { src: "assets/scrim-2026-07-06-1.png", alt: "06/07/2026 sanctioned scrim scoreboard one" },
        ],
        notes: [],
      },
      "AS BBZ 005": {
        description: "July 4 added another logged AS scrim. Mxlvora and specter_108 were the top scorers in this one, while Dyberki, Kol, and JENOS_ONEPUNCH all added useful all-around lines to the board.",
        subtitle: "04/07/2026",
        images: [
          { src: "assets/scrim-2026-07-04-5.png", alt: "04/07/2026 sanctioned scrim scoreboard five" },
        ],
        notes: [],
      },
      "AS BBZ 004": {
        description: "July 4 sanctioned scrims added three more AS scoreboards. Kol, meblack0609, Zayne, Tax, and Shoop all stacked meaningful volume, while Willow, Bigmac, Moon, robloxxD0610s, and Enrique_cheeks entered or extended the tracked pool.",
        subtitle: "04/07/2026",
        images: [
          { src: "assets/scrim-2026-07-04-1.png", alt: "04/07/2026 sanctioned scrim scoreboard one" },
          { src: "assets/scrim-2026-07-04-2.png", alt: "04/07/2026 sanctioned scrim scoreboard two" },
          { src: "assets/scrim-2026-07-04-3.png", alt: "04/07/2026 sanctioned scrim scoreboard three" },
        ],
        notes: [],
      },
      "AS BBZ 003": {
        description: "July 3 sanctioned scrim set three now has three logged scoreboards. godusoopmam, gamer05095, and m4rnr stood out again, while xXBlack_HXx, MelsKelvingts, and 80brickz all added another full AS scrim line to the pool.",
        subtitle: "03/07/2026",
        images: [
          { src: "assets/scrim-2026-07-03-6.png", alt: "03/07/2026 sanctioned scrim #3 scoreboard one" },
          { src: "assets/scrim-2026-07-03-7.png", alt: "03/07/2026 sanctioned scrim #3 scoreboard two" },
          { src: "assets/scrim-2026-07-03-8.png", alt: "03/07/2026 sanctioned scrim #3 scoreboard three" },
        ],
        notes: [],
      },
      "AS BBZ 002": {
        description: "July 3 sanctioned scrim set two added three more logged scoreboards. Shoop exploded as the biggest scorer, while 1_43213, Dragon_zuen, Clairss_Seupay, and NIGHTMARE88REAPER all stacked strong follow-up statlines across the set.",
        subtitle: "03/07/2026",
        images: [
          { src: "assets/scrim-2026-07-03-3.png", alt: "03/07/2026 sanctioned scrim #2 scoreboard one" },
          { src: "assets/scrim-2026-07-03-4.png", alt: "03/07/2026 sanctioned scrim #2 scoreboard two" },
          { src: "assets/scrim-2026-07-03-5.png", alt: "03/07/2026 sanctioned scrim #2 scoreboard three" },
        ],
        notes: [],
      },
      "AS BBZ 001": {
        description: "July 3 sanctioned scrims with two logged scoreboards. The clearest standouts were Qwertyezeu, RSHUD, Cheokhimisthebest, and Sabre, with RSHUD's overall placement adjusted down to account for ping-abuse context.",
        subtitle: "03/07/2026",
        images: [
          { src: "assets/scrim-2026-07-03-1.png", alt: "03/07/2026 sanctioned scrim #1 scoreboard one" },
          { src: "assets/scrim-2026-07-03-2.png", alt: "03/07/2026 sanctioned scrim #1 scoreboard two" },
        ],
        notes: [],
      },
    },
  },
};

const onesHistoryRegions = {
  OCE: {
    sessions: {
      "OCE 1V1 003": {
        description: "Shoop vs Serenity. Challenging for the No.1 spot. Serenity won and stayed at their spot. Set score: 2 - 0.",
        subtitle: "03/07/2026",
        images: [
          { src: "assets/oce-1v1-003-1.png", alt: "OCE 1V1 003 scoreboard one" },
          { src: "assets/oce-1v1-003-2.png", alt: "OCE 1V1 003 scoreboard two" },
        ],
        notes: [
          {
            title: "Average Stats",
            text: "Serenity: 27.5 points, 10.5 blocks, 1.5 ankle breaks.",
          },
          {
            title: "Opponent Average Stats",
            text: "Shoop: 10.5 points, 7.0 blocks, 0.0 ankle breaks.",
          },
        ],
      },
      "OCE 1V1 002": {
        description: "Kol vs Shoop. Challenging for the No.3 spot. Shoop won and stayed at their spot. Set score: 2 - 1 (Missing 2nd Match)",
        subtitle: "03/07/2026",
        images: [
          { src: "assets/oce-1v1-002-1.png", alt: "OCE 1V1 002 scoreboard one" },
          { src: "assets/oce-1v1-002-2.png", alt: "OCE 1V1 002 scoreboard two" },
        ],
        notes: [
          {
            title: "Average Stats",
            text: "Shoop: 27.0 points, 11.5 blocks, 0.0 ankle breaks.",
          },
          {
            title: "Opponent Average Stats",
            text: "Kol: 24.0 points, 8.5 blocks, 0.5 ankle breaks.",
          },
        ],
      },
      "OCE 1V1 001": {
        description: "Dio vs Lyric. Challenging for the No.8 spot. Lyric won and stayed at their spot. Set score: 1 - 0.",
        subtitle: "03/07/2026",
        images: [{ src: "assets/oce-1v1-001.png", alt: "OCE 1V1 001 scoreboard" }],
        notes: [
          {
            title: "Average Stats",
            text: "Lyric: 35.0 points, 9.0 blocks, 0.0 ankle breaks.",
          },
          {
            title: "Opponent Average Stats",
            text: "Dio: 14.0 points, 13.0 blocks, 1.0 ankle breaks.",
          },
        ],
      },
    },
  },
  AS: { sessions: {} },
  NA: { sessions: {} },
  EU: { sessions: {} },
};

function getActiveScrimRegion() {
  return scrimRegions[document.body.dataset.activeRegion || "OCE"] || null;
}

function getActiveOnesHistoryRegion() {
  return onesHistoryRegions[document.body.dataset.activeRegion || "OCE"] || null;
}

function getActiveScrimPlayerStats() {
  return getActiveScrimRegion()?.players || {};
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getScrimOverallValue(player) {
  const weightedScore =
    Math.min(55, (getPerGameStat(player, "points") / 20) * 55) +
    Math.min(20, (getPerGameStat(player, "blocks") / 5) * 20) +
    Math.min(15, (getPerGameStat(player, "assists") / 6) * 15) +
    Math.min(10, (getPerGameStat(player, "ankleBreaks") / 4) * 10);

  const adjusted = 70 + weightedScore * 0.29 + (player.ovrAdjustment ?? 0);
  return Math.round(clampNumber(adjusted, 70, 99));
}

function getScrimGamesPlayed(player) {
  return Math.max(1, player.games ?? 1);
}

function getPerGameStat(player, statKey) {
  return player[statKey] / getScrimGamesPlayed(player);
}

function formatPerGameStat(value) {
  return Number.isInteger(value) ? `${value}` : value.toFixed(1);
}

function getBestGameStat(player, statKey) {
  const bestKeyMap = {
    points: "bestPoints",
    assists: "bestAssists",
    blocks: "bestBlocks",
    ankleBreaks: "bestAnkleBreaks",
  };

  return player[bestKeyMap[statKey]] ?? 0;
}

function getScrimDisplayName(playerKey, player) {
  return player?.displayName || playerKey;
}

function addTrackedName(name, bucket) {
  if (!name) {
    return;
  }

  name
    .split("&")
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      if (
        part &&
        part !== "Waiting for data" &&
        part !== "No featured set selected" &&
        part !== "No featured duo set selected" &&
        part !== "Nothing selected"
      ) {
        bucket.add(part);
      }
    });
}

function updateTrackedPlayersCount() {
  if (!trackedPlayersCount) {
    return;
  }

  const trackedNames = new Set();

  Object.values(onesPresentRegionBoards).forEach((board) => {
    board.forEach((entry) => {
      addTrackedName(entry.player, trackedNames);
    });
  });

  Object.keys(playerSpotlights).forEach((name) => {
    addTrackedName(name, trackedNames);
  });

  Object.keys(allTimeSpotlights).forEach((name) => {
    addTrackedName(name, trackedNames);
  });

  Object.keys(twosSpotlights).forEach((name) => {
    addTrackedName(name, trackedNames);
  });

  Object.keys(twosAlltimeSpotlights).forEach((name) => {
    addTrackedName(name, trackedNames);
  });

  document.querySelectorAll(".legend-card h3").forEach((node) => {
    addTrackedName(node.textContent?.trim(), trackedNames);
  });

  Object.values(scrimRegions).forEach((region) => {
    Object.entries(region.players || {}).forEach(([playerKey, player]) => {
      addTrackedName(getScrimDisplayName(playerKey, player), trackedNames);
    });
  });

  trackedPlayersCount.textContent = `${trackedNames.size}`;
}

const scrimMetricConfig = {
  overall: {
    getLabel: () => "OVR Rating",
    valueKey: "overall",
    format: (value, player) => `${getScrimOverallValue(player)} OVR`,
  },
  activity: {
    getLabel: () => "Games Played",
    valueKey: "games",
    format: (value) => `${value} Games Played`,
  },
  defense: {
    getLabel: (mode) => mode === "total" ? "Total Blocks" : "Blocks Per Game",
    valueKey: "blocks",
    totalSuffix: "Blocks",
    avgSuffix: "BPG",
    format: (value, player, mode) => mode === "total" ? `${player.blocks} Total Blocks` : `${formatPerGameStat(value)} BPG`,
  },
  playmaking: {
    getLabel: (mode) => mode === "total" ? "Total Assists" : "Assists Per Game",
    valueKey: "assists",
    totalSuffix: "Assists",
    avgSuffix: "APG",
    format: (value, player, mode) => mode === "total" ? `${player.assists} Total Assists` : `${formatPerGameStat(value)} APG`,
  },
  offense: {
    getLabel: (mode) => mode === "total" ? "Total Points" : "Points Per Game",
    valueKey: "points",
    totalSuffix: "Points",
    avgSuffix: "PPG",
    format: (value, player, mode) => mode === "total" ? `${player.points} Total Points` : `${formatPerGameStat(value)} PPG`,
  },
  handles: {
    getLabel: (mode) => mode === "total" ? "Total Ankle Breaks" : "Ankle Breaks Per Game",
    valueKey: "ankleBreaks",
    totalSuffix: "Ankle Breaks",
    avgSuffix: "ABPG",
    format: (value, player, mode) => mode === "total" ? `${player.ankleBreaks} Total Ankle Breaks` : `${formatPerGameStat(value)} ABPG`,
  },
};

function scrimMetricSupportsMode(metricName) {
  return ["defense", "playmaking", "offense", "handles"].includes(metricName);
}

function getScrimMetricModeValue(player, metricName, statMode) {
  const metric = scrimMetricConfig[metricName];

  if (!metric) {
    return 0;
  }

  if (metricName === "overall") {
    return getScrimOverallValue(player);
  }

  if (metricName === "activity") {
    return getScrimGamesPlayed(player);
  }

  return statMode === "total" ? (player[metric.valueKey] || 0) : getPerGameStat(player, metric.valueKey);
}

function getScrimPlacementRank(index, metricName, value) {
  if (metricName === "overall") {
    if (value >= 95) {
      return { label: "S Rank", className: "rank-tier-gold" };
    }

    if (value >= 90) {
      return { label: "A Rank", className: "rank-tier-silver" };
    }

    if (value >= 85) {
      return { label: "B Rank", className: "rank-tier-plain" };
    }

    if (value >= 75) {
      return { label: "C Rank", className: "rank-tier-plain" };
    }

    return { label: "D Rank", className: "rank-tier-plain" };
  }

  if (metricName === "handles") {
    if (value >= 7) {
      return { label: "S Rank", className: "rank-tier-gold" };
    }

    if (value >= 5) {
      return { label: "A Rank", className: "rank-tier-silver" };
    }

    if (value >= 3) {
      return { label: "B Rank", className: "rank-tier-plain" };
    }

    if (value >= 1) {
      return { label: "C Rank", className: "rank-tier-plain" };
    }

    return { label: "D Rank", className: "rank-tier-plain" };
  }

  if (metricName === "activity") {
    if (value >= 8) {
      return { label: "S Rank", className: "rank-tier-gold" };
    }

    if (value >= 6) {
      return { label: "A Rank", className: "rank-tier-silver" };
    }

    if (value >= 4) {
      return { label: "B Rank", className: "rank-tier-plain" };
    }

    if (value >= 2) {
      return { label: "C Rank", className: "rank-tier-plain" };
    }

    return { label: "D Rank", className: "rank-tier-plain" };
  }

  if (metricName === "defense") {
    if (value >= 6) {
      return { label: "S Rank", className: "rank-tier-gold" };
    }

    if (value >= 3) {
      return { label: "A Rank", className: "rank-tier-silver" };
    }

    if (value >= 2) {
      return { label: "B Rank", className: "rank-tier-plain" };
    }

    if (value >= 1) {
      return { label: "C Rank", className: "rank-tier-plain" };
    }

    return { label: "D Rank", className: "rank-tier-plain" };
  }

  if (metricName === "playmaking") {
    if (value >= 12) {
      return { label: "S Rank", className: "rank-tier-gold" };
    }

    if (value >= 9) {
      return { label: "A Rank", className: "rank-tier-silver" };
    }

    if (value >= 6) {
      return { label: "B Rank", className: "rank-tier-plain" };
    }

    if (value >= 3) {
      return { label: "C Rank", className: "rank-tier-plain" };
    }

    return { label: "D Rank", className: "rank-tier-plain" };
  }

  if (metricName === "offense") {
    if (value >= 30) {
      return { label: "S Rank", className: "rank-tier-gold" };
    }

    if (value >= 20) {
      return { label: "A Rank", className: "rank-tier-silver" };
    }

    if (value >= 12) {
      return { label: "B Rank", className: "rank-tier-plain" };
    }

    if (value >= 6) {
      return { label: "C Rank", className: "rank-tier-plain" };
    }

    return { label: "D Rank", className: "rank-tier-plain" };
  }

  if (index === 0) {
    return { label: "S Rank", className: "rank-tier-gold" };
  }

  if (index === 1) {
    return { label: "A Rank", className: "rank-tier-silver" };
  }

  if (index === 2) {
    return { label: "A Rank", className: "rank-tier-bronze" };
  }

  if (index <= 5) {
    return { label: "B Rank", className: "rank-tier-plain" };
  }

  if (index <= 7) {
    return { label: "C Rank", className: "rank-tier-plain" };
  }

  return { label: "D Rank", className: "rank-tier-plain" };
}

const playerSpotlights = {
  yznx: {
    monumentsLabel: "FLAGS & SKILLS",
    description:
      "Ex-Top 5 Star EU and a known name across the BBZ scene. Maining both Jackpot and Flash, he's got the raw mechanics and the FastFlags to back it up.",
    monuments: [
      {
        title: "The Perfect Balance",
        text: "In his left hand he has his offensive skills, and in his right hand his \"DFIntS2PhysicsSenderRate\": \"38760\".",
      },
      {
        title: "Fast Flags Abuser",
        text: "He doesn't just play on default. His custom Fast Flags setup is so dialed that his shot is a nuke, his blocks are Wemby like and his reach is half court.",
      },
      {
        title: "EU Demon",
        text: "Retired from Star he chose to main Flash and Jackpot. Never really bothered with Ranked, usually plays Friendly and League matches.",
      },
    ],
  },
  Rshud: {
    description:
      "Rshud currently leads the AS 1v1 board at No.1, holding the top spot on the Asia side of the ladder as one of the clearest names in the region right now.",
    monuments: [
      {
        title: "Current AS No.1",
        text: "Rshud currently sits at the top of the AS 1v1 leaderboard.",
      },
      {
        title: "Top Ladder Presence",
        text: "Holding first place keeps Rshud at the center of the current AS 1v1 conversation.",
      },
    ],
  },
  Mom: {
    description:
      "Mom currently sits at No.2 on the AS 1v1 board, placing just behind the current regional leader and firmly inside the top end of the ladder.",
    monuments: [
      {
        title: "Current AS No.2",
        text: "Mom currently holds second place on the AS 1v1 leaderboard.",
      },
      {
        title: "High Ladder Placement",
        text: "This placement keeps Mom right in the mix near the very top of the region.",
      },
    ],
  },
  Quinn: {
    description:
      "Quinn currently sits inside the upper AS 1v1 board and remains one of the more visible names on the regional ladder.",
    monuments: [
      {
        title: "AS Top 10 Placement",
        text: "Quinn currently holds a place on the AS 1v1 leaderboard.",
      },
    ],
  },
  Mikaela: {
    description:
      "Mikaela currently holds a spot on the AS 1v1 board and remains part of the active upper ladder in the region.",
    monuments: [
      {
        title: "AS Top 10 Placement",
        text: "Mikaela currently holds a place on the AS 1v1 leaderboard.",
      },
    ],
  },
  Willow: {
    description:
      "Willow currently holds a place on the AS 1v1 board as one of the tracked names inside the regional ladder.",
    monuments: [
      {
        title: "AS Top 10 Placement",
        text: "Willow currently holds a place on the AS 1v1 leaderboard.",
      },
    ],
  },
  Tokumei: {
    description:
      "Tokumei currently sits on the AS 1v1 board and remains one of the active tracked names in the region.",
    monuments: [
      {
        title: "AS Top 10 Placement",
        text: "Tokumei currently holds a place on the AS 1v1 leaderboard.",
      },
    ],
  },
  Tax: {
    description:
      "Tax rounds out the current AS 1v1 board and stays tracked as one of the visible names on the regional ladder.",
    monuments: [
      {
        title: "AS Top 10 Placement",
        text: "Tax currently holds a place on the AS 1v1 leaderboard.",
      },
    ],
  },
  Serenity: {
    description:
      "Serenity now sits at No.1 on the present 1v1 board, backed by full-court control, elite adaptability, and contests that make every possession feel uncomfortable.",
    monuments: [
      {
        title: "Returned After 4 Months Away",
        text: "Serenity came back from a four-month retirement and immediately looked like one of the hardest players to face again.",
      },
      {
        title: "Full-Court 1v1 Specialist",
        text: "They thrive in full-court matchups, using stamina, spacing, and long-possession control to stay dangerous.",
      },
      {
        title: "Insane Ping and Reach",
        text: "Serenity's contests come from awkward distances and their recovery speed makes pressure possessions feel unfair.",
      },
      {
        title: "Only Falls to Elite Names",
        text: "Losses are rare, which keeps Serenity firmly in the elite tier of the current scene.",
      },
      {
        title: "Pressure Matchups",
        text: "Serenity's biggest matches feel high-pressure because their style forces opponents into uncomfortable decisions all game long.",
      },
      {
        title: "Elite Adaptability",
        text: "Serenity adjusts mid-game to fast, defensive, flashy, or safe opponents without relying on one trick.",
      },
    ],
  },
  Shoop: {
    description:
      "Shoop currently sits at No.3 in the 1v1 rankings with a 10k+ peak, respected wins, and a legacy that stretches beyond matches alone. Even while returning from rust, his half-court strength and past prime form keep him firmly in the elite tier.",
    monuments: [
      {
        title: "Defeated Pocoyo and Cheese",
        text: "Wins over respected names like Pocoyo and Cheese give real weight to Shoop's reputation.",
      },
      {
        title: "Previous 2nd Best in His Prime",
        text: "At his peak, Shoop was considered the second best player, sitting just below the very top of the scene.",
      },
      {
        title: "Returning From Rust",
        text: "Shoop is still shaking off inactivity, but his foundation and ceiling still make him a serious threat.",
      },
      {
        title: "Half-Court Specialist",
        text: "His biggest strength is half-court play, where positioning, baiting, and tight-space reads matter most.",
      },
      {
        title: "Creator of the Basketball Zero Hub Website",
        text: "Shoop's impact goes beyond playing, helping the community through the creation of this hub itself.",
      },
    ],
  },
  Moon: {
    description:
      "Moon is widely recognized as the best controller player in Basketball Zero, known for elite defense, huge block range, and dominant paint control.",
    monuments: [
      {
        title: "Best Controller Player in the Game",
        text: "Moon is widely recognized as the best controller player in Basketball Zero, proving that controller players can compete at the highest level.",
      },
      {
        title: "Elite Rim Guardian",
        text: "Moon's biggest strength is defense around the rim, shutting down drives and making easy finishes feel impossible.",
      },
    ],
  },
  Cheese: {
    description:
      "Cheese now sits at No.2 on the present board, with elite offensive pressure, hard-to-read timing, and the kind of pace changes that still make him feel dangerous in isolation.",
    monuments: [
      {
        title: "Current No.2 Placement",
        text: "Cheese currently holds the second spot on the reset 1v1 leaderboard.",
      },
      {
        title: "Low-Ping Pressure",
        text: "His speed and timing still make defensive reads feel stressful and rushed.",
      },
      {
        title: "Elite Isolation Threat",
        text: "Cheese stays dangerous because he can pressure defenders into panicking before the possession is even decided.",
      },
    ],
  },
  Literalgod: {
    description:
      "Literalgod currently sits at No.5 on the present 1v1 board and holds a strong place in the upper half of the ladder.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Literalgod currently holds a place inside the top 10 of the 1v1 rankings.",
      },
      {
        title: "Upper Ladder Presence",
        text: "Their current placement keeps them firmly among the more visible names on the board.",
      },
    ],
  },
  Gnome: {
    description:
      "Gnome currently sits at No.7 on the present 1v1 board and holds a solid spot in the current top 10.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Gnome currently holds a place inside the top 10 of the 1v1 rankings.",
      },
      {
        title: "Current Ladder Presence",
        text: "Their spot on the board keeps them in the active present-day conversation.",
      },
    ],
  },
  Gary: {
    description:
      "Gary currently sits at No.9 on the present 1v1 board, carrying over a known name and a 4k+ peak into the current reset ladder.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Gary currently holds a place inside the top 10 of the 1v1 rankings.",
      },
      {
        title: "Known Peak",
        text: "A 4k+ peak gives Gary one of the clearer tracked marks among the lower half of the present board.",
      },
    ],
  },
  Tenkyu: {
    description:
      "Tenkyu rounds out the present 1v1 top 10 at No.10 and remains one of the tracked names still in the mix.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Tenkyu currently holds a place inside the top 10 of the 1v1 rankings.",
      },
      {
        title: "Tracked Contender",
        text: "Their current placement keeps them on the board as one of the active names worth watching.",
      },
    ],
  },
  Dio: {
    description:
      "Dio is currently being tracked outside the main 1v1 leaderboard and sits in the off-board pool as a C Rank name.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Dio is not on the main top 10 ladder right now and is instead being tracked separately.",
      },
      {
        title: "C Rank Status",
        text: "Current placement puts Dio in the off-board pool at C Rank.",
      },
    ],
  },
  Astral: {
    description:
      "Astral now holds the No.10 spot on the present 1v1 board and stays on the ladder as one of the active tracked names in the current top 10.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Astral currently holds the No.10 spot on the present 1v1 leaderboard.",
      },
      {
        title: "Tracked Contender",
        text: "Current placement keeps Astral on the active board as one of the names still in the mix.",
      },
    ],
  },
  Sabre: {
    description:
      "Sabre is currently being tracked outside the main 1v1 leaderboard as a B Rank name in the off-board pool.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Sabre is not on the active top 10 right now and is instead being tracked separately.",
      },
      {
        title: "B Rank Status",
        text: "Current placement keeps Sabre in the upper off-board tier at B Rank.",
      },
    ],
  },
  Arthur: {
    description:
      "Arthur currently sits at No.9 on the present 1v1 board and stays on the ladder as one of the active tracked names in the current mix.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Arthur currently holds the No.9 spot on the present 1v1 leaderboard.",
      },
      {
        title: "Tracked Contender",
        text: "Current placement keeps Arthur on the active board as one of the names still in the mix.",
      },
    ],
  },
  Eternos: {
    description:
      "Eternos is currently being tracked outside the main 1v1 leaderboard as a B Rank off-board name.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Eternos is being tracked just outside the main ladder rather than inside the active top 10.",
      },
      {
        title: "B Rank Status",
        text: "Current placement gives Eternos a spot in the higher half of the off-board pool at B Rank.",
      },
    ],
  },
  Tier: {
    description:
      "Tier is currently being tracked outside the main 1v1 leaderboard and remains part of the stronger off-board group at B Rank.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Tier is currently outside the active top 10 while still being kept in the tracked off-board pool.",
      },
      {
        title: "B Rank Status",
        text: "Current placement keeps Tier among the higher off-board names at B Rank.",
      },
    ],
  },
  idk: {
    description:
      "idk is currently being tracked outside the main 1v1 leaderboard as a C Rank off-board name.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "idk is not on the active top 10 and is instead listed in the off-board pool.",
      },
      {
        title: "C Rank Status",
        text: "Current placement keeps idk in the lower off-board group at C Rank.",
      },
    ],
  },
  Tempest: {
    description:
      "Tempest is currently being tracked outside the main 1v1 leaderboard and sits at the bottom of the off-board pool as a D Rank name.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Tempest is currently outside the active top 10 and is being tracked separately in the off-board section.",
      },
      {
        title: "D Rank Status",
        text: "Current placement puts Tempest at D Rank in the off-board pool.",
      },
    ],
  },
};

const allTimeSpotlights = {
  Cheese: {
    description:
      "Cheese holds the No.1 all-time 1v1 spot because his prime combined impossible-to-block low ping, elite deception, and offensive pressure that almost no defender could stay calm against.",
    monuments: [
      {
        title: "Prime Rival of Pocoyo",
        text: "At his best, Cheese stood on equal ground with Pocoyo and helped define the strongest rivalry Basketball Zero has ever had.",
      },
      {
        title: "Ranked 1v2 Demon",
        text: "Prime Cheese could win 1v2s in ranked, showing a level of control and confidence most top players never reached.",
      },
      {
        title: "Impossible-to-Block Low Ping",
        text: "His peak releases and timing were so fast that even correct reactions often felt late, making his prime offense terrifying.",
      },
      {
        title: "Pump Fake Gravity",
        text: "Cheese's prime pump fakes were so convincing that defenders would panic early and hand him easy openings.",
      },
      {
        title: "Elite Offensive Threat",
        text: "At his peak, Cheese broke defenders down through pressure, deception, and perfect timing rather than wasted movement.",
      },
    ],
  },
  Pocoyo: {
    description:
      "Pocoyo's peak made him one of the clearest all-time greats, dominating across multiple seasons with a style that felt ahead of what the rest of the scene could answer.",
    monuments: [
      {
        title: "Held No.1 From Seasons 2-8",
        text: "Pocoyo's prime wasn't brief; he stayed on top for an entire era and proved his peak could outlast almost everyone else.",
      },
      {
        title: "Ahead of His Time",
        text: "At his best, Pocoyo's reads, defense, and movement felt like they belonged to a stronger version of the game than everyone else was playing.",
      },
      {
        title: "Most Dominant of His Era",
        text: "Prime Pocoyo set the standard of the era, with only Cheese truly close enough to challenge that level.",
      },
      {
        title: "Undefeated Lockdown Demon",
        text: "His peak defense shut down possessions early and made scoring on him feel like a rare achievement.",
      },
      {
        title: "Untrackable Offense",
        text: "Pocoyo's prime movement and pace changes were so hard to follow that defenders often ended up guessing instead of reading him.",
      },
    ],
  },
  Shoop: {
    description:
      "Shoop lands at No.4 all-time because his prime half-court control, respected wins, and former No.2 reputation made him one of the cleanest elite peaks of his era.",
    monuments: [
      {
        title: "Defeated Pocoyo and Cheese",
        text: "Prime Shoop proved his ceiling through wins over legendary names, showing he could truly compete with the best of the best.",
      },
      {
        title: "Previous 2nd Best in His Prime",
        text: "At his highest level, Shoop was treated as the second best player in the scene, which says everything about how dangerous his prime was.",
      },
      {
        title: "Returning From Rust",
        text: "Even away from prime form, Shoop's legacy still points back to a version of him that was one of the hardest players to handle.",
      },
      {
        title: "Half-Court Specialist",
        text: "Prime Shoop was deadly in half-court settings where control, reads, and punishing small mistakes mattered the most.",
      },
      {
        title: "Creator of the Basketball Zero Hub Website",
        text: "Shoop's legacy extends beyond peak gameplay, giving him a visible place in the community's history as well.",
      },
    ],
  },
  Literalgod: {
    description:
      "Literalgod lands at No.4 on the all-time 1v1 board, earning a place above Gary as one of the stronger legacy names currently listed outside the GOAT tier.",
    monuments: [
      {
        title: "All-Time Placement",
        text: "Literalgod currently holds the No.4 spot on the all-time 1v1 board.",
      },
      {
        title: "Legacy Tier Status",
        text: "Their placement keeps them in Legend Tier and ahead of several other respected names on the historic list.",
      },
    ],
  },
  Gary: {
    description:
      "Gary sits at No.5 on the all-time 1v1 board, remembered for a prime built on elite hesitations, offensive pressure, and the ability to completely throw defenders off rhythm.",
    monuments: [
      {
        title: "Top Player in His Prime",
        text: "Gary was considered a top player in his prime, with the skill and confidence to stand as a serious threat whenever he was active and locked in.",
      },
      {
        title: "Hesi Specialist",
        text: "His hesitations were Gary's signature weapon, freezing defenders and creating easy openings out of simple stop-start movement.",
      },
      {
        title: "Elite at Shaking Up Opponents",
        text: "Gary's prime was built on throwing defenders off rhythm, baiting reactions, and punishing anyone who started panicking.",
      },
      {
        title: "Prime-Level Offensive Pressure",
        text: "At his best, Gary's offense used clean hesis, sudden bursts, and smart timing to constantly break defenders down.",
      },
    ],
  },
};

const twosSpotlights = {
  "Moon & Shoop": {
    description:
      "Moon and Shoop now sit at No.1 on the 2v2 board, taking over the top spot as the current duo to beat.",
    notes: [
      {
        title: "Current No.1 Duo",
        text: "They currently lead the 2v2 ladder and hold the strongest visible position on the board.",
      },
      {
        title: "Top Seed Control",
        text: "Being placed first puts Moon and Shoop at the center of the current duo conversation.",
      },
    ],
  },
  "Dio & Luckifan": {
    description:
      "Dio and Luckifan currently sit at No.2 on the 2v2 board and remain one of the strongest duos just behind the top team.",
    notes: [
      {
        title: "Current No.2 Duo",
        text: "They currently hold second place on the 2v2 ladder and stay within reach of the top spot.",
      },
      {
        title: "Elite Duo Presence",
        text: "Even after dropping a spot, they remain one of the clearest top-tier pairings on the board.",
      },
    ],
  },
  "Ata & Lechu": {
    description:
      "Ata and Lechu currently sit at No.3 on the 2v2 board and round out the visible top trio in the current duo ladder.",
    notes: [
      {
        title: "Current No.3 Duo",
        text: "They hold the third spot on the duo ladder and stay locked into the active upper tier.",
      },
      {
        title: "Top Trio Presence",
        text: "Their placement keeps them right behind the top two teams as part of the current top three.",
      },
    ],
  },
};

const twosAlltimeSpotlights = {
  "Lucki & Umbra": {
    description:
      "Lucki and Umbra hold the No.1 all-time 2v2 spot and open the historic duo board as the current GOAT-tier pairing.",
    notes: [
      {
        title: "First GOAT-Tier Duo",
        text: "They currently set the top standard for the all-time 2v2 board as the first duo placed in GOAT Tier.",
      },
      {
        title: "Historic No.1 Placement",
        text: "Being placed first gives Lucki and Umbra the strongest visible all-time 2v2 legacy on the site right now.",
      },
    ],
  },
  "Literalgod & Pocoyo": {
    description:
      "Literalgod and Pocoyo now sit at No.2 on the OCE all-time 2v2 board and stand as another GOAT-tier pairing just behind the top duo.",
    notes: [
      {
        title: "No.2 All-Time Duo",
        text: "They currently hold second place on the all-time 2v2 board as one of the strongest historic OCE pairings listed on the site.",
      },
      {
        title: "GOAT-Tier Placement",
        text: "Their placement keeps them inside GOAT Tier and right behind Lucki and Umbra on the current all-time duo ladder.",
      },
    ],
  },
};

const scrimSpotlights = {
  Shoop: {
    description:
      "Shoop scored heavily in the first scrim and finished with the most eye-catching scoring output of the day.",
    notes: [
      {
        title: "Scoring pop",
        text: "His 23-point game was the biggest single scoring line across the logged scrims.",
      },
      {
        title: "What stood out",
        text: "Shoop's offense was the easiest to notice from the scoreboards because of how hard he spiked in game one.",
      },
    ],
  },
  Cheese: {
    description:
      "Cheese was one of the most consistent players across both scrims and kept producing in each scoreboard.",
    notes: [
      {
        title: "Consistency",
        text: "Cheese showed up well in both matches instead of only peaking in one.",
      },
      {
        title: "What stood out",
        text: "Balanced production across the full day kept him near the top of the scrim board.",
      },
    ],
  },
  Dio: {
    description:
      "Dio had the biggest jump from the second scrim and turned in one of the strongest late-day stat lines.",
    notes: [
      {
        title: "Big second scrim",
        text: "The second scoreboard gave Dio one of the strongest performances of the whole day.",
      },
      {
        title: "What stood out",
        text: "Dio's second match clearly lifted his full-day placement.",
      },
    ],
  },
  idk: {
    description:
      "idk had one of the strongest offensive games from the first scrim and stayed high because of that spike.",
    notes: [
      {
        title: "First scrim impact",
        text: "The first scoreboard gave idk one of the stronger attacking lines of the day.",
      },
      {
        title: "What stood out",
        text: "idk's early-game production kept them high even without matching that peak again later.",
      },
    ],
  },
  Kol: {
    description:
      "Kol put up a strong first scrim and stayed in the upper half because that opening line was still one of the better ones logged.",
    notes: [
      {
        title: "Strong opener",
        text: "Kol's first scoreboard was one of the cleaner individual performances from the day.",
      },
      {
        title: "What stood out",
        text: "Kol's early production did most of the work for their placement.",
      },
    ],
  },
  Moon: {
    description:
      "Moon stayed solid across the scrims and held a middle placement through steadier overall contribution.",
    notes: [
      {
        title: "Steady output",
        text: "Moon did not have the loudest stat line, but stayed relevant across the logged games.",
      },
      {
        title: "What stood out",
        text: "A more even day kept Moon safely on the board.",
      },
    ],
  },
  Umbra: {
    description:
      "Umbra kept a place on the scrim board as a server player who still showed enough to stay tracked from the day.",
    notes: [
      {
        title: "Still tracked",
        text: "Umbra stayed in the server-player pool and keeps a lower-board slot from the June 30 scrims.",
      },
      {
        title: "What stood out",
        text: "Not a top-end performance, but enough presence to stay listed.",
      },
    ],
  },
  Sabre: {
    description:
      "Sabre stays on the scrim board as one of the remaining server-player names from the June 30 games.",
    notes: [
      {
        title: "Lower-board hold",
        text: "Sabre did not have one of the standout stat lines, but remains listed among tracked server players.",
      },
      {
        title: "What stood out",
        text: "Sabre remains on the board more as a tracked presence than from a standout spike.",
      },
    ],
  },
};

const scrimHistorySpotlights = {
  "Sanctioned Scrims Log": {
    description:
      "This archive is meant for full sanctioned scrim sessions where we review team games, compare in-game stats, and decide which individuals deserve OVR movement on the live board.",
    notes: [
      {
        title: "Best Use Case",
        text: "Drop full scrim sets here when several players are being tracked at once.",
      },
      {
        title: "What To Store",
        text: "Map scorelines, standout stat lines, and who clearly performed best over the session.",
      },
    ],
  },
  "1v1 Match History": {
    description:
      "This section is for tracked 1v1 sets, challenge matches, and isolation performances that matter to the community ladder or player reputation.",
    notes: [
      {
        title: "Best Use Case",
        text: "Use it for first-to score sets, rivalry matches, and notable 1v1 results worth keeping on record.",
      },
      {
        title: "What To Store",
        text: "Opponent names, final score, standout clips or stats, and any notes that explain why the result mattered.",
      },
    ],
  },
  "2v2 Match History": {
    description:
      "This section is for recorded duo sets, sanctioned 2v2 runs, and matchups that help build the current and all-time 2v2 picture.",
    notes: [
      {
        title: "Best Use Case",
        text: "Use it for duo ladder sets, rivalry pairings, and strong sanctioned 2v2 performances.",
      },
      {
        title: "What To Store",
        text: "Duo names, opponents, set result, and any chemistry or performance notes that affected rankings.",
      },
    ],
  },
};

function activateTab(targetTab) {
  const currentIndex = Array.from(tabButtons).findIndex((button) =>
    button.classList.contains("active")
  );
  const targetIndex = Array.from(tabButtons).findIndex(
    (button) => button.dataset.tab === targetTab
  );
  const motion = targetIndex >= currentIndex ? "left" : "right";

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === targetTab);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === targetTab);
    if (panel.dataset.panel === targetTab) {
      panel.dataset.motion = motion;
    }
  });

  document.body.classList.add("is-transitioning");
  window.clearTimeout(activateTab.transitionTimer);
  activateTab.transitionTimer = window.setTimeout(() => {
    document.body.classList.remove("is-transitioning");
  }, 340);

  if (hubSection) {
    requestAnimationFrame(() => {
      hubSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });
});

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activateTab(link.dataset.tabLink);
  });
});

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setRegion(button.dataset.regionTab);
  });
});

function activateSwitch(groupName, targetValue) {
  const groupButtons = Array.from(switchButtons).filter(
    (button) => button.dataset.switchGroup === groupName
  );
  const groupPanels = Array.from(switchPanels).filter(
    (panel) => panel.dataset.switchPanel === groupName
  );
  const currentIndex = groupButtons.findIndex((button) =>
    button.classList.contains("active")
  );
  const targetIndex = groupButtons.findIndex(
    (button) => button.dataset.switchTarget === targetValue
  );
  const motion = targetIndex >= currentIndex ? "left" : "right";

  groupButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.switchTarget === targetValue);
  });

  groupPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.switchValue === targetValue);
    if (panel.dataset.switchValue === targetValue) {
      panel.dataset.motion = motion;
    }
  });

  document.body.classList.add("is-transitioning");
  window.clearTimeout(activateSwitch.transitionTimer);
  activateSwitch.transitionTimer = window.setTimeout(() => {
    document.body.classList.remove("is-transitioning");
  }, 340);
}

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateSwitch(button.dataset.switchGroup, button.dataset.switchTarget);
  });
});

function renderSpotlight(playerName) {
  const player = playerSpotlights[playerName];
  const liveSpotlightName = document.getElementById("spotlightName");
  const liveSpotlightDescription = document.getElementById("spotlightDescription");
  const liveMonumentsList = document.getElementById("monumentsList");
  const liveMonumentsLabel = liveMonumentsList
    ?.closest(".monuments-preview")
    ?.querySelector(".mini-label");

  if (!player || !liveSpotlightName || !liveSpotlightDescription || !liveMonumentsList) {
    return;
  }

  document.body.classList.add("is-animating");

  liveSpotlightName.textContent = playerName;
  liveSpotlightDescription.textContent = player.description;
  if (liveMonumentsLabel) {
    liveMonumentsLabel.textContent = player.monumentsLabel || "Monuments";
  }
  liveMonumentsList.innerHTML = player.monuments
    .map(
      (monument) => `
        <article class="monument-item">
          <h4>${monument.title}</h4>
          <p>${monument.text}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-present-player]").forEach((row) => {
    row.classList.toggle("active", row.dataset.presentPlayer === playerName);
  });

  window.clearTimeout(renderSpotlight.fadeTimer);
  renderSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderPresentBoard(regionCode) {
  if (!onesPresentRows) {
    return;
  }

  const rows = onesPresentRegionBoards[regionCode] || onesPresentRegionBoards.OCE;

  onesPresentRows.innerHTML = rows
    .map(
      (entry) => `
        <div class="rankings-entry-block">
          <div class="ranking-number" aria-label="Number ${entry.rank} rank">${entry.rank}.</div>
          <article class="leaderboard-row${entry.rank === 1 ? " active" : ""}" data-present-player="${entry.player}">
            <div class="player-meta">
              <img
                class="avatar-slot avatar-image"
                src="${entry.avatar}"
                alt="${entry.player} avatar"
              />
              <div>
                <strong>${entry.player}</strong>
                <span class="player-username">${entry.username}</span>
              </div>
            </div>
            <span>${entry.elo}</span>
            <span class="rank-tier ${entry.tierClass}">${entry.tier}</span>
          </article>
        </div>
        <div class="row-breakline"></div>
      `
    )
    .join("");

  onesPresentRows.querySelectorAll("[data-present-player]").forEach((row) => {
    row.addEventListener("click", () => {
      onesPresentRows.querySelectorAll("[data-present-player]").forEach((otherRow) => {
        otherRow.classList.remove("active");
      });
      row.classList.add("active");
      renderSpotlight(row.dataset.presentPlayer);
    });
  });

  renderSpotlight(onesPresentRegionSpotlights[regionCode] || rows[0]?.player || "Serenity");
  updateRankingNumberColors();
  updateTrackedPlayersCount();
}

function buildRegionEmptyRankingCard(title, body) {
  return `
    <div class="leaderboard-card empty-state-card">
      <div class="empty-state">
        <div>
          <h4>${title}</h4>
          <p>${body}</p>
        </div>
      </div>
    </div>
    <aside class="insight-card empty-state-card">
      <p class="mini-label">Waiting for data</p>
      <h3>Nothing tracked yet</h3>
    </aside>
  `;
}

function renderRegionSpecificRankingPanels(regionCode) {
  if (regionCode === "AS" || regionCode === "EU") {
    const regionLabel = regionCode;

    if (onesUnrankedPanel) {
      onesUnrankedPanel.innerHTML = buildRegionEmptyRankingCard(
        `No ${regionLabel} off-board 1v1 players yet`,
        `Only the ${regionLabel} present 1v1 board is tracked right now.`
      );
    }

    if (onesAlltimePanel) {
      onesAlltimePanel.innerHTML = buildRegionEmptyRankingCard(
        `No ${regionLabel} all-time 1v1 board yet`,
        `All-time ${regionLabel} 1v1 placements can be added once that region has a legacy board.`
      );
    }

    if (twosPresentPanel) {
      twosPresentPanel.innerHTML = buildRegionEmptyRankingCard(
        `No ${regionLabel} 2v2 rankings yet`,
        `${regionLabel} 2v2 teams have not been placed on the rankings board yet.`
      );
    }

    if (twosUnrankedPanel) {
      twosUnrankedPanel.innerHTML = buildRegionEmptyRankingCard(
        `No ${regionLabel} off-board 2v2 teams yet`,
        `There are no ${regionLabel} off-board duo placements on the site right now.`
      );
    }

    if (twosAlltimePanel) {
      twosAlltimePanel.innerHTML = buildRegionEmptyRankingCard(
        `No ${regionLabel} all-time 2v2 board yet`,
        `Historic ${regionLabel} duo placements can be added here later.`
      );
    }

    bindRankingPanelInteractions();
    return;
  }

  Object.entries(regionSpecificRankingPanels).forEach(([key, panel]) => {
    if (panel && regionSpecificRankingMarkup[key]) {
      panel.innerHTML = regionSpecificRankingMarkup[key];
    }
  });

  bindRankingPanelInteractions();
}

function bindRankingPanelInteractions() {
  if (document.body.dataset.rankingDelegationBound) {
    return;
  }

  document.addEventListener("click", (event) => {
    const alltimeRow = event.target.closest("[data-alltime-player]");
    if (alltimeRow) {
      renderAllTimeSpotlight(alltimeRow.dataset.alltimePlayer);
      return;
    }

    const offboardRow = event.target.closest("[data-offboard-player]");
    if (offboardRow) {
      renderOffboardSpotlight(offboardRow.dataset.offboardPlayer);
      return;
    }

    const twosRow = event.target.closest("[data-twos-player]");
    if (twosRow) {
      renderTwosSpotlight(twosRow.dataset.twosPlayer);
      return;
    }

    const twosAlltimeRow = event.target.closest("[data-twos-alltime-player]");
    if (twosAlltimeRow) {
      renderTwosAlltimeSpotlight(twosAlltimeRow.dataset.twosAlltimePlayer);
    }
  });

  document.body.dataset.rankingDelegationBound = "true";
}

function renderAllTimeSpotlight(playerName) {
  const player = allTimeSpotlights[playerName];
  const liveAlltimeSpotlightName = document.getElementById("alltimeSpotlightName");
  const liveAlltimeSpotlightDescription = document.getElementById("alltimeSpotlightDescription");
  const liveAlltimeMonumentsList = document.getElementById("alltimeMonumentsList");

  if (!player || !liveAlltimeSpotlightName || !liveAlltimeSpotlightDescription || !liveAlltimeMonumentsList) {
    return;
  }

  document.body.classList.add("is-animating");

  liveAlltimeSpotlightName.textContent = playerName;
  liveAlltimeSpotlightDescription.textContent = player.description;
  liveAlltimeMonumentsList.innerHTML = player.monuments
    .map(
      (monument) => `
        <article class="monument-item">
          <h4>${monument.title}</h4>
          <p>${monument.text}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-alltime-player]").forEach((row) => {
    row.classList.toggle("active", row.dataset.alltimePlayer === playerName);
  });

  window.clearTimeout(renderAllTimeSpotlight.fadeTimer);
  renderAllTimeSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderTwosSpotlight(teamName) {
  const team = twosSpotlights[teamName];
  const liveTwosSpotlightName = document.getElementById("twosSpotlightName");
  const liveTwosSpotlightDescription = document.getElementById("twosSpotlightDescription");
  const liveTwosNotesList = document.getElementById("twosNotesList");

  if (!team || !liveTwosSpotlightName || !liveTwosSpotlightDescription || !liveTwosNotesList) {
    return;
  }

  document.body.classList.add("is-animating");

  liveTwosSpotlightName.textContent = teamName;
  liveTwosSpotlightDescription.textContent = team.description;
  liveTwosNotesList.innerHTML = team.notes
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-twos-player]").forEach((row) => {
    row.classList.toggle("active", row.dataset.twosPlayer === teamName);
  });

  window.clearTimeout(renderTwosSpotlight.fadeTimer);
  renderTwosSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderOffboardSpotlight(playerName) {
  const player = playerSpotlights[playerName];
  const liveOffboardSpotlightName = document.getElementById("offboardSpotlightName");
  const liveOffboardSpotlightDescription = document.getElementById("offboardSpotlightDescription");
  const liveOffboardNotesList = document.getElementById("offboardNotesList");

  if (!player || !liveOffboardSpotlightName || !liveOffboardSpotlightDescription || !liveOffboardNotesList) {
    return;
  }

  document.body.classList.add("is-animating");

  liveOffboardSpotlightName.textContent = playerName;
  liveOffboardSpotlightDescription.textContent = player.description;
  liveOffboardNotesList.innerHTML = player.monuments
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-offboard-player]").forEach((row) => {
    row.classList.toggle("active", row.dataset.offboardPlayer === playerName);
  });

  window.clearTimeout(renderOffboardSpotlight.fadeTimer);
  renderOffboardSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderTwosAlltimeSpotlight(teamName) {
  const team = twosAlltimeSpotlights[teamName];
  const liveTwosAlltimeSpotlightName = document.getElementById("twosAlltimeSpotlightName");
  const liveTwosAlltimeSpotlightDescription = document.getElementById("twosAlltimeSpotlightDescription");
  const liveTwosAlltimeNotesList = document.getElementById("twosAlltimeNotesList");

  if (
    !team ||
    !liveTwosAlltimeSpotlightName ||
    !liveTwosAlltimeSpotlightDescription ||
    !liveTwosAlltimeNotesList
  ) {
    return;
  }

  document.body.classList.add("is-animating");

  liveTwosAlltimeSpotlightName.textContent = teamName;
  liveTwosAlltimeSpotlightDescription.textContent = team.description;
  liveTwosAlltimeNotesList.innerHTML = team.notes
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-twos-alltime-player]").forEach((row) => {
    row.classList.toggle("active", row.dataset.twosAlltimePlayer === teamName);
  });

  window.clearTimeout(renderTwosAlltimeSpotlight.fadeTimer);
  renderTwosAlltimeSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function getSortedScrimPlayers(metricName, statMode = activeScrimStatMode) {
  const metric = scrimMetricConfig[metricName];

  if (!metric) {
    return [];
  }

  const players = Object.entries(getActiveScrimPlayerStats());

  if (metricName === "overall") {
    return players.sort(([, left], [, right]) => getScrimOverallValue(right) - getScrimOverallValue(left));
  }

  if (metricName === "activity") {
    return players.sort(([, left], [, right]) => {
      const diff = getScrimGamesPlayed(right) - getScrimGamesPlayed(left);
      if (diff !== 0) {
        return diff;
      }
      return getScrimOverallValue(right) - getScrimOverallValue(left);
    });
  }

  return players.sort(([, left], [, right]) => {
    const diff = getScrimMetricModeValue(right, metricName, statMode) - getScrimMetricModeValue(left, metricName, statMode);
    if (diff !== 0) {
      return diff;
    }
    return getScrimOverallValue(right) - getScrimOverallValue(left);
  });
}

function getScrimSpotlightCopy(metricName, playerName, statMode = activeScrimStatMode) {
  const player = getActiveScrimPlayerStats()[playerName];
  const displayName = getScrimDisplayName(playerName, player);

  if (!player) {
    return null;
  }

  const notesByMetric = {
    overall: {
      description: `${displayName} holds a ${getScrimOverallValue(player)} OVR built from per-game production across ${getScrimGamesPlayed(player)} logged scrim games.`,
      notes: [
        {
          text: `${getScrimOverallValue(player)} OVR`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "points"))} points per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "blocks"))} blocks per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "ankleBreaks"))} ankle breaks per game`,
        },
        ...(player.contextNote
          ? [
              {
                text: player.contextNote,
              },
            ]
          : []),
        {
          text: `${getScrimGamesPlayed(player)} games logged`,
        },
        {
          text: `Best game: ${getBestGameStat(player, "points")} points, ${getBestGameStat(player, "assists")} assists, ${getBestGameStat(player, "blocks")} blocks, ${getBestGameStat(player, "ankleBreaks")} ankle breaks`,
        },
      ],
    },
    activity: {
      description: `${displayName} has been logged in ${getScrimGamesPlayed(player)} scrim games for this region so far.`,
      notes: [
        {
          text: `${getScrimGamesPlayed(player)} total logged games`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "points"))} points per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "blocks"))} blocks per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "ankleBreaks"))} ankle breaks per game`,
        },
      ],
    },
    defense: {
      description:
        statMode === "total"
          ? `${displayName} finished the logged scrims with ${player.blocks} total blocks across ${getScrimGamesPlayed(player)} games.`
          : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "blocks"))} blocks per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text:
            statMode === "total"
              ? `${displayName} finished the scrims with ${player.blocks} total blocks.`
              : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "blocks"))} blocks per game.`,
        },
        {
          text: `${displayName}'s best block game was ${getBestGameStat(player, "blocks")} blocks.`,
        },
        {
          text: `${displayName} played ${getScrimGamesPlayed(player)} logged scrim games.`,
        },
      ],
    },
    playmaking: {
      description:
        statMode === "total"
          ? `${displayName} finished the logged scrims with ${player.assists} total assists across ${getScrimGamesPlayed(player)} games.`
          : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text:
            statMode === "total"
              ? `${displayName} finished the scrims with ${player.assists} total assists.`
              : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game.`,
        },
        {
          text: `${displayName}'s best playmaking game was ${getBestGameStat(player, "assists")} assists.`,
        },
        {
          text: `${displayName} played ${getScrimGamesPlayed(player)} logged scrim games.`,
        },
      ],
    },
    offense: {
      description:
        statMode === "total"
          ? `${displayName} finished the logged scrims with ${player.points} total points across ${getScrimGamesPlayed(player)} games.`
          : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "points"))} points per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text:
            statMode === "total"
              ? `${displayName} finished the scrims with ${player.points} total points.`
              : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "points"))} points per game.`,
        },
        {
          text: `${displayName}'s best scoring game was ${getBestGameStat(player, "points")} points.`,
        },
        {
          text: `${displayName} played ${getScrimGamesPlayed(player)} logged scrim games.`,
        },
      ],
    },
    handles: {
      description:
        statMode === "total"
          ? `${displayName} finished the logged scrims with ${player.ankleBreaks} total ankle breaks across ${getScrimGamesPlayed(player)} games.`
          : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "ankleBreaks"))} ankle breaks per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text:
            statMode === "total"
              ? `${displayName} finished the scrims with ${player.ankleBreaks} total ankle breaks.`
              : `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "ankleBreaks"))} ankle breaks per game.`,
        },
        {
          text: `${displayName}'s best handles game was ${getBestGameStat(player, "ankleBreaks")} ankle breaks.`,
        },
        {
          text: `${displayName} played ${getScrimGamesPlayed(player)} logged scrim games.`,
        },
      ],
    },
  };

  return notesByMetric[metricName] || notesByMetric.overall;
}

function renderScrimSpotlight(metricName, playerName) {
  const player = getActiveScrimPlayerStats()[playerName];
  const spotlight = getScrimSpotlightCopy(metricName, playerName, activeScrimStatMode);

  if (!player || !spotlight || !scrimSpotlightName || !scrimSpotlightDescription || !scrimNotesList) {
    return;
  }

  document.body.classList.add("is-animating");

  scrimSpotlightName.textContent = getScrimDisplayName(playerName, player);
  scrimSpotlightDescription.textContent = spotlight.description;
  scrimNotesList.innerHTML = spotlight.notes
    .map(
      (note) => `
        <article class="monument-item">
          ${note.title ? `<h4>${note.title}</h4>` : ""}
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-scrim-player]").forEach((row) => {
    row.classList.toggle("active", row.dataset.scrimPlayer === playerName);
  });

  window.clearTimeout(renderScrimSpotlight.fadeTimer);
  renderScrimSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderScrimBoard(metricName, selectedPlayerName) {
  const metric = scrimMetricConfig[metricName];
  const usesStatMode = scrimMetricSupportsMode(metricName);
  const statMode = usesStatMode ? activeScrimStatMode : "avg";
  const sortedPlayers = getSortedScrimPlayers(metricName, statMode).slice(0, 20);
  const regionData = getActiveScrimRegion();
  const fallbackPlayer = selectedPlayerName || regionData?.defaultPlayer || sortedPlayers[0]?.[0];
  const activePlayerName = sortedPlayers.some(([name]) => name === selectedPlayerName)
    ? selectedPlayerName
    : (sortedPlayers.some(([name]) => name === fallbackPlayer) ? fallbackPlayer : sortedPlayers[0]?.[0]);

  if (!metric || !scrimLeaderboardRows || !scrimMetricLabel || !activePlayerName) {
    return;
  }

  scrimMetricButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.scrimMetric === metricName);
  });

  if (scrimStatModeSwitcher) {
    scrimStatModeSwitcher.classList.toggle("is-hidden", !usesStatMode);
  }

  scrimStatModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.scrimStatMode === activeScrimStatMode);
  });

  scrimMetricLabel.textContent = metric.getLabel ? metric.getLabel(statMode) : metric.label;
  const scrimHeadLabels = scrimLeaderboardRows
    ?.closest(".leaderboard-card")
    ?.querySelectorAll(".leaderboard-head span");

  if (scrimHeadLabels?.[2]) {
    scrimHeadLabels[2].textContent = metricName === "activity" || (usesStatMode && statMode === "total") ? "" : "Rank";
  }

  scrimLeaderboardRows.innerHTML = sortedPlayers
    .map(([playerName, player], index) => {
      const value = getScrimMetricModeValue(player, metricName, statMode);
      const placementRank = getScrimPlacementRank(index, metricName, value);
      const placementClassName =
        index === 0
          ? "rank-tier-gold"
          : index === 1
            ? "rank-tier-silver"
            : index === 2
              ? "rank-tier-bronze"
              : placementRank.className;
      const rankMarkup =
        metricName === "activity" || (usesStatMode && statMode === "total")
          ? '<span class="rank-tier rank-tier-plain"></span>'
          : `<span class="rank-tier ${placementClassName}">${placementRank.label}</span>`;
      const breakline = index < sortedPlayers.length - 1 ? '<div class="row-breakline"></div>' : "";
      const displayName = getScrimDisplayName(playerName, player);

      return `
        <div class="rankings-entry-block">
          <div class="ranking-number" aria-label="Number ${index + 1} scrims rank">${index + 1}.</div>
          <article class="leaderboard-row${playerName === activePlayerName ? " active" : ""}" data-scrim-player="${playerName}">
            <div class="player-meta">
              <img
                class="avatar-slot avatar-image"
                src="${player.avatar}"
                alt="${displayName} avatar"
              />
              <div>
                <strong>${displayName}</strong>
                <span class="player-username">${player.username}</span>
              </div>
            </div>
            <span>${metric.format(value, player, statMode)}</span>
            ${rankMarkup}
          </article>
        </div>
        ${breakline}
      `;
    })
    .join("");

  scrimLeaderboardRows.querySelectorAll("[data-scrim-player]").forEach((row) => {
    row.addEventListener("click", () => {
      renderScrimBoard(metricName, row.dataset.scrimPlayer);
    });
  });

  updateRankingNumberColors();
  updateTrackedPlayersCount();
  renderScrimSpotlight(metricName, activePlayerName);
}

function renderScrimHistorySpotlight(historyName) {
  const history = scrimHistorySpotlights[historyName];

  if (!history || !scrimHistoryName || !scrimHistoryDescription || !scrimHistoryNotesList) {
    return;
  }

  document.body.classList.add("is-animating");

  scrimHistoryName.textContent = historyName;
  scrimHistoryDescription.textContent = history.description;
  scrimHistoryNotesList.innerHTML = history.notes
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  scrimHistoryRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.scrimHistory === historyName);
  });

  window.clearTimeout(renderScrimHistorySpotlight.fadeTimer);
  renderScrimHistorySpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderHistoryScrimSession(sessionName) {
  const regionData = getActiveScrimRegion();
  const sessions = regionData?.sessions || {};
  const sessionNames = Object.keys(sessions);
  const activeSessionName = sessionName && sessions[sessionName] ? sessionName : sessionNames[0];
  const session = activeSessionName ? sessions[activeSessionName] : null;

  if (
    !session ||
    !historyScrimSessionsList ||
    !historyScrimSessionName ||
    !historyScrimSessionDescription ||
    !historyScrimSessionImages ||
    !historyScrimSessionNotes
  ) {
    return;
  }

  document.body.classList.add("is-animating");

  historyScrimSessionsList.innerHTML = sessionNames
    .map((name, index) => {
      const breakline = index < sessionNames.length - 1 ? '<div class="row-breakline"></div>' : "";
      return `
        <div class="rankings-entry-block history-entry-block">
          <article class="leaderboard-row${name === activeSessionName ? " active" : ""}" data-history-scrim-session="${name}">
            <div class="player-meta">
              <div>
                <strong>${name}</strong>
                <span class="player-username">${sessions[name].subtitle || ""}</span>
              </div>
            </div>
          </article>
        </div>
        ${breakline}
      `;
    })
    .join("");

  historyScrimSessionsList.querySelectorAll("[data-history-scrim-session]").forEach((row) => {
    row.addEventListener("click", () => {
      renderHistoryScrimSession(row.dataset.historyScrimSession);
    });
  });

  historyScrimSessionName.textContent = activeSessionName;
  historyScrimSessionDescription.textContent = session.description;
  historyScrimSessionImages.innerHTML = (session.images || [])
    .map(
      (image, index) => `
        <button
          class="history-image-link${index === 0 ? " active" : ""}"
          type="button"
          data-history-image-src="${image.src}"
          data-history-image-alt="${image.alt}"
          aria-label="Show ${image.alt}"
        >
          <img
            class="avatar-preview-image history-thumbnail-image"
            src="${image.src}"
            alt="${image.alt}"
          />
        </button>
      `
    )
    .join("");
  historyScrimSessionNotes.innerHTML = (session.notes || [])
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  window.clearTimeout(renderHistoryScrimSession.fadeTimer);
  renderHistoryScrimSession.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderHistoryOnesSession(sessionName) {
  const regionData = getActiveOnesHistoryRegion();
  const sessions = regionData?.sessions || {};
  const sessionNames = Object.keys(sessions);
  const activeSessionName = sessionName && sessions[sessionName] ? sessionName : sessionNames[0];
  const session = activeSessionName ? sessions[activeSessionName] : null;

  if (
    !historyOnesSessionsList ||
    !historyOnesSessionName ||
    !historyOnesSessionDescription ||
    !historyOnesSessionImages ||
    !historyOnesSessionNotes
  ) {
    return;
  }

  if (!session) {
    historyOnesSessionsList.innerHTML = `
      <div class="empty-state">
        <div>
          <h4>No 1v1 history yet</h4>
        </div>
      </div>
    `;
    historyOnesSessionName.textContent = "No featured set selected";
    historyOnesSessionDescription.textContent =
      "Featured 1v1 sets, rivalry matches, and important duel results can appear here once they are added to the archive.";
    historyOnesSessionImages.innerHTML = "";
    historyOnesSessionNotes.innerHTML = "";
    return;
  }

  document.body.classList.add("is-animating");

  historyOnesSessionsList.innerHTML = sessionNames
    .map((name, index) => {
      const breakline = index < sessionNames.length - 1 ? '<div class="row-breakline"></div>' : "";
      return `
        <div class="rankings-entry-block history-entry-block">
          <article class="leaderboard-row${name === activeSessionName ? " active" : ""}" data-history-ones-session="${name}">
            <div class="player-meta">
              <div>
                <strong>${name}</strong>
                <span class="player-username">${sessions[name].subtitle || ""}</span>
              </div>
            </div>
          </article>
        </div>
        ${breakline}
      `;
    })
    .join("");

  historyOnesSessionsList.querySelectorAll("[data-history-ones-session]").forEach((row) => {
    row.addEventListener("click", () => {
      renderHistoryOnesSession(row.dataset.historyOnesSession);
    });
  });

  historyOnesSessionName.textContent = activeSessionName;
  historyOnesSessionDescription.textContent = session.description;
  historyOnesSessionImages.innerHTML = (session.images || [])
    .map(
      (image, index) => `
        <button
          class="history-image-link${index === 0 ? " active" : ""}"
          type="button"
          aria-label="Show ${image.alt}"
        >
          <img
            class="avatar-preview-image history-thumbnail-image"
            src="${image.src}"
            alt="${image.alt}"
          />
        </button>
      `
    )
    .join("");
  historyOnesSessionNotes.innerHTML = (session.notes || [])
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  window.clearTimeout(renderHistoryOnesSession.fadeTimer);
  renderHistoryOnesSession.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function updateRankingNumberColors() {
  document.querySelectorAll(".ranking-number").forEach((number) => {
    const value = number.textContent.trim();

    number.classList.remove("rank-number-gold", "rank-number-silver", "rank-number-bronze");
    number.style.color = "";
    number.style.textShadow = "";

    if (value === "1.") {
      number.classList.add("rank-number-gold");
      number.style.color = "#ffd86b";
      number.style.textShadow = "0 0 18px rgba(255, 200, 87, 0.2)";
    } else if (value === "2.") {
      number.classList.add("rank-number-silver");
      number.style.color = "#dbe3ef";
      number.style.textShadow = "0 0 18px rgba(219, 227, 239, 0.18)";
    } else if (value === "3.") {
      number.classList.add("rank-number-bronze");
      number.style.color = "#d89a5a";
      number.style.textShadow = "0 0 18px rgba(216, 154, 90, 0.16)";
    }
  });
}

function startHeroPanelRotation() {
  if (!heroPanelTitle || !heroPanelDescription || heroPanelSlides.length <= 1) {
    return;
  }

  let slideIndex = 0;

  window.setInterval(() => {
    heroPanelTitle.classList.add("is-fading");
    heroPanelDescription.classList.add("is-fading");

    window.setTimeout(() => {
      slideIndex = (slideIndex + 1) % heroPanelSlides.length;
      heroPanelTitle.textContent = heroPanelSlides[slideIndex].title;
      heroPanelDescription.textContent = heroPanelSlides[slideIndex].description;
      heroPanelTitle.classList.remove("is-fading");
      heroPanelDescription.classList.remove("is-fading");
    }, 260);
  }, 4200);
}

scrimMetricButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeMetric = button.dataset.scrimMetric || "overall";
    const currentActiveRow = scrimLeaderboardRows?.querySelector("[data-scrim-player].active");
    const currentPlayer = currentActiveRow?.dataset.scrimPlayer;
    renderScrimBoard(activeMetric, currentPlayer);
  });
});

scrimStatModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeScrimStatMode = button.dataset.scrimStatMode || "avg";
    const activeMetric = document.querySelector("[data-scrim-metric].active")?.dataset.scrimMetric || "overall";
    const currentActiveRow = scrimLeaderboardRows?.querySelector("[data-scrim-player].active");
    const currentPlayer = currentActiveRow?.dataset.scrimPlayer;
    renderScrimBoard(activeMetric, currentPlayer);
  });
});

scrimHistoryRows.forEach((row) => {
  row.addEventListener("click", () => {
    renderScrimHistorySpotlight(row.dataset.scrimHistory);
  });
});

historyScrimSessionRows.forEach((row) => {
  row.addEventListener("click", () => {
    renderHistoryScrimSession(row.dataset.historyScrimSession);
  });
});

legendLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.add("is-transitioning");
  });
});

renderSpotlight("Serenity");
renderAllTimeSpotlight("Gary");
renderOffboardSpotlight("Sabre");
renderTwosSpotlight("Moon & Shoop");
renderTwosAlltimeSpotlight("Lucki & Umbra");
renderScrimBoard("overall");
renderHistoryOnesSession();
renderHistoryScrimSession();
updateRankingNumberColors();
updateTrackedPlayersCount();
startHeroPanelRotation();
setRegion("OCE");
