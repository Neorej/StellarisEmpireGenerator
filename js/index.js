Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

Object.defineProperty(Object.prototype, 'random', {
    value     : function () {
        let key = this.randomkey();
        return [key, this[key]];
    },
    enumerable: false,
});

Object.defineProperty(Object.prototype, 'randomkey', {
    value     : function () {
        let keys = Object.keys(this);
        return keys[keys.length * Math.random() << 0];
    },
    enumerable: false,
});

Object.defineProperty(String.prototype, 'capitalize', {
    value     : function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

var logging = false;
var log     = logging ? console.log.bind(window.console) : function () {
};

class SecondarySpecies {
    class             = '';
    portrait          = '';
    name_list         = 'ART1';
    gender            = 'not_set';
    traits            = [];
    species_name      = {
        'key': '',
    };
    species_plural    = {
        'key': '',
    };
    species_adjective = {
        'key': '',
    };

    disabled_traits   = [];
    trait_picks_left  = 0;
    trait_points_left = 0;

    /**
     * @param {array} starting_traits
     * @param {array} disabled_traits
     * @param {int} trait_picks_left
     * @param {int} trait_points_left
     * @param {string} disabled_portrait
     * @param {boolean} force_pick_negative_trait_first
     */
    constructor(starting_traits, disabled_traits, trait_picks_left, trait_points_left, disabled_portrait, force_pick_negative_trait_first) {
        this.traits = starting_traits;

        this.disabled_traits   = disabled_traits;
        this.trait_picks_left  = trait_picks_left;
        this.trait_points_left = trait_points_left;

        this.set_species(disabled_portrait);
        this.set_traits(force_pick_negative_trait_first);
        this.set_name();

        // Unique property name required for secondary species to avoid conflicts with primary species when formatting for clausewitz
        this.secondary_species_traits = this.traits;

        delete this.traits;
        delete this.disabled_traits;
        delete this.trait_picks_left;
        delete this.trait_points_left;
    }

    /**
     * @param {string} disabled_portrait
     */
    set_species(disabled_portrait) {
        let random_species = species.random();
        this.class         = random_species[0];
        this.portrait      = random_species[1].portraits.random();
        this.gender        = genders.random();

        // Secondary species cannot have the same portrait as the primary species
        if (this.portrait === disabled_portrait) {
            this.set_species(disabled_portrait);
        }
    }

    /**
     * @param {boolean} force_pick_negative_trait_first
     */
    set_traits(force_pick_negative_trait_first) {
        let traits_list = traits;

        // Plants and Fungoids have access to extra traits
        if (this.class === 'PLANT' || this.class === 'FUN') {
            traits_list = {...traits_list, ...plant_traits};
        }

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
        traits_list = $.extend(true, {}, traits_list);
        // Object prototypes (at start of file) will get copied as attributes; remove them again as they are not valid traits
        delete traits_list['random'];
        delete traits_list['randomkey'];

        // Delete disabled traits from traits_list to speed up the process by preventing selection of trait that is disabled anyway and so require less iterations
        for (let i = 0; i < this.disabled_traits.length; i++) {
            delete traits_list[this.disabled_traits[i]];
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
        let random_trait = traits_list.random();
        let trait_name   = random_trait[0];
        let trait_cost   = random_trait[1].cost;
        let trait_no     = random_trait[1].no;

        log('Checking: ' + trait_name);

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

        // Attempt to spend as much points as possible
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
            name        = name.slice(0, splitAt) + " " + name.slice(splitAt).capitalize();
        }

        this.species_name.key      = name;
        this.species_plural.key    = name + (random_percentage_check(50) ? plurals.random() : '');
        this.species_adjective.key = name + (random_percentage_check(70) ? adjectives.random() : '');
    }
}

class Empire {
    key         = '';
    ship_prefix = '';
    species     = {
        gender   : 'not_set',
        adjective: '',
        class    : '',
        name     : '',
        name_list: name_lists.random(),
        plural   : '',
        portrait : '',
        traits   : [],
    };
    name        = {
        'key': '',
    };
    adjective   = {
        'key': '',
    };
    authority   = '';
    government  = 'gov_hive_mind'; // Game will reset this to proper government on boot
    //advisor_voice_type   = ''; // Leaving this empty will default to "Based on government"
    planet_name                 = '';
    planet_class                = planets.random();
    system_name                 = '';
    initializer                 = ''; // Always keep this empty ( = random). Some origins require specific values, keeping it empty allows the game to set the proper value.
    graphical_culture           = cultures.random(); // Ship graphics
    city_graphical_culture      = cultures.random(); // City graphics
    empire_flag                 = {
        icon      : {
            category: '',
            file    : '',
        },
        background: {
            category: 'backgrounds',
            file    : '',
        },
        colors    : [],

    };
    ruler                       = {
        gender      : '',
        name        : '',
        portrait    : '',
        texture     : 0,
        hair        : 0,
        clothes     : 0,
        ruler_traits: [],
        leader_class: leader_classes.random(),
    };
    spawn_as_fallen             = 'yes';
    ignore_portrait_duplication = 'no';
    room                        = rooms.random();
    spawn_enabled               = 'yes';
    ethics                      = [];
    civics                      = [];
    origin                      = '';
    disabled_origins            = [];
    disabled_traits             = [];
    trait_picks_left            = 5;
    trait_points_left           = 2;
    civic_points_left           = 2;
    ethics_points_left          = 3;

    constructor(options) {
        this.options          = options;
        this.spawn_enabled    = this.options.spawn_enabled;
        this.disabled_origins = this.disabled_origins.concat(this.options.disabled_origins);

        // Clone authorities array so elements can be safely deleted
        let authorities_list = [...authorities];
        authorities_list     = authorities_list.filter(element => !this.options.disabled_authorities.includes(element));
        // Corporates cannot be genocidal, remove them
        if (this.options.generate_genocidal === 'always' && authorities_list.includes('auth_corporate')) {
            authorities_list = authorities_list.filter(authority => authority !== 'auth_corporate');
        }
        if (authorities_list.length === 0) {
            alert('Creating an empire without any authority?\nIs such a thing even possible?\n\nNo it isn\'t! Try enabling at least one authority.');
            return;
        }

        this.set_authority(authorities_list);
        this.set_ethics();
        this.set_civics();
        this.set_species();
        this.set_origin();
        this.set_traits();
        this.set_empire_flag();
        this.set_ruler();
        this.set_planet_name();
        this.set_system_name();
        this.set_name();
    }

    set_authority(authorities_list) {
        log('Selecting authority');
        // Metalheads has ignores disabled authorities
        if (this.options.generate_genocidal === 'metal') {
            this.authority = random_percentage_check(50) ? 'auth_dictatorial' : 'auth_imperial';
            return;
        }

        // Only mess with ethics chances when not asking for purifiers, as those use different ethics
        if (this.options.generate_genocidal === 'mixed' || this.options.generate_genocidal === 'never') {
            // Egalitarians have stricter requirements which reduces their chance of being generated, give them a boost to make them as likely to appear as other ethics
            if (this.options.boost_egalitarians) {
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
            }

            // Authoritarians have stricter requirements which reduces their chance of being generated, give them a boost to make them as likely to appear as other ethics
            if (this.options.boost_authoritarians) {
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

        // Pick authority
        let random_authority = authorities_list.random();

        // If egalitarians are boosted democracies become much more common. Rebalance this somewhat
        if (this.options.boost_egalitarians && random_authority === 'auth_democratic' && random_percentage_check(25)) {
            random_authority = authorities_list.random();
        }

        log('Selected authority ' + random_authority);
        this.authority = random_authority;
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

            let random_ethic       = ethics_list.random();
            let ethic_name         = random_ethic[0];
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

        // Delete genocidal civics if no genocidal empires are being generated
        if (this.options.generate_genocidal === 'never') {
            delete civics_list['civic_hive_devouring_swarm'];
            delete civics_list['civic_machine_terminator'];
            delete civics_list['civic_fanatic_purifiers'];
        }

        while (this.civic_points_left > 0) {
            let random_civic = civics_list.random();
            let civic_name   = random_civic[0];
            let civic_yes    = random_civic[1].yes;
            let civic_no     = random_civic[1].no;

            log('Checking: ' + civic_name);
            log(civic_yes.ethics);

            if (
                yes_requirement_checker(civic_yes.authorities, this.authority, 'Authority', 'Authorities', 'Civics') === false
                || yes_requirement_checker(civic_yes.ethics, this.ethics, 'Ethic', 'Ethics', 'Civics') === false
                || yes_requirement_checker(civic_yes.civics, this.civics, 'Civic', 'Civics', 'Civics') === false
                || no_requirement_checker(civic_no.authorities, this.authority, 'Authority', 'Authorities', 'Civics') === false
                || no_requirement_checker(civic_no.ethics, this.ethics, 'Ethic', 'Ethics', 'Civics') === false
                || no_requirement_checker(civic_no.civics, this.civics, 'Civic', 'Civics', 'Civics') === false
            ) {
                delete civics_list[civic_name];
                continue;
            }

            this.pick_civic(civic_name, civics_list);

            if (civic_name === 'civic_machine_servitor') {
                this.secondary_species = new SecondarySpecies([], ['trait_thrifty'], 5, 2, '', false);
            } else if (civic_name === 'civic_machine_assimilator') {
                this.secondary_species = new SecondarySpecies(['trait_cybernetic'], ['trait_thrifty'], 5, 2, '', false);
            } else if (civic_name === 'civic_anglers' || civic_name === 'civic_corporate_anglers') {
                this.species.traits.push('trait_aquatic');
                this.trait_picks_left--;
                this.trait_points_left = this.trait_points_left - 2;
                this.planet_class      = 'pc_ocean';

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
                this.planet_class      = 'pc_ocean';

                // Cannot select origins which require a non-ocean planet when we have already picked an ocean planet
                this.disabled_origins.push('origin_shattered_ring');
                this.disabled_origins.push('origin_void_machines');
                this.disabled_origins.push('origin_post_apocalyptic_machines');
                this.disabled_origins.push('origin_subterranean_machines');
                this.disabled_origins.push('origin_riftworld');
            }
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
            this.species.class    = 'MACHINE';
            this.species.portrait = species_machine.MACHINE.portraits.random();
            return;
        }

        this.species.gender = this.options.species_gender === 'random' ? genders.random() : this.options.species_gender;

        // Idyllic Bloom requires FUN or PLANT
        if (this.civics.includes('civic_idyllic_bloom') || this.civics.includes('civic_hive_idyllic_bloom')) {
            if (random_percentage_check(50)) {
                this.species.class    = 'FUN';
                this.species.portrait = species.FUN.portraits.random();
            } else {
                this.species.class    = 'PLANT';
                this.species.portrait = species.PLANT.portraits.random();
            }
        } else {
            let random_species = species.random();

            // Non-hive minds may also be machines
            if (this.authority !== 'auth_hive_mind') {
                // Except if they have certain civics
                if (!this.civics.some(civic => machine_disabled_civics.includes(civic))) {
                    random_species = {...species, ...species_machine}.random();
                }
            }

            this.species.class    = random_species[0];
            this.species.portrait = random_species[1].portraits.random();
        }

        // Secondary species may not use same portrait as primary species
        if (typeof this.secondary_species !== 'undefined') {
            this.secondary_species.set_species(this.species.portrait);
        }
    }

    set_origin() {
        while (this.origin === '') {
            let origins_list  = structuredClone(origins);
            let random_origin = origins_list.random();
            let origin_name   = random_origin[0];
            let origin_yes    = random_origin[1].yes;
            let origin_no     = random_origin[1].no;

            if (this.disabled_origins.includes(origin_name)) {
                log(origin_name + ' is disabled');
                continue;
            }

            if (origin_name === 'origin_lithoid' && this.species.class !== 'LITHOID') {
                continue;
            }

            if (yes_requirement_checker(origin_yes.authorities, this.authority, 'Authority', 'Authorities', 'Origins') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.ethics, this.ethics, 'Ethic', 'Ethics', 'Origins') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.civics, this.civics, 'Civic', 'Civics', 'Origins') === false) {
                continue;
            }
            if (yes_requirement_checker(origin_yes.species ?? [], this.species.class, 'Species', 'Species', 'Species') === false) {
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
            if (no_requirement_checker(origin_no.species ?? [], this.species.class, 'Species', 'Species', 'Species') === false) {
                continue;
            }


            log('Selected origin ' + origin_name);
            this.origin = origin_name;

            // These origins force their own planet type, but Aquatic requires Ocean planet
            if (origin_name === 'origin_shattered_ring' || origin_name === 'origin_life_seeded') {
                this.disabled_traits.push('trait_aquatic');
            }

            if (origin_name === 'origin_post_apocalyptic') {
                this.disabled_traits.push('trait_aquatic');
                this.species.traits.push('trait_survivor');
                return;
            }

            if (origin_name === 'origin_post_apocalyptic_machines') {
                this.species.traits.push('trait_robot_survivor');
                return;
            }

            if (origin_name === 'origin_void_dwellers') {
                this.disabled_traits.push('trait_aquatic');
                this.species.traits.push('trait_void_dweller_1');
                return;
            }

            if (origin_name === 'origin_void_machines') {
                this.species.traits.push('trait_void_dweller_2');
                return;
            }

            if (origin_name === 'origin_clone_army') {
                this.species.traits.push('trait_clone_soldier_infertile');
                this.disabled_traits.push('trait_slow_breeders');
                this.disabled_traits.push('trait_rapid_breeders');
                return;
            }

            if (origin_name === 'origin_subterranean') {
                this.disabled_traits.push('trait_aquatic');
                this.species.traits.push('trait_cave_dweller');
                return;
            }

            if (origin_name === 'origin_subterranean_machines') {
                this.disabled_traits.push('trait_robot_aquatic');
                this.species.traits.push('trait_robot_cave_dweller');
                return;
            }

            if (origin_name === 'origin_shroudwalker_apprentice') {
                this.species.traits.push('trait_latent_psionic');
                return;
            }

            if (origin_name === 'origin_necrophage') {
                this.species.traits.push('trait_necrophage');
                this.disabled_traits.push('trait_plantoid_budding');
                this.disabled_traits.push('trait_humanoid_psychological_infertility');
                this.secondary_species = new SecondarySpecies([], [], 5, 2, this.species.portrait, false);
                return;
            }

            if (origin_name === 'origin_syncretic_evolution') {
                this.secondary_species = new SecondarySpecies(['trait_syncretic_proles'], syncretic_disabled_traits, 4, 1, this.species.portrait, true);
                return;
            }

            if (origin_name === 'origin_ocean_paradise') {
                // Aquatic could've been added already by angler civic
                if (!this.species.traits.includes('trait_aquatic')) {
                    this.species.traits.push('trait_aquatic');
                    this.trait_picks_left--;
                    this.trait_points_left = this.trait_points_left - 2;
                    return;
                }
            }

            if (origin_name === 'origin_ocean_machines') {
                // Aquatic could've been added already by angler civic
                if (!this.species.traits.includes('trait_robot_aquatic')) {
                    this.species.traits.push('trait_robot_aquatic');
                    this.trait_picks_left--;
                    this.trait_points_left = this.trait_points_left - 2;
                    return;
                }
            }

            if (origin_name === 'origin_synthetic_fertility') {
                this.species.traits.push('trait_pathogenic_genes');
                this.disabled_traits.push('trait_plantoid_budding');
                this.trait_picks_left--;
                this.trait_points_left++;
                return;
            }
        }
    }

    set_traits() {
        // Generate metalheads
        if (this.options.generate_genocidal === 'metal') {
            this.species.traits.push('trait_strong');
            this.species.traits.push('trait_industrious');
            this.species.traits.push(random_percentage_check(50) ? 'trait_deviants' : 'trait_solitary');

            // Aquatic trait costs 2, add an extra negative trait to balance the cost
            if (this.species.traits.includes('trait_aquatic') || this.species.traits.includes('trait_robot_aquatic')) {
                this.species.traits.push(random_percentage_check(50) ? 'trait_unruly' : 'trait_repugnant');
            }

            if (this.species.class === 'LITHOID') {
                // Lithoids have the lithoid trait, even if they are metalheads
                this.species.traits.push('trait_lithoid');
            }

            return;
        }

        let traits_list                         = traits;
        let picked_negative_trait_for_overtuned = false;

        // Aquatic trait for ocean worlds
        if (this.planet_class === 'pc_ocean' && (this.species.class === 'AQUATIC' || this.species.class === 'MOL' || this.species.class === 'HUM' || this.species.class === 'MAM' || this.species.class === 'LITHOID')) {
            traits_list = {...traits_list, ...ocean_traits};
        }

        // Plants and Fungoids have access to extra traits
        if (this.species.class === 'PLANT' || this.species.class === 'FUN') {
            traits_list = {...traits_list, ...plant_traits};
        }

        if (this.species.class === 'MACHINE') {
            // Machines start with one fewer trait point
            this.trait_points_left--;

            // Machines have the machine trait
            this.species.traits.push('trait_machine_unit');

            // Machines get a free background trait
            this.species.traits.push(machine_background_traits.random());

            // Machines have their own traits
            traits_list = machine_traits;
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
        }

        if (this.origin === 'origin_overtuned') {
            let overtuned_traits_list = overtuned_traits;

            // Biologicals get extra overtuned traits, machines have already been excluded at this point due to origin
            if (this.species.class !== 'LITHOID') {
                overtuned_traits_list = {...overtuned_traits_list, ...biological_overtuned_traits};
            }

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

        // Legendary leaders always their own trait
        if (this.origin === 'origin_legendary_leader') {
            this.species.traits.push('trait_perfected_genes');
            this.trait_points_left--;
            this.trait_picks_left--;
        }

        // Stargazers get to be stargazers
        if (this.civics.includes('civic_hive_stargazers')) {
            this.species.traits.push('trait_stargazer');
        }

        // Gestalts cannot be thrifty
        if (this.ethics.includes('ethic_gestalt_consciousness')) {
            this.disabled_traits.push('trait_thrifty');
        }

        // No point in continuing if we can't pick traits anyway
        if (this.trait_picks_left === 0) {
            return;
        }

        traits_list = structuredClone(traits_list);
        // Delete disabled traits from traits_list to speed up the process by preventing selection of trait that is disabled anyway and so require less iterations
        for (let i = 0; i < this.disabled_traits.length; i++) {
            delete traits_list[this.disabled_traits[i]];
        }

        // If we ended up negative somehow (Perfected Genes + Aquatic for example), pick a negative trait to get back to 0
        if (this.trait_points_left < 0) {
            this.pick_trait(traits_list, true, false);
            return;
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

    pick_trait(traits_list, negative_trait, allow_negative) {
        // Max 100 attempts to find an acceptable trait, prevent infinite loop if no valid option can ever be picked
        let i = 0;
        while (i < 100) {
            i++;
            let random_trait = traits_list.random();
            let trait_name   = random_trait[0];
            let trait_cost   = random_trait[1].cost;
            let trait_no     = random_trait[1].no;

            log('Checking: ' + trait_name);

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

            // Attempt to spend as much points as possible
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

            if (no_requirement_checker(trait_no, this.disabled_traits, 'Trait', 'Traits', 'Disabled traits') === false) {
                continue;
            }

            if (no_requirement_checker(trait_no, this.species.traits, 'Trait', 'Traits', 'Selected traits') === false) {
                continue;
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
        this.empire_flag.icon.file     = flag[1].random();

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

        this.ruler.name     = leader_names[this.ruler.gender].random();
        this.ruler.portrait = this.species.portrait;
        this.ruler.texture  = 0;
        this.ruler.hair     = 0;
        this.ruler.clothes  = 0;

        // Paragon leaders cannot pick normal ruler traits, and normal rulers cannot pick paragon traits
        if (this.origin === 'origin_legendary_leader') {
            // Pick negative trait sometimes
            if (random_percentage_check(75)) {
                this.pick_ruler_trait(bad_paragon_traits);
                this.pick_ruler_trait(paragon_traits);
            }
            this.pick_ruler_trait(paragon_traits);
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
            let trait_name   = random_trait[0];
            let trait_yes    = random_trait[1].yes;

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
            name        = name.slice(0, splitAt) + " " + name.slice(splitAt).capitalize();
        }
        let plural       = name + (random_percentage_check(50) ? plurals.random() : '');
        let adjective    = name + (random_percentage_check(70) ? adjectives.random() : '');
        let empire_name  = '';
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

        this.name.key          = empire_name;
        this.adjective.key     = adjective;
        this.species.name      = name;
        this.species.plural    = plural;
        this.species.adjective = adjective;
        this.key               = empire_name;

        log('Empire name ' + empire_name);
    }

    set_planet_name() {
        let planet_name = '';
        let has_prefix  = false;

        if (random_percentage_check(10)) {
            has_prefix  = true;
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
        traits_string       = traits_string.substring(0, traits_string.length - 2);
        this.species.traits = '';

        let secondary_species_traits_string = '';
        if (typeof this.secondary_species !== 'undefined') {
            for (let i = 0; i < this.secondary_species.secondary_species_traits.length; i++) {
                secondary_species_traits_string += 'trait="' + this.secondary_species.secondary_species_traits[i] + '"\r\n';
            }
            // Remove the last newline
            secondary_species_traits_string                 = secondary_species_traits_string.substring(0, secondary_species_traits_string.length - 2);
            this.secondary_species.secondary_species_traits = '';
        }

        let ruler_traits_string = '';
        for (let i = 0; i < this.ruler.ruler_traits.length; i++) {
            ruler_traits_string += 'trait="' + this.ruler.ruler_traits[i] + '"\r\n';
        }
        // Remove the last newline
        ruler_traits_string     = ruler_traits_string.substring(0, ruler_traits_string.length - 2);
        this.ruler.ruler_traits = '';

        let ethics_string = '';
        for (let i = 0; i < this.ethics.length; i++) {
            ethics_string += 'ethic="' + this.ethics[i] + '"\r\n';
        }
        // Remove the last newline
        ethics_string = ethics_string.substring(0, ethics_string.length - 2);
        this.ethics   = '';

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

        // Delete remaining values that are not used in the Clausewitz format
        delete this.disabled_origins;
        delete this.disabled_traits;
        delete this.trait_picks_left;
        delete this.trait_points_left;
        delete this.civic_points_left;
        delete this.ethics_points_left;
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
    let requirements_met   = 0;
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
