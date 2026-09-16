Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

Object.defineProperty(Object.prototype, 'random', {
    value: function () {
        let key = this.randomkey();
        return [key, this[key]];
    },
    enumerable: false,
});

Object.defineProperty(Object.prototype, 'randomkey', {
    value: function () {
        let keys = Object.keys(this);
        return keys[keys.length * Math.random() << 0];
    },
    enumerable: false,
});

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

var logging = false;
var log = logging ? console.log.bind(window.console) : function () {
};

// Vanilla habitable classes that are not cold worlds (excludes mod-added); volcanic allowed. Used by World Forgers, Cosmic Dawn, etc.
var non_cold_habitable_planet_classes = [
    'pc_desert',
    'pc_arid',
    'pc_savannah',
    'pc_ocean',
    'pc_continental',
    'pc_tropical',
    'pc_volcanic'
];

// All four Legendary Leader origins grant trait_perfected_genes and share its restrictions
var legendary_leader_origins = [
    'origin_legendary_leader',
    'origin_legendary_leader_death',
    'origin_legendary_leader_imperial',
    'origin_legendary_leader_dictatorial'
];

class SecondarySpecies {
    class = '';
    portrait = '';
    planet_class = '';
    name_list = name_lists.random();
    gender = 'not_set';
    traits = [];
    species_name = {
        'key': '',
    };
    species_plural = {
        'key': '',
    };
    species_adjective = {
        'key': '',
    };

    disabled_traits = [];
    trait_picks_left = 0;
    trait_points_left = 0;

    /**
     * @param {array} starting_traits
     * @param {array} disabled_traits
     * @param {int} trait_picks_left
     * @param {int} trait_points_left
     * @param {string} disabled_portrait
     * @param {boolean} force_pick_negative_trait_first
     * @param {array} disabled_archetypes
     * @param {object} options
     * @param {string} planet_class
     */
    constructor(starting_traits, disabled_traits, trait_picks_left, trait_points_left, disabled_portrait, force_pick_negative_trait_first, disabled_archetypes, options, planet_class) {
        this.traits = starting_traits;
        this.options = options;
        this.planet_class = planet_class;

        this.disabled_traits = disabled_traits;
        this.trait_picks_left = trait_picks_left;
        this.trait_points_left = trait_points_left;

        this.set_species(disabled_portrait, disabled_archetypes);
        this.set_traits(force_pick_negative_trait_first);
        this.set_name();

        // Unique property name required for secondary species to avoid conflicts with primary species when formatting for clausewitz
        this.secondary_species_traits = this.traits;

        delete this.traits;
        delete this.disabled_traits;
        delete this.trait_picks_left;
        delete this.trait_points_left;
        delete this.options;
        delete this.planet_class;
    }

    /**
     *
     * @param disabled_portrait
     * @param disabled_archetypes
     */
    set_species(disabled_portrait, disabled_archetypes) {
        let random_species = species.random();
        this.class = random_species[0];
        this.portrait = random_species[1].portraits.random();
        this.gender = this.options.species_gender === 'random' ? genders.random() : this.options.species_gender;

        // Secondary species cannot have the same portrait as the primary species
        this.ensure_different_portrait(disabled_portrait);

        // Never pick disabled archetype
        if (disabled_archetypes.includes(random_species[1].archetype)) {
            this.set_species(disabled_portrait, disabled_archetypes);
        }
    }

    /**
     * @param {boolean} force_pick_negative_trait_first
     */
    set_traits(force_pick_negative_trait_first) {
        let traits_list = traits;

        if (this.class === 'MACHINE') {
            // Secondary species cannot be machine
            log('Does not compute');
        }

        if (this.class === 'LITHOID') {
            // Lithoids have the lithoid trait
            this.traits.push('trait_lithoid');

            // Lithoids have their own traits
            traits_list = lithoid_traits;
        }

        // Create deep copy of traits_list so elements can be deleted without affecting the original list of traits
        traits_list = structuredClone(traits_list);

        // Object prototypes (at start of file) will get copied as attributes; remove them again as they are not valid traits
        delete traits_list['random'];
        delete traits_list['randomkey'];

        // Delete disabled traits from traits_list to speed up the process by preventing selection of trait that is disabled anyway and so require fewer iterations
        for (let i = 0; i < this.disabled_traits.length; i++) {
            delete traits_list[this.disabled_traits[i]];
        }

        // A species takes on the habitability preference of its homeworld, which rules out the
        // traits that preference opposes
        for (const trait_name of planet_class_disabled_traits[this.planet_class] ?? []) {
            delete traits_list[trait_name];
        }

        // chance to pick negative trait
        if (random_percentage_check(50) || force_pick_negative_trait_first) {
            // Picking negatives first reduces the chance of some positives appearing due to being opposites
            // To crank up the chance a bit, chance to pick positive trait before negative
            if (random_percentage_check(50) && !force_pick_negative_trait_first) {
                log('Picking first positive trait');
                this.pick_trait(traits_list, false);
            }

            log('Picking negative trait');
            this.pick_trait(traits_list, true);

            // chance to pick 2 negative traits
            if (random_percentage_check(20)) {
                log('Picking second negative trait');
                this.pick_trait(traits_list, true);
            }
        }

        let i = 0;
        while (this.trait_points_left > 0 && this.trait_picks_left > 0 && i < 100) {
            // Max 100 attempts to find an acceptable trait, prevent theoretical infinite loop
            i++;

            let picked_trait = this.pick_trait(traits_list, false);
            delete traits_list[picked_trait];
        }
    }

    /**
     * @param {object} traits_list
     * @param {boolean} negative_trait
     */
    pick_trait(traits_list, negative_trait) {
        log(' - Picking trait for secondary species');

        // The species may not have more traits than it has picks
        if (this.trait_picks_left <= 0) {
            log(' - No trait picks left');
            return;
        }

        let random_trait = traits_list.random();
        let trait_name = random_trait[0];
        let trait_cost = random_trait[1].cost;
        let trait_no = random_trait[1].no;
        let species_class = random_trait[1].species_class ?? [];
        let allowed_planet_classes = random_trait[1].allowed_planet_classes ?? [];

        log('Checking: ' + trait_name);

        // Some traits require a specific homeworld, such as the Nomads traits requiring an ark
        if (allowed_planet_classes.length > 0 && allowed_planet_classes.includes(this.planet_class) === false) {
            log(' - Trait requires a different homeworld');
            return;
        }

        if ($.inArray(trait_name, this.traits) > -1) {
            log(' - Trait already picked');
            return;
        }

        if ($.inArray(trait_name, this.disabled_traits) > -1) {
            log(' - Trait is disabled');
            return;
        }

        // Want positive trait
        if (trait_cost < 0 && negative_trait === false) {
            log(' - Trait cost below 0, but looking for positive trait');
            return;
        }

        // Want negative trait
        if (trait_cost > 0 && negative_trait === true) {
            log(' - Trait cost above 0, but looking for negative trait');
            return;
        }

        // No money
        if (trait_cost > this.trait_points_left) {
            log(' - Not enough trait points left (' + this.trait_points_left + ' points left, ' + trait_cost + ' required)');
            return;
        }

        // Attempt to spend as many points as possible
        if (
            (this.trait_picks_left === 1 && this.trait_points_left > 1) ||
            (this.trait_picks_left === 2 && this.trait_points_left > 3) ||
            (this.trait_picks_left === 3 && this.trait_points_left > 5)
        ) {
            if (trait_cost < 2) {
                log(' - Picking this trait would leave us with leftover trait points');
                return;
            }
        }

        if (no_requirement_checker(trait_no, this.disabled_traits, 'Trait', 'Traits', 'Disabled traits') === false) {
            return;
        }

        if (no_requirement_checker(trait_no, this.traits, 'Trait', 'Traits', 'Selected traits') === false) {
            return;
        }

        if (yes_requirement_checker(species_class, this.class, 'Species class', 'Species class', 'Species class') === false) {
            return;
        }

        log('Selected trait ' + trait_name + ' cost ' + trait_cost);

        this.traits.push(trait_name);
        this.disabled_traits.push(trait_name);
        this.trait_picks_left--;
        this.trait_points_left -= trait_cost;

        return trait_name;
    }

    set_name() {
        let name = species_names.random();
        if (name.length > 6 && random_percentage_check(40)) {
            let splitAt = random_percentage_check(50) ? 3 : 4;
            name = name.slice(0, splitAt) + " " + name.slice(splitAt).capitalize();
        }

        this.species_name.key = name;
        this.species_plural.key = name + (random_percentage_check(50) ? plurals.random() : '');
        this.species_adjective.key = name + (random_percentage_check(70) ? adjectives.random() : '');
    }

    /**
     * Ensure secondary species portrait is different from primary species
     * @param {string} primary_portrait - The portrait of the primary species
     */
    ensure_different_portrait(primary_portrait) {
        if (this.portrait !== primary_portrait) {
            return;
        }
        // Get the species data for the current class
        let current_species_data = species[this.class];

        // Get all available portraits for this class
        let available_portraits = current_species_data.portraits;

        // Filter out the conflicting portrait
        let valid_portraits = available_portraits.filter(p => p !== primary_portrait);

        // Pick a random valid portrait
        this.portrait = valid_portraits.random();
    }
}

class Empire {
    key = '';
    ship_prefix = '';
    species = {
        gender: 'not_set',
        adjective: '',
        class: '',
        archetype: '',
        name: '',
        name_list: name_lists.random(),
        plural: '',
        portrait: '',
        traits: [],
    };
    name = {
        'key': '',
    };
    adjective = {
        'key': '',
    };
    authority = '';
    government = 'gov_hive_mind'; // Game will reset this to proper government on boot
    //advisor_voice_type   = ''; // Leaving this empty will default to "Based on government"
    is_nomadic = 'no';
    planet_name = '';
    planet_class = planets.random();
    ship_size = ''; // Only nomadic empires have an ark, this is removed again for everyone else
    system_name = '';
    initializer = ''; // Always keep this empty ( = random). Some origins require specific values, keeping it empty allows the game to set the proper value. Some origins may require manual setting.
    graphical_culture = cultures.random(); // Ship graphics
    allowed_cultures = [...cultures]; // Shipsets still usable; civics and origins narrow this down
    allowed_species_classes = []; // Species classes still usable; filled in once the archetype is known
    city_graphical_culture = cultures.random(); // City graphics
    empire_flag = {
        icon: {
            category: '',
            file: '',
        },
        background: {
            category: 'backgrounds',
            file: '',
        },
        colors: [],

    };
    ruler = {
        gender: '',
        name: '',
        portrait: '',
        texture: 0,
        hair: 0,
        clothes: 0,
        ruler_traits: [],
        leader_class: leader_classes.random(),
    };
    spawn_as_fallen = 'yes';
    ignore_portrait_duplication = 'no';
    room = rooms.random();
    spawn_enabled = 'yes';
    ethics = [];
    civics = [];
    origin = '';
    disabled_origins = [];
    disabled_traits = [];
    trait_picks_left = 5;
    trait_points_left = 2;
    civic_points_left = 2;
    ethics_points_left = 3;

    constructor(options) {
        this.options = options;
        this.spawn_enabled = this.options.spawn_enabled;
        this.disabled_origins = this.disabled_origins.concat(this.options.disabled_origins);

        // Metalheads get a fixed set of traits and never balance their trait points, so they
        // cannot afford the 6 point trait this origin forces on them
        if (this.options.generate_genocidal === 'metal') {
            this.disabled_origins.push('origin_evolutionary_predators');
        }

        // Clone authorities array so elements can be safely deleted
        let authorities_list = [...authorities];
        authorities_list = authorities_list.filter(element => !this.options.disabled_authorities.includes(element));
        // Corporates cannot be genocidal, remove them
        if (this.options.generate_genocidal === 'always' && authorities_list.includes('auth_corporate')) {
            authorities_list = authorities_list.filter(authority => authority !== 'auth_corporate');
        }
        if (authorities_list.length === 0) {
            alert('Creating an empire without any authority?\nIs such a thing even possible?\n\nNo it isn\'t! Try enabling at least one authority.');
            return;
        }

        this.set_nomadic();
        this.set_authority(authorities_list);
        this.set_ethics();
        this.determine_species_archetype();
        this.set_allowed_species_classes();
        this.set_civics();
        this.set_species();
        this.set_origin();
        this.set_graphical_culture();
        // INF species cannot start on cold homeworlds (volcanic and other warm classes allowed); same whitelist as World Forgers
        // Nomads live on an ark ship, so no homeworld climate applies to them
        if (this.is_nomadic === 'no' && this.species.class === 'INF' && non_cold_habitable_planet_classes.includes(this.planet_class) === false) {
            this.planet_class = non_cold_habitable_planet_classes.random();
        }
        this.set_traits();
        this.set_empire_flag();
        this.set_ruler();
        this.set_planet_name();
        this.set_system_name();
        this.set_name();
    }

    set_allowed_species_classes() {
        let species_pool = this.species.archetype === 'MACHINE' ? species_machine : species;

        this.allowed_species_classes = Object.entries(species_pool)
            .filter(([, species_data]) => species_data.archetype === this.species.archetype)
            .map(([species_class]) => species_class);
    }

    // Species classes that would remain usable if these requirements were added to the ones collected so far
    remaining_species_classes(required, forbidden) {
        let remaining = this.allowed_species_classes;

        if (required.length > 0) {
            // Requirements can be OR groups, so flatten them before matching
            let required_classes = required.flat();
            remaining = remaining.filter(species_class => required_classes.includes(species_class));
        }

        if (forbidden.length > 0) {
            let forbidden_classes = forbidden.flat();
            remaining = remaining.filter(species_class => forbidden_classes.includes(species_class) === false);
        }

        return remaining;
    }

    // Narrow down the species classes this empire can still use
    restrict_species_classes(required, forbidden) {
        this.allowed_species_classes = this.remaining_species_classes(required, forbidden);
    }

    // Shipsets that would remain usable if these requirements were added to the ones collected so far
    remaining_cultures(required, forbidden) {
        let remaining = this.allowed_cultures;

        if (required.length > 0) {
            remaining = remaining.filter(culture => required.includes(culture));
        }

        if (forbidden.length > 0) {
            remaining = remaining.filter(culture => forbidden.includes(culture) === false);
        }

        return remaining;
    }

    // Narrow down the shipsets this empire can still use
    restrict_cultures(required, forbidden) {
        this.allowed_cultures = this.remaining_cultures(required, forbidden);
    }

    set_graphical_culture() {
        this.graphical_culture = this.allowed_cultures.random();
    }

    set_nomadic() {
        // Metalheads have a fixed setup of their own
        if (this.options.generate_genocidal === 'metal') {
            return;
        }

        if (random_percentage_check(5) === false) {
            return;
        }

        log('Empire is nomadic');
        this.is_nomadic = 'yes';

        // Nomads start on an ark ship rather than a planet
        this.planet_class = 'pc_ark';
        this.ship_size = nomad_ship_sizes.random();
    }

    set_authority(authorities_list) {
        log('Selecting authority');
        // Metalheads has ignores disabled authorities
        if (this.options.generate_genocidal === 'metal') {
            this.authority = random_percentage_check(50) ? 'auth_dictatorial' : 'auth_imperial';
            return;
        }

        // Pick authority
        let random_authority = authorities_list.random();

        log('Selected authority ' + random_authority);
        this.authority = random_authority;

        // Don't mess with ethics chances if hive or machine was picked
        if (this.authority === 'auth_hive_mind' || this.authority === 'auth_machine_intelligence') {
            return;
        }

        // Only mess with ethics chances when not asking for purifiers, as those use different ethics
        if (this.options.generate_genocidal === 'mixed' || this.options.generate_genocidal === 'never') {
            // Egalitarians have stricter requirements which reduces their chance of being generated, give them a boost to make them as likely to appear as other ethics
            if (random_percentage_check(5) && authorities_list.includes('auth_democratic') && authorities_list.includes('auth_oligarchic') && authorities_list.includes('auth_corporate')) {
                this.authority = ['auth_democratic', 'auth_oligarchic', 'auth_corporate'].random();
                this.ethics.push('ethic_egalitarian');
                this.ethics_points_left--;
                return;
            }
            if (random_percentage_check(5) && authorities_list.includes('auth_democratic')) {
                this.authority = 'auth_democratic';
                this.ethics.push('ethic_fanatic_egalitarian');
                this.ethics_points_left = this.ethics_points_left - 2;
                return;
            }

            // Authoritarians have stricter requirements which reduces their chance of being generated, give them a boost to make them as likely to appear as other ethics
            if (random_percentage_check(4) && authorities_list.includes('auth_dictatorial') && authorities_list.includes('auth_imperial') && authorities_list.includes('auth_oligarchic') && authorities_list.includes('auth_corporate')) {
                this.authority = ['auth_dictatorial', 'auth_imperial', 'auth_oligarchic', 'auth_corporate'].random();
                this.ethics.push('ethic_authoritarian');
                this.ethics_points_left--;
                return;
            }
            if (random_percentage_check(4) && authorities_list.includes('auth_dictatorial') && authorities_list.includes('auth_imperial')) {
                this.authority = ['auth_dictatorial', 'auth_imperial'].random();
                this.ethics.push('ethic_fanatic_authoritarian');
                this.ethics_points_left = this.ethics_points_left - 2;
                return;
            }
        }
    }

    set_ethics() {
        // Metalheads require a fixed set of ethics
        if (this.options.generate_genocidal === 'metal') {
            this.ethics.push('ethic_militarist');
            this.ethics.push('ethic_xenophobe');
            this.ethics.push('ethic_materialist');
            return;
        }

        // Hive minds and machines intelligences are always gestalts
        if (this.authority === 'auth_hive_mind' || this.authority === 'auth_machine_intelligence') {
            this.ethics.push('ethic_gestalt_consciousness');

            // Some machine traits are not available for gestalt machines
            this.disabled_traits.push(...machine_gestalt_disabled_traits);
            return;
        }

        // Fanatic Purifiers are always xenophobes and either militarist or spiritualist
        // Fanatic Purifiers are rare by default, so increase their chance by a percentage
        if (this.options.generate_genocidal === 'always' || (this.options.generate_genocidal === 'mixed' && random_percentage_check(3) && this.ethics_points_left === 3)) {
            this.ethics.push('ethic_fanatic_xenophobe');
            this.ethics.push(random_percentage_check(50) ? 'ethic_militarist' : 'ethic_spiritualist');
            return;
        }

        let ethics_list = structuredClone(ethics);

        while (this.ethics_points_left > 0) {
            log('Points left ' + this.ethics_points_left);

            let random_ethic = ethics_list.random();
            let ethic_name = random_ethic[0];
            let ethic_requirements = random_ethic[1];

            if (!ethic_requirements.required_authorities.includes(this.authority)) {
                log('Ethic ' + ethic_name + ' is incompatible with chosen authority ' + this.authority);
                delete ethics_list[ethic_name];
                continue;
            }

            if (this.ethics.includes(ethic_name)) {
                log('Ethic ' + ethic_name + ' is already picked');
                delete ethics_list[ethic_name];
                continue;
            }

            if (this.ethics.some(picked_ethic => ethic_requirements.incompatible_ethics.includes(picked_ethic))) {
                log('Ethic ' + ethic_name + ' is incompatible with existing ethics');
                delete ethics_list[ethic_name];
                continue;
            }

            if (ethic_requirements.cost > this.ethics_points_left) {
                log(ethic_name + ' cost ' + ethic_requirements.cost + ' too high, ' + this.ethics_points_left + ' points left');
                delete ethics_list[ethic_name];
                continue;
            }

            log('Selected ethic ' + ethic_name);
            this.ethics_points_left = this.ethics_points_left - ethic_requirements.cost;
            this.ethics.push(ethic_name);
        }
    }

    determine_species_archetype() {
        log('Determining species archetype');

        // Machine intelligences are always machines
        if (this.authority === 'auth_machine_intelligence') {
            this.species.archetype = 'MACHINE';
            log('Machine intelligence authority -> MACHINE archetype');
            return;
        }

        // Hive minds are always biological (or lithoid, determined later)
        if (this.authority === 'auth_hive_mind') {
            // Default to biological, but can be lithoid
            // We'll determine this randomly with appropriate weighting
            if (random_percentage_check(15)) {
                this.species.archetype = 'LITHOID';
                log('Hive mind -> LITHOID archetype');
            } else {
                this.species.archetype = 'BIOLOGICAL';
                log('Hive mind -> BIOLOGICAL archetype');
            }
            return;
        }

        // For non-gestalt empires, randomly choose archetype
        // Weight: BIOLOGICAL (70%), LITHOID (15%), MACHINE (15%)
        let random_value = Math.random() * 100;
        if (random_value < 70) {
            this.species.archetype = 'BIOLOGICAL';
            log('Random selection -> BIOLOGICAL archetype');
        } else if (random_value < 85) {
            this.species.archetype = 'LITHOID';
            log('Random selection -> LITHOID archetype');
        } else {
            this.species.archetype = 'MACHINE';
            log('Random selection -> MACHINE archetype');
        }
    }

    // Traits forbidden by the empire's ethics apply to every species in the empire, not just
    // to the founder species, so secondary species have to be given the same restrictions
    empire_wide_disabled_traits(disabled_traits) {
        if (this.authority === 'auth_hive_mind' || this.authority === 'auth_machine_intelligence') {
            return disabled_traits.concat(machine_gestalt_disabled_traits);
        }

        return disabled_traits;
    }

    set_civics() {
        let civics_list = structuredClone(civics);
        if (this.authority === 'auth_hive_mind') {
            civics_list = structuredClone(hive_civics);
            // Increase chance of picking genocidal hive, as it's quite rare by default
            if (this.options.generate_genocidal === 'always' || (this.options.generate_genocidal === 'mixed' && random_percentage_check(5))) {
                this.pick_civic('civic_hive_devouring_swarm', civics_list);
            }
        } else if (this.authority === 'auth_machine_intelligence') {
            civics_list = structuredClone(machine_civics);
            // Increase chance of picking genocidal machines, as it's quite rare by default
            if (this.options.generate_genocidal === 'always' || (this.options.generate_genocidal === 'mixed' && random_percentage_check(5))) {
                this.pick_civic('civic_machine_terminator', civics_list);
            }
        } else if (this.authority === 'auth_corporate') {
            civics_list = structuredClone(corporate_civics);
        } else {
            // If specific ethics required by Fanatic Purifiers have been picked, increase chance of picking Fanatic Purifiers
            if (this.ethics.includes('ethic_fanatic_xenophobe') && (this.ethics.includes('ethic_militarist') || this.ethics.includes('ethic_spiritualist'))) {
                if (this.options.generate_genocidal === 'always' || (random_percentage_check(75) && this.options.generate_genocidal !== 'never')) {
                    this.pick_civic('civic_fanatic_purifiers', civics_list);
                }
            }
        }

        // Delete disabled traits from traits_list to speed up the process by preventing selection of trait that is disabled anyway and so require less iterations
        for (let i = 0; i < this.options.disabled_civics.length; i++) {
            delete civics_list[this.options.disabled_civics[i]];
        }

        // Nomad civics and civics that need a settled homeworld are mutually exclusive
        for (const [civic_name, civic] of Object.entries(civics_list)) {
            if (civic.is_nomadic !== null && civic.is_nomadic !== this.is_nomadic) {
                delete civics_list[civic_name];
            }
        }

        // Delete genocidal civics if no genocidal empires are being generated
        if (this.options.generate_genocidal === 'never') {
            delete civics_list['civic_hive_devouring_swarm'];
            delete civics_list['civic_machine_terminator'];
            delete civics_list['civic_fanatic_purifiers'];
        }

        const world_forgers_civics = [
            'civic_world_forgers',
            'civic_corporate_world_forgers',
            'civic_machine_world_forgers',
            'civic_hive_world_forgers'
        ];

        while (this.civic_points_left > 0) {
            let random_civic = civics_list.random();
            let civic_name = random_civic[0];
            let civic_yes = random_civic[1].yes;
            let civic_no = random_civic[1].no;

            log('Checking: ' + civic_name);
            log(civic_yes.ethics);

            if (
                yes_requirement_checker(civic_yes.authorities, [this.authority], 'Authority', 'Authorities', 'Civics') === false
                || yes_requirement_checker(civic_yes.ethics, this.ethics, 'Ethic', 'Ethics', 'Civics') === false
                || yes_requirement_checker(civic_yes.civics, this.civics, 'Civic', 'Civics', 'Civics') === false
                || yes_requirement_checker(civic_yes.species_archetype, [this.species.archetype], 'Species Archetype', 'Species Archetypes', 'Civics') === false
                || no_requirement_checker(civic_no.authorities, this.authority, 'Authority', 'Authorities', 'Civics') === false
                || no_requirement_checker(civic_no.ethics, this.ethics, 'Ethic', 'Ethics', 'Civics') === false
                || no_requirement_checker(civic_no.civics, this.civics, 'Civic', 'Civics', 'Civics') === false
                || no_requirement_checker(civic_no.species_archetype, this.species.archetype, 'Species Archetype', 'Species Archetypes', 'Civics') === false
                || this.remaining_cultures(civic_yes.culture, civic_no.culture).length === 0
                || this.remaining_species_classes(civic_yes.species_class, civic_no.species_class).length === 0
            ) {
                delete civics_list[civic_name];
                continue;
            }

            this.pick_civic(civic_name, civics_list);

            if (civic_name === 'civic_machine_servitor') {
                this.secondary_species = new SecondarySpecies([], this.empire_wide_disabled_traits(['trait_thrifty']), 5, 2, '', false, [], this.options, this.planet_class);
            } else if (civic_name === 'civic_machine_assimilator') {
                this.secondary_species = new SecondarySpecies(['trait_cybernetic'], this.empire_wide_disabled_traits(['trait_thrifty']), 5, 2, '', false, [], this.options, this.planet_class);
            } else if (civic_name === 'civic_hive_bodysnatcher') {
                this.secondary_species = new SecondarySpecies(['trait_organic', 'trait_hive_mind'], this.empire_wide_disabled_traits(['trait_thrifty']), 5, 2, '', false, ['LITHOID', 'MACHINE'], this.options, this.planet_class);
            } else if (civic_name === 'civic_anglers' || civic_name === 'civic_corporate_anglers') {
                this.species.traits.push('trait_aquatic');
                this.trait_picks_left--;
                this.trait_points_left = this.trait_points_left - 2;
                this.planet_class = 'pc_ocean';

                // Cannot select origins which require a non-ocean planet when we have already picked an ocean planet
                this.disabled_origins.push('origin_shattered_ring');
                this.disabled_origins.push('origin_life_seeded');
                this.disabled_origins.push('origin_void_dwellers');
                this.disabled_origins.push('origin_post_apocalyptic');
                this.disabled_origins.push('origin_subterranean');
                this.disabled_origins.push('origin_riftworld');
            } else if (civic_name === 'civic_machine_anglers' || civic_name === 'civic_corporate_machine_anglers') {
                this.species.traits.push('trait_robot_aquatic');
                this.trait_picks_left--;
                this.trait_points_left = this.trait_points_left - 2;
                this.planet_class = 'pc_ocean';

                // Cannot select origins which require a non-ocean planet when we have already picked an ocean planet
                this.disabled_origins.push('origin_shattered_ring');
                this.disabled_origins.push('origin_void_machines');
                this.disabled_origins.push('origin_life_seeded');
                this.disabled_origins.push('origin_post_apocalyptic_machines');
                this.disabled_origins.push('origin_subterranean_machines');
                this.disabled_origins.push('origin_riftworld');
            }

            // World Forgers cannot start on cold; pin to base habitable set (includes volcanic)
            if (world_forgers_civics.includes(civic_name)) {
                if (non_cold_habitable_planet_classes.includes(this.planet_class) === false) {
                    this.planet_class = non_cold_habitable_planet_classes.random();
                }
            }

            // Tankbound civics add the tankbound trait and its incompatibilities
            if (civic_name === 'civic_tankbound' || civic_name === 'civic_tankbound_corporate') {
                this.species.traits.push('trait_tankbound');
                this.disabled_traits.push('trait_weak');
                this.disabled_traits.push('trait_hollow_bones');
            }

            // Some civics require or forbid specific shipsets and species classes
            this.restrict_cultures(civic_yes.culture, civic_no.culture);
            this.restrict_species_classes(civic_yes.species_class, civic_no.species_class);
        }
    }

    pick_civic(civic_name, civics_list) {
        this.civic_points_left--;
        this.civics.push(civic_name);
        delete civics_list[civic_name];
    }

    set_species() {
        // Machine intelligences are always machines
        if (this.authority === 'auth_machine_intelligence') {
            this.species.class = 'MACHINE';
            this.species.archetype = 'MACHINE';
            this.species.portrait = species_machine.MACHINE.portraits.random();
            return;
        }

        // Individual machines are always machines
        if (individualistic_machines.some(civic => this.civics.includes(civic))) {
            this.species.class = 'MACHINE';
            this.species.archetype = 'MACHINE';
            this.species.portrait = species_machine.MACHINE.portraits.random();
            return;
        }

        this.species.gender = this.options.species_gender === 'random' ? genders.random() : this.options.species_gender;

        // Tankbound species are vat grown and only use the matching portraits
        const tankbound_portraits = {
            'AQUATIC': 'psionic_07',
            'TOX': 'tox13',
            'NECROID': 'nec9',
            'INF': 'inf4',
        };

        let is_tankbound = this.civics.includes('civic_tankbound') || this.civics.includes('civic_tankbound_corporate');
        let tankbound_classes = Object.keys(tankbound_portraits).filter(species_class => this.allowed_species_classes.includes(species_class));

        if (is_tankbound && tankbound_classes.length > 0) {
            this.species.archetype = 'BIOLOGICAL';
            this.species.class = tankbound_classes.random();
            this.species.portrait = tankbound_portraits[this.species.class];
        } else {
            // Filter species by the classes the picked civics left available
            let available_species = {};
            let species_pool = this.species.archetype === 'MACHINE' ? species_machine : species;

            for (let [species_class, species_data] of Object.entries(species_pool)) {
                if (this.allowed_species_classes.includes(species_class)) {
                    available_species[species_class] = species_data;
                }
            }

            let random_species = available_species.random();
            this.species.class = random_species[0];
            this.species.portrait = random_species[1].portraits.random();
            // Archetype was already set in determine_species_archetype(), but we confirm it here
            this.species.archetype = random_species[1].archetype;
        }

        // Secondary species may not use same portrait as primary species
        if (typeof this.secondary_species !== 'undefined') {
            this.secondary_species.ensure_different_portrait(this.species.portrait);
        }
    }

    set_origin() {
        // Nomads can pick both from the 4 origins of their own and from the origins that carry
        // no nomad restriction. Decide up front which of the two groups to use, otherwise the
        // handful of nomad origins would be drowned out by the much larger unrestricted group
        const nomad_origin_group = random_percentage_check(50) ? 'yes' : null;

        while (this.origin === '') {
            let origins_list = structuredClone(origins);
            let random_origin = origins_list.random();
            let origin_name = random_origin[0];
            let origin_yes = random_origin[1].yes;
            let origin_no = random_origin[1].no;
            let origin_nomadic = random_origin[1].is_nomadic;

            if (this.disabled_origins.includes(origin_name)) {
                log(origin_name + ' is disabled');
                continue;
            }

            if (this.is_nomadic === 'yes') {
                if (origin_nomadic !== nomad_origin_group) {
                    log(origin_name + ' is not part of the selected nomad origin group');
                    continue;
                }
            } else if (origin_nomadic === 'yes') {
                log(origin_name + ' requires a nomadic empire');
                continue;
            }

            if (yes_requirement_checker(origin_yes.authorities, [this.authority], 'Authority', 'Authorities', 'Origins') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.ethics, this.ethics, 'Ethic', 'Ethics', 'Origins') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.civics, this.civics, 'Civic', 'Civics', 'Origins') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.species_archetype, [this.species.archetype], 'Species archetype', 'Species archetypes', 'Species') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.species_class, [this.species.class], 'Species class', 'Species classes', 'Species') === false) {
                continue;
            }

            if (no_requirement_checker(origin_no.authorities, [this.authority], 'Authority', 'Authorities', 'Origins') === false) {
                continue;
            }
            if (no_requirement_checker(origin_no.ethics, this.ethics, 'Ethic', 'Ethics', 'Origins') === false) {
                continue;
            }
            if (no_requirement_checker(origin_no.civics, this.civics, 'Civic', 'Civics', 'Origins') === false) {
                continue;
            }
            if (no_requirement_checker(origin_no.species_archetype, [this.species.archetype], 'Species archetype', 'Species archetypes', 'Species') === false) {
                continue;
            }
            if (no_requirement_checker(origin_no.species_class, [this.species.class], 'Species class', 'Species classes', 'Species') === false) {
                continue;
            }

            if (this.remaining_cultures(origin_yes.culture, origin_no.culture).length === 0) {
                log(origin_name + ' leaves no shipset that the picked civics allow');
                continue;
            }

            // Legendary leader is indirectly incompatible with egalitarian ethics in-game (cannot select an Authority that is egalitarian)
            let has_egalitarian_ethic = this.ethics.includes('ethic_egalitarian') || this.ethics.includes('ethic_fanatic_egalitarian');
            if (legendary_leader_origins.includes(origin_name) && has_egalitarian_ethic) {
                log(origin_name + ' is incompatible with egalitarian ethics (game rule)');
                continue;
            }

            // Check if origin has very few requirements
            let has_no_requirements = (
                origin_yes.authorities.length === 0
                 && origin_yes.civics.length === 0
                 && origin_yes.ethics.length === 0
                 && origin_yes.culture.length === 0
                 && origin_yes.species_class.length === 0
                 && origin_name !== 'origin_lithoid'
            );

            // Select a different origin to avoid generating to many origins with few requirements
            // Origins with requirements are much more unlikely to be selected
            // Just an ethics requirement reduces chances by like 90% or more
            // When selecting an origin with few requirements, add a large chance to try again to balance this out
            if (has_no_requirements && random_percentage_check(85)) {
                log('Origin ' + origin_name + ' has few requirements, starting over');
                continue;
            }

            // Legendary leader is technically the same origin; reduce chances
            if (['origin_legendary_leader_death', 'origin_legendary_leader_imperial', 'origin_legendary_leader_dictatorial'].includes(origin_name) && random_percentage_check(50)) {
                log('Origin ' + origin_name + ' picked, starting over');
                continue;
            }

            // AI doesn't handle doomsday well; reduce chances
            if (origin_name === 'origin_doomsday' && random_percentage_check(66)) {
                log('Origin ' + origin_name + ' picked, starting over');
                continue;
            }

            log('Selected origin ' + origin_name);
            this.origin = origin_name;

            // Some origins require or forbid specific shipsets
            this.restrict_cultures(origin_yes.culture, origin_no.culture);

            // Origins force-add traits of their own, which rules out the traits those oppose
            this.disabled_traits.push(...origin_no.traits);

            if (this.origin === 'origin_red_giant') {
                this.planet_class = 'pc_tropical';
                this.initializer = 'red_giant_start';
            }

            // These origins start on an ocean world and grant an aquatic trait, which the game
            // only allows on an ocean homeworld
            if (this.origin === 'origin_ocean_paradise' || this.origin === 'origin_ocean_machines') {
                this.planet_class = 'pc_ocean';
            }

            // Cosmic Dawn cannot start on cold or mod-added worlds (same allowed set as World Forgers)
            if (this.origin === 'origin_cosmic_dawn') {
                if (non_cold_habitable_planet_classes.includes(this.planet_class) === false) {
                    this.planet_class = non_cold_habitable_planet_classes.random();
                }
            }

            if (this.origin === 'origin_necrophage') {
                let necrophage_disabled_traits = ['trait_thrifty'];
                // Additional traits incompatible with necrophage hive minds
                if (this.authority === 'auth_hive_mind') {
                    necrophage_disabled_traits.push(
                        'trait_conformists',
                        'trait_deviants',
                        'trait_decadent',
                        'trait_conservational',
                        'trait_wasteful',
                        'trait_familial'
                    )
                }

                this.secondary_species = new SecondarySpecies([], this.empire_wide_disabled_traits(necrophage_disabled_traits), 5, 2, this.species.portrait, false, ['MACHINE'], this.options, this.planet_class);
                return;
            }

            if (this.origin === 'origin_syncretic_evolution') {
                this.secondary_species = new SecondarySpecies(['trait_syncretic_proles'], this.empire_wide_disabled_traits(syncretic_disabled_traits), 4, 1, this.species.portrait, true, ['MACHINE'], this.options, this.planet_class);
                return;
            }

            // Nomads on a forever cruise picked up passengers along the way
            if (this.origin === 'origin_forever_cruise') {
                this.secondary_species = new SecondarySpecies([], this.empire_wide_disabled_traits([]), 5, 2, this.species.portrait, false, ['MACHINE'], this.options, this.planet_class);
                return;
            }
        }
    }

    set_traits() {
        // Generate metalheads
        if (this.options.generate_genocidal === 'metal') {
            // Extra traits based on origin
            this.push_special_traits();

            if (this.species.class === 'MACHINE') {
                // Metalhead machines get a separate set of traits
                this.species.traits.push('trait_machine_unit');
                this.species.traits.push('trait_robot_history_warbot');
                this.species.traits.push('trait_robot_power_drills');

                // Aquatic trait costs 2, add an extra negative trait to balance the cost
                if (this.species.traits.includes('trait_robot_aquatic')) {
                    this.species.traits.push(random_percentage_check(50) ? 'trait_robot_high_bandwidth' : 'trait_robot_luxurious');
                }

                // Pick a negative trait to offset power drills cost
                this.pick_trait(machine_traits, true, false);
            } else {
                this.species.traits.push('trait_strong');
                this.species.traits.push('trait_industrious');
                this.species.traits.push(random_percentage_check(50) ? 'trait_deviants' : 'trait_solitary');

                // Aquatic trait costs 2, add an extra negative trait to balance the cost
                if (this.species.traits.includes('trait_aquatic')) {
                    this.species.traits.push(random_percentage_check(50) ? 'trait_unruly' : 'trait_repugnant');
                }

                if (this.species.class === 'LITHOID') {
                    // Lithoids have the lithoid trait, even if they are metalheads
                    this.species.traits.push('trait_lithoid');
                }
            }

            return;
        }

        let traits_list = traits;
        let picked_negative_trait_for_overtuned = false;

        // Aquatic trait for ocean worlds
        if (this.planet_class === 'pc_ocean' && (this.species.class === 'AQUATIC' || this.species.class === 'MOL' || this.species.class === 'HUM' || this.species.class === 'MAM' || this.species.class === 'LITHOID')) {
            traits_list = {...traits_list, ...ocean_traits};
        }

        if (this.species.class === 'MACHINE') {
            // Machines have their own traits
            traits_list = machine_traits;

            // Aquatic machines is a possibility
            if (this.planet_class === 'pc_ocean') {
                traits_list = {...traits_list, ...machine_ocean_traits};
            }

            // Machines start with one fewer trait point
            this.trait_points_left--;

            // Machines have the machine trait
            this.species.traits.push('trait_machine_unit');

            // Machines get a free background trait
            this.species.traits.push(machine_background_traits.random());
        }

        if (this.species.class === 'LITHOID') {
            // Lithoids have the lithoid trait
            this.species.traits.push('trait_lithoid');

            // Lithoids have their own traits
            traits_list = lithoid_traits;
        }

        if (this.authority === 'auth_hive_mind') {
            // Hives have the hive trait
            this.species.traits.push('trait_hive_mind');

            // Hives do not have their own traits, but have incompatibilities
            this.disabled_traits.push('trait_conformists');
            this.disabled_traits.push('trait_deviants');
            this.disabled_traits.push('trait_decadent');
            this.disabled_traits.push('trait_conservational');
            this.disabled_traits.push('trait_wasteful');
            this.disabled_traits.push('trait_familial');
        }

        // Cyborg traits come with the Unplugged origin or the Augmentation Bazaars civic; each
        // one still states which of the two it needs, so the list is filtered again when picking
        if (this.origin === 'origin_unplugged' || this.civics.includes('civic_augmentation_bazaars')) {
            traits_list = {...traits_list, ...cyborg_traits};
        }

        if (this.origin === 'origin_overtuned') {
            let overtuned_traits_list = overtuned_traits;

            // Always pick at least one overtuned trait when generating overtuned
            // Allow going negative on trait points; some overtuned traits cost 3
            this.pick_trait(overtuned_traits_list, false, true);
            // Prevent picking extra negative traits later on
            picked_negative_trait_for_overtuned = true;

            // Pick negative trait to balance possible 3-cost trait picked earlier
            if (this.trait_points_left < 0) {
                // Going negative is still allowed at this point; no negative traits cost -3
                this.pick_trait(traits_list, true, true);

                // Still negative? Make sure we break even or go back to positive
                if (this.trait_points_left < 0) {
                    this.pick_trait(traits_list, true, false);
                }
            }

            // Give chance to pick more overtuned traits
            traits_list = {...traits_list, ...overtuned_traits_list};
        }

        // Extra traits based on origin
        this.push_special_traits();

        // No point in continuing if we can't pick traits anyway
        if (this.trait_picks_left === 0) {
            return;
        }

        traits_list = structuredClone(traits_list);
        // Delete disabled traits from traits_list to speed up the process by preventing selection of trait that is disabled anyway and so require less iterations
        for (let i = 0; i < this.disabled_traits.length; i++) {
            delete traits_list[this.disabled_traits[i]];
        }

        // A species takes on the habitability preference of its homeworld, which rules out the
        // traits that preference opposes (nomads on an ark cannot be sedentary, for instance).
        // Dropped from the list rather than disabled, as disabling also rules out their opposites
        for (const trait_name of planet_class_disabled_traits[this.planet_class] ?? []) {
            delete traits_list[trait_name];
        }

        // If we ended up negative somehow (Malleable Genes?), pick negative traits to get back to 0
        // Max 100 attempts, prevent infinite loop if no negative trait can balance the books
        let negative_attempts = 0;
        while (this.trait_points_left < 0 && this.trait_picks_left > 0 && negative_attempts < 100) {
            negative_attempts++;
            this.pick_trait(traits_list, true, true);
        }

        // chance to pick negative trait
        if (random_percentage_check(50) && picked_negative_trait_for_overtuned === false) {
            // Picking negatives first reduces the chance of some positives appearing due to being opposites
            // To crank up the chance a bit, chance to pick positive trait before negative
            if (random_percentage_check(50)) {
                log('Picking first positive trait');
                this.pick_trait(traits_list, false, false);
            }

            log('Picking negative trait');
            this.pick_trait(traits_list, true, false);

            // chance to pick 2 negative traits
            if (random_percentage_check(20)) {
                log('Picking second negative trait');
                this.pick_trait(traits_list, true, false);
            }
        }

        // Max 100 attempts to find an acceptable traits, prevent infinite loop if no valid option can ever be picked
        let i = 0;
        while (this.trait_points_left > 0 && this.trait_picks_left > 0 && i < 100) {
            log('Picking loop positive trait');
            i++;
            let picked_trait = this.pick_trait(traits_list, false, false);
            delete traits_list[picked_trait];
        }
    }

    push_special_traits() {
        // Stargazers get to be stargazers
        if (this.civics.includes('civic_hive_stargazers')) {
            this.species.traits.push('trait_stargazer');
        }

        // Storm callers get to the "Storm Touched" trait
        if (this.civics.includes('civic_storm_callers') || this.civics.includes('civic_storm_callers_megacorp')) {
            this.species.traits.push('trait_storm_touched');
        }

        // Legendary leaders always get their own trait
        if (legendary_leader_origins.includes(this.origin)) {
            // The trait itself is free; the traits it rules out come from the origin definition
            this.species.traits.push('trait_perfected_genes');
            this.trait_picks_left--;
        }

        // These origins force their own planet type, but Aquatic requires Ocean planet
        if (this.origin === 'origin_shattered_ring' || this.origin === 'origin_life_seeded') {
            this.disabled_traits.push('trait_aquatic');
            this.disabled_traits.push('trait_robot_aquatic');
        }

        if (this.origin === 'origin_post_apocalyptic') {
            this.disabled_traits.push('trait_aquatic');
            this.disabled_traits.push('trait_robot_aquatic');
            this.species.traits.push('trait_survivor');
            return;
        }

        if (this.origin === 'origin_post_apocalyptic_machines') {
            this.disabled_traits.push('trait_robot_aquatic');
            this.species.traits.push('trait_robot_survivor');
            return;
        }

        if (this.origin === 'origin_void_dwellers') {
            this.disabled_traits.push('trait_aquatic');
            this.disabled_traits.push('trait_robot_aquatic');
            this.species.traits.push('trait_void_dweller_1');
            return;
        }

        if (this.origin === 'origin_void_machines') {
            this.disabled_traits.push('trait_robot_aquatic');
            this.species.traits.push('trait_void_dweller_2');
            return;
        }

        if (this.origin === 'origin_clone_army') {
            this.species.traits.push('trait_clone_soldier_infertile');
            return;
        }

        if (this.origin === 'origin_subterranean') {
            this.disabled_traits.push('trait_aquatic');
            this.species.traits.push('trait_cave_dweller');
            return;
        }

        if (this.origin === 'origin_subterranean_machines') {
            this.disabled_traits.push('trait_robot_aquatic');
            this.species.traits.push('trait_robot_cave_dweller');
            return;
        }

        if (this.origin === 'origin_shroudwalker_apprentice') {
            this.species.traits.push('trait_latent_psionic');
            return;
        }

        if (this.origin === 'origin_necrophage') {
            this.species.traits.push('trait_necrophage');
            this.disabled_traits.push('trait_plantoid_budding');
            this.disabled_traits.push('trait_humanoid_psychological_infertility');
            return;
        }

        if (this.origin === 'origin_ocean_paradise') {
            // Aquatic could've been added already by angler civic
            if (!this.species.traits.includes('trait_aquatic')) {
                this.species.traits.push('trait_aquatic');
                this.trait_picks_left--;
                this.trait_points_left = this.trait_points_left - 2;
                return;
            }
        }

        if (this.origin === 'origin_ocean_machines') {
            // Aquatic could've been added already by angler civic
            if (!this.species.traits.includes('trait_robot_aquatic')) {
                this.species.traits.push('trait_robot_aquatic');
                this.trait_picks_left--;
                this.trait_points_left = this.trait_points_left - 2;
                return;
            }
        }

        if (this.origin === 'origin_synthetic_fertility') {
            this.species.traits.push('trait_pathogenic_genes');
            this.disabled_traits.push('trait_humanoid_psychological_infertility');
            this.trait_picks_left--;
            this.trait_points_left++;
            return;
        }

        if (this.origin === 'origin_evolutionary_predators') {
            this.species.traits.push('trait_malleable_genes');
            this.trait_points_left = this.trait_points_left - 6;
            return;
        }

        if (this.origin === 'origin_wilderness') {
            this.species.traits.push('trait_wilderness');
            return;
        }
    }

    pick_trait(traits_list, negative_trait, allow_negative) {
        // The species may not have more traits than it has picks
        if (this.trait_picks_left <= 0) {
            log(' - No trait picks left');
            return;
        }

        // Max 100 attempts to find an acceptable trait, prevent infinite loop if no valid option can ever be picked
        let i = 0;
        while (i < 100) {
            i++;
            let random_trait = traits_list.random();
            let trait_name = random_trait[0];
            let trait_cost = random_trait[1].cost;
            let trait_no = random_trait[1].no;
            let species_class = random_trait[1].species_class ?? [];
            let allowed_planet_classes = random_trait[1].allowed_planet_classes ?? [];
            let allowed_origins = random_trait[1].allowed_origins ?? [];
            let allowed_civics = random_trait[1].allowed_civics ?? [];

            log('Checking: ' + trait_name);

            // Some traits require a specific homeworld, such as the Nomads traits requiring an ark
            if (allowed_planet_classes.length > 0 && allowed_planet_classes.includes(this.planet_class) === false) {
                delete traits_list[trait_name];
                log(' - Trait requires a different homeworld');
                continue;
            }

            // Some traits are only offered to empires with a specific origin, such as the cyborg traits
            if (allowed_origins.length > 0 && allowed_origins.includes(this.origin) === false) {
                delete traits_list[trait_name];
                log(' - Trait requires a different origin');
                continue;
            }

            // Some traits are only offered to empires with a specific civic
            if (allowed_civics.length > 0 && allowed_civics.some(civic => this.civics.includes(civic)) === false) {
                delete traits_list[trait_name];
                log(' - Trait requires a civic this empire does not have');
                continue;
            }

            if (this.species.traits.includes(trait_name)) {
                delete traits_list[trait_name];
                log(' - Trait already picked');
                continue;
            }

            if (this.disabled_traits.includes(trait_name)) {
                delete traits_list[trait_name];
                log(' - Trait is disabled');
                continue;
            }

            // Want positive trait
            if (trait_cost < 0 && negative_trait === false) {
                log(' - Trait cost below 0, but looking for positive trait');
                continue;
            }

            // Want negative trait
            if (trait_cost > 0 && negative_trait === true) {
                log(' - Trait cost above 0, but looking for negative trait');
                continue;
            }

            // No money
            if (trait_cost > this.trait_points_left && allow_negative === false) {
                log(' - Not enough trait points left (' + this.trait_points_left + ' points left, ' + trait_cost + ' required)');
                continue;
            }

            // Attempt to spend as many points as possible
            if (
                (this.trait_picks_left === 1 && this.trait_points_left > 1) ||
                (this.trait_picks_left === 2 && this.trait_points_left > 3) ||
                (this.trait_picks_left === 3 && this.trait_points_left > 5)
            ) {
                if (trait_cost < 2) {
                    log(' - Picking this trait would leave us with leftover trait points');
                    continue;
                }
            }

            // Massively negative trait points (Malleable Genes most likely); a negative trait is
            // worth at most 2 points, so only accept this one if the remaining picks can still
            // bring the total back to 0
            if (negative_trait && (this.trait_points_left - trait_cost) < -2 * (this.trait_picks_left - 1)) {
                log(' - Too cheap to get back to 0 trait points with the picks left');
                continue;
            }

            if (no_requirement_checker(trait_no, this.disabled_traits, 'Trait', 'Traits', 'Disabled traits') === false) {
                continue;
            }

            if (no_requirement_checker(trait_no, this.species.traits, 'Trait', 'Traits', 'Selected traits') === false) {
                continue;
            }

            if (yes_requirement_checker(species_class, this.species.class, 'Species class', 'Species class', 'Species class') === false) {
                return;
            }

            // Check if trait has modifiers and apply them based on current origin
            if (random_trait[1].modifiers) {
                for (let modifier_origin in random_trait[1].modifiers) {
                    if (modifier_origin === this.origin) {
                        let modifier_value = random_trait[1].modifiers[modifier_origin];
                        // Modifiers are (negative) values applied to the trait cost
                        trait_cost += modifier_value;
                    }
                }
            }

            log('Selected trait ' + trait_name + ' cost ' + trait_cost);

            this.species.traits.push(trait_name);
            this.disabled_traits.push(trait_name);
            this.trait_picks_left--;
            this.trait_points_left -= trait_cost;

            return trait_name;
        }
    }

    set_empire_flag() {
        let flag = flags.random();

        this.empire_flag.icon.category = flag[0];
        this.empire_flag.icon.file = flag[1].random();

        this.empire_flag.background.file = backgrounds.random();

        this.empire_flag.colors.push(colors.random());
        this.empire_flag.colors.push(colors.random());
        this.empire_flag.colors.push('null');
        this.empire_flag.colors.push('null');
    }

    set_ruler() {
        this.ruler.gender = this.species.gender;
        if (this.ruler.gender === 'not_set' || this.ruler.gender === 'indeterminable') {
            this.ruler.gender = random_percentage_check(50) ? 'female' : 'male';
        }

        this.ruler.name = leader_names[this.ruler.gender].random();
        this.ruler.portrait = this.species.portrait;
        this.ruler.texture = 0;
        this.ruler.hair = 0;
        this.ruler.clothes = 0;

        // Paragon leaders cannot pick normal ruler traits, and normal rulers cannot pick paragon traits
        if (this.origin === 'origin_legendary_leader') {
            // Pick negative trait sometimes
            if (random_percentage_check(75)) {
                this.pick_ruler_trait(bad_paragon_traits);
                this.pick_ruler_trait(paragon_traits);
            }
            this.pick_ruler_trait(paragon_traits);
        }
        // Treasure hunters have their own ruler traits
        else if (this.origin === 'origin_treasure_hunters') {
            this.pick_ruler_trait(treasure_hunter_traits);
        } else {
            this.pick_ruler_trait(leader_traits);
        }
    }

    pick_ruler_trait(traits_list) {
        let i = 0;
        // Max 100 attempts to find an acceptable trait, prevent theoretical infinite loop
        while (i < 100) {
            i++;
            let random_trait = traits_list.random();
            let trait_name = random_trait[0];
            let trait_yes = random_trait[1].yes;

            log('Checking: ' + trait_name);

            if (trait_yes.class.includes(this.ruler.leader_class) === false) {
                log(' - Ruler is not of right type');
                continue;
            }

            if (this.ruler.ruler_traits.includes(trait_name)) {
                log(' - Trait already picked');
                continue;
            }

            if (yes_requirement_checker(trait_yes.ethics, this.ethics, 'Ethic', 'Ethics', 'Ruler trait') === false) {
                continue;
            }

            this.ruler.ruler_traits.push(trait_name);
            return;
        }
    }

    set_name() {
        let name = species_names.random();
        if (name.length > 6 && random_percentage_check(40)) {
            let splitAt = random_percentage_check(50) ? 3 : 4;
            name = name.slice(0, splitAt) + " " + name.slice(splitAt).capitalize();
        }
        let plural = name + (random_percentage_check(50) ? plurals.random() : '');
        let adjective = name + (random_percentage_check(70) ? adjectives.random() : '');
        let empire_name = '';
        let first_prefix = '';

        while (empire_name === '') {
            // Format 1, 25% chance
            if (random_percentage_check(25)) {
                // Exploratory Congress of Conphell
                // Preeminent Star Federation of Bakan
                // Interstellar Military Union of Verk
                // .. etc
                empire_name += (random_percentage_check(50) ? prefix.random() + ' ' : '')
                    + modifier.random() + ' '
                    + suffix.random()
                    + ' of ' + (random_percentage_check(50) ? this.planet_name : this.system_name);

                continue;
            }

            // Format 2, 25% chance
            if (random_percentage_check(33)) {
                // Virtuous Momyarus Territories
                // Last Strogozii Trading Initiative
                // Divine Preeminent Icolopsan Commercial Lords
                // .. etc
                first_prefix = prefix.random();
                empire_name += first_prefix + ' ';

                // chance for second prefix
                if (random_percentage_check(10)) {
                    let second_prefix = prefix.random();
                    if (first_prefix !== second_prefix) {
                        empire_name += second_prefix + ' ';
                    }
                }

                empire_name += (random_percentage_check(50) ? name : adjective) + ' '
                    + (random_percentage_check(10) ? modifier.random() + ' ' : '')
                    + suffix.random();
                continue;
            }

            // Format 3, 40% chance
            if (random_percentage_check(80)) {
                // Vadbakian Confederation
                // Darnainghasan Star Nation
                // Corrupted Fonckian Military Conclave
                // .. etc
                empire_name += (random_percentage_check(50) ? prefix.random() + ' ' : '')
                    + adjective + ' '
                    + (random_percentage_check(10) ? modifier.random() + ' ' : '')
                    + suffix.random();
                continue;
            }

            // Format 4, 10% chance
            // Lidcirian Dominions
            // Vezganeth Technocracy
            empire_name += (random_percentage_check(50) ? name : adjective) + ' '
                + suffix.random();
        }

        this.name.key = empire_name;
        this.adjective.key = adjective;
        this.species.name = name;
        this.species.plural = plural;
        this.species.adjective = adjective;
        this.key = empire_name;

        log('Empire name ' + empire_name);
    }

    set_planet_name() {
        let planet_name = '';
        let has_prefix = false;

        if (random_percentage_check(10)) {
            has_prefix = true;
            planet_name = planet_fixes.random() + (random_percentage_check(50) ? '-' : ' ');
        }

        planet_name += planet_names.random();

        if (has_prefix === false && random_percentage_check(11)) {
            planet_name += (random_percentage_check(50) ? '-' : ' ') + planet_fixes.random();
        }

        this.planet_name = planet_name;
    }

    set_system_name() {
        this.system_name = system_names.random();
    }

    // Convert JS object to Clausewitz Engine-style notation
    clausewitzify() {
        let traits_string = '';
        for (let i = 0; i < this.species.traits.length; i++) {
            traits_string += 'trait="' + this.species.traits[i] + '"\r\n';
        }
        // Remove the last newline
        traits_string = traits_string.substring(0, traits_string.length - 2);
        this.species.traits = '';

        let secondary_species_traits_string = '';
        if (typeof this.secondary_species !== 'undefined') {
            for (let i = 0; i < this.secondary_species.secondary_species_traits.length; i++) {
                secondary_species_traits_string += 'trait="' + this.secondary_species.secondary_species_traits[i] + '"\r\n';
            }
            // Remove the last newline
            secondary_species_traits_string = secondary_species_traits_string.substring(0, secondary_species_traits_string.length - 2);
            this.secondary_species.secondary_species_traits = '';
        }

        let ruler_traits_string = '';
        for (let i = 0; i < this.ruler.ruler_traits.length; i++) {
            ruler_traits_string += 'trait="' + this.ruler.ruler_traits[i] + '"\r\n';
        }
        // Remove the last newline
        ruler_traits_string = ruler_traits_string.substring(0, ruler_traits_string.length - 2);
        this.ruler.ruler_traits = '';

        let ethics_string = '';
        for (let i = 0; i < this.ethics.length; i++) {
            ethics_string += 'ethic="' + this.ethics[i] + '"\r\n';
        }
        // Remove the last newline
        ethics_string = ethics_string.substring(0, ethics_string.length - 2);
        this.ethics = '';

        // Civics use an array
        let civics_string = '';
        for (let i = 0; i < this.civics.length; i++) {
            civics_string += '"' + this.civics[i] + '"\r\n';
        }
        this.civics = '';

        // Empire flag colors use an array
        let empire_flag_colors_string = '';
        for (let i = 0; i < this.empire_flag.colors.length; i++) {
            empire_flag_colors_string += '"' + this.empire_flag.colors[i] + '"\r\n';
        }
        this.empire_flag.colors = '';

        // Only nomadic empires have an ark
        if (this.is_nomadic === 'no') {
            delete this.ship_size;
        }

        // Delete remaining values that are not used in the Clausewitz format
        delete this.allowed_cultures;
        delete this.allowed_species_classes;
        delete this.disabled_origins;
        delete this.disabled_traits;
        delete this.trait_picks_left;
        delete this.trait_points_left;
        delete this.civic_points_left;
        delete this.ethics_points_left;
        delete this.species.archetype;
        delete this.options;

        // Convert empire to JSON
        let string = JSON.stringify(this, null, '\r\n');

        // Replace JSON "key->value"-"operator" (what is this called anyway?)
        string = string.replace(/": /g, '=');

        // Strip " from start of lines
        string = string.replace(/^"/g, '');
        // Strip " following newline characters
        string = string.replace(/\r\n"/g, '');

        // Delete newlines
        string = string.replace(/\s*[\r\n]/gm, '');
        // Put newlines after {
        string = string.replace(/{/g, '{\r\n');
        // Put newlines before }
        string = string.replace(/}/g, '\r\n}');

        // Mix the traits back in
        string = string.replace(/traits=""/, traits_string);

        if (typeof this.secondary_species !== 'undefined') {
            string = string.replace(/secondary_species_traits=""/, secondary_species_traits_string);
        }

        string = string.replace(/ruler_traits=""/, ruler_traits_string);

        // Mix the ethics back in
        string = string.replace(/ethics=""/, ethics_string);

        // Mix the civics array back in
        string = string.replace(/civics=""/, 'civics={\r\n' + civics_string + '}');

        // Mix the empire flag colors array back in
        string = string.replace(/colors=""/, 'colors={\r\n' + empire_flag_colors_string + '}');

        // Ruler gender, spawn_as_fallen, ignore_portrait_duplication and spawn_enabled do not use quote despite being strings (??)
        string = string.replace(/gender="female"/g, 'gender=female');
        string = string.replace(/gender="male"/g, 'gender=male');
        string = string.replace(/gender="not_set"/g, 'gender=not_set');
        string = string.replace(/is_nomadic="yes"/, 'is_nomadic=yes');
        string = string.replace(/is_nomadic="no"/, 'is_nomadic=no');
        string = string.replace(/spawn_as_fallen="yes"/, 'spawn_as_fallen=yes');
        string = string.replace(/spawn_as_fallen="no"/, 'spawn_as_fallen=no');
        string = string.replace(/ignore_portrait_duplication="no"/, 'ignore_portrait_duplication=no');
        string = string.replace(/spawn_enabled="yes"/, 'spawn_enabled=yes');
        string = string.replace(/spawn_enabled="no"/, 'spawn_enabled=no');
        string = string.replace(/spawn_enabled="always"/, 'spawn_enabled=always');

        // ,'s to newlines
        string = string.replace(/,/g, '\r\n');

        // NEWLINES
        string = '"' + this.key + '"\r\n=' + string + '\r\n';

        return string;
    }
}

function random_percentage_check(percentage) {
    return Math.floor(Math.random() * 101) < percentage;
}

function yes_requirement_checker(requirements, current_values, singular, plural, check_type) {
    let requirements_met = 0;
    let requirements_count = requirements.length;

    if ($.isArray(requirements[0])) {
        // Array requirements are "AND", so loop through each set
        for (let j = 0; j < requirements.length; j++) {
            // Loop through selected $plural
            for (let k = 0; k < current_values.length; k++) {
                if ($.inArray(current_values[k], requirements[j]) > -1) {
                    log('Chosen ' + singular + ' ' + current_values[k] + ' is in list of required ' + plural);
                    requirements_met++;
                    // Make a set cannot meet multiple requirements on its own
                    break;
                }
            }
        }
    } else {
        // Non-array requirements are "OR", so max. 1 is required
        if (requirements_count > 1) {
            requirements_count = 1;
        }

        if ($.isArray(current_values)) {
            for (let k = 0; k < current_values.length; k++) {
                if ($.inArray(current_values[k], requirements) > -1) {
                    log(' - ' + singular + ' ' + current_values[k] + ' is in list of required ' + plural);
                    requirements_met++;
                }
            }
        } else {
            if ($.inArray(current_values, requirements) > -1) {
                log(' - ' + singular + ' ' + current_values + ' is in list of required ' + plural);
                requirements_met++;
            }
        }
    }

    log(check_type + ': ' + plural + ' requirements: ' + (requirements_met >= requirements_count));
    return (requirements_met >= requirements_count);
}

function no_requirement_checker(requirements, current_values, singular, plural, check_type) {
    if ($.isArray(current_values)) {
        for (let k = 0; k < current_values.length; k++) {
            if ($.inArray(current_values[k], requirements) > -1) {
                log(' - ' + singular + ' ' + current_values[k] + ' is in list of forbidden ' + plural);
                return false;
            }
        }
    } else {
        if ($.inArray(current_values, requirements) > -1) {
            log(' - ' + singular + ' ' + current_values + ' is in list of forbidden ' + plural);
            return false;
        }
    }
    log(check_type + ': ' + plural + ' no_requirements met');
    return true;
}
