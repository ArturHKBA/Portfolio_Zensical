function initHeaderClock() {
    if (document.querySelector(".header-clock-pill")) return;

    const searchBox = document.querySelector(".md-search");
    if (!searchBox) return;

    const clockPill = document.createElement("div");
    clockPill.className = "header-clock-pill";
    clockPill.innerHTML = `
    <span class="clock-dot"></span>
    <span class="clock-digits" aria-label="Lokale Uhrzeit"></span>
  `;

    searchBox.parentNode.insertBefore(clockPill, searchBox.nextSibling);

    const digitsContainer = clockPill.querySelector(".clock-digits");
    let lastTimeStr = "";

    function updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        if (timeStr === lastTimeStr) return;

        if (!lastTimeStr || digitsContainer.children.length !== timeStr.length) {
            digitsContainer.innerHTML = timeStr
                .split("")
                .map(char =>
                    char === ":"
                        ? `<span class="clock-sep">:</span>`
                        : `<span class="clock-digit"><span>${char}</span></span>`
                )
                .join("");
            lastTimeStr = timeStr;
            return;
        }

        for (let i = 0; i < timeStr.length; i++) {
            if (timeStr[i] !== lastTimeStr[i] && timeStr[i] !== ":") {
                const wrapper = digitsContainer.children[i];
                if (!wrapper) continue;
                wrapper.innerHTML = `<span class="digit-enter">${timeStr[i]}</span>`;
            }
        }

        lastTimeStr = timeStr;
    }

    updateClock();
    setInterval(updateClock, 250);
}

if (typeof document$ !== "undefined") {
    document$.subscribe(() => initHeaderClock());
} else {
    document.addEventListener("DOMContentLoaded", initHeaderClock);
}
