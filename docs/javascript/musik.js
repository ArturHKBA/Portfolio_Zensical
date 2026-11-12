function initHeaderMusic() {
    if (document.querySelector(".header-music-btn")) return;

    const clockPill = document.querySelector(".header-clock-pill");
    const searchBox = document.querySelector(".md-search");
    const anchor = clockPill || searchBox;
    if (!anchor) return;

    const logoLink = document.querySelector(".md-header__button.md-logo");
    const rootUrl = logoLink ? new URL(logoLink.getAttribute("href"), window.location.href).href : window.location.origin + "/";
    const baseUrl = rootUrl.endsWith("/") ? rootUrl : rootUrl + "/";

    const iconOffSrc = baseUrl + "img/music-on.svg";
    const iconOnSrc = baseUrl + "img/music-off.svg";
    const audioSrc = baseUrl + "audio/bg-music.mp3";

    const musicBtn = document.createElement("button");
    musicBtn.type = "button";
    musicBtn.className = "header-music-btn";
    musicBtn.setAttribute("aria-label", "Hintergrundmusik umschalten");
    musicBtn.setAttribute("aria-pressed", "false");
    musicBtn.title = "Background Music (Muted)";

    const iconImg = document.createElement("img");
    iconImg.src = iconOffSrc;
    iconImg.alt = "";
    iconImg.className = "music-icon-img";
    musicBtn.appendChild(iconImg);

    anchor.parentNode.insertBefore(musicBtn, anchor.nextSibling);

    if (!window.portfolioBgAudio) {
        window.portfolioBgAudio = new Audio(audioSrc);
        window.portfolioBgAudio.loop = true;
        window.portfolioBgAudio.volume = 0.25;
    }
    const audio = window.portfolioBgAudio;

    if (!audio.paused) {
        musicBtn.classList.add("is-playing");
        musicBtn.setAttribute("aria-pressed", "true");
        iconImg.src = iconOnSrc;
    }

    musicBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                musicBtn.classList.add("is-playing");
                musicBtn.setAttribute("aria-pressed", "true");
                musicBtn.title = "Background Music (Playing)";
                iconImg.src = iconOnSrc;
            }).catch((err) => {
                console.warn("Audio konnte nicht abgespielt werden:", err);
            });
        } else {
            audio.pause();
            musicBtn.classList.remove("is-playing");
            musicBtn.setAttribute("aria-pressed", "false");
            musicBtn.title = "Background Music (Muted)";
            iconImg.src = iconOffSrc;
        }
    });
}

if (typeof document$ !== "undefined") {
    document$.subscribe(() => initHeaderMusic());
} else {
    document.addEventListener("DOMContentLoaded", initHeaderMusic);
}
