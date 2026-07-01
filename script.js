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
const offboardRankingRows = document.querySelectorAll("[data-offboard-player]");
const offboardSpotlightName = document.getElementById("offboardSpotlightName");
const offboardSpotlightDescription = document.getElementById("offboardSpotlightDescription");
const offboardNotesList = document.getElementById("offboardNotesList");
const twosRankingRows = document.querySelectorAll("[data-twos-player]");
const twosSpotlightName = document.getElementById("twosSpotlightName");
const twosSpotlightDescription = document.getElementById("twosSpotlightDescription");
const twosNotesList = document.getElementById("twosNotesList");
const dcCards = document.querySelectorAll(".dc-card");
const dcSpotlightName = document.getElementById("dcSpotlightName");
const dcSpotlightDescription = document.getElementById("dcSpotlightDescription");
const dcSpotlightNote = document.getElementById("dcSpotlightNote");
const legendLinks = document.querySelectorAll(".legend-link");
const hubSection = document.getElementById("hub");

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
  "Dio & Luckifan": {
    description:
      "Dio and Luckifan currently sit at No.1 on the 2v2 board and lead the present duo ladder as the team to beat.",
    notes: [
      {
        title: "Current No.1 Duo",
        text: "They hold the top 2v2 position right now and set the first visible standard for the board.",
      },
      {
        title: "Early Ladder Control",
        text: "Being placed first gives them the strongest current claim until more duo results are added.",
      },
    ],
  },
  "Ata & Lechu": {
    description:
      "Ata and Lechu currently sit at No.2 on the 2v2 board and stay close behind the top duo as one of the main teams in the current ladder.",
    notes: [
      {
        title: "Current No.2 Duo",
        text: "They hold the second spot on the duo ladder and remain firmly in the current 2v2 conversation.",
      },
      {
        title: "Primary Chasers",
        text: "Ata and Lechu are the closest listed team behind the current No.1 pair.",
      },
    ],
  },
};

const dcSpotlights = {
  Dinocanpoop: {
    description:
      "Dino is the self-proclaimed leader of the Dinos Denn, known for walking around like he owns the game and treating every conversation like a throne room speech. Most of his reputation comes from loud confidence, oversized ego, and acting untouchable even when people are not fully buying it.",
    note: "Big ego, bigger speeches, and endless self-belief.",
  },
  Sanslikeschode: {
    description:
      "Sans is the kind of permanently online Discord warrior who turns loyalty into a full-time job. He has a reputation for glazing hard, abusing tiny bits of authority, and acting way tougher with perms than he ever does without them.",
    note: "Known for glazing, power trips, and Discord warrior energy.",
  },
  PedoCheok: {
    description:
      "Cheok is one of those names that always ends up in awkward conversations for all the wrong reasons. Between the strange energy, oversharing, and nonstop ability to make things uncomfortable, he has built a reputation that people instantly clown on.",
    note: "Awkward aura, weird stories, and instant clown material.",
  },
  DCAnalBlack: {
    description:
      "Canel's entire identity is tied to being No.1 in BBZ, and he carries that title like it is a crown. The skill is real, but so is the ego, and every conversation somehow circles back to why he thinks nobody else belongs in the same tier.",
    note: "Elite player, elite ego, and never far from a No.1 speech.",
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

function renderDcSpotlight(playerName) {
  const player = dcSpotlights[playerName];

  if (!player || !dcSpotlightName || !dcSpotlightDescription || !dcSpotlightNote) {
    return;
  }

  dcSpotlightName.textContent = playerName;
  dcSpotlightDescription.textContent = player.description;
  dcSpotlightNote.textContent = player.note;

  dcCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.dcPlayer === playerName);
  });
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

rankingRows.forEach((row) => {
  if (row.dataset.alltimePlayer || row.dataset.dcPlayer) {
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

dcCards.forEach((card) => {
  card.addEventListener("click", () => {
    renderDcSpotlight(card.dataset.dcPlayer);
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
renderTwosSpotlight("Dio & Luckifan");
renderDcSpotlight("Dinocanpoop");
