basegame_civics = {
    'civic_corvee_system'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_free_haven'],
            'ethics'     : [
                'ethic_egalitarian',
                'ethic_fanatic_egalitarian',
            ],
        },
    },
    'civic_imperial_cult'          : {
        yes: {
            'authorities': ['auth_imperial'],
            'civics'     : [],
            'ethics'     : [
                ['ethic_authoritarian', 'ethic_fanatic_authoritarian'],
                ['ethic_spiritualist', 'ethic_fanatic_spiritualist'],
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_beacon_of_liberty'      : {
        yes: {
            'authorities': ['auth_democratic'],
            'civics'     : [],
            'ethics'     : [
                'ethic_egalitarian',
                'ethic_fanatic_egalitarian',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_brand_loyalty',
                'civic_crusader_spirit',
            ],
            'ethics'     : [
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
    },
    'civic_exalted_priesthood'     : {
        yes: {
            'authorities': [
                'auth_oligarchic',
                'auth_dictatorial',
            ],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_merchant_guilds',
                'civic_aristocratic_elite',
                'civic_technocracy',
            ],
            'ethics'     : [],
        },
    },
    'civic_philosopher_king'       : {
        yes: {
            'authorities': [
                'auth_dictatorial',
                'auth_imperial',
            ],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_meritocracy'            : {
        yes: {
            'authorities': [
                'auth_democratic',
                'auth_oligarchic',
            ],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_citizen_service'        : {
        yes: {
            'authorities': [
                'auth_democratic',
                'auth_oligarchic',
            ],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_reanimated_armies'],
            'ethics'     : ['ethic_fanatic_xenophile'],
        },
    },
    'civic_technocracy'            : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_materialist',
                'ethic_fanatic_materialist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_merchant_guilds',
                'civic_exalted_priesthood',
                'civic_aristocratic_elite',
                'civic_shared_burden',
            ],
            'ethics'     : [],
        },
    },
    'civic_feudal_realm'           : {
        yes: {
            'authorities': ['auth_imperial'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_police_state'           : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : ['ethic_fanatic_egalitarian'],
        },
    },
    'civic_idealistic_foundation'  : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_egalitarian',
                'ethic_fanatic_egalitarian',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_environmentalist'       : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_relentless_industrialists',
                'civic_dystopian_society',
            ],
            'ethics'     : [],
        },
    },
    'civic_slaver_guilds'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_authoritarian',
                'ethic_fanatic_authoritarian',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_pleasure_seekers',
            ],
            'ethics'     : [],
        },
    },
    'civic_inwards_perfection'     : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                ['ethic_pacifist', 'ethic_fanatic_pacifist'],
                ['ethic_xenophobe', 'ethic_fanatic_xenophobe'],
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_pompous_purists',
                'civic_eager_explorers',
                'civic_diplomatic_corps',
                'civic_sovereign_guardianship',
            ],
            'ethics'     : [],
        },
    },
    'civic_warrior_culture'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_pleasure_seekers'],
            'ethics'     : [],
        },
    },
    'civic_distinguished_admiralty': {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_free_haven'             : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_xenophile',
                'ethic_fanatic_xenophile',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_corvee_system'],
            'ethics'     : [],
        },
    },
    'civic_cutthroat_politics'     : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_agrarian_idyll'         : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_pacifist',
                'ethic_fanatic_pacifist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_anglers',
                'civic_relentless_industrialists',
                'civic_dystopian_society',
            ],
            'ethics'     : [],
        },
    },
    'civic_shadow_council'         : {
        yes: {
            'authorities': [
                'auth_democratic',
                'auth_oligarchic',
                'auth_dictatorial',
            ],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_mining_guilds'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_parliamentary_system'   : {
        yes: {
            'authorities': ['auth_democratic'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_efficient_bureaucracy'  : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_nationalistic_zeal'     : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_functional_architecture': {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_aristocratic_elite'     : {
        yes: {
            'authorities': [
                'auth_oligarchic',
                'auth_imperial',
            ],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_merchant_guilds',
                'civic_exalted_priesthood',
                'civic_technocracy',
            ],
            'ethics'     : [
                'ethic_egalitarian',
                'ethic_fanatic_egalitarian',
            ],
        },
    },
    'civic_shared_burden'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : ['ethic_fanatic_egalitarian'],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_technocracy',
                'civic_pleasure_seekers',
            ],
            'ethics'     : [
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
    },
    'civic_fanatic_purifiers'      : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                ['ethic_fanatic_xenophobe'],
                ['ethic_militarist', 'ethic_spiritualist'],
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_barbaric_despoilers',
                'civic_pompous_purists',
                'civic_diplomatic_corps',
                'civic_crusader_spirit',
                'civic_beacon_of_liberty',
                'civic_sovereign_guardianship',
                'civic_corporate_sovereign_guardianship',
                'civic_hive_sovereign_guardianship',
                'civic_machine_sovereign_guardianship',
                'civic_guided_sapience',
                'civic_corporate_guided_sapience',
                'civic_hive_guided_sapience',
                'civic_machine_guided_sapience'
            ],
            'ethics'     : [],
        },
    },
    'civic_barbaric_despoilers'    : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                ['ethic_fanatic_militarist', 'ethic_militarist'],
                ['ethic_fanatic_authoritarian', 'ethic_authoritarian', 'ethic_fanatic_xenophobe', 'ethic_xenophobe'],
            ],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_fanatic_purifiers'],
            'ethics'     : [
                'ethic_xenophile',
                'ethic_fanatic_xenophile',
                'ethic_gestalt_consciousness',

            ],
        },
    },
    'civic_byzantine_bureaucracy'  : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
    },
    'civic_merchant_guilds'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_exalted_priesthood',
                'civic_aristocratic_elite',
                'civic_technocracy',
            ],
            'ethics'     : [],
        },
    },
    'civic_reanimated_armies'      : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [''],
            'civics'     : [
                'civic_citizen_service',
                'civic_sovereign_guardianship',
                'civic_corporate_sovereign_guardianship',
                'civic_hive_sovereign_guardianship',
                'civic_machine_sovereign_guardianship',
                // These require species MACHINE which is incompatible
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : [
                'ethic_pacifist',
                'ethic_fanatic_pacifist',
                'ethic_gestalt_consciousness',
            ],
        },
    },
    'civic_selective_kinship'      : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_fanatic_purifiers',
                // These require species MACHINE which is incompatible
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : [
                'ethic_gestalt_consciousness',
                'ethic_xenophile',
                'ethic_fanatic_xenophile',
                'ethic_fanatic_egalitarian',
            ],
        },
    },
    'civic_diplomatic_corps'       : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_fanatic_purifiers',
                'civic_inwards_perfection',
            ],
            'ethics'     : [],
        },
    },
    'civic_death_cult'             : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_fanatic_purifiers',
                'civic_inwards_perfection',
                'civic_dimensional_worship',
                'civic_corporate_dimensional_worship',
                'civic_death_cult_corporate',
            ],
            'ethics'     : [],
        },
    },
    'civic_memorialist'            : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_fanatic_purifiers',
                'civic_relentless_industrialists',
            ],
            'ethics'     : [],
        },
    },
    'civic_catalytic_processing'   : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_pleasure_seekers'       : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_warrior_culture',
                'civic_shared_burden',
                'civic_slaver_guilds', // would enslave hedonists
                'civic_dystopian_society',
            ],
            'ethics'     : [],
        },
    },
    'civic_idyllic_bloom'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_relentless_industrialists',
                // These require species MACHINE which is incompatible
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : [],
        },
    },
    'civic_anglers'                : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_agrarian_idyll',
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : [],
        },
    },
    'civic_pompous_purists'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_fanatic_purifiers',
                'civic_inwards_perfection',
            ],
            'ethics'     : [],
        },
    },
    'civic_scavengers'             : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_ascensionists'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_memory_vault'           : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_crusader_spirit'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
                'ethic_authoritarian',
                'ethic_fanatic_authoritarian',
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_fanatic_purifiers',
                'civic_beacon_of_liberty',
            ],
            'ethics'     : [
                'ethic_pacifist',
                'ethic_fanatic_pacifist',
            ],
        },
    },
    'civic_eager_explorers'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_inwards_perfection',
                'civic_hyperspace_specialty',
                'civic_corporate_hyperspace_specialty',
                'civic_sovereign_guardianship',
                'civic_corporate_sovereign_guardianship',
                'civic_privatized_exploration',
                'civic_inwards_perfection',
                'civic_guided_sapience',
                'civic_corporate_guided_sapience',
                'civic_beastmasters',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_hyperspace_specialty'   : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_corporate_hyperspace_specialty', // ??
                'civic_privatized_exploration',
                'civic_eager_explorers',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_dimensional_worship'    : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_corporate_dimensional_worship', // ??
                'civic_death_cult',
                'civic_death_cult_corporate',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_heroic_tales'           : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_dystopian_society'      : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : ['ethic_fanatic_authoritarian'],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_pleasure_seekers',
                'civic_free_haven',
                'civic_warrior_culture',
                'civic_agrarian_idyll',
                'civic_environmentalist',
                'civic_pleasure_seekers',
                'civic_agrarian_idyll',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_dark_consortium'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_corporate_dark_consortium'],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_natural_design'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_guided_sapience',
                // These require species MACHINE which is incompatible with civic_natural_design
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_sovereign_guardianship' : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_corporate_sovereign_guardianship',
                'civic_inwards_perfection',
                'civic_eager_explorers',
                'civic_privatized_exploration',
                'civic_reanimated_armies',
                'civic_fanatic_purifiers',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_guided_sapience'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_natural_design',
                'civic_eager_explorers',
                'civic_privatized_exploration',
                'civic_hive_stargazers',
                'civic_machine_exploration_protocol',
            ],
            'ethics'     : [
                'ethic_gestalt_consciousness',
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
    },
    'civic_toxic_baths_individual_machine'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_corporate_toxic_baths_individual_machine',
                'civic_idyllic_bloom',
                'civic_environmental_architects',
                // Incompatible with machines
                'civic_anglers',
                'civic_corporate_anglers',
                'civic_selective_kinship',
                'civic_reanimated_armies',
                'civic_permanent_employment',
                'civic_augmentation_bazaars',
                'civic_private_healthcare_corporate',
                'civic_toxic_baths',
                'civic_corporate_toxic_baths',
                'civic_natural_design',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_individual_machine_replication'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_idyllic_bloom',
                // Incompatible with machines
                'civic_anglers',
                'civic_corporate_anglers',
                'civic_selective_kinship',
                'civic_reanimated_armies',
                'civic_permanent_employment',
                'civic_augmentation_bazaars',
                'civic_private_healthcare_corporate',
                'civic_toxic_baths',
                'civic_corporate_toxic_baths',
                'civic_natural_design',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_individual_machine_predictive_analysis': {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_idyllic_bloom',
                // Incompatible with machines
                'civic_anglers',
                'civic_corporate_anglers',
                'civic_selective_kinship',
                'civic_reanimated_armies',
                'civic_permanent_employment',
                'civic_augmentation_bazaars',
                'civic_private_healthcare_corporate',
                'civic_toxic_baths',
                'civic_corporate_toxic_baths',
                'civic_natural_design',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_individual_machine_warbots'            : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_idyllic_bloom',
                // Incompatible with machines
                'civic_anglers',
                'civic_corporate_anglers',
                'civic_selective_kinship',
                'civic_reanimated_armies',
                'civic_permanent_employment',
                'civic_augmentation_bazaars',
                'civic_private_healthcare_corporate',
                'civic_toxic_baths',
                'civic_corporate_toxic_baths',
                'civic_natural_design',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_astrometeorology': {
        yes: {
            authorities: [],
            civics: [],
            ethics: [],
        },
        no: {
            authorities: [
                'auth_corporate',
            ],
            civics: [],
            ethics: ['ethic_gestalt_consciousness'],
        },
    },
    'civic_storm_callers': {
        yes: {
            authorities: [],
            civics: [],
            ethics: [],
        },
        no: {
            authorities: ['auth_corporate'],
            civics: [],
            ethics: ['ethic_gestalt_consciousness'],
        },
    },
    'civic_environmental_architects': {
        yes: {
            authorities: [],
            civics: [],
            ethics: [],
        },
        no: {
            authorities: ['auth_corporate'],
            civics: [
                'civic_environmental_architects_megacorp',
                'civic_environmentalist',
                'civic_toxic_baths',
                'civic_toxic_baths_individual_machine',
                'civic_corporate_toxic_baths',
                'civic_corporate_toxic_baths_individual_machine',
                'civic_hive_toxic_baths',
                'civic_machine_toxic_baths',
                'civic_relentless_industrialists',
                'civic_corporate_relentless_industrialists',
            ],
            ethics: ['ethic_gestalt_consciousness'],
        },
    },
    'civic_galactic_curators': {
        yes: {
            authorities: [],
            civics: [],
            ethics: [],
        },
        no: {
            authorities: ['auth_corporate'],
            civics: ['civic_corporate_galactic_curators'],
            ethics: ['ethic_gestalt_consciousness'],
        },
    },
    'civic_beastmasters': {
        yes: {
            authorities: [],
            civics: [],
            ethics: [],
        },
        no: {
            authorities: ['auth_corporate'],
            civics: [
                'civic_corporate_beastmasters',
                'civic_eager_explorers',
            ],
            ethics: ['ethic_gestalt_consciousness'],
        },
    },
};

hive_civics = {
    'civic_hive_subspace_ephapse'      : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_natural_neural_network': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_ascetic'               : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_one_mind'              : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_divided_attention'     : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_strength_of_legions'   : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_subsumed_will'         : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_pooled_knowledge'      : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_devouring_swarm'       : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_hive_empath',
                'civic_hive_memorialist',
                'civic_hive_sovereign_guardianship',
                'civic_hive_guided_sapience',
            ],
            'ethics'     : [],
        },
    },
    'civic_hive_empath'                : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_hive_devouring_swarm'],
            'ethics'     : [],
        },
    },
    'civic_hive_memorialist'           : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_hive_devouring_swarm'],
            'ethics'     : [],
        },
    },
    'civic_hive_catalytic_processing'  : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_idyllic_bloom'         : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_toxic_baths'           : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_hive_toxic_baths',
                'civic_environmental_architects_hive',
            ],
            'ethics'     : [],
        },
    },
    'civic_hive_ascensionists'         : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_cordyceptic_drones'    : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_stargazers': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_hive_hyperspace_specialty',
                'civic_hive_guided_sapience',
                'civic_hive_beastmasters',
            ],
            'ethics': [],
        },
    },
    'civic_memory_vault_hive'          : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_upkeep_twister'        : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_void_hive'                  : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_hive_hyperspace_specialty'  : {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_hive_stargazers'],
            'ethics'     : [],
        },
    },
    'civic_hive_sovereign_guardianship': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_hive_devouring_swarm'],
            'ethics'     : [],
        },
    },
    'civic_hive_natural_design': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_hive_guided_sapience',
            ],
            'ethics': [],
        },
    },

    'civic_hive_guided_sapience': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_hive_devouring_swarm',
                'civic_hive_natural_design',
                'civic_hive_stargazers',
            ],
            'ethics'     : [],
        },
    },
    'civic_hive_beastmasters': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_hive_stargazers',
            ],
            'ethics': [],
        },
    },
    'civic_astrometeorology_hive': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [''],
            'ethics'     : [],
        },
    },
    'civic_environmental_architects_hive': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_hive_toxic_baths',
            ],
            'ethics': [],
        },
    },
    'civic_hive_galactic_curators': {
        yes: {
            'authorities': ['auth_hive_mind'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [],
            'ethics': [],
        },
    },
};

machine_civics = {
    'civic_machine_servitor'                      : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
                'civic_machine_assimilator',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_terminator'                    : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_servitor',
                'civic_machine_assimilator',
                'civic_machine_memorialist',
                'civic_machine_exploration_protocol',
                'civic_machine_sovereign_guardianship',
                'civic_machine_diplomatic_protocols',
                'civic_machine_tactical_algorithms',
                'civic_machine_guided_sapience',
                'civic_machine_beastmasters',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_assimilator'                   : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_servitor',
                'civic_machine_terminator',
                'civic_machine_memorialist',
                'civic_machine_exploration_protocol',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_builder'                       : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_factory_overclock'             : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_unitary_cohesion'              : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_rockbreakers'                  : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],

        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_zero_waste_protocols'          : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_ota_updates'                   : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_warbots'                       : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_obsessional_directive',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_introspective'                 : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],

        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_delegated_functions'           : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_predictive_analysis'           : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],

        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_replication'                   : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_maintenance_protocols'         : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_memorialist'                   : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
                'civic_machine_assimilator',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_catalytic_processing'          : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_toxic_baths'                   : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_environmental_architects_machine',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_ascensionists'                 : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_exploration_protocol'          : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
                'civic_machine_assimilator',
                'civic_machine_guided_sapience',
                'civic_machine_beastmasters',
            ],
            'ethics'     : [],
        },
    },
    'civic_memory_vault_machine'                  : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_upkeep_twister'                : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_sovereign_guardianship'        : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_obsessional_directive'         : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_warbots',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_diplomatic_protocols'          : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_tactical_algorithms'           : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_guided_sapience'               : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_machine_terminator',
                'civic_machine_exploration_protocol',
            ],
            'ethics'     : [],
        },
    },
    'civic_machine_spybots'                       : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_astromining_drones'            : {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_machine_beastmasters': {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_machine_terminator',
                'civic_machine_exploration_protocol',
            ],
            'ethics': [],
        },
    },
    'civic_astrometeorology_machine': {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [],
            'ethics': [],
        },
    },
    'civic_environmental_architects_machine': {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_machine_toxic_baths',
            ],
            'ethics': [],
        },
    },
    'civic_machine_galactic_curators': {
        yes: {
            'authorities': ['auth_machine_intelligence'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [],
            'ethics': [],
        },
    },
};

corporate_civics = {
    'civic_franchising'                             : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_trading_posts'                           : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_media_conglomerate'                      : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_naval_contractors'                       : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_free_traders'                            : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_private_prospectors'                     : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_corporate_guided_sapience',
            ],
            'ethics'     : [],
        },
    },
    'civic_gospel_of_the_masses'                    : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_ruthless_competition'                    : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_criminal_heritage'                       : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_private_military_companies'              : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_indentured_assets'                       : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_authoritarian',
                'ethic_fanatic_authoritarian',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_corporate_hedonism'],
            'ethics'     : [],
        },
    },
    'civic_brand_loyalty'                           : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_beacon_of_liberty'],
            'ethics'     : [],
        },
    },
    'civic_public_relations_specialists'            : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_diplomatic_corps'],
            'ethics'     : [],
        },
    },
    'civic_death_cult_corporate'                    : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_fanatic_purifiers',
                'civic_inwards_perfection',
                'civic_death_cult',
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_catalytic_processing'          : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_corporate_hedonism'                      : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_pleasure_seekers',
                'civic_indentured_assets',
                'civic_slaver_guilds',
                'civic_worker_coop',
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_anglers'                       : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_agrarian_idyll',
                // These require species MACHINE which is incompatible
                'civic_corporate_toxic_baths_individual_machine'
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_crafters'                      : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_crafters'],
            'ethics'     : [],
        },
    },
    'civic_permanent_employment'                    : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                // These require species MACHINE which is incompatible
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : [
                'ethic_egalitarian',
                'ethic_fanatic_egalitarian',
            ],
        },
    },
    'civic_toxic_baths'                             : { // Mutagenic Spas
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                // These require species MACHINE which is incompatible
                'civic_toxic_baths_individual_machine',
                'civic_individual_machine_replication',
                'civic_individual_machine_predictive_analysis',
                'civic_individual_machine_warbots',
            ],
            'ethics'     : [],
        },
    },
    'civic_relentless_industrialists'               : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : ['ethic_materialist', 'ethic_fanatic_materialist'],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_environmentalist',
                'civic_agrarian_idyll',
                'civic_idyllic_bloom',
                'civic_memorialist',
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_scavengers'                    : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_corporate_ascensionists'                 : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_privatized_exploration'                  : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_hyperspace_specialty',
                'civic_corporate_hyperspace_specialty',
                'civic_sovereign_guardianship',
                'civic_corporate_sovereign_guardianship',
                'civic_corporate_beastmasters',
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_hyperspace_specialty'          : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_privatized_exploration',
                'civic_eager_explorers',
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_dimensional_worship'           : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_spiritualist',
                'ethic_fanatic_spiritualist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_death_cult',
                'civic_death_cult_corporate',
            ],
            'ethics'     : [],
        },
    },
    'civic_crusader_spirit_corporate'               : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
                'ethic_authoritarian',
                'ethic_fanatic_authoritarian',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [
                'ethic_pacifist',
                'ethic_fanatic_pacifist',
            ],
        },
    },
    'civic_task_delegation_corporate'               : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_private_healthcare_corporate'            : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : ['civic_corporate_toxic_baths_individual_machine'],
            'ethics'     : [],
        },
    },
    'civic_memory_vault_corporate'                  : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_worker_coop'                             : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_egalitarian',
                'ethic_fanatic_egalitarian',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_corporate_hedonism',
                'civic_pleasure_seekers',
                'civic_ruthless_competition',
                'civic_cutthroat_politics',
                'civic_shared_burden',
                'civic_police_state',
            ],
            'ethics'     : [
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
    },
    'civic_corporate_dark_consortium'               : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_augmentation_bazaars'                    : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_corporate_toxic_baths_individual_machine'
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_corporate_sovereign_guardianship'        : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_militarist',
                'ethic_fanatic_militarist',
            ],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_sovereign_guardianship',
                'civic_inwards_perfection',
                'civic_eager_explorers',
                'civic_privatized_exploration',
                'civic_fanatic_purifiers',
            ],
            'ethics'     : [],
        },
    },
    'civic_corporate_guided_sapience'               : {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': [],
            'civics'     : [
                'civic_private_prospectors',
                'civic_eager_explorers',
                'civic_privatized_exploration',
                'civic_hive_stargazers',
                'civic_machine_exploration_protocol',
            ],
            'ethics'     : [
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
    },
    'civic_corporate_toxic_baths_individual_machine': {
        yes: {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [],
        },
        no: {
            'authorities': [],
            'civics'     : [
                'civic_toxic_baths_individual_machine',
                // Requires machines
                'civic_augmentation_bazaars',
            ],
            'ethics'     : [],
        },
    },
    'civic_astrometeorology_megacorp': {
        yes: {
            'authorities': ['auth_corporate'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [],
            'ethics': [],
        },
    },
    'civic_storm_callers_megacorp': {
        yes: {
            'authorities': ['auth_corporate'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [],
            'ethics': [],
        },
    },
    'civic_environmental_architects_megacorp': {
        yes: {
            'authorities': ['auth_corporate'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_environmentalist',
                'civic_environmental_architects',
                'civic_toxic_baths',
                'civic_toxic_baths_individual_machine',
                'civic_corporate_toxic_baths',
                'civic_corporate_toxic_baths_individual_machine',
                'civic_hive_toxic_baths',
                'civic_machine_toxic_baths',
                'civic_relentless_industrialists',
                'civic_corporate_relentless_industrialists',
            ],
            'ethics': [],
        },
    },
    'civic_corporate_galactic_curators': {
        yes: {
            'authorities': ['auth_corporate'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': ['civic_galactic_curators'],
            'ethics': [],
        },
    },
    'civic_corporate_beastmasters': {
        yes: {
            'authorities': ['auth_corporate'],
            'civics': [],
            'ethics': [],
        },
        no: {
            'authorities': [],
            'civics': [
                'civic_beastmasters',
                'civic_privatized_exploration',
            ],
            'ethics': [],
        },
    },
};

// If any of these civics is picked, non-gestalt machine cannot be picked as species
machine_disabled_civics = [
    'civic_anglers',
    'civic_corporate_anglers',
    'civic_selective_kinship',
    'civic_reanimated_armies',
    'civic_permanent_employment',
    'civic_augmentation_bazaars',
    'civic_private_healthcare_corporate',
    'civic_toxic_baths',
    'civic_corporate_toxic_baths',
    'civic_natural_design',
];