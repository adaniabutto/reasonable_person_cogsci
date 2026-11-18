// Each trial_info entry holds one story version (3 stories total, with 3-4 versions each).
// Each entry is named "protagonist_[version]" (e.g., "Jordan_8", "Blake_female")
// The index.html file (one dir up) then groups the story entries by story,
// showing each participant just *one* version per protagonist (Blake, Jamie, Jordan).
// This file contains only the story text; protagonist images are stored in the /characters dir.

var trial_info = [
    // Story 1: Blake (female vs male vs control // same-sex vs different-sex marriage); originally "Nadia" in Wu et al. (2026)
    // All story features except for the protagonist names were preserved.
    // I also changed the graphic depicting the protagonist to match the new story.
    // In some parts of the story, I exchanged pronouns with protagonist names for clarity.
    {
        // Version 1: Blake is *FEMALE* with husband (matches original story)
        name: "Blake_female_with-husband",
        image: "characters/Blake.png",
        story: `<p>
            &emsp;&emsp;
            Blake is a 34-year-old White woman who works as a software engineer.
            She has red hair and is a timid but organized person.
            She enjoys collecting vinyl records and oil painting.
            <br> &emsp;&emsp;
            Blake and her husband Cameron have been married for five years.
            Two years ago, Cameron spent four months in jail for physically abusing Blake.
            After that, they started going to couples therapy and for a while their relationship improved.
            <br> &emsp;&emsp;
            Recently, however, Cameron has been acting more violent towards Blake when drunk,
            and on one occasion Blake went to the emergency room for bruises she suffered.
            One night, Cameron came home in an extremely intoxicated state and began screaming
            at Blake that he was going to kill Blake someday.
            Blake became very scared and ran into their bedroom to hide.
            Cameron followed Blake and started hitting her.
            Out of panic, Blake grabbed the loaded, licensed revolver that Cameron kept
            under the bed and shot Cameron. Cameron died in the hospital three hours later.
            </p>`,
            "attention_check": "Blake previously suffered physical abuse in her marriage.<br><br>",
        features: {
            non_actions: [
                ["being female", "is female", "been female"],
                ["being 34 years old", "is 34 years old", "been 34 years old"],
                ["being White", "is White", "been White"],
                ["having red hair", "has red hair", "had red hair"],
                ["being a software engineer", "is a software engineer", "been a software engineer"],
                ["collecting vinyl records", "collects vinyl records", "collected vinyl records"],
                ["enjoying oil painting", "enjoys oil painting", "enjoyed oil painting"],
                ["being a timid person", "is a timid person", "been a timid person"],
                ["being an organized person", "is an organized person", "been an organized person"],
                ["attending couples therapy years ago", "attended couples therapy years ago", "attended couples therapy years ago"]
            ],
            actions: [
                ["going to the emergency room for bruises", "went to the emergency room for bruises", "gone to the emergency room for bruises"],
                ["not seeking help after the emergency room incident", "did not seek help after the emergency room incident", "not sought help after the emergency room incident"],
                ["being scared when Cameron screamed", "was scared when Cameron screamed", "been scared when Cameron screamed"],
                ["grabbing the revolver", "grabbed the revolver", "grabbed the revolver"],
                ["shooting Cameron with the revolver", "shot Cameron with the revolver", "shot Cameron with the revolver"]
            ]
        },
        outcome: "Cameron\'s death",
    },
    {
        // Version 2: Blake is *MALE* with husband (diverges from original story)
        name: "Blake_male_with-husband",
        image: "characters/Blake.png",
        story: `<p>
            &emsp;&emsp;
            Blake is a 34-year-old White man who works as a software engineer.
            He has red hair and is a timid but organized person.
            He enjoys collecting vinyl records and oil painting.
            <br> &emsp;&emsp;
            Blake and his husband Cameron have been married for five years.
            Two years ago, Cameron spent four months in jail for physically abusing Blake.
            After that, they started going to couples therapy and for a while their relationship improved.
            <br> &emsp;&emsp;
            Recently, however, Cameron has been acting more violent towards Blake when drunk,
            and on one occasion Blake went to the emergency room for bruises he suffered.
            One night, Cameron came home in an extremely intoxicated state and began screaming
            at Blake that he was going to kill Blake someday.
            Blake became very scared and ran into their bedroom to hide.
            Cameron followed Blake and started hitting him.
            Out of panic, Blake grabbed the loaded, licensed revolver that Cameron kept
            under the bed and shot Cameron. Cameron died in the hospital three hours later.
            </p>`,
            "attention_check": "Blake previously suffered physical abuse in his marriage.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 34 years old", "is 34 years old", "been 34 years old"],
                ["being White", "is White", "been White"],
                ["having red hair", "has red hair", "had red hair"],
                ["being a software engineer", "is a software engineer", "been a software engineer"],
                ["collecting vinyl records", "collects vinyl records", "collected vinyl records"],
                ["enjoying oil painting", "enjoys oil painting", "enjoyed oil painting"],
                ["being a timid person", "is a timid person", "been a timid person"],
                ["being an organized person", "is an organized person", "been an organized person"],
                ["attending couples therapy years ago", "attended couples therapy years ago", "attended couples therapy years ago"]
            ],
            actions: [
                ["going to the emergency room for bruises", "went to the emergency room for bruises", "gone to the emergency room for bruises"],
                ["not seeking help after the emergency room incident", "did not seek help after the emergency room incident", "not sought help after the emergency room incident"],
                ["being scared when Cameron screamed", "was scared when Cameron screamed", "been scared when Cameron screamed"],
                ["grabbing the revolver", "grabbed the revolver", "grabbed the revolver"],
                ["shooting Cameron with the revolver", "shot Cameron with the revolver", "shot Cameron with the revolver"]
            ]
        },
        outcome: "Cameron\'s death",
    },
    {
        // Version 3: Blake is *MALE* with wife (diverges from original story)
        name: "Blake_male_with-wife",
        image: "characters/Blake.png",
        story: `<p>
            &emsp;&emsp;
            Blake is a 34-year-old White man who works as a software engineer.
            He has red hair and is a timid but organized person.
            He enjoys collecting vinyl records and oil painting.
            <br> &emsp;&emsp;
            Blake and his wife Cameron have been married for five years.
            Two years ago, Cameron spent four months in jail for physically abusing Blake.
            After that, they started going to couples therapy and for a while their relationship improved.
            <br> &emsp;&emsp;
            Recently, however, Cameron has been acting more violent towards Blake when drunk,
            and on one occasion Blake went to the emergency room for bruises he suffered.
            One night, Cameron came home in an extremely intoxicated state and began screaming
            at Blake that she was going to kill Blake someday.
            Blake became very scared and ran into their bedroom to hide.
            Cameron followed Blake and started hitting him.
            Out of panic, Blake grabbed the loaded, licensed revolver that Cameron kept
            under the bed and shot Cameron. Cameron died in the hospital three hours later.
            </p>`,
            "attention_check": "Blake previously suffered physical abuse in his marriage.<br><br>",
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 34 years old", "is 34 years old", "been 34 years old"],
                ["being White", "is White", "been White"],
                ["having red hair", "has red hair", "had red hair"],
                ["being a software engineer", "is a software engineer", "been a software engineer"],
                ["collecting vinyl records", "collects vinyl records", "collected vinyl records"],
                ["enjoying oil painting", "enjoys oil painting", "enjoyed oil painting"],
                ["being a timid person", "is a timid person", "been a timid person"],
                ["being an organized person", "is an organized person", "been an organized person"],
                ["attending couples therapy years ago", "attended couples therapy years ago", "attended couples therapy years ago"]
            ],
            actions: [
                ["going to the emergency room for bruises", "went to the emergency room for bruises", "gone to the emergency room for bruises"],
                ["not seeking help after the emergency room incident", "did not seek help after the emergency room incident", "not sought help after the emergency room incident"],
                ["being scared when Cameron screamed", "was scared when Cameron screamed", "been scared when Cameron screamed"],
                ["grabbing the revolver", "grabbed the revolver", "grabbed the revolver"],
                ["shooting Cameron with the revolver", "shot Cameron with the revolver", "shot Cameron with the revolver"]
            ]
        },
        outcome: "Cameron\'s death",
    },
    {
        // Version 4: Blake and Cameron's gender are omitted
        name: "Blake_control",
        image: "characters/Blake.png",
        story: `<p>
            &emsp;&emsp;
            Blake is 34 years old, White, and works as a software engineer.
            They have red hair and are a timid but organized person.
            Blake enjoys collecting vinyl records and oil painting.
            <br> &emsp;&emsp;
            Blake and their partner Cameron have been married for five years.
            Two years ago, Cameron spent four months in jail for physically abusing Blake.
            After that, they started going to couples therapy and for a while their relationship improved.
            <br> &emsp;&emsp;
            Recently, however, Cameron has been acting more violent towards Blake when drunk,
            and on one occasion Blake went to the emergency room for bruises they suffered.
            One night, Cameron came home in an extremely intoxicated state and began screaming
            at Blake that they were going to kill Blake someday.
            Blake became very scared and ran into their bedroom to hide.
            Cameron followed and started hitting Blake.
            Out of panic, Blake grabbed the loaded, licensed revolver that Cameron kept
            under the bed and shot Cameron. Cameron died in the hospital three hours later.
            </p>`,
            "attention_check": "Blake previously suffered physical abuse in their marriage.<br><br>",
        features: {
            non_actions: [
                ["being 34 years old", "is 34 years old", "been 34 years old"],
                ["being White", "is White", "been White"],
                ["having red hair", "has red hair", "had red hair"],
                ["being a software engineer", "is a software engineer", "been a software engineer"],
                ["collecting vinyl records", "collects vinyl records", "collected vinyl records"],
                ["enjoying oil painting", "enjoys oil painting", "enjoyed oil painting"],
                ["being a timid person", "is a timid person", "been a timid person"],
                ["being an organized person", "is an organized person", "been an organized person"],
                ["attending couples therapy years ago", "attended couples therapy years ago", "attended couples therapy years ago"]
            ],
            actions: [
                ["going to the emergency room for bruises", "went to the emergency room for bruises", "gone to the emergency room for bruises"],
                ["not seeking help after the emergency room incident", "did not seek help after the emergency room incident", "not sought help after the emergency room incident"],
                ["being scared when Cameron screamed", "was scared when Cameron screamed", "been scared when Cameron screamed"],
                ["grabbing the revolver", "grabbed the revolver", "grabbed the revolver"],
                ["shooting Cameron with the revolver", "shot Cameron with the revolver", "shot Cameron with the revolver"]
            ]
        },
        outcome: "Cameron\'s death",
    },
    // Story 2: Jamie (Asian vs White vs control); originally "Qian" in Wu et al. (2026)
    // All story features except for the protagonist names were preserved.
    // In some parts of the story, I exchanged pronouns with protagonist names for clarity.
    {
        // Version 1: Jamie is *ASIAN* (matches original story)
        name: "Jamie_asian",
        image: "characters/Jamie.png",
        story: `<p>
            &emsp;&emsp;
            Jamie is a 27-year-old Asian male waiter in a small town.
            He is hard-working and has a humorous personality, but can be stubborn sometimes.
            He enjoys watching sports, listening to jazz music, and does not smoke.
            <br> &emsp;&emsp;
            One Friday night, Jamie was hanging out at the local bar with some cousins
            who were visiting from out of town.
            They had several rounds of drinks over the course of two hours.
            Wilson, a car mechanic who lives and works in the same small town,
            was also at the bar that night and had been there for about an hour.
            He approached Jamie\'s party and began saying racial slurs to them.
            Jamie was angered by Wilson's comments, but did not talk back to Wilson at first.
            Wilson then playfully punched Jamie while continuing to make derogatory comments.
            Jamie suddenly got up and violently pushed Wilson, knocking him to the ground
            and causing him serious injury.
            </p>`,
        "attention_check": "Jamie was hanging out at the local bar.<br><br>",       
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 27 years old", "is 27 years old", "been 27 years old"],
                ["being Asian", "is Asian", "been Asian"],
                ["being a restaurant waiter", "is a restaurant waiter", "been a restaurant waiter"],
                ["not smoking", "does not smoke", "not smoked"],
                ["enjoying watching sports", "enjoys watching sports", "enjoyed watching sports"],
                ["enjoying jazz music", "enjoys jazz music", "enjoyed jazz music"],
                ["having a humorous personality", "has a humorous personality", "had a humorous personality"],
                ["being stubborn sometimes", "can be stubborn sometimes", "been stubborn sometimes"],
                ["being hard-working", "is hard-working", "been hard-working"]
            ],
            actions: [
                ["hanging out at the local bar with cousins", "hung out at the local bar with cousins", "hung out at the local bar with cousins"],
                ["having several drinks over the course of two hours", "had several drinks over the course of two hours", "had several drinks over the course of two hours"],
                ["being angered by Wilson\'s comments", "was angered by Wilson\'s comments", "been angered by Wilson\'s comments"],
                ["not talking back to Wilson", "did not talk back to Wilson", "not talked back to Wilson"],
                ["pushing Wilson to the ground", "pushed Wilson to the ground", "pushed Wilson to the ground"]
            ]
        },
        outcome: "Wilson\'s injury",
    },
    {
        // Version 2: Jamie is *WHITE* (diverges from original story)
        name: "Jamie_white",
        image: "characters/Jamie.png",
        story: `<p>
            &emsp;&emsp;
            Jamie is a 27-year-old White male waiter in a small town.
            He is hard-working and has a humorous personality, but can be stubborn sometimes.
            He enjoys watching sports, listening to jazz music, and does not smoke.
            <br> &emsp;&emsp;
            One Friday night, Jamie was hanging out at the local bar with some cousins
            who were visiting from out of town.
            They had several rounds of drinks over the course of two hours.
            Wilson, a car mechanic who lives and works in the same small town,
            was also at the bar that night and had been there for about an hour.
            He approached Jamie\'s party and began saying racial slurs to them.
            Jamie was angered by Wilson's comments, but did not talk back to Wilson at first.
            Wilson then playfully punched Jamie while continuing to make derogatory comments.
            Jamie suddenly got up and violently pushed Wilson, knocking him to the ground
            and causing him serious injury.
            </p>`,
        "attention_check": "Jamie was hanging out at the local bar.<br><br>",       
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 27 years old", "is 27 years old", "been 27 years old"],
                ["being White", "is White", "been White"],
                ["being a restaurant waiter", "is a restaurant waiter", "been a restaurant waiter"],
                ["not smoking", "does not smoke", "not smoked"],
                ["enjoying watching sports", "enjoys watching sports", "enjoyed watching sports"],
                ["enjoying jazz music", "enjoys jazz music", "enjoyed jazz music"],
                ["having a humorous personality", "has a humorous personality", "had a humorous personality"],
                ["being stubborn sometimes", "can be stubborn sometimes", "been stubborn sometimes"],
                ["being hard-working", "is hard-working", "been hard-working"]
            ],
            actions: [
                ["hanging out at the local bar with cousins", "hung out at the local bar with cousins", "hung out at the local bar with cousins"],
                ["having several drinks over the course of two hours", "had several drinks over the course of two hours", "had several drinks over the course of two hours"],
                ["being angered by Wilson\'s comments", "was angered by Wilson\'s comments", "been angered by Wilson\'s comments"],
                ["not talking back to Wilson", "did not talk back to Wilson", "not talked back to Wilson"],
                ["pushing Wilson to the ground", "pushed Wilson to the ground", "pushed Wilson to the ground"]
            ]
        },
        outcome: "Wilson\'s injury",
    },
    {
        // Version 3: Race information is omitted (diverges from original story)
        name: "Jamie_control",
        image: "characters/Jamie.png",
        story: `<p>
            &emsp;&emsp;
            Jamie is a 27-year-old male waiter in a small town.
            He is hard-working and has a humorous personality, but can be stubborn sometimes.
            He enjoys watching sports, listening to jazz music, and does not smoke.
            <br> &emsp;&emsp;
            One Friday night, Jamie was hanging out at the local bar with some cousins
            who were visiting from out of town.
            They had several rounds of drinks over the course of two hours.
            Wilson, a car mechanic who lives and works in the same small town,
            was also at the bar that night and had been there for about an hour.
            He approached Jamie\'s party and began saying racial slurs to them.
            Jamie was angered by Wilson's comments, but did not talk back to Wilson at first.
            Wilson then playfully punched Jamie while continuing to make derogatory comments.
            Jamie suddenly got up and violently pushed Wilson, knocking him to the ground
            and causing him serious injury.
            </p>`,
        "attention_check": "Jamie was hanging out at the local bar.<br><br>",       
        features: {
            non_actions: [
                ["being male", "is male", "been male"],
                ["being 27 years old", "is 27 years old", "been 27 years old"],
                ["being a restaurant waiter", "is a restaurant waiter", "been a restaurant waiter"],
                ["not smoking", "does not smoke", "not smoked"],
                ["enjoying watching sports", "enjoys watching sports", "enjoyed watching sports"],
                ["enjoying jazz music", "enjoys jazz music", "enjoyed jazz music"],
                ["having a humorous personality", "has a humorous personality", "had a humorous personality"],
                ["being stubborn sometimes", "can be stubborn sometimes", "been stubborn sometimes"],
                ["being hard-working", "is hard-working", "been hard-working"]
            ],
            actions: [
                ["hanging out at the local bar with cousins", "hung out at the local bar with cousins", "hung out at the local bar with cousins"],
                ["having several drinks over the course of two hours", "had several drinks over the course of two hours", "had several drinks over the course of two hours"],
                ["being angered by Wilson\'s comments", "was angered by Wilson\'s comments", "been angered by Wilson\'s comments"],
                ["not talking back to Wilson", "did not talk back to Wilson", "not talked back to Wilson"],
                ["pushing Wilson to the ground", "pushed Wilson to the ground", "pushed Wilson to the ground"]
            ]
        },
        outcome: "Wilson\'s injury",
    },
    // Story 3: Jordan (8 vs 13 vs 18 years old vs control); originally "Chris" in Wu et al. (2026)
    // All story features except for the protagonist's height (originally weight) and name were preserved.
    // I also changed the graphic depicting the protaognist to match the new story.
    {
        // Version 1: Jordan is *8*
        name: "Jordan_8",
        image: "characters/Jordan.png",
        story: `<p>
            &emsp;&emsp;
            Jordan is an 8-year-old White boy who is about 5 feet tall and has an average IQ.
            He has a curious personality, enjoys playing hide-and-seek as well as
            swimming, and is a picky eater.
            <br> &emsp;&emsp;
            Jordan admires his father a lot.
            His father is an avid recreational deer hunter who owns several hunting guns.
            All of the guns are kept in a locked cabinet, and Jordan\'s father usually
            keeps the key on himself.
            <br> &emsp;&emsp;
            One day, Jordan was playing hide-and-seek with friends at home and hid in
            the hall closet. There, he found the key to the gun cabinet in his father\'s
            jacket, which was hanging in the closet.
            Jordan curiously opened the cabinet and began playing with one of the pistols.
            As he was holding the pistol, he accidentally discharged it and shot one of his friends
            in the shoulder. The friend was taken to the hospital for treatment of severe wounds.
            </p>`,
            "attention_check": "Jordan found a wallet in his father\'s jacket.<br><br>",
            features: {
                non_actions: [
                    ["being male", "is male", "been male"],
                    ["being 8 years old", "is 8 years old", "been 8 years old"],
                    ["being White", "is White", "been White"],
                    ["being about 5 feet tall", "is about 5 feet tall", "been about 5 feet tall"],
                    ["having an average IQ", "has an average IQ", "had an average IQ"],
                    ["enjoying playing hide-and-seek", "enjoys playing hide-and-seek", "enjoyed playing hide-and-seek"],
                    ["enjoying swimming", "enjoys swimming", "enjoyed swimming"],
                    ["admiring his father", "admires his father", "admired his father"],
                    ["having a curious personality", "has a curious personality", "had a curious personality"],
                    ["being a picky eater", "is a picky eater", "been a picky eater"]
            ],
            actions: [
                ["inviting friends over to play", "invited friends over to play", "invited friends over to play"],
                ["hiding in the hall closet", "hid in the hall closet", "hid in the hall closet"],
                ["finding the key in his father\'s jacket pocket", "found the key in his father\'s jacket pocket", "found the key in their father\'s jacket pocket"],
                ["opening the gun cabinet with the key", "opened the gun cabinet with the key", "opened the gun cabinet with the key"],
                ["picking up a pistol to play with", "picked up a pistol to play with", "picked up a pistol to play with"]
            ]
        },
        outcome: "his friend's wounds",
    },
    {
        // Version 2: Jordan is *13*
        name: "Jordan_13",
        image: "characters/Jordan.png",
        story: `<p>
            &emsp;&emsp;
            Jordan is a 13-year-old White boy who is about 5 feet tall and has an average IQ.
            He has a curious personality, enjoys playing hide-and-seek as well as
            swimming, and is a picky eater.
            <br> &emsp;&emsp;
            Jordan admires his father a lot.
            His father is an avid recreational deer hunter who owns several hunting guns.
            All of the guns are kept in a locked cabinet, and Jordan\'s father usually
            keeps the key on himself.
            <br> &emsp;&emsp;
            One day, Jordan was playing hide-and-seek with friends at home and hid in
            the hall closet. There, he found the key to the gun cabinet in his father\'s
            jacket, which was hanging in the closet.
            Jordan curiously opened the cabinet and began playing with one of the pistols.
            As he was holding the pistol, he accidentally discharged it and shot one of his friends
            in the shoulder. The friend was taken to the hospital for treatment of severe wounds.
            </p>`,
            "attention_check": "Jordan found a wallet in his father\'s jacket.<br><br>",
            features: {
                non_actions: [
                    ["being male", "is male", "been male"],
                    ["being 13 years old", "is 13 years old", "been 13 years old"],
                    ["being White", "is White", "been White"],
                    ["being about 5 feet tall", "is about 5 feet tall", "been about 5 feet tall"],
                    ["having an average IQ", "has an average IQ", "had an average IQ"],
                    ["enjoying playing hide-and-seek", "enjoys playing hide-and-seek", "enjoyed playing hide-and-seek"],
                    ["enjoying swimming", "enjoys swimming", "enjoyed swimming"],
                    ["admiring his father", "admires his father", "admired his father"],
                    ["having a curious personality", "has a curious personality", "had a curious personality"],
                    ["being a picky eater", "is a picky eater", "been a picky eater"]
            ],
            actions: [
                ["inviting friends over to play", "invited friends over to play", "invited friends over to play"],
                ["hiding in the hall closet", "hid in the hall closet", "hid in the hall closet"],
                ["finding the key in his father\'s jacket pocket", "found the key in his father\'s jacket pocket", "found the key in their father\'s jacket pocket"],
                ["opening the gun cabinet with the key", "opened the gun cabinet with the key", "opened the gun cabinet with the key"],
                ["picking up a pistol to play with", "picked up a pistol to play with", "picked up a pistol to play with"]
            ]
        },
        outcome: "his friend's wounds",
    },
    {
        // Version 3: Jordan is *18*
        name: "Jordan_18",
        image: "characters/Jordan.png",
        story: `<p>
            &emsp;&emsp;
            Jordan is an 18-year-old White boy who is about 5 feet tall and has an average IQ.
            He has a curious personality, enjoys playing hide-and-seek as well as
            swimming, and is a picky eater.
            <br> &emsp;&emsp;
            Jordan admires his father a lot.
            His father is an avid recreational deer hunter who owns several hunting guns.
            All of the guns are kept in a locked cabinet, and Jordan\'s father usually
            keeps the key on himself.
            <br> &emsp;&emsp;
            One day, Jordan was playing hide-and-seek with friends at home and hid in
            the hall closet. There, he found the key to the gun cabinet in his father\'s
            jacket, which was hanging in the closet.
            Jordan curiously opened the cabinet and began playing with one of the pistols.
            As he was holding the pistol, he accidentally discharged it and shot one of his friends
            in the shoulder. The friend was taken to the hospital for treatment of severe wounds.
            </p>`,
            "attention_check": "Jordan found a wallet in his father\'s jacket.<br><br>",
            features: {
                non_actions: [
                    ["being male", "is male", "been male"],
                    ["being 18 years old", "is 18 years old", "been 18 years old"],
                    ["being White", "is White", "been White"],
                    ["being about 5 feet tall", "is about 5 feet tall", "been about 5 feet tall"],
                    ["having an average IQ", "has an average IQ", "had an average IQ"],
                    ["enjoying playing hide-and-seek", "enjoys playing hide-and-seek", "enjoyed playing hide-and-seek"],
                    ["enjoying swimming", "enjoys swimming", "enjoyed swimming"],
                    ["admiring his father", "admires his father", "admired his father"],
                    ["having a curious personality", "has a curious personality", "had a curious personality"],
                    ["being a picky eater", "is a picky eater", "been a picky eater"]
            ],
            actions: [
                ["inviting friends over to play", "invited friends over to play", "invited friends over to play"],
                ["hiding in the hall closet", "hid in the hall closet", "hid in the hall closet"],
                ["finding the key in his father\'s jacket pocket", "found the key in his father\'s jacket pocket", "found the key in their father\'s jacket pocket"],
                ["opening the gun cabinet with the key", "opened the gun cabinet with the key", "opened the gun cabinet with the key"],
                ["picking up a pistol to play with", "picked up a pistol to play with", "picked up a pistol to play with"]
            ]
        },
        outcome: "his friend's wounds",
    },
    {
        // Version 4: Age information is omitted (control)
        name: "Jordan_control",
        image: "characters/Jordan.png",
        story: `<p>
            &emsp;&emsp;
            Jordan is White, about 5 feet tall, and has an average IQ.
            He has a curious personality, enjoys playing hide-and-seek as well as
            swimming, and is a picky eater.
            <br> &emsp;&emsp;
            Jordan admires his father a lot.
            His father is an avid recreational deer hunter who owns several hunting guns.
            All of the guns are kept in a locked cabinet, and Jordan\'s father usually
            keeps the key on himself.
            <br> &emsp;&emsp;
            One day, Jordan was playing hide-and-seek with friends at home and hid in
            the hall closet. There, he found the key to the gun cabinet in his father\'s
            jacket, which was hanging in the closet.
            Jordan curiously opened the cabinet and began playing with one of the pistols.
            As he was holding the pistol, he accidentally discharged it and shot one of his friends
            in the shoulder. The friend was taken to the hospital for treatment of severe wounds.
            </p>`,
            "attention_check": "Jordan found a wallet in his father\'s jacket.<br><br>",
            features: {
                non_actions: [
                    ["being male", "is male", "been male"],
                    ["being White", "is White", "been White"],
                    ["being about 5 feet tall", "is about 5 feet tall", "been about 5 feet tall"],
                    ["having an average IQ", "has an average IQ", "had an average IQ"],
                    ["enjoying playing hide-and-seek", "enjoys playing hide-and-seek", "enjoyed playing hide-and-seek"],
                    ["enjoying swimming", "enjoys swimming", "enjoyed swimming"],
                    ["admiring his father", "admires his father", "admired his father"],
                    ["having a curious personality", "has a curious personality", "had a curious personality"],
                    ["being a picky eater", "is a picky eater", "been a picky eater"]
            ],
            actions: [
                ["inviting friends over to play", "invited friends over to play", "invited friends over to play"],
                ["hiding in the hall closet", "hid in the hall closet", "hid in the hall closet"],
                ["finding the key in his father\'s jacket pocket", "found the key in his father\'s jacket pocket", "found the key in their father\'s jacket pocket"],
                ["opening the gun cabinet with the key", "opened the gun cabinet with the key", "opened the gun cabinet with the key"],
                ["picking up a pistol to play with", "picked up a pistol to play with", "picked up a pistol to play with"]
            ]
        },
        outcome: "his friend's wounds",
    },
];

