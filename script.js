/* ============ Playlist data ============ */
const SONGS = [
  {
  id: "NkqWnxsAFDc",
  title: "सुन्छु तिमीले मलाई भुल्न आँटेको छाउरे | मित ज्यु",
  singer: "शिव परियार",
},
{
  id: "9PfKOqWzNrk",
  title: "चिठ्ठी तिमीलाई लेखु भन्छु",
  singer: "शम्भु राई",
},
{
  id: "NtlyKk3xrAg",
  title: "एउटा मान्छेको मायाले कति",
  singer: "नारायण गोपाल",
},
{
  id: "FvGqeHYN3HA",
  title: "गाजलु ति ठुला ठुला आँखा",
  singer: "गुलाम अली",
},
{
  id: "E2A5YLSPliM",
  title: "हेर न हेर कान्छा",
  singer: "अरुणा लामा र जितेन्द्र बर्देवा",
},
{
  id: "UOCNEwoJtS0",
  title: "यो नानीको सिरैमा",
  singer: "बिधान श्रेष्ठ र आहाना बस्नेत",
},
{
  id: "sY-2ABfH1bI",
  title: "किन किन तिम्रो तस्बिर",
  singer: "गुलाम अली",
},
{
  id: "7pOVG4o7914",
  title: "ए कान्छा मलाई सुनको तारा",
  singer: "अरुणा लामा र रुद्र मणि गुरुङ",
},
{
  id: "CAv5Ii8V5AU",
  title: "यो सम्झिने मन छ",
  singer: "नारायण गोपाल",
},
{
  id: "0qINEfgn3Dg",
  title: "असारै महिनामा",
  singer: "प्रशान्त तामाङ",
},
{
  id: "LnOajzcjBz4",
  title: "Dashain Tihar",
  singer: "सुगम पोखरेल",
},
{
  id: "Pkj6YFJFI8U",
  title: "मलाई नसोध",
  singer: "नारायण गोपाल",
},
{
  id: "xxFyLeAfS2A",
  title: "तिमीले त होइन",
  singer: "बच्चु कैलाश",
},
{
  id: "ig8NsBcpXVU",
  title: "सिरीमा सिरी नि कान्छा",
  singer: "नारायण गोपाल र ज्ञानु राणा",
},
{
  id: "d-sqC1ggrH0",
  title: "रातो रानी फुलेझै साँझमा",
  singer: "डेनी डेन्जोंगपा",
},
{
  id: "bu4srv0FPM8",
  title: "बतासले उदाई ल्यायो",
  singer: "कुमार कान्छा र आशा भोंसले",
},
{
  id: "YKvONdP4Fr4",
  title: "मायाको बारीमा",
  singer: "उदित नारायण र दीपा झा",
},
{
  id: "LFR4eMQzUr4",
  title: "केही मिठो बात गर",
  singer: "नारायण गोपाल",
},
  {
    id: "zhqbroT7mV0",
    title: "लठ्ठी चाल नगर मेरो मायामा",
    singer: "रामचन्द्र काफ्ले र सिन्धु मल्ल",
  },
  {
    id: "c8pEkzYx9aA",
    title: "मलाई यो जिन्दगी ले",
    singer: "उदित नारायण झा",
  },
  {
    id: "nAL8E8i6sro",
    title: "सरर सरर",
    singer: "उदित नारायण झा र दीपा झा",
  },
  {
    id: "wT9-bIfG0FI",
    title: "सरकारी जागिर",
    singer: "क्रान्ति आले",
  },
  {
    id: "pb-swpMFu2E",
    title: "उही मुलाको सिकि उही मुलाको चना",
    singer: "रामचन्द्र काफ्ले र ज्योति मगर",
  },
  {
    id: "R_YpSP3hu5s",
    title: "झाम झामी इस्ताकोट",
    singer: "DJ Tenzing",
  },
  {
    id: "4lqmGB2kDvI",
    title: "बोतलको पानी",
    singer: "भोजराज काफ्ले र धन बहादुर आले",
  },
  {
    id: "_1rs5JnFDuI",
    title: "पिलयो साथिले",
    singer: "शिव परियार",
  },
  {
    id: "T88PAIFtVIk",
    title: "ड्राइभर माइलो",
    singer: "बादल थापा",
  },
  {
    id: "pzcBs8XrvyQ",
    title: "मोहनी लागला है",
    singer: "नारायण गोपाल, आशा भोस्ले",
  },
  {
    id: "90F3yetBUbo",
    title: "सिम्पल सिम्पल कान्छी को",
    singer: "दीपक लिम्बु, मण्डबी त्रिपाठी",
  },
  {
    id: "SIDaTLl_SgE",
    title: "जुन को ज्योति ल्याएर",
    singer: "रेजिना रिमाल, दिपक लिम्बु",
  },
  {
    id: "Dh4344mVZ4w",
    title: "१६ बार्से उमराई मा",
    singer: "Nepali Evergreen Song",
  },
  {
    id: "Y_4TuCH_Ss0",
    title: "झम्के गुली",
    singer: "कमली कान्ता भेतुवाल",
  },
  {
    id: "HWyWM3uO27w",
    title: "भैँसी लड्यो",
    singer: "डेजी बराइली",
  },
  {
    id: "TBOs5ojqa_s",
    title: "पूर्बै रमाइलो",
    singer: "गौरव दर्पण, सृष्टि हिङमाङ",
  },
  {
    id: "l0L7v9uMLZo",
    title: "मनले मन्को साथ पायो",
    singer: "उदित नारायण झा र सञ्जीवनी",
  },

];

let currentIndex = 0;
let player = null;
let isPlaying = false;
let progressTimer = null;

/* ============ Elements ============ */
const els = {
  trackTitle: document.getElementById("trackTitle"),
  trackSinger: document.getElementById("trackSinger"),
  artThumb: document.getElementById("artThumb"),
  playBtn: document.getElementById("playBtn"),
  playIcon: document.getElementById("playIcon"),
  pauseIcon: document.getElementById("pauseIcon"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  progressTrack: document.getElementById("progressTrack"),
  progressFill: document.getElementById("progressFill"),
  progressKnob: document.getElementById("progressKnob"),
  curTime: document.getElementById("curTime"),
  durTime: document.getElementById("durTime"),
  volumeSlider: document.getElementById("volumeSlider"),
  playlistEl: document.getElementById("playlistEl"),
  navbar: document.getElementById("navbar"),
  navLinks: document.querySelectorAll(".nav-link"),
  dustField: document.getElementById("dustField"),
  playerCard: document.getElementById("playerCard"),
  navBurger: document.getElementById("navBurger"),
  navLinksMobile: document.getElementById("navLinksMobile"),
};

let playerReady = false;

function thumbUrl(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

/* ============ Render playlist ============ */
function renderPlaylist() {
  els.playlistEl.innerHTML = "";
  SONGS.forEach((song, i) => {
    const li = document.createElement("li");
    li.className = "playlist-item reveal";
    li.style.transitionDelay = Math.min(i * 45, 400) + "ms";
    li.dataset.index = i;
    li.innerHTML = `
      <span class="pl-index">${String(i + 1).padStart(2, "0")}</span>
      <span class="pl-thumb"><img src="${thumbUrl(song.id)}" alt=""></span>
      <span class="pl-meta">
        <p class="pl-title">${song.title}</p>
        <p class="pl-singer">${song.singer}</p>
      </span>
      <button class="pl-play" aria-label="बजाउनुहोस्">
        <svg viewBox="0 0 24 24" width="14" height="14"><path d="M8 5v14l12-7z" fill="currentColor"/></svg>
      </button>
    `;
    li.addEventListener("click", () => loadSong(i, true));
    els.playlistEl.appendChild(li);
  });
}

function highlightPlaylist() {
  document.querySelectorAll(".playlist-item").forEach((item) => {
    item.classList.toggle("playing", Number(item.dataset.index) === currentIndex);
  });
}

/* ============ YouTube IFrame API ============ */
function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytPlayer", {
    height: "1",
    width: "1",
    videoId: SONGS[0].id,
    playerVars: { controls: 0, disablekb: 1, playsinline: 1, rel: 0, autoplay: 0 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function onPlayerReady() {
  playerReady = true;
  els.playerCard.classList.remove("loading");
  els.playBtn.disabled = false;
  if (player && player.setVolume) {
    player.setVolume(Number(els.volumeSlider.value));
  }
}

function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    setPlayIcon(true);
    startProgressLoop();
  } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.CUED) {
    isPlaying = false;
    setPlayIcon(false);
    stopProgressLoop();
  } else if (e.data === YT.PlayerState.ENDED) {
    playNext();
  }
}

function loadSong(index, autoplay) {
  currentIndex = (index + SONGS.length) % SONGS.length;
  const song = SONGS[currentIndex];
  els.trackTitle.textContent = song.title;
  els.trackSinger.textContent = song.singer;
  els.artThumb.src = thumbUrl(song.id);
  highlightPlaylist();
  resetProgress();

  if (player) {
    if (autoplay) {
      if (player.loadVideoById) {
        player.loadVideoById(song.id);
      }
    } else {
      if (player.cueVideoById) {
        player.cueVideoById(song.id);
      }
    }
  }
}

function togglePlay() {
  if (!player || !playerReady) return;
  const state = player.getPlayerState ? player.getPlayerState() : -1;

  if (state === YT.PlayerState.PLAYING) {
    // instant visual feedback, don't wait for the YouTube state event
    isPlaying = false;
    setPlayIcon(false);
    stopProgressLoop();
    player.pauseVideo();
  } else {
    isPlaying = true;
    setPlayIcon(true);
    startProgressLoop();
    player.playVideo();
  }
}

function playNext() {
  loadSong(currentIndex + 1, true);
}

function playPrev() {
  loadSong(currentIndex - 1, true);
}

function setPlayIcon(playing) {
  els.playIcon.style.display = playing ? "none" : "block";
  els.pauseIcon.style.display = playing ? "block" : "none";
}

/* ============ Progress bar ============ */
function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

function startProgressLoop() {
  stopProgressLoop();
  progressTimer = setInterval(() => {
    if (!player || !player.getCurrentTime) return;
    const cur = player.getCurrentTime();
    const dur = player.getDuration();
    const pct = dur ? (cur / dur) * 100 : 0;
    els.progressFill.style.width = pct + "%";
    els.progressKnob.style.left = pct + "%";
    els.curTime.textContent = fmtTime(cur);
    els.durTime.textContent = fmtTime(dur);
  }, 500);
}

function stopProgressLoop() {
  if (progressTimer) clearInterval(progressTimer);
}

function resetProgress() {
  els.progressFill.style.width = "0%";
  els.progressKnob.style.left = "0%";
  els.curTime.textContent = "0:00";
  els.durTime.textContent = "0:00";
}

els.progressTrack.addEventListener("click", (e) => {
  if (!player || !player.getDuration) return;
  const rect = els.progressTrack.getBoundingClientRect();
  const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
  const dur = player.getDuration();
  player.seekTo(dur * pct, true);
  els.progressFill.style.width = pct * 100 + "%";
  els.progressKnob.style.left = pct * 100 + "%";
});

els.volumeSlider.addEventListener("input", () => {
  if (player && player.setVolume) player.setVolume(Number(els.volumeSlider.value));
});

/* ============ Controls ============ */
els.playBtn.addEventListener("click", togglePlay);
els.nextBtn.addEventListener("click", playNext);
els.prevBtn.addEventListener("click", playPrev);

/* ============ Navbar scroll state + active link ============ */
const sections = ["home", "playlist", "about"].map((id) => document.getElementById(id));

window.addEventListener("scroll", () => {
  els.navbar.classList.toggle("scrolled", window.scrollY > 40);

  let current = "home";
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120) current = sec.id;
  });
  els.navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === current);
  });
});

/* ============ Ambient dust particles overlay ============ */
function spawnDust() {
  const mote = document.createElement("div");
  mote.className = "dust-mote";
  const left = 8 + Math.random() * 55;
  const bottom = 2 + Math.random() * 8;
  const duration = 5 + Math.random() * 5;
  const dx = (Math.random() - 0.5) * 60;
  mote.style.left = left + "%";
  mote.style.bottom = bottom + "%";
  mote.style.setProperty("--dx", dx + "px");
  mote.style.animationDuration = duration + "s";
  els.dustField.appendChild(mote);
  setTimeout(() => mote.remove(), duration * 1000 + 200);
}
setInterval(spawnDust, 450);
for (let i = 0; i < 10; i++) setTimeout(spawnDust, i * 200);

/* ============ Nepali live clock (Nepal Standard Time) ============ */
const NP_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
function toNepaliDigits(str) {
  return String(str).replace(/[0-9]/g, (d) => NP_DIGITS[d]);
}

const clockTimeEl = document.getElementById("clockTime");
const clockPraharEl = document.getElementById("clockPrahar");

function praharLabel(hour24) {
  if (hour24 < 3) return "मध्यरात";
  if (hour24 < 6) return "उषा";
  if (hour24 < 12) return "बिहान";
  if (hour24 < 16) return "दिउँसो";
  if (hour24 < 19) return "साँझ";
  return "राति";
}

function updateNepaliClock() {
  if (!clockTimeEl) return;
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const h24 = Number(parts.find((p) => p.type === "hour").value);
  const min = parts.find((p) => p.type === "minute").value;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;

  const showColon = now.getSeconds() % 2 === 0;
  const timeStr = `${toNepaliDigits(h12)}${showColon ? ":" : " "}${toNepaliDigits(min)}`;

  clockTimeEl.textContent = timeStr;
  if (clockPraharEl) clockPraharEl.textContent = praharLabel(h24);
}
updateNepaliClock();
setInterval(updateNepaliClock, 1000);

/* ============ Live listeners + total visits ============ */
/* Namespace should be unique to this site to avoid collisions on the shared counter API */
const VISIT_NAMESPACE = "driverdai-ko-playlist-v1";
const NP_LOCALE_NUM = new Intl.NumberFormat("ne-NP");

function toNepaliNumStr(n) {
  return toNepaliDigits(NP_LOCALE_NUM.format(n).replace(/,/g, ""));
}

async function initTotalVisits() {
  const el = document.getElementById("totalVisits");
  if (!el) return;
  try {
    const res = await fetch(
      `https://api.countapi.xyz/hit/${VISIT_NAMESPACE}/visits`
    );
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    el.textContent = toNepaliNumStr(data.value);
  } catch (e) {
    // API unreachable (offline, blocked, etc) — hide the line instead of showing a broken "--"
    const footerLine = el.closest(".footer-visits");
    if (footerLine) footerLine.style.display = "none";
  }
}

/* "listening now" — a live-feeling number, not a verified concurrent count
   (a real one needs a backend/websocket, which this static site doesn't have) */
function initListenersNow() {
  const el = document.getElementById("listenersNow");
  if (!el) return;
  let current = 14 + Math.floor(Math.random() * 22); // starting baseline
  el.textContent = toNepaliNumStr(current);

  function drift() {
    const delta = Math.floor(Math.random() * 5) - 2; // -2..+2
    current = Math.max(6, current + delta);
    el.textContent = toNepaliNumStr(current);
    setTimeout(drift, 3500 + Math.random() * 4000);
  }
  setTimeout(drift, 3500 + Math.random() * 4000);
}

/* ============ Scroll-reveal animations ============ */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

/* ============ Mobile nav toggle ============ */
if (els.navBurger) {
  els.navBurger.addEventListener("click", () => {
    const open = els.navBurger.classList.toggle("open");
    els.navBurger.setAttribute("aria-expanded", String(open));
    els.navLinksMobile.classList.toggle("open", open);
  });
  els.navLinksMobile.querySelectorAll(".nav-link-m").forEach((link) => {
    link.addEventListener("click", () => {
      els.navBurger.classList.remove("open");
      els.navBurger.setAttribute("aria-expanded", "false");
      els.navLinksMobile.classList.remove("open");
    });
  });
}

/* ============ Init ============ */
els.playerCard.classList.add("loading");
els.playBtn.disabled = true;
renderPlaylist();
els.trackTitle.textContent = SONGS[0].title;
els.trackSinger.textContent = SONGS[0].singer;
els.artThumb.src = thumbUrl(SONGS[0].id);
highlightPlaylist();
initScrollReveal();
initTotalVisits();
initListenersNow();