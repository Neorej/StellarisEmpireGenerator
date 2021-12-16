civics = {
    'civic_corvee_system'          : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_free_haven'],
            'ethics'     : [
                'ethic_gestalt_consciousness',
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_gestalt_consciousness',
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
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_merchant_guilds',
                'civic_aristocratic_elite',
                'civic_technocracy',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_gestalt_consciousness',
                'ethic_fanatic_xenophile',
            ],
        },
    },
    'civic_technocracy'            : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : ['ethic_fanatic_materialist'],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_merchant_guilds',
                'civic_exalted_priesthood',
                'civic_aristocratic_elite',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_feudal_realm'           : {
        yes: {
            'authorities': ['auth_imperial'],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_police_state'           : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : [
                'ethic_gestalt_consciousness',
                'ethic_fanatic_egalitarian',
            ],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_environmentalist'       : {
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
            'origins'    : [
                'origin_common_ground',
                'origin_hegemon',
            ],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_corvee_system'],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_cutthroat_politics'     : {
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
            'origins'    : [
                'origin_post_apocalyptic',
                'origin_shattered_ring',
                'origin_void_dwellers',
                'origin_remnants',
            ],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_merchant_guilds',
                'civic_exalted_priesthood',
                'civic_technocracy',
            ],
            'ethics'     : [
                'ethic_gestalt_consciousness',
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
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_technocracy'],
            'ethics'     : [
                'ethic_gestalt_consciousness',
                'ethic_xenophobe',
                'ethic_fanatic_xenophobe',
            ],
        },
    },
    'civic_fanatic_purifiers'      : {
        yes: {
            'authorities': [],
            'civics'     : [
                'ethic_militarist',
                'ethic_spiritualist',
            ],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_barbaric_despoilers'],
            'ethics'     : ['ethic_gestalt_consciousness'],
            'origins'    : [
                'origin_syncretic_evolution',
                'origin_common_ground',
                'origin_hegemon',
            ],
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
                'ethic_gestalt_consciousness',
                'ethic_xenophile',
                'ethic_fanatic_xenophile',
            ],
            'origins'    : ['origin_common_ground'],
        },
    },
    'civic_byzantine_bureaucracy'  : {
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
    'civic_merchant_guilds'        : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : [
                'civic_exalted_priesthood',
                'civic_aristocratic_elite',
                'civic_technocracy',
                'civic_byzantine_bureaucracy',
            ],
            'ethics'     : ['ethic_gestalt_consciousness'],
        },
    },
    'civic_diplomatic_corps'       : {
        yes: {
            'authorities': [],
            'civics'     : [],
            'ethics'     : [],
        },
        no : {
            'authorities': ['auth_corporate'],
            'civics'     : ['civic_fanatic_purifiers', 'civic_inwards_perfection'],
            'ethics'     : ['ethic_gestalt_consciousness'],
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
            'civics'     : ['civic_hive_empath'],
            'ethics'     : [],
            'origins'    : [
                'origin_common_ground',
                'origin_hegemon',
            ],
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
};

machine_civics = {
    /*
     // Requires generating a second species
    'civic_machine_servitor'             : {
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
    */
    'civic_machine_terminator'           : {
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
            ],
            'ethics'     : [],
            'origins': [
                'origin_common_ground',
                'origin_hegemon',
            ],
        },
    },
    /*
     // Requires generating a second species
    'civic_machine_assimilator'          : {
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
            ],
            'ethics'     : [],
        },
    },
    */
    'civic_machine_builder'              : {
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
    'civic_machine_factory_overclock'    : {
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
    'civic_machine_unitary_cohesion'     : {
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
    'civic_machine_rockbreakers'         : {
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
    'civic_machine_zero_waste_protocols' : {
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
    'civic_machine_built_to_last'        : {
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
    'civic_machine_ota_updates'          : {
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
    'civic_machine_warbots'              : {
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
    'civic_machine_introspective'        : {
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
    'civic_machine_delegated_functions'  : {
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
    'civic_machine_predictive_analysis'  : {
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
    'civic_machine_replication'          : {
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
    'civic_machine_maintenance_protocols': {
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
};

corporate_civics = {
    'civic_franchising'                 : {
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
    'civic_trading_posts'               : {
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
    'civic_media_conglomerate'          : {
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
    'civic_naval_contractors'           : {
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
    'civic_free_traders'                : {
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
    'civic_private_prospectors'         : {
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
    'civic_gospel_of_the_masses'        : {
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
    'civic_ruthless_competition'        : {
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
    'civic_criminal_heritage'           : {
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
    'civic_private_military_companies'  : {
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
    'civic_indentured_assets'           : {
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
            'civics'     : [],
            'ethics'     : [],
        },
    },
    'civic_brand_loyalty'               : {
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
    'civic_public_relations_specialists': {
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
};