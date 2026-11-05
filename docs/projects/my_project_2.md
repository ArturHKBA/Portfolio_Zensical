---
icon: modding

---

# **MY PROJECTS**

**2019 – 2021 | Modding Frameworks: Grand Theft Auto V (FiveM)**

<br/><br/>

Overview:

End of 2019 I started building complex, large-scale systems for my community. I dedicated over 1,500 hours to developing immersive gameplay mechanics and managing persistent worlds for a live player base.

![BILD](/img/portfolio/LSPD.png)

## My key Contributions:

- Systems programming: Developed core gameplay features using Lua to enhance player immersion and interaction.
- Database management: Designed and maintained a robust SQL infrastructure to handle player data, inventory systems and dynamic housing.
- World building: Utilized CodeWalker and OpenIV to modify yMap files for game environments.
- Custom assets: Brought unique visuals to the game by creating and optimizing 3D models in Blender and ZModeler.

## Realistic Inventory & Weapon Restriction:

- The problem: The "infinite pocket" system in the vanilla game broke immersion and created unfair combat advantages.
- The solution: Developed a custom Lua script to limit player loadouts to a realistic configuration (e.g. two sidearms and one primary long weapon).
- Impact: Forced strategic gameplay by requiring players to use vehicle trunks or armories/bags to switch heavy gear. Notably, this mechanic was later revealed as a core feature for the upcoming Grand Theft Auto VI.
<iframe width="560" height="315" src="https://www.youtube.com/embed/kvhgb0Rjm2Q?si=RTPUdai43mQmfDJB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Source code](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/modding/script_waffensystem)

## Emergency lighting system Overhaul:

- The goal: I wanted to give Roleplay enthusiasts a much more immersive, high-fidelity experience with emergency vehicles.
- How it works: I moved away from the basic "on/off" vanilla toggle and built a multi-state system. This gives players manual control over specific siren tones, patterns and flash speeds.
The result: It completely changed how emergency ops feel. While the custom GUI was still in the development, the depth of the siren system added a huge layer of realism.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KwA9SP9If0I?si=xLbumc2ITB9jDBD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Source code](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/modding/script_lichtsystem)

## Dynamic fire/flame System:

- The impact: This project really took off, hitting over 50.000 views and reaching way beyond my usual community.
- The tech: I built a randomized event system that triggers fires at specific coordinates, keeping the gameplay unpredictable and fresh.
- The innovation: When this dropped, it was one of the first systems of its kind, helping shift the standard for how job-based scripts work in FiveM.
<iframe width="560" height="315" src="https://www.youtube.com/embed/GuhfZzz1I4o?si=KHKWWXQQJaYcqhFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
![BILD](/img/portfolio/Hose.png)

[Source code fire/flames](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/modding/script_feuer)

## Mask Shop System:

Community Choice: Implemented the most-requested feature, allowing players to customize appearances and hide their identities.
Bug Fixing: Solved critical desync and invincibility issues by developing a custom "Menu State" for smoother interactions.
Stability: Optimized code to manage player health and movement flags, ensuring the game remains stable during character customization.

- Challenge and Community: Implementing the most requested feature to allow players to customize appearances and hide their identities caused severe desync and invincibility bugs.
- Technical fix: Resolved complex state machine issues by implementing a "Menu State."
- Code Quality: Managed player health and movement flags (frozen states) to ensure stability during character customization. (Refer to client.lua lines 150-166 in my repository for implementation details).
<iframe width="560" height="315" src="https://www.youtube.com/embed/MJYCk7PjWg0?si=pXETnlpDfg8l3yJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Source code](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/modding/script_masken)

## Immersive Armory & Animation Syncing:

- Philosophy: Moving away from "press button to receive item" prompts in favor of tactile, visual interactions.
- Technical Execution: Spent extensive time syncing character animations with precise world coordinates for weapon props.
- Outcome: A highly polished, physical armory system that reinforces player immersion through visual feedback and realistic timing.
<iframe width="560" height="315" src="https://www.youtube.com/embed/6d4M4rus-UE?si=_2jo7eIRxtx-JhyS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Source code](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/modding/script_polizeilager)

<br/><br/>

## Other projects & world building:

![BILD](/img/portfolio/WIP.png)

- Beyond my main systems, I love giving back to the modding scene. I have released several free scripts and mapping projects to help other server owners level up their realism. For me, it’s always been about blending technical polish with solid environmental storytelling.

<br/><br/>

## Custom Mapping & Level Design:

- LSIA border checkpoint: I built a detailed border crossing near the airport to create more immersive roleplay opportunities. To help other server owners, I released the full source files on public forums for anyone to use.
<iframe width="560" height="315" src="https://www.youtube.com/embed/MY1Vn3XYUdE?si=tmkhnlPU1iY4vayK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[LSIA Border Map public site](https://forum.cfx.re/t/release-ymap-fivem-lsia-border-map-with-detailed-objects-interiors-dynamic-objects/1570768)

- Cayo Perico infrastructure: To fix a major gameplay oversight in the original Rockstar update, I built and integrated a fully functional gas station on the island. I didn't just place a pump. I added a detailed shop section, custom props and ambient NPC scenarios to make the whole area feel like a natural part of the map.

![BILD](/img/portfolio/Forum_Cayo_Perico.png)

[Gas Pump Detailed YMap site](https://forum.cfx.re/t/release-cayo-perico-gas-pump-detailed-ymap-with-a-little-shop-dynamic-objects/1906934)

- I focus on small-scale environmental polish to bridge the gap between a static map and a living world. By refining those tiny interactions, I make sure every corner of a scene feels like it has a purpose.

![BILD](/img/portfolio/Forum_Border.png)

[Sandy Shores Sheriff Exterior Map site](https://forum.cfx.re/t/sandy-shores-sheriff-exterior-map/1874666)

![BILD](/img/portfolio/Forum_Legion_Square.png)

[Legion Square Hotdog stand site](https://forum.cfx.re/t/release-map-fivem-legion-square-hotdog-burger-stand-outdoor-objects-upgrade/1468741)

- Check out more of my unlisted projects [HERE](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/modding)!

<br/><br/>

Note:

These highlights are just a small selection of the systems and environments I have developed over the past few years. If you are interested in a deeper technical breakdown or would like to see more of my work in action, feel free to visit my forum, check out my showcases on YouTube or contact me directly. I’m always open to discussing technical solutions and new projects.