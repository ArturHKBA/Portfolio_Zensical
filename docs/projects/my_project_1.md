---
icon: unity

---

# **2016 – 2019 | Unity Engine: Early Explorations & Prototyping**

**Foundational projects and initial experiments in game development.**

Tech Stack: Unity Engine, C# & Blender.

!!! info "Overview:"
    
    While my journey into game development began in 2014, it was in 2016 that I transitioned into the Unity Engine to bring my concepts to life. During this period, I developed an independent horror project, which served as a foundation for mastering C# scripting, simple enemy AI systems and interactive environment design. The following previews showcase my early work and reflect the beginning of my passion for the creative freedom found in game development, turning complex ideas into playable experiences.


## Simple AI & Pathfinding:

Implemented simple enemy AI utilizing Unity’s NavMesh system and custom waypoint scripting to create dynamic patrol and chase behaviors.

<div class="grid" markdown>

<div markdown>
### Enemy Waypoints
Demonstrating the dynamic patrol routine between the custom waypoint scripts.

<video controls style="width: 100%; border-radius: 8px; background: #000; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
  <source src="../vid/Enemy_waypoints.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

<div markdown>
### NavMesh Preview
Visualizing the underlying Unity NavMesh calculation and pathfinding system in action.

<video controls style="width: 100%; border-radius: 8px; background: #000; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
  <source src="../vid/Navmesh_preview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

</div>








??? example "Part of SimpleAiPatrol.ss | Navigate to the full [SOURCE CODE](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/unity/simpleai)!"

    ``` cs title="Part of SimpleAiPatrol.ss" linenums="7"
    public class SimpleAiPatrol : MonoBehaviour
    {
        private NavMeshAgent agent;
        [SerializeField] private Vector3 firstPosOffset;
        [SerializeField] private Vector3 secondPosOffset;
        public enum AIState { Patrol, Attack, Idle}
        public AIState currentAiState;
        private FieldOfView fieldOfView;
        [SerializeField] private float viewRadius = 15f;
        [Range(0, 360)][SerializeField] private float viewAngle = 15f;
        private bool idleStop = false;
        private bool patrolMove = false;
        [HideInInspector] public bool isAttacking = false;
        private FaceObjectTowardPlayer faceTowardPlayer;
        [SerializeField] private float stopDistanceFromPlayer = 10f;
        private GegnerHealth gegnerHealth;

        void Start()
        {
            gegnerHealth = GetComponent<GegnerHealth>();
            faceTowardPlayer =GetComponentInChildren<FaceObjectTowardPlayer>();
            isAttacking = false;
            fieldOfView = GetComponent<FieldOfView>();
            fieldOfView.viewRadius = viewRadius;    
            fieldOfView.viewAngle = viewAngle;

            firstPosOffset = transform.position + firstPosOffset;
            secondPosOffset = transform.position + secondPosOffset;

            agent = GetComponent<NavMeshAgent>();

        }
        void OnDrawGizmos()
        {
            // Eine Grüne Kugel an der Position der "Transform"

            Gizmos.color = Color.green;
            Gizmos.DrawWireSphere(transform.position, stopDistanceFromPlayer);
        }
        private void LateUpdate()
        {
            switch (currentAiState)
            {
                case AIState.Patrol:
                    Patrol();
                    break;
                case AIState.Attack:
                    Attack();
                    break;
                case AIState.Idle:
                    Idle();
                    break;
            }

            if(gegnerHealth.gegnerGotHit)
            {
                currentAiState = AIState.Attack;
            }
        }
        private void Patrol()
        {
            // Patroliert zwischen Positionen A > B > C > A etc.

            if (!patrolMove)
            {
                // Das Ziel wird gesetzt

                agent.SetDestination(firstPosOffset);
            }
            else
            {
                //Das Ziel wird gesetzt

                agent.SetDestination(secondPosOffset);
            }

            // Das Ziel findet sein Ende

            if (Mathf.Abs(agent.nextPosition.z - firstPosOffset.z) <= 1 && Mathf.Abs(agent.nextPosition.x - firstPosOffset.x) <= 1)
            {
                patrolMove = true;
            }

            if (Mathf.Abs(agent.nextPosition.z - secondPosOffset.z) <= 1 && Mathf.Abs(agent.nextPosition.x - secondPosOffset.x) <= 1)
            {
                patrolMove = false;
            }


            SearchForPlayer();
        }
    ``` 

## Procedural VFX (Particle Systems):

- I also worked on a dynamic blood-splatter effect. By utilizing collision detection within the Particle System, I ensured that every impact resulted in a unique visual output, avoiding repetitive "canned" animations.

<video width="640" height="360" controls>
  <source src="/vid/Blood_particle.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

- Another scripted example using some assets.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7seLKmyWc58?si=K120UIK6M6zz_6_e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![BILD](/img/portfolio/Gore.png)

## First-Person Animation:

- I crafted a variety of animations, with a heavy focus on first-person movements. My goal was to move away from robotic motions and create a feel that’s fluid and immersive for the player.

<video width="640" height="360" controls>
  <source src="/vid/Reload.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Immersive Gameplay Mechanics (Player States):

- I implemented a "Shock System" where entering specific trigger zones changes the player’s physical state (heavy breathing audio and increased camera/aim sway), enhancing psychological horror through mechanical feedback.
<iframe width="560" height="315" src="https://www.youtube.com/embed/D7W4wC5KI78?si=8_Omy2p7tQU7ztnp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![BILD](/img/portfolio/Scene.png)

## Technical Optimization (Graphics Menu):

- Performance optimization is very important, which is why I also worked on a comprehensive settings menu allowing users to toggle graphic settings like Anti-aliasing, Texture quality, Shadow resolution, Shadow distance, Resolution, V-Sync, Anisotropic Filtering and more. This ensured scalability across both high-end and low-end hardware.

![BILD](/img/portfolio/Graphics_setting.png)
[Source Code](https://github.com/ArturHKBA/ArturHKBA.github.io/tree/main/assets/resources/unity/mainmenu)

## Cross-Platform Input Support:

- I built a flexible input system with full support for Xbox and DualShock controllers. My goal was to make sure playing on a PC feels just as smooth and responsive as playing on a console.

![BILD](/img/portfolio/Gamepad.png)
[Source Code SOON]()

<br/><br/>

**Note:**

Beyond these highlights, I have built dozens of smaller projects to sharpen my skills. While I was constantly iterating on playable builds for my horror title, the milestones below represent my biggest technical leaps and the core of my growth as a developer.

<br/><br/>


