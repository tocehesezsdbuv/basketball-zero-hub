const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const tabLinks = document.querySelectorAll("[data-tab-link]");
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
const legendLinks = document.querySelectorAll(".legend-link");
const hubSection = document.getElementById("hub");

const playerSpotlights = {
  Canel: {
    description:
      "Canel is widely recognized as the No.1 1v1 player, known for insane reaction speed, low-ping advantage, and unpredictable movement. His block range feels unfair, his low hitbox makes him difficult to punish, and his fast flicks constantly throw defenders off. In isolation, he controls the pace and turns every possession into a pressure test.",
    monuments: [
      {
        title: "Highest 1v1 ELO Ever",
        text: "Canel reached the highest 1v1 ELO ever recorded, setting a benchmark no one else has passed.",
      },
      {
        title: "Held No.1 for 2 Seasons",
        text: "He held the No.1 spot across two seasons with consistent dominance.",
      },
      {
        title: "Wins Over Pocoyo and Cheese",
        text: "Victories over respected names like Pocoyo and Cheese gave real weight to his No.1 status.",
      },
      {
        title: "The Ping Demon Reputation",
        text: "Low-ping reactions, huge block range, and a low hitbox made him one of the most frustrating 1v1 players to face.",
      },
      {
        title: "Feared in Isolation",
        text: "Fast flicks, constant pressure, and impossible contests turned every possession against Canel into a mental test.",
      },
    ],
  },
  Blacky: {
    description:
      "Blacky is one of the two players contesting No.2, carrying a Canel-inspired style built around fast pressure, sharp flicks, and constant discomfort for defenders. With a 7k+ peak and a unique movement identity, he stands out as one of the most dangerous rivals in the tier just below Canel.",
    monuments: [
      {
        title: "Student of Canel's Playstyle",
        text: "Blacky learned from Canel, building a fast, pressure-heavy style while still adding his own rhythm.",
      },
      {
        title: "Prominent Flick Specialist",
        text: "His flicks and sudden direction changes force defenders to lose their angle and react too late.",
      },
      {
        title: "Elite at Shaking Up Opponents",
        text: "Blacky constantly changes pace, direction, and timing to make opponents panic and lose control.",
      },
      {
        title: "Creator of the Wall Bounce Method",
        text: "He is known as the creator of the Wall Bounce Method, giving him a unique place in the scene.",
      },
      {
        title: "Rival-Level Threat",
        text: "His Canel-inspired pressure, flicks, and wall bounce method make him one of the few players able to challenge elite names like Serenity.",
      },
    ],
  },
  Serenity: {
    description:
      "Serenity returned from a four-month retirement and immediately re-established themself as one of the hardest 1v1 players to face. Known for full-court control, elite adaptability, and oppressive contests, Serenity remains firmly in the race for No.2.",
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
        text: "Losses are rare, with Canel and rival Blacky standing out as the only consistent challengers.",
      },
      {
        title: "Rivalry With Blacky",
        text: "Their battles with Blacky are intense, reputation-heavy, and central to Serenity's legacy.",
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
  Astral: {
    description:
      "Astral is currently placed at No.9 in the 1v1 rankings and remains one of the notable names on the ladder.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Astral currently holds a place inside the top 10 of the 1v1 rankings.",
      },
    ],
  },
  Lyric: {
    description:
      "Lyric is currently placed at No.6 in the 1v1 rankings and enters the upper ladder as one of the newer names inside the top group.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Lyric currently holds a place inside the top 10 of the 1v1 rankings.",
      },
    ],
  },
  Umbra: {
    description:
      "Umbra is currently placed at No.5 in the 1v1 rankings and remains one of the notable names on the ladder.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Umbra currently holds a place inside the top 10 of the 1v1 rankings.",
      },
    ],
  },
  Goos: {
    description:
      "Goos is currently placed at No.7 in the 1v1 rankings and remains part of the broader upper ladder group.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Goos currently holds a place inside the top 10 of the 1v1 rankings.",
      },
    ],
  },
  Mac: {
    description:
      "Mac is currently placed at No.8 in the 1v1 rankings and remains one of the notable names on the ladder.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Mac currently holds a place inside the top 10 of the 1v1 rankings.",
      },
    ],
  },
  Yuji: {
    description:
      "Yuji is currently placed at No.10 in the 1v1 rankings and remains part of the competitive top 10 group.",
    monuments: [
      {
        title: "Top 10 Placement",
        text: "Yuji currently holds a place inside the top 10 of the 1v1 rankings.",
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
  Canel: {
    description:
      "Canel's prime earned him the No.3 all-time spot through unmatched reaction speed, impossible contests, and an ELO peak that no other 1v1 player has been able to clear.",
    monuments: [
      {
        title: "Highest 1v1 ELO Ever",
        text: "Prime Canel reached the highest recorded 1v1 ELO, giving his peak one of the clearest measurable cases in all-time talks.",
      },
      {
        title: "Held No.1 for 2 Seasons",
        text: "He didn't just spike briefly; Canel's peak lasted long enough to keep him on top across two seasons.",
      },
      {
        title: "Wins Over Pocoyo and Cheese",
        text: "Beating names as respected as Pocoyo and Cheese gave Canel's prime real all-time credibility beyond raw ladder numbers.",
      },
      {
        title: "The Ping Demon Reputation",
        text: "At his best, Canel's low ping, huge block range, and low hitbox made his prime one of the most oppressive in 1v1 history.",
      },
      {
        title: "Feared in Isolation",
        text: "Prime Canel turned every possession into a pressure test through flick speed, impossible contests, and constant pace control.",
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

rankingRows.forEach((row) => {
  if (row.dataset.alltimePlayer) {
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

legendLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.add("is-transitioning");
  });
});

renderSpotlight("Canel");
renderAllTimeSpotlight("Gary");
