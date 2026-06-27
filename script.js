const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const tabLinks = document.querySelectorAll("[data-tab-link]");
const subtabButtons = document.querySelectorAll(".subtab-button");
const subtabPanels = document.querySelectorAll(".subtab-panel");
const rankingRows = document.querySelectorAll(".leaderboard-row");
const spotlightName = document.getElementById("spotlightName");
const spotlightDescription = document.getElementById("spotlightDescription");
const monumentsList = document.getElementById("monumentsList");
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

function activateSubtab(targetSubtab) {
  const currentIndex = Array.from(subtabButtons).findIndex((button) =>
    button.classList.contains("active")
  );
  const targetIndex = Array.from(subtabButtons).findIndex(
    (button) => button.dataset.subtab === targetSubtab
  );
  const motion = targetIndex >= currentIndex ? "left" : "right";

  subtabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.subtab === targetSubtab);
  });

  subtabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.subpanel === targetSubtab);
    if (panel.dataset.subpanel === targetSubtab) {
      panel.dataset.motion = motion;
    }
  });

  document.body.classList.add("is-transitioning");
  window.clearTimeout(activateSubtab.transitionTimer);
  activateSubtab.transitionTimer = window.setTimeout(() => {
    document.body.classList.remove("is-transitioning");
  }, 340);
}

subtabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateSubtab(button.dataset.subtab);
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

rankingRows.forEach((row) => {
  row.dataset.player = row.querySelector("strong")?.textContent || "";
  row.addEventListener("click", () => {
    renderSpotlight(row.dataset.player);
  });
});

legendLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.add("is-transitioning");
  });
});

renderSpotlight("Canel");
