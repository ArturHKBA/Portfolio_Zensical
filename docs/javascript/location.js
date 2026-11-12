function initHeaderLocation() {
    if (document.querySelector(".header-location-pill")) return;

    const musicBtn = document.querySelector(".header-music-btn");
    const clockPill = document.querySelector(".header-clock-pill");
    const searchBox = document.querySelector(".md-search");
    const anchor = musicBtn || clockPill || searchBox;
    if (!anchor) return;

    const tzPart = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin",
        timeZoneName: "short"
    }).formatToParts(new Date()).find(part => part.type === "timeZoneName");

    const tzLabel = tzPart ? tzPart.value : "CET";

    const locationPill = document.createElement("div");
    locationPill.className = "header-location-pill";
    locationPill.title = "Local Studio Timezone (Europe/Berlin)";
    locationPill.innerHTML = `
    <svg viewBox="0 0 24 24" class="location-pin-svg" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
    <span>Herford, DE</span>
    <span class="location-sep">•</span>
    <span class="location-tz">${tzLabel}</span>
  `;

    anchor.parentNode.insertBefore(locationPill, anchor.nextSibling);
}

if (typeof document$ !== "undefined") {
    document$.subscribe(() => initHeaderLocation());
} else {
    document.addEventListener("DOMContentLoaded", initHeaderLocation);
}
