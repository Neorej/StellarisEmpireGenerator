Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

Object.prototype.random = function () {
    let key = this.randomkey();
    return [key, this[key]];
};

Object.prototype.randomkey = function () {
    var keys = Object.keys(this);
    return keys[keys.length * Math.random() << 0];
};

Object.defineProperty(String.prototype, 'capitalize', {
    value     : function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

var logging = true;
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

    constructor(starting_traits, disabled_traits, trait_picks_left, trait_points_left, disabled_portrait) {
        this.traits = starting_traits;

        this.disabled_traits   = disabled_traits;
        this.trait_picks_left  = trait_picks_left;
        this.trait_points_left = trait_points_left;

        this.set_species(disabled_portrait);
        this.set_traits();
        this.set_name();

        // Unique property name required for secondary species to avoid conflicts with primary species when formatting for clausewitz
        this.secondary_species_traits = this.traits;

        delete this.traits;
        delete this.disabled_traits;
        delete this.trait_picks_left;
        delete this.trait_points_left;
    }

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

    set_traits() {
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

        // chance to pick negative trait
        if (random_percentage_check(50)) {
            // Picking negatives first reduces the chance of some positives appearing due to being opposites
            // To crank up the chance a bit, chance to pick positive trait before negative
            if (random_percentage_check(50)) {
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

        while (this.trait_points_left > 0 && this.trait_picks_left > 0) {
            log('Picking loop positive trait');
            this.pick_trait(traits_list, false);
        }
    }

    pick_trait(traits_list, negative_trait) {
        let i = 0;
        // Max 100 attempts to find an acceptable trait, prevent theoretical infinite loop
        while (i < 100) {
            i++;
            let random_trait = traits_list.random();
            let trait_name   = random_trait[0];
            let trait_cost   = random_trait[1].cost;
            let trait_no     = random_trait[1].no;

            log('Checking: ' + trait_name);

            if ($.inArray(trait_name, this.traits) > -1) {
                continue;
            }

            if ($.inArray(trait_name, this.disabled_traits) > -1) {
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
            if (trait_cost > this.trait_points_left) {
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

            if (no_requirement_checker(trait_no, this.traits, 'Trait', 'Traits', 'Selected traits') === false) {
                continue;
            }

            log('Selected trait ' + trait_name + ' cost ' + trait_cost);

            this.traits.push(trait_name);
            this.disabled_traits.push(trait_name);
            this.trait_picks_left--;
            this.trait_points_left -= trait_cost;

            return;
        }
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
        name_list: 'ART1',
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
    initializer                 = ''; // Always empty
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
        leader_class: 'ruler',
    };
    spawn_as_fallen             = 'yes';
    ignore_portrait_duplication = 'no';
    room                        = rooms.random()
    spawn_enabled               = 'yes';
    ethics                      = [];
    civics                      = [];
    origin                      = '';
    disabled_origins            = [];
    disabled_traits             = [];
    trait_picks_left            = 5;
    trait_points_left           = 2;

    constructor(options) {
        this.spawn_enabled = options.spawn_enabled;
        this.generate_type = options.generate_type;

        this.set_ethics();
        this.set_authority();
        this.set_civics();
        this.set_species();
        this.set_origin();
        this.set_traits();
        this.set_empire_flag();
        this.set_ruler();
        this.set_name();
        this.set_planet_name();
        this.set_system_name();
    }

    set_ethics() {
        let ethics_points = 3;
        let ethics_no     = [];

        if (this.generate_type === 'hiveminds' || this.generate_type === 'machines') {
            this.ethics.push('ethic_gestalt_consciousness');
            return;
        }

        while (ethics_points > 0) {
            let random_ethic = ethics.random();

            if (this.generate_type === 'no_gestalts') {
                while (random_ethic[0] === 'ethic_gestalt_consciousness') {
                    random_ethic = ethics.random();
                }
            }

            let ethic_name = random_ethic[0];
            let ethic_cost = random_ethic[1].cost;
            let ethic_no   = random_ethic[1].no;

            if ($.inArray(ethic_name, ethics_no) > -1) {
                log('Ethic ' + ethic_name + ' is incompatible with existing ethics');
                log(ethics_no);
                continue;
            }

            if (ethic_cost > ethics_points) {
                log('Ethic cost ' + ethic_cost + ' too high, ' + ethics_points + ' points left');
                continue;
            }

            ethics_points = ethics_points - ethic_cost;
            ethics_no     = ethics_no.concat(ethic_no);
            ethics_no     = ethics_no.concat(ethic_name);

            log('Selected ethic ' + ethic_name);
            this.ethics.push(ethic_name);
        }
    }

    set_authority() {
        log('Selected ethics');
        log(this.ethics);

        if (this.generate_type === 'hiveminds') {
            this.authority = 'auth_hive_mind';
            return;
        }

        if (this.generate_type === 'machines') {
            this.authority = 'auth_machine_intelligence';
            return;
        }

        if ($.inArray('ethic_fanatic_egalitarian', this.ethics) > -1) {
            log('I love democracy');
            this.authority = 'auth_democratic';
            return;
        }

        while (this.authority === '') {
            let random_authority = authorities.random();
            let authority_name   = random_authority[0];
            let authority_yes    = random_authority[1].yes;
            let authority_no     = random_authority[1].no;
            let requirements_met = false;

            log('Attempt to select authority ' + authority_name);

            if (authority_yes.length === 0) {
                requirements_met = true;
            }

            for (let j = 0; j < authority_yes.length; j++) {
                if ($.inArray(authority_yes[j], this.ethics) > -1) {
                    log('Forbidden ethic ' + authority_yes[j] + ' is in list of chosen ethics');
                    requirements_met = true;
                }
            }

            for (let j = 0; j < authority_no.length; j++) {
                if ($.inArray(authority_no[j], this.ethics) > -1) {
                    log('Forbidden ethic ' + authority_no[j] + ' is in list of chosen ethics');
                    requirements_met = false;
                }
            }

            if (requirements_met === true) {
                log('Selected authority ' + authority_name);
                this.authority = authority_name;
            }
        }
    }

    set_civics() {
        let civic_picks_left = 2;
        let civics_list      = civics;
        if (this.authority === 'auth_hive_mind') {
            civics_list = hive_civics;
        }
        if (this.authority === 'auth_machine_intelligence') {
            civics_list = machine_civics;
        }
        if (this.authority === 'auth_corporate') {
            civics_list = corporate_civics;
        }

        while (civic_picks_left > 0) {
            let random_civic = civics_list.random();
            let civic_name   = random_civic[0];
            let civic_yes    = random_civic[1].yes;
            let civic_no     = random_civic[1].no;

            log('Checking: ' + civic_name);
            log(civic_yes.ethics);

            // Can't pick a civic twice :(
            if ($.inArray(civic_name, this.civics) > -1) {
                continue;
            }

            if (yes_requirement_checker(civic_yes.authorities, this.authority, 'Authority', 'Authorities', 'Civics') === false) {
                continue;
            }
            if (yes_requirement_checker(civic_yes.ethics, this.ethics, 'Ethic', 'Ethics', 'Civics') === false) {
                continue;
            }
            if (yes_requirement_checker(civic_yes.civics, this.civics, 'Civic', 'Civics', 'Civics') === false) {
                continue;
            }

            if (no_requirement_checker(civic_no.authorities, this.authority, 'Authority', 'Authorities', 'Civics') === false) {
                continue;
            }
            if (no_requirement_checker(civic_no.ethics, this.ethics, 'Ethic', 'Ethics', 'Civics') === false) {
                continue;
            }
            if (no_requirement_checker(civic_no.civics, this.civics, 'Civic', 'Civics', 'Civics') === false) {
                continue;
            }

            log('Selected civic ' + civic_name);
            civic_picks_left--;
            this.civics.push(civic_name);

            // Disable incompatible origins
            if (typeof civic_no.origins !== 'undefined') {
                this.disabled_origins = this.disabled_origins.concat(civic_no.origins);
            }

            if (civic_name === 'civic_machine_servitor') {
                this.secondary_species = new SecondarySpecies([], [], 5, 2, this.portrait);
            } else if (civic_name === 'civic_machine_assimilator') {
                this.secondary_species = new SecondarySpecies(['trait_cybernetic'], [], 5, 2, this.portrait);
            }

        }
    }

    set_species() {
        if (this.authority === 'auth_machine_intelligence') {
            this.species.class    = 'MACHINE';
            this.species.portrait = species_machine.MACHINE.portraits.random();
            return;
        }

        let random_species    = species.random();
        this.species.class    = random_species[0];
        this.species.gender   = genders.random();
        this.species.portrait = random_species[1].portraits.random();
    }

    set_origin() {
        while (this.origin === '') {
            let random_origin = origins.random();
            let origin_name   = random_origin[0];
            let origin_yes    = random_origin[1].yes;
            let origin_no     = random_origin[1].no;

            if ($.inArray(origin_name, this.disabled_origins) > -1) {
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

            if (no_requirement_checker(origin_no.authorities, [this.authority], 'Authority', 'Authorities', 'Origins') === false) {
                continue;
            }
            if (no_requirement_checker(origin_no.ethics, this.ethics, 'Ethic', 'Ethics', 'Origins') === false) {
                continue;
            }
            if (no_requirement_checker(origin_no.civics, this.civics, 'Civic', 'Civics', 'Origins') === false) {
                continue;
            }

            log('Selected origin ' + origin_name);
            this.origin = origin_name;

            if (origin_name === 'origin_post_apocalyptic') {
                this.species.traits.push('trait_survivor');
                return;
            }

            if (origin_name === 'origin_void_dwellers') {
                this.species.traits.push('trait_void_dweller_1');
                return;
            }

            if (origin_name === 'origin_clone_army') {
                this.species.traits.push('trait_clone_soldier_infertile');
                this.disabled_traits.push('trait_slow_breeders');
                this.disabled_traits.push('trait_rapid_breeders');
                return;
            }

            if (origin_name === 'origin_subterranean') {
                this.species.traits.push('trait_cave_dweller');
                return;
            }

            if (origin_name === 'origin_shroudwalker_apprentice') {
                this.species.traits.push('trait_latent_psionic');
                return;
            }

            if (origin_name === 'origin_necrophage') {
                this.species.traits.push('trait_necrophage');
                this.disabled_traits.push('trait_plantoid_budding');
                this.secondary_species = new SecondarySpecies([], [], 5, 2, this.portrait);
                return;
            }

            if (origin_name === 'origin_syncretic_evolution') {
                this.secondary_species = new SecondarySpecies(['trait_syncretic_proles'], ['trait_natural_engineers', 'trait_natural_physicists', 'trait_natural_sociologists', 'trait_intelligent'], 4, 1, this.portrait);
                return;
            }

            if (origin_name === 'origin_ocean_paradise') {
                this.species.traits.push('trait_aquatic');
                this.trait_picks_left--;
                this.trait_points_left--;
                return;
            }

            if (origin_name === 'origin_shattered_ring') {
                this.planet_class = 'pc_savannah'; // Just make sure it's not ocean, to disable Aquatic trait (which requires ocean world) on shattered ring starts
                return;
            }

            if (origin_name === 'origin_life_seeded') {
                this.planet_class = 'pc_savannah'; // Just make sure it's not ocean, to disable Aquatic trait (which requires ocean world) on life seeded
                return;
            }
        }
    }

    set_traits() {
        let traits_list = traits;

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
            this.disabled_traits.push('trait_thrifty');
            this.disabled_traits.push('trait_conformists');
            this.disabled_traits.push('trait_deviants');
            this.disabled_traits.push('trait_decadent');
            this.disabled_traits.push('trait_conservational');
            this.disabled_traits.push('trait_wasteful');
        }

        // chance to pick negative trait
        if (random_percentage_check(50)) {
            // Picking negatives first reduces the chance of some positives appearing due to being opposites
            // To crank up the chance a bit, chance to pick positive trait before negative
            if (random_percentage_check(50)) {
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

        while (this.trait_points_left > 0 && this.trait_picks_left > 0) {
            log('Picking loop positive trait');
            this.pick_trait(traits_list, false);
        }
    }

    pick_trait(traits_list, negative_trait) {
        let i = 0;
        // Max 100 attempts to find an acceptable trait, prevent theoretical infinite loop
        while (i < 100) {
            i++;
            let random_trait = traits_list.random();
            let trait_name   = random_trait[0];
            let trait_cost   = random_trait[1].cost;
            let trait_no     = random_trait[1].no;

            log('Checking: ' + trait_name);

            if ($.inArray(trait_name, this.species.traits) > -1) {
                continue;
            }

            if ($.inArray(trait_name, this.disabled_traits) > -1) {
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
            if (trait_cost > this.trait_points_left) {
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

            return;
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
                               + ' of ' + name;

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

    // Convert JSON to Clausewitz Engine-style notation
    clausewitzify() {

        // Traits are not set with an array in Clausewitz, rather they use the same key multiple times. JSON no can do
        let traits_string = '';
        for (let i = 0; i < this.species.traits.length; i++) {
            traits_string += 'trait="' + this.species.traits[i] + '"\r\n';
        }
        // Remove the last newline
        traits_string       = traits_string.substring(0, traits_string.length - 2);
        this.species.traits = '';

        let secondary_species_traits_string = '';
        if (typeof this.secondary_species !== 'undefined') {
            // Traits are not set with an array in Clausewitz, rather they use the same key multiple times. JSON no can do

            for (let i = 0; i < this.secondary_species.secondary_species_traits.length; i++) {
                secondary_species_traits_string += 'trait="' + this.secondary_species.secondary_species_traits[i] + '"\r\n';
            }
            // Remove the last newline
            secondary_species_traits_string                 = secondary_species_traits_string.substring(0, secondary_species_traits_string.length - 2);
            this.secondary_species.secondary_species_traits = '';
        }

        // Ethics are not set with an array in Clausewitz, rather they use the same key multiple times. JSON no can do
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
        delete this.generate_type;

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

        // Mix the ethics back in
        string = string.replace(/ethics=""/, ethics_string);

        // Mix the civics array back in
        string = string.replace(/civics=""/, 'civics={\r\n' + civics_string + '}');

        // Mix the empire flag colors array back in
        string = string.replace(/colors=""/, 'colors={\r\n' + empire_flag_colors_string + '}');

        // Ruler gender, spawn_as_fallen, ignore_portrait_duplication and spawn_enabled do not use quote despite being strings (??)
        string = string.replace(/gender="female"/g, 'gender=female');
        string = string.replace(/gender="male"/g, 'gender=male');
        string = string.replace(/gender="not_set"/, 'gender=not_set');
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
    for (let k = 0; k < current_values.length; k++) {
        if ($.inArray(current_values[k], requirements) > -1) {
            log(' - ' + singular + ' ' + current_values[k] + ' is in list of forbidden ' + plural);
            return false;
        }
    }
    log(check_type + ': ' + plural + ' no_requirements met');
    return true;
}

$(function () {

    $('#generate').on('click tap', function () {
        $('#result').html('');
        console.clear();

        let empiresNum = $('#empire_amount').val();
        let results    = '';

        log('Generating ' + empiresNum + ' empires');

        let options = {
            spawn_enabled: $('input[name="spawn_enabled"]:checked').val(),
            generate_type: $('input[name="generate_type"]:checked').val(),
        };

        log(options);

        for (let k = 0; k < empiresNum; k++) {
            let empire = new Empire(options);
            results += empire.clausewitzify();
        }
        $('#result').html('<pre style="width:600px; height: 800px; overflow-y:scroll;">' + results + '</pre>');
    });
});