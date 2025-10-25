 const AGENT_DATA = {
            // DUELISTS (6)
            jett: { name: "Jett", role: "Duelist", country: "South Korea", bio: "The South Korean agent, Jett, uses fast, agile movements to flank enemies, create space, and take map control. She excels at entry fragging and escaping difficult situations.", img: "img/char/Jett.png", skills: [{ name: "Cloudburst (C)", icon: "cloud-rain", desc: "Throw a projectile that expands into a brief vision-blocking cloud." }, { name: "Updraft (Q)", icon: "arrow-up-circle", desc: "Propel Jett into the air, allowing access to high ground and unexpected angles." }, { name: "Tailwind (E)", icon: "fast-forward", desc: "Instantly dash a short distance in the direction of movement." }, { name: "Blade Storm (X)", icon: "swords", desc: "Equip five lethal throwing knives (recharge on kill). Shoots one at a time or all remaining in a burst." }, ] },
            phoenix: { name: "Phoenix", role: "Duelist", country: "United Kingdom", bio: "Hailing from the UK, Phoenix's power lights up the battlefield. He can self-sustain, flash around corners, and get aggressive with his ultimate.", img: "img/char/phoenix.webp", skills: [{ name: "Blaze (C)", icon: "flame", desc: "Summon a flame wall that blocks vision and damages enemies (heals Phoenix)." }, { name: "Curveball (Q)", icon: "zap", desc: "Throw a flash flare that curves left or right around corners." }, { name: "Hot Hands (E)", icon: "hand-metal", desc: "Throw a fireball that creates a lingering zone of fire, healing Phoenix or damaging enemies." }, { name: "Run It Back (X)", icon: "refresh-cw", desc: "Mark your location. If killed or when the timer expires, you return to the mark with full health." }, ] },
            reyna: { name: "Reyna", role: "Duelist", country: "Mexico", bio: "Forged in the heart of Mexico, Reyna dominates duels with a feast or famine playstyle. She must secure kills (Soul Orbs) to use her core powers effectively.", img: "img/char/reyna.png", skills: [{ name: "Leer (C)", icon: "eye-off", desc: "Equip an ethereal eye. The eye Nearsights all enemies who look at it." }, { name: "Devour (Q)", icon: "heart", desc: "Consume a nearby Soul Orb (from enemy deaths) to rapidly heal (consumes Orb)." }, { name: "Dismiss (E)", icon: "move", desc: "Consume a Soul Orb to become instantly intangible and invisible for a short duration (consumes Orb)." }, { name: "Empress (X)", icon: "crown", desc: "Enter a frenzy, increasing firing speed. Kills refresh the duration and automatically cast Devour/Dismiss." }, ] },
            raze: { name: "Raze", role: "Duelist", country: "Brazil", bio: "Raze, a Brazilian explosive expert, brings heavy damage with her arsenal. She excels at clearing tight spaces and forcing enemies out of cover.", img: "img/char/raze.png", skills: [{ name: "Boom Bot (C)", icon: "toy-brick", desc: "Deploy a robot that travels in a straight line, bouncing off walls, and locks onto nearby enemies to explode." }, { name: "Blast Pack (Q)", icon: "package", desc: "Throw an explosive pack that sticks to surfaces. Detonates to damage enemies and propel Raze." }, { name: "Paint Shells (E)", icon: "bomb", desc: "Throw a cluster grenade that deals initial damage, then drops secondary grenades that explode." }, { name: "Showstopper (X)", icon: "target", desc: "Equip a rocket launcher that fires one devastating rocket that deals massive area damage." }, ] },
            neon: { name: "Neon", role: "Duelist", country: "Philippines", bio: "The Filipina speedster, Neon, surges onto the battlefield with electrical quickness, creating energized walls and stunning enemies before sprinting into position.", img: "img/char/neon.png", skills: [{ name: "Fast Lane (C)", icon: "square-gantt-chart", desc: "Fire two parallel energy walls forward a short distance that block line of sight and damage enemies." }, { name: "Relay Bolt (Q)", icon: "zap", desc: "Throw an energy bolt that bounces once and electrifies the ground below its impact points, stunning enemies." }, { name: "High Gear (E)", icon: "gauge", desc: "Instantly channel Neon's power for increased running speed. Use 'Fire' to trigger an electric slide." }, { name: "Overdrive (X)", icon: "bolt", desc: "Unleash her full power, giving her lightning-fast movement and allowing her to fire a deadly lightning beam with high accuracy." }, ] },
            yoru: { name: "Yoru", role: "Duelist", country: "Japan", bio: "The Japanese dimensional drifter, Yoru, uses tactical trickery and teleportation to confuse enemies, reposition, and create unexpected flanks.", img: "img/char/yoru.png", skills: [{ name: "Fakeout (C)", icon: "footprints", desc: "Equip an echo of Yoru's footsteps that, when triggered, mimics the sound of running to mislead enemies." }, { name: "Blindside (Q)", icon: "sun", desc: "Equip an unstable dimensional fragment. Fire to toss it, and upon hitting a surface, it flashes enemies." }, { name: "Gatecrash (E)", icon: "move-horizontal", desc: "Equip a rift tether that can be sent forward. Activate again to instantly teleport to the tether's location." }, { name: "Dimensional Drift (X)", icon: "ghost", desc: "Yoru equips a mask that allows him to see across dimensions. He becomes invisible and invulnerable to enemies." }, ] },

            // CONTROLLERS (4)
            brimstone: { name: "Brimstone", role: "Controller", country: "United States", bio: "Hailing from the USA, Brimstone's orbital map control makes him a reliable anchor. He uses his tablet to deliver precision smoke and powerful firepower from above.", img: "img/char/brimstone.png", skills: [{ name: "Stim Beacon (C)", icon: "activity", desc: "Toss a beacon that grants a speed and fire rate boost to nearby players." }, { name: "Incendiary (Q)", icon: "bomb", desc: "Launch a grenade that deploys a persistent field of fire, denying areas and flushing out enemies." }, { name: "Sky Smoke (E)", icon: "cloud-rain", desc: "Use a tactical map to call down three long-duration, hollow smoke clouds." }, { name: "Orbital Strike (X)", icon: "crosshair", desc: "Launch a devastating laser strike at a selected location on the tactical map." }, ] },
            omen: { name: "Omen", role: "Controller", country: "Unknown", bio: "A phantom of the shadows, Omen uses teleportation and smoke to strategically choke off sightlines and hunt enemies across the map.", img: "img/char/omen.png", skills: [{ name: "Shrouded Step (C)", icon: "target", desc: "Equip a shadow walk ability. After a short delay, teleport to a marked short-range location." }, { name: "Paranoia (Q)", icon: "eye-off", desc: "Launch a shadow projectile that Nearsights any players it touches and slightly pushes them back." }, { name: "Dark Cover (E)", icon: "cloud-drizzle", desc: "Cast a shadow orb that deploys a long-lasting, hollow smoke sphere over long distances." }, { name: "From the Shadows (X)", icon: "plane", desc: "Teleport to anywhere on the map. Enemies can hear the initial sound and destroy his shade." }, ] },
            astra: { name: "Astra", role: "Controller", country: "Ghana", bio: "The Ghanaian astronaut Astra taps into cosmic energy, placing Stars to create smokes, pulls, and stuns across the entire map from her Astral Form.", img: "img/char/astra.png", skills: [{ name: "Gravity Well (C)", icon: "anchor", desc: "Activate a Star to pull enemies toward the center before it explodes, making them fragile." }, { name: "Nova Pulse (Q)", icon: "sun", desc: "Activate a Star to detonate a stunning charge, concussing all enemies in its area." }, { name: "Nebula (E)", icon: "cloud-drizzle", desc: "Activate a Star to transform it into a smoke cloud. Can be recalled to briefly form a fading smoke." }, { name: "Cosmic Divide (X)", icon: "split", desc: "Enter Astral Form and place a massive cosmic wall that blocks bullets and dampens sound." }, ] },
            viper: { name: "Viper", role: "Controller", country: "United States", bio: "Viper utilizes toxic chemical devices to manipulate the battlefield, denying lines of sight and decaying enemies foolish enough to cross her path.", img: "img/char/viper.jpg", skills: [{ name: "Snake Bite (C)", icon: "radio-tower", desc: "Fire a canister that shatters upon impact, creating a pool of acid that damages and slows enemies." }, { name: "Poison Cloud (Q)", icon: "circle-dot", desc: "Throw a gas emitter that can be activated/deactivated to form a toxic smoke cloud (uses Fuel)." }, { name: "Toxic Screen (E)", icon: "line-chart", desc: "Deploy a long line of gas emitters that can be activated/deactivated to form a tall toxic wall (uses Fuel)." }, { name: "Viper's Pit (X)", icon: "shield-half", desc: "Eject a massive chemical cloud that covers a large area. Enemies inside are Decayed, and Viper is highlighted." }, ] },
            
            // SENTINELS (5)
            sage: { name: "Sage", role: "Sentinel", country: "China", bio: "The fortress of China, Sage provides crucial utility by healing allies, slowing enemies, and resurrecting fallen teammates to swing rounds.", img: "img/char/sage.webp", skills: [{ name: "Barrier Orb (C)", icon: "square", desc: "Cast a large, solid wall that blocks pathways. Can be placed, rotated, and fortified." }, { name: "Slow Orb (Q)", icon: "snowflake", desc: "Throw an orb that creates a field that significantly slows and makes players who move through it noisy." }, { name: "Healing Orb (E)", icon: "heart", desc: "Heal yourself or an injured ally back to full health over time." }, { name: "Resurrection (X)", icon: "skull", desc: "Target a friendly corpse and bring them back to life with full health." }, ] },
            cypher: { name: "Cypher", role: "Sentinel", country: "Morocco", bio: "The Morrocan information broker, Cypher is a one-man surveillance network. He uses traps and cameras to monitor and secure large areas of the map.", img: "img/char/cypher.webp", skills: [{ name: "Tripwire (C)", icon: "cable", desc: "Place a tripwire between two walls. If an enemy crosses it, they are restrained and revealed until destroyed." }, { name: "Cyber Cage (Q)", icon: "lock", desc: "Throw a cage that can be activated remotely to deploy a momentary vision-blocking cylinder." }, { name: "Spycam (E)", icon: "camera", desc: "Place a remote camera. Activate to view the feed and fire a tracking dart." }, { name: "Neural Theft (X)", icon: "eye", desc: "Instantly reveal the location of all living enemy players after extracting information from a dead enemy." }, ] },
            killjoy: { name: "Killjoy", role: "Sentinel", country: "Germany", bio: "The German genius, Killjoy, secures sites using automated defense gadgets. Her Lockdown ultimate forces enemies to vacate an area or risk capture.", img: "img/char/killjoy.png", skills: [{ name: "Alarmbot (C)", icon: "bell-ring", desc: "Deploy a bot that activates when an enemy gets in range, exploding to make the enemy vulnerable." }, { name: "Nanoswarm (Q)", icon: "drip-water", desc: "Throw a grenade that, when activated remotely, deploys a swarm of damaging nanobots in an area." }, { name: "Turret (E)", icon: "layout-list", desc: "Deploy a turret that fires at enemies in a 180-degree cone, revealing their location." }, { name: "Lockdown (X)", icon: "move-3d", desc: "Deploy a device that detains all enemies caught in its large radius after a short wind-up." }, ] },
            chamber: { name: "Chamber", role: "Sentinel", country: "France", bio: "The French arms dealer, Chamber, uses custom-crafted weapons and precise teleportation to hold angles and swiftly reposition after securing kills.", img: "img/char/chamber.png", skills: [{ name: "Trademark (C)", icon: "radar", desc: "Place a trap that scans for enemies. When an enemy comes into range, it destabilizes the ground around them, slowing them." }, { name: "Headhunter (Q)", icon: "hand-platter", desc: "Equip a heavy pistol with a high-zoom primary fire and increased damage (can one-shot headshot)." }, { name: "Rendezvous (E)", icon: "move-diagonal", desc: "Place two teleport anchors. Teleport between them when in range (rechargeable)." }, { name: "Tour De Force (X)", icon: "crosshair", desc: "Equip a powerful sniper rifle that can one-shot kill to the body. Kills create a slowing field." }, ] },
            deadlock: { name: "Deadlock", role: "Sentinel", country: "Norway", bio: "The Norwegian operative Deadlock uses powerful nanowire technology to secure the site, preventing rushes and catching enemies who move carelessly.", img: "img/char/Deadlock_Artwork_Full.webp", skills: [{ name: "GravNet (C)", icon: "target", desc: "Throw a grenade that forces enemies caught in the blast to crouch and move slowly." }, { name: "Sonic Sensor (Q)", icon: "ear", desc: "Deploy a sensor that monitors an area for enemy footsteps or firing sounds, concussing them if triggered." }, { name: "Barrier Mesh (E)", icon: "shield", desc: "Equip a disc that generates a barrier wall, blocking movement but not bullets." }, { name:"Annihilation (X)", icon: "move-up", desc: "Fire a pulse of nanowires that captures the first enemy hit and drags them down a path. If they reach the end, they die." }, ] },
            
            // INITIATORS (6)
            sova: { name: "Sova", role: "Initiator", country: "Russia", bio: "The Russian archer Sova tracks and finds enemies using his custom bow and recon devices, providing critical information for team executions and pushing sites.", img: "img/char/sova.png", skills: [{ name: "Shock Bolt (C)", icon: "zap", desc: "Fire an explosive bolt that detonates on impact, dealing damage (can be bounced)." }, { name: "Recon Bolt (Q)", icon: "compass", desc: "Fire a bolt that attaches to a surface and periodically reveals enemy locations (can be bounced)." }, { name: "Owl Drone (E)", icon: "send", desc: "Deploy a remote-controlled drone that can fire a marking dart at enemies." }, { name: "Hunter's Fury (X)", icon: "target", desc: "Fire up to three destructive energy blasts that travel across the map, damaging and revealing enemies." }, ] },
            fade: { name: "Fade", role: "Initiator", country: "Turkey", bio: "The Turkish bounty hunter Fade uses nightmares and fear to locate enemies. Her utility focuses on deafening, tracking, and exposing enemy positions.", img: "img/char/fade.png", skills: [{ name: "Prowler (C)", icon: "paw-print", desc: "Equip a prowler that chases the nearest enemy, Nearsighting them on contact." }, { name: "Seize (Q)", icon: "anchor", desc: "Throw a node that tethers enemies caught in its radius, Deafening and Decaying them." }, { name: "Haunt (E)", icon: "ghost", desc: "Throw a throwable orb that drops and reveals the location of enemies in its line of sight." }, { name: "Nightfall (X)", icon: "alarm-smoke", desc: "Unleash a wave of nightmare energy that Deafens and trails enemies in a massive cone." }, ] },
            breach: { name: "Breach", role: "Initiator", country: "Sweden", bio: "The Swedish bionic man, Breach, unleashes powerful kinetic blasts through walls, staggering, stunning, and dizzying opponents from relative safety.", img: "img/char/breach.png", skills: [{ name: "Aftershock (C)", icon: "explosion", desc: "Equip a fusion charge. Fire it to set a slow-acting blast through a wall that deals heavy damage." }, { name: "Flashpoint (Q)", icon: "flashlight", desc: "Equip a blinding charge. Fire it to set a fast-acting flash through a wall that blinds enemies." }, { name: "Fault Line (E)", icon: "wave-square", desc: "Equip a seismic blast. Charge and release to fire a concussive blast that stuns enemies in its line." }, { name: "Rolling Thunder (X)", icon: "align-horizontal-distribute-center", desc: "Fire a massive seismic charge that ripples through walls, concussing and knocking up anyone caught." }, ] },
            kayo: { name: "KAY/O", role: "Initiator", country: "Unknown", bio: "KAY/O, the machine of war, is built to suppress enemy utility, giving his team a massive advantage in fights and making enemy agents reliant only on their guns.", img: "img/char/kayo.png", skills: [{ name: "FRAG/MENT (C)", icon: "circle-dot", desc: "Equip an explosive fragment. Throw it to stick to the floor, exploding multiple times to deal damage." }, { name: "FLASH/DRIVE (Q)", icon: "sun", desc: "Equip a flash grenade. Throw it, and it detonates after a short fuse, blinding enemies." }, { name: "ZERO/POINT (E)", icon: "slash", desc: "Equip a suppression blade. Throw it, and it sticks to the first surface, suppressing (disabling abilities) any enemy in its radius." }, { name: "NULL/CMD (X)", icon: "radio-tower", desc: "Overload with radianite energy. Pulses suppress enemies caught in the radius. If KAY/O is killed, allies can revive him." }, ] },
            skye: { name: "Skye", role: "Initiator", country: "Australia", bio: "The Australian eco-warrior Skye summons creatures to scout and heal. She can flash enemies and heal her entire team back to full health.", img: "img/char/skye.png", skills: [{ name: "Regrowth (C)", icon: "hand-heart", desc: "Equip a healing trinket. Hold to channel a heal on nearby allies (cannot heal self)." }, { name: "Trailblazer (Q)", icon: "paw-print", desc: "Equip a Tasmanian Tiger trinket. Take control of the animal to scout and detonate to concuss enemies." }, { name:"Guiding Light (E)", icon: "bird", desc: "Equip a hawk trinket. Guide the hawk's flight path and activate to flash enemies who are looking at it." }, { name: "Seekers (X)", icon: "target", desc: "Equip a Seeker trinket. Release three Seekers that track the three closest enemies. If a Seeker reaches an enemy, it nearsights them." }, ] },
            gekko: { name: "Gekko", role: "Initiator", country: "United States", bio: "Gekko commands a crew of lovable, chaotic creatures to clear the way. His abilities can be picked up and reused after a cooldown, making him a sustainable initiator.", img: "img/char/gekko.webp", skills: [{ name: "Wingman (C)", icon: "rocket", desc: "Send Wingman forward to clear a corner. Can be sent to plant or defuse the Spike." }, { name: "Dizzy (Q)", icon: "dizzy", desc: "Throw Dizzy forward to launch a blast of plasma at enemies in their line of sight, blinding them." }, { name: "Mosh Pit (E)", icon: "droplets", desc: "Toss Mosh, who explodes after a short delay, damaging enemies in the area." }, { name: "Thrash (X)", icon: "move-horizontal", desc: "Equip Thrash, who can be guided to a location and detonated, restraining all enemies in a large radius." }, ] },
        };

        const WEAPON_DATA = [
            // SIDEARMS (5)
            { type: "Sidearm", name: "Classic", pros: "Free, features a 3-shot burst alternative fire.", cons: "Weak primary fire damage.", cost: 0, image: "CLASSIC" },
            { type: "Sidearm", name: "Shorty", pros: "Very cheap, devastating at extreme close range.", cons: "2-shot capacity, requires full proximity to be effective.", cost: 150, image: "SHORTY" },
            { type: "Sidearm", name: "Frenzy", pros: "Full automatic fire, high fire rate, great eco choice.", cons: "Inaccurate beyond close range, fast ammo depletion.", cost: 450, image: "FRENZY" },
            { type: "Sidearm", name: "Ghost", pros: "Suppressed, reliable headshot damage, good magazine size.", cons: "Lower damage than Sheriff, damage falloff.", cost: 500, image: "GHOST" },
            { type: "Sidearm", name: "Sheriff", pros: "High risk/reward. One-shot headshot at close to medium range.", cons: "High recoil, low fire rate, expensive for a pistol.", cost: 800, image: "SHERIFF" },
            
            // SMGS (2)
            { type: "SMG", name: "Stinger", pros: "Very high fire rate, effective for close-range rush defenses.", cons: "High recoil, terrible damage falloff, small magazine.", cost: 1100, image: "STINGER" },
            { type: "SMG", name: "Spectre", pros: "Suppressed, high mobility, low recoil, good close to mid-range.", cons: "Significant damage falloff at long range, not a rifle replacement.", cost: 1600, image: "SPECTRE" },
            
            // RIFLES (4)
            { type: "Rifle", name: "Bulldog", pros: "Affordable full buy, features 3-shot burst zoom mode.", cons: "Weaker damage profile than Vandal/Phantom.", cost: 2050, image: "BULLDOG" },
            { type: "Rifle", name: "Guardian", pros: "Semi-automatic, excellent precision, two-shot body kill at all ranges.", cons: "Expensive, low fire rate, unforgiving if you miss the first shot.", cost: 2250, image: "GUARDIAN" },
            { type: "Rifle", name: "Vandal", pros: "One-shot headshot at all ranges.", cons: "High vertical recoil on sustained fire.", cost: 2900, image: "VANDAL" },
            { type: "Rifle", name: "Phantom", pros: "Suppressed, better spray control, faster firing rate.", cons: "Not a one-shot headshot beyond 15m (requires more damage at distance).", cost: 2900, image: "PHANTOM" },
            
            // SHOTGUNS (2)
            { type: "Shotgun", name: "Bucky", pros: "Cheap, high damage primary fire, long-range secondary fire.", cons: "Slow fire rate, pump action makes it unforgiving.", cost: 1100, image: "BUCKY" },
            { type: "Shotgun", name: "Judge", pros: "Automatic fire, devastating close range potential.", cons: "Massive damage falloff, high spread, slow reload.", cost: 1850, image: "JUDGE" },

            // SNIPERS (2)
            { type: "Sniper", name: "Marshal", pros: "Inexpensive, quick scope time, one-shot headshot at all ranges.", cons: "One-shot body kill only on unarmored targets.", cost: 950, image: "MARSHAL" },
            { type: "Sniper", name: "Operator", pros: "One-shot kill to the body at any range.", cons: "Very high cost, slow fire rate, heavy movement penalty.", cost: 4700, image: "OPERATOR" },
            
            // HEAVIES (2)
            { type: "Heavy", name: "Ares", pros: "High fire rate, low cost for a heavy, accelerating fire rate.", cons: "Slow movement speed, long reload time.", cost: 1600, image: "ARES" },
            { type: "Heavy", name: "Odin", pros: "Massive magazine, high fire rate, excellent wall penetration.", cons: "Extremely slow movement, long spin-up time, high recoil.", cost: 3200, image: "ODIN" },
        ];

        const MAP_DATA = [
    { 
        name: "Ascent", 
        features: "Mid control is vital; two destructible doors; open sites with limited cover.", 
        strats: [
            "Aggressive mid push to split sites.",
            "Use utility to deny Market rotations.",
            "Default plant in the open for post-plant utility."
        ], 
        image: "img/maps/Ascent.webp" 
    },
    { 
        name: "Bind", 
        features: "Two one-way teleporters for fast rotation/fakes. Two compact sites.", 
        strats: [
            "Fast executes using teleporter audio cue as cover.",
            "Double-stacking Hookah or A-Short on defense.",
            "Use flashes through teleporters for aggression."
        ], 
        image: "img/maps/bind.webp" 
    },
    { 
        name: "Haven", 
        features: "Unique 3-site map (A, B, C) demanding wide coverage and fast rotation on defense.", 
        strats: [
            "Commit fully to one site; rotation is slow for attackers.",
            "Control C-Long for easy lurks and flanks.",
            "Use utility on Mid Window/Garage to slow attackers."
        ], 
        image: "img/maps/haven.webp" 
    },
    { 
        name: "Split", 
        features: "Verticality, ropes, and tight choke points, favoring Controllers and Duelists for aggression.", 
        strats: [
            "Utilize ropes aggressively on attack or defense.",
            "Mid control is mandatory for map parity.",
            "Use smokes creatively to block off high ground (Heaven)."
        ], 
        image: "img/maps/split.webp" 
    },
    { 
        name: "Lotus", 
        features: "Three sites (A, B, C); three rotating doors for fast shifts and mid-site rotation.", 
        strats: [
            "B site is the most vulnerable with three entry points.",
            "Rotate the doors pre-round for flanking potential.",
            "Always cover the mid path to prevent early rotations."
        ], 
        image: "img/maps/lotus.webp" 
    },
    { 
        name: "Sunset", 
        features: "Two bomb sites, mid street control, and multiple routes. Defined by its central hub.", 
        strats: [
            "The middle is the biggest key to map control, granting access to both sites.",
            "A-Site is very open, use smokes deep to cover all angles.",
            "Watch for early pushes through B Main on defense."
        ], 
        image: "img/maps/sunset.webp" 
    },

    // Out of Rotation / Other
    { 
        name: "Icebox", 
        features: "Verticality, zip-lines, and large open sites favoring long-range weapons (Snipers).", 
        strats: [
            "Aggressively contest mid-boiler to cut the map in half.",
            "Use Raze/Jett to gain high ground control on sites.",
            "Plant default for cover against A-Nest and B-Backsite peeks."
        ], 
        image: "img/maps/icebox.webp" 
    },
    { 
        name: "Breeze", 
        features: "Very long sightlines and wide-open spaces favoring Rifles and Operators.", 
        strats: [
            "Control Mid-door and Mid-wood for maximum map pressure.",
            "Pushing through Chute onto B is a risky, high-reward strategy.",
            "Use Viper/Astra to cut the vast sites into manageable sections."
        ], 
        image: "img/maps/breeze.webp" 
    },
    { 
        name: "Fracture", 
        features: "H-shaped map with defender spawn in the center and four zip-lines for fast horizontal rotation.", 
        strats: [
            "Attackers should split push every round using the zip-lines to distract.",
            "Defenders must hold anchors and rely on quick rotations.",
            "Control B-Arc to disrupt attack flow."
        ], 
        image: "img/maps/fracture.webp" 
    },
    { 
        name: "Pearl", 
        features: "Two sites connected by a deep, layered mid-section and no complex mechanical features like teleporters or ropes.", 
        strats: [
            "Mid control is paramount, granting access to A-Link and B-Link.",
            "A-site is typically defended by Controllers and Sentinels due to the numerous chokes.",
            "Aggressive pushes through B-Main can catch defense off guard."
        ], 
        image: "img/maps/pearl.webp" 
    }
];

        const NAV_ITEMS = ['home', 'agents', 'tips', 'weapons', 'maps'];
        let currentPage = 'home';
        let currentAgent = 'jett'; // Default agent

        // --- UTILITY: SOUND EFFECTS ---
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'sine' },
            envelope: { release: 0.1, decay: 0.1 }
        }).toDestination();

        const playClickSound = () => {
            // Check if Tone is initialized and context is running
            if (Tone.context.state !== 'running') {
                Tone.start().then(() => synth.triggerAttackRelease("C4", "16n"));
            } else {
                synth.triggerAttackRelease("C4", "16n");
            }
        };

        /**
         * Simple function to create Lucide icon SVG element
         * @param {string} iconName - The name of the icon
         */
        const getIconSvg = (iconName, size = 6) => {
            // Mapping for better icon choices if needed
            const iconMap = {
                'target': 'crosshair', 
                'cloud-drizzle': 'cloud-rain', 
                'zap': 'bolt', 
                'eye-off': 'eye-off',
                'skull': 'skull',
                'hand-metal': 'hand-metal',
                'sun': 'sun',
                'explosion': 'flame',
                'move-diagonal': 'move-diagonal',
                'toy-brick': 'square',
                'gauge': 'gauge',
                'dizzy': 'dizzy'
            };
            const finalIconName = iconMap[iconName] || iconName;

            if (window.lucide && window.lucide.icons[finalIconName]) {
                const icon = window.lucide.icons[finalIconName];
                return lucide.createIcons({ icons: { [finalIconName]: icon }, attrs: { class: `w-${size} h-${size} valorant-red-accent mr-3 flex-shrink-0` } })[finalIconName].outerHTML;
            }
            return `<span class="valorant-red-accent mr-3 flex-shrink-0">⚙️</span>`;
        };

        // --- PAGE RENDERING LOGIC ---

        const renderPage = (page) => {
            const container = document.getElementById('content-container');
            const searchContainer = document.getElementById('search-container');
            let contentHTML = '';

            // 1. Hide/Show Search Bar
            if (page === 'agents') {
                searchContainer.classList.remove('hidden', 'opacity-0');
                searchContainer.classList.add('opacity-100');
            } else {
                searchContainer.classList.remove('opacity-100');
                searchContainer.classList.add('opacity-0');
                setTimeout(() => searchContainer.classList.add('hidden'), 300);
            }

            // 2. Select content
            switch (page) {
                case 'home': contentHTML = renderHomePage(); break;
                case 'agents': contentHTML = renderAgentsPage(); break;
                case 'tips': contentHTML = renderTipsPage(); break;
                case 'weapons': contentHTML = renderWeaponsPage(); break;
                case 'maps': contentHTML = renderMapsPage(); break;
                default: contentHTML = renderHomePage(); // Default to home if hash is bad
            }

            // 3. Apply fade-out/fade-in effect
            container.innerHTML = ''; // Clear content instantly
            container.classList.remove('fade-in');
            setTimeout(() => {
                container.innerHTML = contentHTML;
                container.classList.add('fade-in');

                // 4. Attach Listeners and Finalize
                if (page === 'agents') {
                    attachAgentListeners();
                    filterAgents(''); // Initial load of all agents
                    renderAgentDetails(currentAgent); // Render the current agent's details
                }
                updateNavActiveState();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
        };

        // --- HOME PAGE ---
        const renderHomePage = () => `
            <section class="min-h-[70vh] flex items-center justify-center text-center p-8 bg-v-charcoal rounded-lg shadow-2xl border border-gray-800 animate-fade-in">
                <div>
                    <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-widest leading-none text-white drop-shadow-lg">
                        ELEVATE YOUR <span class="valorant-red-accent">GAMEPLAY</span>
                    </h1>
                    <p class="mt-6 text-xl sm:text-2xl text-gray-300 font-light max-w-4xl mx-auto">
                        Your strategic hub for Valorant. Find detailed agent breakdowns, master weapon mechanics, and learn key callouts for every competitive map.
                    </p>
                    <button onclick="changePage('agents')" class="mt-10 valorant-interactive bg-v-red text-v-dark px-8 py-3 rounded-md uppercase font-bold text-lg hover:bg-white transition duration-300" style=" background: var(--valorant-red); color: black;">
                        View Agent Roster
                    </button>
                </div>
            </section>
        `;

        // --- AGENTS PAGE RENDERING ---
        const renderAgentsPage = () => {
            return `
                <section class="bg-v-charcoal p-4 sm:p-10 rounded-lg shadow-2xl border border-gray-800">
                    <h2 class="text-4xl font-black uppercase mb-6 valorant-border pb-2">Full Agent Roster & Guides</h2>

                    <!-- Agent Navigation Bar (Filtered) -->
                    <div id="agent-nav-bar" class="flex flex-wrap gap-2 border-b border-gray-700 pb-4 mb-6 text-sm sm:text-base overflow-x-auto">
                        <!-- Agent items injected here by JS -->
                    </div>

                    <!-- Agent Details Display -->
                    <div id="agent-details-container" class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
                        <!-- Agent details (image, bio, skills) will be injected here -->
                    </div>
                </section>
            `;
        };

        const filterAgents = (query) => {
            const navBar = document.getElementById('agent-nav-bar');
            if (!navBar) return;
            const normalizedQuery = query.toLowerCase();

            // Filter agents based on name
            const filteredAgents = Object.keys(AGENT_DATA)
                .filter(key => AGENT_DATA[key].name.toLowerCase().includes(normalizedQuery))
                .map(key => `
                    <div class="agent-nav-item rounded-full ${key === currentAgent ? 'active' : ''}" data-agent-id="${key}">
                        ${AGENT_DATA[key].name} <span class="text-xs text-gray-500 ml-1">(${AGENT_DATA[key].role.charAt(0)})</span>
                    </div>
                `).join('');

            navBar.innerHTML = filteredAgents;
            attachAgentListeners();
        };

        const renderAgentDetails = (agentId) => {
            const agent = AGENT_DATA[agentId];
            const container = document.getElementById('agent-details-container');
            if (!agent || !container) return;

            currentAgent = agentId;

            // 1. Update Agent Nav Bar Active State
            document.querySelectorAll('.agent-nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-agent-id') === agentId) {
                    item.classList.add('active');
                }
            });

            // 2. Generate Skills HTML
            const skillsHTML = agent.skills.map(skill => {
                const skillName = skill.name.split('(')[0].trim();
                // Determine skill type for display based on typical ability binding (C, Q, E, X)
                const skillType = skill.name.includes('(C)') ? 'Basic' : skill.name.includes('(Q)') ? 'Secondary' : skill.name.includes('(E)') ? 'Signature' : 'Ultimate';
                const typeColor = skillType === 'Ultimate' ? 'text-green-400' : skillType === 'Signature' ? 'text-v-red' : 'text-yellow-400';

                return `
                    <div class="skill-card p-4 rounded-lg bg-v-dark border border-gray-700 transition duration-300 hover:border-v-red cursor-default">
                        <div class="flex items-start mb-2">
                            <div class="skill-icon-wrapper p-3 rounded-full mr-4">${getIconSvg(skill.icon, 8)}</div>
                            <div>
                                <h4 class="text-xl font-bold uppercase text-v-light">${skillName} <span class="text-sm font-light text-gray-500">${skill.name.match(/\((.*?)\)/)?.[0] || ''}</span></h4>
                                <span class="text-xs ${typeColor} uppercase font-semibold">${skillType}</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-400 mt-2">${skill.desc}</p>
                    </div>
                `;
            }).join('');

            // 3. Generate Agent HTML
            container.innerHTML = `
                <!-- Agent Info (Bio + Skills) -->
                <div class="lg:col-span-2 space-y-8 order-1 lg:order-2">
                    <div class="border-b border-v-red pb-4">
                        <span class="text-v-red text-lg font-bold uppercase tracking-wider">${agent.role}</span>
                        <h3 class="text-5xl sm:text-6xl font-black uppercase text-white tracking-wider">${agent.name}</h3>
                        <p class="text-sm text-gray-400 mt-1">Origin: ${agent.country}</p>
                    </div>

                    <div class="bg-v-dark p-6 rounded-lg shadow-inner border border-gray-700">
                        <h4 class="text-2xl font-bold uppercase mb-3 valorant-red-accent">Biography</h4>
                        <p class="text-gray-300 leading-relaxed">${agent.bio}</p>
                    </div>

                    <div>
                        <h4 class="text-2xl font-bold uppercase mb-4 valorant-red-accent">Abilities</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${skillsHTML}
                        </div>
                    </div>
                </div>

                <!-- Agent Image / Portrait -->
                <div class="lg:col-span-1 flex justify-center order-2 lg:order-1 lg:order-3">
                    <img src="${agent.img}" alt="${agent.name} Portrait" class="w-full max-w-xs sm:max-w-sm lg:max-w-none h-auto object-cover rounded-lg shadow-2xl border border-v-red transition transform hover:scale-[1.02] duration-500" onerror="this.src='https://placehold.co/600x800/0b0c10/ff4655?text=IMAGE+NOT+FOUND';" />
                </div>
            `;
        };

        const attachAgentListeners = () => {
            // Attach click listeners to dynamically created agent names
            document.querySelectorAll('.agent-nav-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    playClickSound();
                    const agentId = e.target.closest('.agent-nav-item').getAttribute('data-agent-id');
                    renderAgentDetails(agentId);
                });
            });

            // Attach search input listener
            const searchInput = document.getElementById('agent-search');
            if (searchInput) {
                searchInput.oninput = (e) => {
                    filterAgents(e.target.value);
                };
            }
        };

        // --- TIPS PAGE ---
        const renderTipsPage = () => `
            <section class="bg-v-charcoal p-6 sm:p-10 rounded-lg shadow-2xl border border-gray-800 fade-in">
                <h2 class="text-4xl font-black uppercase mb-8 valorant-border pb-2">Competitive Tips & Tricks</h2>

                <div class="space-y-12">
                    <!-- Mechanical Fundamentals Tips -->
                    <div class="p-6 bg-v-dark rounded-xl border border-gray-700">
                        <h3 class="text-3xl font-bold uppercase mb-4 valorant-red-accent">Mechanical Fundamentals</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="p-4 bg-v-charcoal rounded-lg border border-gray-800">
                                <h4 class="text-xl font-bold mb-2 text-v-light flex items-center">${getIconSvg('gun', 5)}Recoil Control</h4>
                                <p class="text-sm text-gray-400">Master the first **7 shots** by pulling down hard. For longer ranges, switch to precise **2-3 bullet bursts** to reset accuracy. Stop moving before shooting!</p>
                            </div>
                            <div class="p-4 bg-v-charcoal rounded-lg border border-gray-800">
                                <h4 class="text-xl font-bold mb-2 text-v-light flex items-center">${getIconSvg('fast-forward', 5)}Counter-Straffing</h4>
                                <p class="text-sm text-gray-400">Tap the opposite movement key (A then D) briefly when peeking to stop momentum instantly, ensuring **perfect shot accuracy**. This is key for wide peeks.</p>
                            </div>
                            <div class="p-4 bg-v-charcoal rounded-lg border border-gray-800">
                                <h4 class="text-xl font-bold mb-2 text-v-light flex items-center">${getIconSvg('align-horizontal-distribute-center', 5)}Crosshair Placement</h4>
                                <p class="text-sm text-gray-400">Always pre-aim at head level and anticipate common enemy peek angles. This **reduces time-to-kill** to the minimum necessary for the fight.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Economy and Utility Tips -->
                    <div class="p-6 bg-v-dark rounded-xl border border-gray-700">
                        <h3 class="text-3xl font-bold uppercase mb-4 valorant-red-accent">Economy & Utility Usage</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="p-4 bg-v-charcoal rounded-lg border border-gray-800">
                                <h4 class="text-xl font-bold mb-2 text-v-light">Force Buy vs. Eco</h4>
                                <p class="text-sm text-gray-400">If your team is poor, **commit to a full save** (Classic/Abilities) to secure a full buy next round. Force buying only works if you can buy full shields + Spectre/Bulldog.</p>
                            </div>
                            <div class="p-4 bg-v-charcoal rounded-lg border border-gray-800">
                                <h4 class="text-xl font-bold mb-2 text-v-light">The Wall-Bang</h4>
                                <p class="text-sm text-gray-400">Use guns with high wall penetration (Odin, Guardian) to shoot through thin walls. **Pay attention** to enemy ability sounds and minimap locations to pre-fire common spots.</p>
                            </div>
                            <div class="p-4 bg-v-charcoal rounded-lg border border-gray-800">
                                <h4 class="text-xl font-bold mb-2 text-v-light">Trading</h4>
                                <p class="text-sm text-gray-400">Never peek alone. Always position yourself close enough to your entry fragger to **trade their death** immediately, ensuring the round remains a 4v4 or better.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // --- WEAPONS PAGE ---
        const renderWeaponsPage = () => {
            const getWeaponTypes = () => [...new Set(WEAPON_DATA.map(w => w.type))];

            const renderWeaponCategory = (type) => {
                const cards = WEAPON_DATA.filter(w => w.type === type).map(w => `
                    <div class="p-4 bg-v-dark rounded-lg border border-gray-700 transition duration-300 hover:border-v-red cursor-default">
                        <div class="flex items-center justify-between border-b border-gray-800 pb-2 mb-2">
                            <h4 class="text-2xl font-black valorant-red-accent">${w.name}</h4>
                            <span class="text-base text-gray-400 font-bold ml-2">${w.cost} Cr</span>
                        </div>
                        <p class="text-sm text-gray-300 mb-1"><span class="font-semibold text-green-400">PRO:</span> ${w.pros}</p>
                        <p class="text-sm text-gray-300"><span class="font-semibold text-yellow-400">CON:</span> ${w.cons}</p>
                    </div>
                `).join('');

                return `
                    <div class="mb-10">
                        <h3 class="text-3xl font-bold uppercase mb-5 valorant-red-accent">${type}s</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            ${cards}
                        </div>
                    </div>
                `;
            };

            const weaponsHTML = getWeaponTypes().map(type => renderWeaponCategory(type)).join('');

            return `
                <section class="bg-v-charcoal p-6 sm:p-10 rounded-lg shadow-2xl border border-gray-800 fade-in">
                    <h2 class="text-4xl font-black uppercase mb-8 valorant-border pb-2">Full Arsenal Overview</h2>
                    ${weaponsHTML}
                </section>
            `;
        };

        // --- MAPS PAGE ---
        const renderMapsPage = () => {
            const mapsHTML = MAP_DATA.map(map => `
                <div class="bg-v-dark p-6 rounded-lg border border-gray-700 hover:shadow-v-red hover:shadow-md transition duration-300 group">
                    <h3 class="text-3xl font-black uppercase mb-2 valorant-red-accent">${map.name}</h3>
                    <p class="text-gray-400 mb-4 font-semibold">${map.features}</p>
                    <h4 class="text-xl font-bold mt-4 mb-2 text-v-light group-hover:valorant-red-accent transition-colors duration-300">Key Strategies:</h4>
                    <ul class="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                        ${map.strats.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    <img src="${map.image}" alt="${map.name} Map Overview" class="w-full mt-4 rounded-md opacity-75 group-hover:opacity-100 transition duration-500" onerror="this.src='https://placehold.co/800x450/0b0c10/1a1e22?text=MAP+NOT+FOUND';" />
                </div>
            `).join('');

            return `
                <section class="bg-v-charcoal p-6 sm:p-10 rounded-lg shadow-2xl border border-gray-800 fade-in">
                    <h2 class="text-4xl font-black uppercase mb-8 valorant-border pb-2">Map Callouts & Strategy (All Maps)</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${mapsHTML}
                    </div>
                </section>
            `;
        };

        // --- GLOBAL NAVIGATION & INIT ---

        const changePage = (newPage) => {
            playClickSound();
            currentPage = newPage;
            window.location.hash = newPage;
            renderPage(newPage);
        };

        const updateNavActiveState = () => {
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('data-page') === currentPage) {
                    link.classList.add('valorant-red-accent', 'border-b-2', 'border-v-red');
                    link.classList.remove('text-white');
                } else {
                    link.classList.remove('valorant-red-accent', 'border-b-2', 'border-v-red');
                    link.classList.add('text-white');
                }
            });
        };

        const initApp = () => {
            // Set up all global listeners
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = e.target.getAttribute('data-page');
                    changePage(page);
                });
            });

            // Initial page load based on hash or default
            const hash = window.location.hash.slice(1);
            if (NAV_ITEMS.includes(hash)) {
                currentPage = hash;
            } else {
                currentPage = 'home';
            }
            
            // Set the initial agent for the agents page
            currentAgent = Object.keys(AGENT_DATA).includes(currentAgent) ? currentAgent : Object.keys(AGENT_DATA)[0];

            renderPage(currentPage);
        };

        // Handle back/forward navigation
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            if (NAV_ITEMS.includes(hash) && hash !== currentPage) {
                renderPage(hash);
                updateNavActiveState();
            }
        });

        // Initialize on load

        window.addEventListener('load', initApp);

