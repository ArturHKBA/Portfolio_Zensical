<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instagram Profile Finder</title>
    <!-- Lädt das neueste Tailwind CSS v4 via CDN -->
    <script src="https://jsdelivr.net"></script>
</head>

<body class="bg-slate-950 text-white font-sans min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-xl space-y-6"> 
        
        <!-- Header mit Instagram-Gradient-Text -->
        <header class="text-center">
            <h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Insta Profile Finder
            </h1>
            <p class="text-slate-400 text-sm mt-2">Suche und betrachte Instagram-Profile im Handumdrehen</p>
        </header>

        <!-- Suchleiste -->
        <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-2 focus-within:ring-2 focus-within:ring-pink-500 transition">
            <span class="text-slate-500 pl-2 font-medium">@</span>
            <input type="text" placeholder="Instagram-Nutzername..."
                class="usernameinp flex-1 bg-transparent outline-none text-white placeholder-slate-500 py-2 pr-3" />
            <button class="search bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 px-5 py-2 rounded-lg text-sm font-semibold transition active:scale-95">
                Suche
            </button>
        </div>

        <!-- Profilkarte (wird dynamisch per JS befüllt) -->
        <div class="card bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 shadow-xl hidden flex-col sm:flex-row gap-6 backdrop-blur-md">
            <!-- Inhalt wird per JavaScript generiert -->
        </div>

        <!-- Footer -->
        <footer class="text-center text-xs text-slate-600 pt-4">
            Entwickelt mit ❤️ und Tailwind CSS
        </footer>
    </div>

    <!-- JavaScript-Logik -->
    <script>
        const searchBtn = document.querySelector(".search");
        const usernameInp = document.querySelector(".usernameinp");
        const card = document.querySelector(".card");

        // Da Instagram keine offizielle freie API anbietet, nutzen wir Mock-Daten
        const mockInstagramDb = {
          "cristiano": {
            username: "cristiano",
            fullName: "Cristiano Ronaldo",
            bio: "SIUUUUU ⚽ Personal Profile.",
            avatarUrl: "https://unsplash.com",
            posts: "3.712",
            followers: "640M",
            following: "582",
            isVerified: true,
            website: "cristianoronaldo.com"
          },
          "nasa": {
            username: "nasa",
            fullName: "NASA",
            bio: "There is space for everybody. 🚀 Exploring the secrets of the universe.",
            avatarUrl: "https://unsplash.com",
            posts: "4.105",
            followers: "97.4M",
            following: "184",
            isVerified: true,
            website: "nasa.gov"
          },
          "artur": {
            username: "artur",
            fullName: "Artur",
            bio: "Web-Developer & Tech Enthusiast 💻 Code ist mein Leben.",
            avatarUrl: "https://unsplash.com",
            posts: "42",
            followers: "1.250",
            following: "432",
            isVerified: false,
            website: ""
          }
        };

        // Funktion simuliert den API-Abruf mit kleiner Verzögerung
        function getInstagramProfile(username) {
          return new Promise((resolve, reject) => {
            const cleanUsername = username.toLowerCase().replace("@", "");

            setTimeout(() => {
              if (mockInstagramDb[cleanUsername]) {
                resolve(mockInstagramDb[cleanUsername]);
              } else {
                reject(new Error("Nutzer nicht gefunden"));
              }
            }, 400);
          });
        }

        // Funktion rendert die Profilkarte
        function renderProfile(data) {
          card.style.display = "flex"; // Macht das Element sichtbar

          card.innerHTML = `
            <!-- Avatar mit animiertem Instagram-Story-Ring -->
            <div class="flex justify-center items-center">
                <div class="p-[3px] bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 rounded-full">
                    <div class="bg-slate-900 p-[2px] rounded-full">
                        <img src="${data.avatarUrl}" alt="Avatar" class="w-24 h-24 rounded-full object-cover" />
                    </div>
                </div>
            </div>

            <!-- Profil-Details -->
            <div class="flex-1 space-y-4">
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <h2 class="text-xl font-bold text-white">@${data.username}</h2>
                        ${data.isVerified ? `
                            <svg class="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                        ` : ''}
                    </div>
                    <p class="text-slate-400 text-sm font-medium mt-0.5">${data.fullName}</p>
                </div>

                <!-- Beitrags- und Follower-Zähler -->
                <div class="flex gap-6 text-sm border-y border-slate-800 py-2 text-slate-300">
                    <div><span class="font-bold text-white">${data.posts}</span> Beiträge</div>
                    <div><span class="font-bold text-white">${data.followers}</span> Follower</div>
                    <div><span class="font-bold text-white">${data.following}</span> Gefolgt</div>
                </div>

                <!-- Biografie -->
                <div class="text-sm space-y-1 text-slate-300">
                    <p class="whitespace-pre-line">${data.bio}</p>
                    ${data.website ? `
                        <a href="https://${data.website}" target="_blank" class="text-sky-400 hover:underline block font-medium mt-2">
                            🔗 ${data.website}
                        </a>
                    ` : ''}
                </div>
            </div>
          `;
        }

        // Klick-Event für den Button
        searchBtn.addEventListener("click", function () {
          let username = usernameInp.value.trim();

          if (username.length > 0) {
            getInstagramProfile(username)
              .then((data) => {
                renderProfile(data);
              })
              .catch((err) => {
                alert("Nutzer nicht in der Demo-Datenbank gefunden!\n\nVersuche es mit: cristiano, nasa oder artur");
              });
          } else {
            alert("Bitte gib einen Nutzernamen ein!");
          }
        });

        // Suche auch per "Enter"-Taste auslösen
        usernameInp.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            searchBtn.click();
          }
        });
    </script>

</body>

</html>
