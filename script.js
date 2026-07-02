const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const tabLinks = document.querySelectorAll("[data-tab-link]");
const regionButtons = document.querySelectorAll("[data-region-tab]");
const regionNameNodes = document.querySelectorAll("[data-region-name]");
const switchButtons = document.querySelectorAll("[data-switch-group]");
const switchPanels = document.querySelectorAll("[data-switch-panel]");
const rankingRows = document.querySelectorAll(".leaderboard-row");
const spotlightName = document.getElementById("spotlightName");
const spotlightDescription = document.getElementById("spotlightDescription");
const monumentsList = document.getElementById("monumentsList");
const allTimeRankingRows = document.querySelectorAll("[data-alltime-player]");
const alltimeSpotlightName = document.getElementById("alltimeSpotlightName");
const alltimeSpotlightDescription = document.getElementById("alltimeSpotlightDescription");
const alltimeMonumentsList = document.getElementById("alltimeMonumentsList");
const offboardRankingRows = document.querySelectorAll("[data-offboard-player]");
const offboardSpotlightName = document.getElementById("offboardSpotlightName");
const offboardSpotlightDescription = document.getElementById("offboardSpotlightDescription");
const offboardNotesList = document.getElementById("offboardNotesList");
const twosRankingRows = document.querySelectorAll("[data-twos-player]");
const twosSpotlightName = document.getElementById("twosSpotlightName");
const twosSpotlightDescription = document.getElementById("twosSpotlightDescription");
const twosNotesList = document.getElementById("twosNotesList");
const twosAlltimeRankingRows = document.querySelectorAll("[data-twos-alltime-player]");
const twosAlltimeSpotlightName = document.getElementById("twosAlltimeSpotlightName");
const twosAlltimeSpotlightDescription = document.getElementById("twosAlltimeSpotlightDescription");
const twosAlltimeNotesList = document.getElementById("twosAlltimeNotesList");
const scrimMetricButtons = document.querySelectorAll("[data-scrim-metric]");
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

function setRegion(regionCode) {
  document.body.dataset.activeRegion = regionCode;

  regionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.regionTab === regionCode);
  });

  regionNameNodes.forEach((node) => {
    node.textContent = regionCode;
  });

  if (regionCode === "OCE" || regionCode === "AS") {
    const activeMetric = document.querySelector("[data-scrim-metric].active")?.dataset.scrimMetric || "overall";
    renderScrimBoard(activeMetric);
    renderHistoryScrimSession();
  }
}

const scrimRegions = {
  OCE: {
    defaultPlayer: "Shoop",
    players: {
      Shoop: { username: "@asdfgdfgsdfaasesdf", avatar: "assets/shoop.webp", games: 2, points: 29, assists: 7, blocks: 4, ankleBreaks: 2, bestPoints: 23, bestAssists: 4, bestBlocks: 2, bestAnkleBreaks: 1 },
      Cheese: { username: "@GetALifKid", avatar: "assets/Cheese.webp", games: 2, points: 30, assists: 3, blocks: 6, ankleBreaks: 0, bestPoints: 18, bestAssists: 2, bestBlocks: 3, bestAnkleBreaks: 0 },
      Moon: { username: "@yvavrya", avatar: "assets/moon.webp", games: 2, points: 9, assists: 11, blocks: 2, ankleBreaks: 6, bestPoints: 6, bestAssists: 7, bestBlocks: 2, bestAnkleBreaks: 6 },
      Kol: { username: "@k0lxn", avatar: "assets/kol.webp", games: 1, points: 15, assists: 3, blocks: 0, ankleBreaks: 4, bestPoints: 15, bestAssists: 3, bestBlocks: 0, bestAnkleBreaks: 4 },
      idk: { username: "@superstylerockstar", avatar: "assets/idk.webp", games: 2, points: 18, assists: 2, blocks: 1, ankleBreaks: 1, bestPoints: 15, bestAssists: 2, bestBlocks: 1, bestAnkleBreaks: 1 },
      Dio: { username: "@bekfestgod7", avatar: "assets/dio.webp", games: 2, points: 23, assists: 3, blocks: 0, ankleBreaks: 3, bestPoints: 20, bestAssists: 3, bestBlocks: 0, bestAnkleBreaks: 2 },
      Sabre: { username: "@Xxdj_probroxX", avatar: "assets/sabre.webp", games: 1, points: 0, assists: 0, blocks: 0, ankleBreaks: 1, bestPoints: 0, bestAssists: 0, bestBlocks: 0, bestAnkleBreaks: 1 },
      Umbra: { username: "@Endbringerv", avatar: "assets/umbra.webp", games: 1, points: 2, assists: 0, blocks: 0, ankleBreaks: 0, bestPoints: 2, bestAssists: 0, bestBlocks: 0, bestAnkleBreaks: 0 },
    },
    sessions: {
      "30/06/2026 Sanctioned Scrim #1": {
        description: "June 30 sanctioned scrims with two logged scoreboards. The strongest visible performances came from Shoop, Cheese, Moon, Kol, and idk.",
        subtitle: "June 30 sanctioned scrims",
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
      Shoop: { displayName: "Shoop", username: "@asdfgdfgsdfaasesdf", avatar: "assets/shoop.webp", games: 3, points: 53, assists: 1, blocks: 2, ankleBreaks: 12, bestPoints: 21, bestAssists: 1, bestBlocks: 1, bestAnkleBreaks: 5 },
      Qwertyezeu: { displayName: "Quinn", username: "@Qwertyezeu", avatar: "assets/quinn.webp", games: 2, points: 45, assists: 6, blocks: 2, ankleBreaks: 4, bestPoints: 33, bestAssists: 3, bestBlocks: 2, bestAnkleBreaks: 3 },
      RSHUD: {
        displayName: "Rshud",
        username: "@Rex_breaker",
        avatar: "assets/Rshud.webp",
        games: 2,
        points: 88,
        assists: 3,
        blocks: 11,
        ankleBreaks: 6,
        bestPoints: 48,
        bestAssists: 2,
        bestBlocks: 7,
        bestAnkleBreaks: 4,
        ovrAdjustment: -4,
        contextNote: "High-ping advantage and raw stat inflation were factored into the manual OVR placement, so the final ranking sits lower than the box score alone would suggest.",
      },
      "1_43213": { displayName: "Mikaela", username: "@1_43213", avatar: "assets/mikaela.webp", games: 2, points: 26, assists: 9, blocks: 2, ankleBreaks: 4, bestPoints: 18, bestAssists: 6, bestBlocks: 2, bestAnkleBreaks: 3 },
      Cheokhimisthebest: { displayName: "Cheok", username: "@Cheokhimisthebest", avatar: "assets/cheok.webp", games: 2, points: 24, assists: 8, blocks: 1, ankleBreaks: 2, bestPoints: 15, bestAssists: 6, bestBlocks: 1, bestAnkleBreaks: 1 },
      Dragon_zuen: { displayName: "Tokumei", username: "@Dragon_zuen", avatar: "assets/Tokumei.webp", games: 3, points: 22, assists: 13, blocks: 3, ankleBreaks: 3, bestPoints: 12, bestAssists: 6, bestBlocks: 2, bestAnkleBreaks: 1 },
      Clairss_Seupay: { displayName: "Caell", username: "@Clairss_Seupay", avatar: "assets/caell.webp", games: 3, points: 14, assists: 12, blocks: 7, ankleBreaks: 3, bestPoints: 6, bestAssists: 5, bestBlocks: 3, bestAnkleBreaks: 2 },
      NIGHTMARE88REAPER: { displayName: "Tax", username: "@NIGHTMARE88REAPER", avatar: "assets/Tax.webp", games: 3, points: 24, assists: 9, blocks: 2, ankleBreaks: 5, bestPoints: 13, bestAssists: 3, bestBlocks: 1, bestAnkleBreaks: 2 },
      bigman222242: { displayName: "Ogre", username: "@bigman222242", avatar: "assets/ogre.webp", games: 2, points: 20, assists: 1, blocks: 8, ankleBreaks: 1, bestPoints: 11, bestAssists: 1, bestBlocks: 5, bestAnkleBreaks: 1 },
      Sabre: { displayName: "Sabre", username: "@Xxdj_probroxX", avatar: "assets/sabre.webp", games: 2, points: 17, assists: 7, blocks: 0, ankleBreaks: 3, bestPoints: 8, bestAssists: 5, bestBlocks: 0, bestAnkleBreaks: 2 },
      D34THSC4RX: { displayName: "Near", username: "@D34THSC4RX", avatar: "assets/Near.webp", games: 2, points: 22, assists: 3, blocks: 1, ankleBreaks: 5, bestPoints: 14, bestAssists: 2, bestBlocks: 1, bestAnkleBreaks: 3 },
      gexnchfesMwzdcf: { displayName: "Renoxis", username: "@gexnchfesMwzdcf", avatar: "assets/renoxis.webp", games: 2, points: 17, assists: 2, blocks: 3, ankleBreaks: 2, bestPoints: 9, bestAssists: 2, bestBlocks: 2, bestAnkleBreaks: 2 },
      Lynx1lynz: { displayName: "Zayne", username: "@Lynx1lynz", avatar: "assets/Zayne.webp", games: 2, points: 20, assists: 2, blocks: 2, ankleBreaks: 2, bestPoints: 12, bestAssists: 2, bestBlocks: 1, bestAnkleBreaks: 2 },
      sammm123911: { displayName: "4", username: "@sammm123911", avatar: "assets/4.webp", games: 2, points: 9, assists: 7, blocks: 2, ankleBreaks: 3, bestPoints: 6, bestAssists: 5, bestBlocks: 2, bestAnkleBreaks: 3 },
      featherlyga: { displayName: "Willow", username: "@featherlyga", avatar: "assets/willow.webp", games: 1, points: 14, assists: 4, blocks: 0, ankleBreaks: 1, bestPoints: 14, bestAssists: 4, bestBlocks: 0, bestAnkleBreaks: 1 },
    },
    sessions: {
      "03/07/2026 Sanctioned Scrim #2": {
        description: "July 3 sanctioned scrim set two added three more logged scoreboards. Shoop exploded as the biggest scorer, while 1_43213, Dragon_zuen, Clairss_Seupay, and NIGHTMARE88REAPER all stacked strong follow-up statlines across the set.",
        subtitle: "July 3 sanctioned scrim set two",
        images: [
          { src: "assets/scrim-2026-07-03-3.png", alt: "03/07/2026 sanctioned scrim #2 scoreboard one" },
          { src: "assets/scrim-2026-07-03-4.png", alt: "03/07/2026 sanctioned scrim #2 scoreboard two" },
          { src: "assets/scrim-2026-07-03-5.png", alt: "03/07/2026 sanctioned scrim #2 scoreboard three" },
        ],
        notes: [],
      },
      "03/07/2026 Sanctioned Scrim #1": {
        description: "July 3 sanctioned scrims with two logged scoreboards. The clearest standouts were Qwertyezeu, RSHUD, Cheokhimisthebest, and Sabre, with RSHUD's overall placement adjusted down to account for ping-abuse context.",
        subtitle: "July 3 sanctioned scrims",
        images: [
          { src: "assets/scrim-2026-07-03-1.png", alt: "03/07/2026 sanctioned scrim #1 scoreboard one" },
          { src: "assets/scrim-2026-07-03-2.png", alt: "03/07/2026 sanctioned scrim #1 scoreboard two" },
        ],
        notes: [],
      },
    },
  },
};

function getActiveScrimRegion() {
  return scrimRegions[document.body.dataset.activeRegion || "OCE"] || null;
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

const scrimMetricConfig = {
  overall: {
    label: "OVR Rating",
    valueKey: "overall",
    format: (value, player) => `${getScrimOverallValue(player)} OVR`,
  },
  defense: {
    label: "Blocks Per Game",
    valueKey: "blocks",
    format: (value) => `${formatPerGameStat(value)} BPG`,
  },
  playmaking: {
    label: "Assists Per Game",
    valueKey: "assists",
    format: (value) => `${formatPerGameStat(value)} APG`,
  },
  offense: {
    label: "Points Per Game",
    valueKey: "points",
    format: (value) => `${formatPerGameStat(value)} PPG`,
  },
  handles: {
    label: "Ankle Breaks Per Game",
    valueKey: "ankleBreaks",
    format: (value) => `${formatPerGameStat(value)} ABPG`,
  },
};

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
  Lyric: {
    description:
      "Lyric currently sits at No.8 in the 1v1 rankings and remains one of the names holding a place inside the reset top 10.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Lyric currently holds a place inside the top 10 of the 1v1 rankings.",
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
  Kol: {
    description:
      "Kol currently sits at No.6 on the present 1v1 board and stays in the upper-middle section of the ladder.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Kol currently holds a place inside the top 10 of the 1v1 rankings.",
      },
      {
        title: "Current Ladder Presence",
        text: "Kol remains one of the names currently locked into the reset 1v1 top 10.",
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
  Bigmac: {
    description:
      "Bigmac is currently being tracked outside the main 1v1 leaderboard and sits at the top of the off-board pool as a B Rank name.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Bigmac is not on the active top 10 right now, but is still being tracked just outside the main ladder.",
      },
      {
        title: "B Rank Status",
        text: "Current placement puts Bigmac above the rest of the off-board pool at B Rank.",
      },
    ],
  },
  Astral: {
    description:
      "Astral is currently being tracked outside the main 1v1 leaderboard and remains one of the stronger off-board names at B Rank.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Astral is currently outside the active top 10 while still being tracked in the off-board pool.",
      },
      {
        title: "B Rank Status",
        text: "Their current placement keeps them in the higher half of the off-board group at B Rank.",
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
      "Arthur is currently being tracked outside the main 1v1 leaderboard and sits in the off-board pool at B Rank.",
    monuments: [
      {
        title: "Off-Board Placement",
        text: "Arthur is currently outside the active top 10 while still being kept on the radar in the off-board pool.",
      },
      {
        title: "B Rank Status",
        text: "Current placement keeps Arthur alongside the stronger names in the off-board group at B Rank.",
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

  if (!player) {
    return;
  }

  document.body.classList.add("is-animating");

  spotlightName.textContent = playerName;
  spotlightDescription.textContent = player.description;
  monumentsList.innerHTML = player.monuments
    .map(
      (monument) => `
        <article class="monument-item">
          <h4>${monument.title}</h4>
          <p>${monument.text}</p>
        </article>
      `
    )
    .join("");

  rankingRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.player === playerName);
  });

  window.clearTimeout(renderSpotlight.fadeTimer);
  renderSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderAllTimeSpotlight(playerName) {
  const player = allTimeSpotlights[playerName];

  if (!player || !alltimeSpotlightName || !alltimeSpotlightDescription || !alltimeMonumentsList) {
    return;
  }

  document.body.classList.add("is-animating");

  alltimeSpotlightName.textContent = playerName;
  alltimeSpotlightDescription.textContent = player.description;
  alltimeMonumentsList.innerHTML = player.monuments
    .map(
      (monument) => `
        <article class="monument-item">
          <h4>${monument.title}</h4>
          <p>${monument.text}</p>
        </article>
      `
    )
    .join("");

  allTimeRankingRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.alltimePlayer === playerName);
  });

  window.clearTimeout(renderAllTimeSpotlight.fadeTimer);
  renderAllTimeSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderTwosSpotlight(teamName) {
  const team = twosSpotlights[teamName];

  if (!team || !twosSpotlightName || !twosSpotlightDescription || !twosNotesList) {
    return;
  }

  document.body.classList.add("is-animating");

  twosSpotlightName.textContent = teamName;
  twosSpotlightDescription.textContent = team.description;
  twosNotesList.innerHTML = team.notes
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  twosRankingRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.twosPlayer === teamName);
  });

  window.clearTimeout(renderTwosSpotlight.fadeTimer);
  renderTwosSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderOffboardSpotlight(playerName) {
  const player = playerSpotlights[playerName];

  if (!player || !offboardSpotlightName || !offboardSpotlightDescription || !offboardNotesList) {
    return;
  }

  document.body.classList.add("is-animating");

  offboardSpotlightName.textContent = playerName;
  offboardSpotlightDescription.textContent = player.description;
  offboardNotesList.innerHTML = player.monuments
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  offboardRankingRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.offboardPlayer === playerName);
  });

  window.clearTimeout(renderOffboardSpotlight.fadeTimer);
  renderOffboardSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function renderTwosAlltimeSpotlight(teamName) {
  const team = twosAlltimeSpotlights[teamName];

  if (
    !team ||
    !twosAlltimeSpotlightName ||
    !twosAlltimeSpotlightDescription ||
    !twosAlltimeNotesList
  ) {
    return;
  }

  document.body.classList.add("is-animating");

  twosAlltimeSpotlightName.textContent = teamName;
  twosAlltimeSpotlightDescription.textContent = team.description;
  twosAlltimeNotesList.innerHTML = team.notes
    .map(
      (note) => `
        <article class="monument-item">
          <h4>${note.title}</h4>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");

  twosAlltimeRankingRows.forEach((row) => {
    row.classList.toggle("active", row.dataset.twosAlltimePlayer === teamName);
  });

  window.clearTimeout(renderTwosAlltimeSpotlight.fadeTimer);
  renderTwosAlltimeSpotlight.fadeTimer = window.setTimeout(() => {
    document.body.classList.remove("is-animating");
  }, 180);
}

function getSortedScrimPlayers(metricName) {
  const metric = scrimMetricConfig[metricName];

  if (!metric) {
    return [];
  }

  const players = Object.entries(getActiveScrimPlayerStats());

  if (metricName === "overall") {
    return players.sort(([, left], [, right]) => getScrimOverallValue(right) - getScrimOverallValue(left));
  }

  return players.sort(([, left], [, right]) => {
    const diff = getPerGameStat(right, metric.valueKey) - getPerGameStat(left, metric.valueKey);
    if (diff !== 0) {
      return diff;
    }
    return getScrimOverallValue(right) - getScrimOverallValue(left);
  });
}

function getScrimSpotlightCopy(metricName, playerName) {
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
    defense: {
      description: `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "blocks"))} blocks per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text: `${player.blocks} total blocks`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "points"))} points per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game`,
        },
      ],
    },
    playmaking: {
      description: `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text: `${player.assists} total assists`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "points"))} points per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "ankleBreaks"))} ankle breaks per game`,
        },
      ],
    },
    offense: {
      description: `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "points"))} points per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text: `${player.points} total points`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "blocks"))} blocks per game`,
        },
      ],
    },
    handles: {
      description: `${displayName} averaged ${formatPerGameStat(getPerGameStat(player, "ankleBreaks"))} ankle breaks per game across ${getScrimGamesPlayed(player)} logged games.`,
      notes: [
        {
          text: `${player.ankleBreaks} total ankle breaks`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "points"))} points per game`,
        },
        {
          text: `${formatPerGameStat(getPerGameStat(player, "assists"))} assists per game`,
        },
      ],
    },
  };

  return notesByMetric[metricName] || notesByMetric.overall;
}

function renderScrimSpotlight(metricName, playerName) {
  const player = getActiveScrimPlayerStats()[playerName];
  const spotlight = getScrimSpotlightCopy(metricName, playerName);

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
  const sortedPlayers = getSortedScrimPlayers(metricName);
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

  scrimMetricLabel.textContent = metric.label;
  scrimLeaderboardRows.innerHTML = sortedPlayers
    .map(([playerName, player], index) => {
      const value = metricName === "overall" ? getScrimOverallValue(player) : getPerGameStat(player, metric.valueKey);
      const placementRank = getScrimPlacementRank(index, metricName, value);
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
            <span>${metric.format(value, player)}</span>
            <span class="rank-tier ${placementRank.className}">${placementRank.label}</span>
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

function updateRankingNumberColors() {
  document.querySelectorAll(".ranking-number").forEach((number) => {
    const value = number.textContent.trim();

    number.classList.remove("rank-number-gold", "rank-number-silver", "rank-number-bronze");

    if (value === "1.") {
      number.classList.add("rank-number-gold");
    } else if (value === "2.") {
      number.classList.add("rank-number-silver");
    } else if (value === "3.") {
      number.classList.add("rank-number-bronze");
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

rankingRows.forEach((row) => {
  if (
    row.dataset.alltimePlayer ||
    row.dataset.offboardPlayer ||
    row.dataset.twosPlayer ||
    row.dataset.twosAlltimePlayer ||
    row.dataset.scrimPlayer ||
    row.dataset.dcPlayer
  ) {
    return;
  }
  row.dataset.player = row.querySelector("strong")?.textContent || "";
  row.addEventListener("click", () => {
    renderSpotlight(row.dataset.player);
  });
});

allTimeRankingRows.forEach((row) => {
  row.addEventListener("click", () => {
    renderAllTimeSpotlight(row.dataset.alltimePlayer);
  });
});

offboardRankingRows.forEach((row) => {
  row.addEventListener("click", () => {
    renderOffboardSpotlight(row.dataset.offboardPlayer);
  });
});

twosRankingRows.forEach((row) => {
  row.addEventListener("click", () => {
    renderTwosSpotlight(row.dataset.twosPlayer);
  });
});

twosAlltimeRankingRows.forEach((row) => {
  row.addEventListener("click", () => {
    renderTwosAlltimeSpotlight(row.dataset.twosAlltimePlayer);
  });
});

scrimMetricButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeMetric = button.dataset.scrimMetric || "overall";
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
renderOffboardSpotlight("Bigmac");
renderTwosSpotlight("Moon & Shoop");
renderTwosAlltimeSpotlight("Lucki & Umbra");
renderScrimBoard("overall");
renderHistoryScrimSession();
updateRankingNumberColors();
startHeroPanelRotation();
setRegion("OCE");
