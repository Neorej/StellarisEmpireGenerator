basegame_traits = {
    'trait_agrarian'                          : {
        cost: 2,
        no  : ['trait_invasive'],
    },
    'trait_ingenious'                         : {
        cost: 2,
        no  : ['trait_invasive'],
    },
    'trait_industrious'                       : {
        cost: 2,
        no  : ['trait_invasive'],
    },
    'trait_intelligent'                       : {
        cost: 2,
        no  : [
            'trait_nerve_stapled',
            'trait_erudite',
            'trait_enigmatic_intelligence_poor',
            'trait_invasive',
        ],
    },
    'trait_thrifty'                           : {
        cost: 2,
        no  : [
            'trait_hive_mind',
            'trait_invasive',
        ],
    },
    'trait_natural_engineers'                 : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
            'trait_invasive',
        ],
    },
    'trait_natural_physicists'                : {
        cost: 1,
        no  : [
            'trait_natural_engineers',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
            'trait_invasive',
        ],
    },
    'trait_natural_sociologists'              : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_engineers',
            'trait_nerve_stapled',
            'trait_invasive',
        ],
    },
    'trait_extremely_adaptive'                : {
        cost: 4,
        no  : [
            'trait_nonadaptive',
            'trait_adaptive',
            'trait_robust',
            'trait_adaptive_lithoid', // ??
            'trait_invasive',
            'trait_pathogenic_genes',
        ],
    },
    'trait_adaptive'                          : {
        cost: 2,
        no  : [
            'trait_nonadaptive',
            'trait_extremely_adaptive',
            'trait_robust',
            'trait_adaptive_lithoid', // ??
            'trait_invasive',
            'trait_pathogenic_genes',
        ],
    },
    'trait_nonadaptive'                       : {
        cost: -1,
        no  : [
            'trait_adaptive',
            'trait_extremely_adaptive',
            'trait_robust',
            'trait_adaptive_lithoid', // ??
            'trait_pathogenic_genes',
        ],
    },
    'trait_rapid_breeders'                    : {
        cost: 2,
        no  : [
            'trait_slow_breeders',
            'trait_fertile',
            'trait_plantoid_budding',
            'trait_rapid_breeders_lithoid',
            'trait_lithoid_budding',
            'trait_vat_grown',
            'trait_tiyanki',
            'trait_humanoid_existential_iteroparity',
            'trait_invasive',
            'trait_pathogenic_genes',
        ],
    },
    'trait_slow_breeders'                     : {
        cost: -2,
        no  : [
            'trait_rapid_breeders',
            'trait_fertile',
            'trait_plantoid_budding',
            'trait_rapid_breeders_lithoid',
            'trait_plantoid_budding',
            'trait_lithoid_budding',
            'trait_vat_grown',
            'trait_tiyanki',
            'trait_humanoid_psychological_infertility',
            'trait_humanoid_existential_iteroparity',
            'trait_pathogenic_genes',
        ],
    },
    'trait_talented'                          : {
        cost: 1,
        no  : [
            'trait_nerve_stapled',
            'trait_humanoid_jinxed',
            'trait_invasive',
        ],
    },
    'trait_quick_learners'                    : {
        cost: 1,
        no  : [
            'trait_slow_learners',
            'trait_syncretic_proles',
            'trait_invasive',
        ],
    },
    'trait_slow_learners'                     : {
        cost: -1,
        no  : [
            'trait_quick_learners',
            'trait_enigmatic_intelligence',
        ],
    },
    'trait_traditional'                       : {
        cost: 1,
        no  : [
            'trait_quarrelsome',
            'trait_invasive',
        ],
    },
    'trait_quarrelsome'                       : {
        cost: -1,
        no  : ['trait_traditional'],
    },
    'trait_docile'                            : {
        cost: 2,
        no  : [
            'trait_unruly',
            'trait_invasive',
        ],
    },
    'trait_unruly'                            : {
        cost: -2,
        no  : ['trait_docile'],
    },
    'trait_very_strong'                       : {
        cost: 3,
        no  : [
            'trait_weak',
            'trait_strong',
            'trait_invasive',
        ],
    },
    'trait_strong'                            : {
        cost: 1,
        no  : [
            'trait_weak',
            'trait_very_strong',
            'trait_invasive',
        ],
    },
    'trait_weak'                              : {
        cost: -1,
        no  : [
            'trait_strong',
            'trait_very_strong',
            'trait_perfected_genes',
        ],
    },
    'trait_nomadic'                           : {
        cost: 1,
        no  : [
            'trait_sedentary',
            'trait_invasive',
            'trait_pathogenic_genes',
        ],
    },
    'trait_sedentary'                         : {
        cost: -1,
        no  : [
            'trait_nomadic',
            'trait_stargazer',
            'trait_pathogenic_genes',
        ],
    },
    'trait_communal'                          : {
        cost: 1,
        no  : [
            'trait_solitary',
            'trait_invasive',
        ],
    },
    'trait_solitary'                          : {
        cost: -1,
        no  : ['trait_communal'],
    },
    'trait_charismatic'                       : {
        cost: 2,
        no  : [
            'trait_repugnant',
            'trait_invasive',
        ],
    },
    'trait_repugnant'                         : {
        cost: -2,
        no  : ['trait_charismatic'],
    },
    'trait_conformists'                       : {
        cost: 2,
        no  : [
            'trait_deviants',
            'trait_invasive',
        ],
    },
    'trait_deviants'                          : {
        cost: -1,
        no  : ['trait_conformists'],
    },
    'trait_venerable'                         : {
        cost: 4,
        no  : [
            'trait_enduring',
            'trait_fleeting',
            'trait_fleeting_lithoid',
            'trait_invasive',
        ],
    },
    'trait_enduring'                          : {
        cost: 1,
        no  : [
            'trait_venerable',
            'trait_fleeting',
            'trait_fleeting_lithoid',
            'trait_invasive',
        ],
    },
    'trait_fleeting'                          : {
        cost: -1,
        no  : [
            'trait_venerable',
            'trait_enduring',
            'trait_fleeting_lithoid',
            'trait_perfected_genes',
        ],
    },
    'trait_decadent'                          : {
        cost: -1,
        no  : [
            'trait_hive_mind',
            'trait_syncretic_proles,',
        ],
    },
    'trait_resilient'                         : {
        cost: 1,
        no  : ['trait_invasive'],
    },
    'trait_conservational'                    : {
        cost: 1,
        no  : [
            'trait_wasteful',
            'trait_invasive',
        ],
    },
    'trait_wasteful'                          : {
        cost: -1,
        no  : ['trait_conservational'],
    },
    'trait_inorganic_breath'                  : {
        cost: 3,
        no  : ['trait_invasive'],
    },
    'trait_noxious'                           : {
        cost: 1,
        no  : ['trait_invasive'],
    },
    'trait_humanoid_existential_iteroparity'  : {
        cost: 2,
        no  : [
            'trait_humanoid_psychological_infertility',
            'trait_rapid_breeders',
            'trait_fertile',
            'trait_rapid_breeders_lithoid',
            'trait_plantoid_budding',
            'trait_lithoid_budding',
            'trait_vat_grown',
            'trait_tiyanki',
            'trait_slow_breeders',
            'trait_invasive',
            'trait_pathogenic_genes',
        ],
    },
    'trait_humanoid_psychological_infertility': {
        cost: -2,
        no  : [
            'trait_humanoid_existential_iteroparity',
            'trait_slow_breeders',
            'trait_vat_grown',
            'trait_lithoid',
            'trait_pathogenic_genes',
            'trait_necrophage',
        ],
    },
    'trait_humanoid_jinxed'                   : {
        cost: -1,
        no  : [
            'trait_talented',
            'trait_humanoid_jinxed',
        ],
    },
};

basegame_lithoid_traits = {
    'trait_ingenious'                       : {
        cost: 2,
        no  : [],
    },
    'trait_industrious'                     : {
        cost: 2,
        no  : [],
    },
    'trait_intelligent'                     : {
        cost: 2,
        no  : [
            'trait_nerve_stapled',
            'trait_erudite',
            'trait_enigmatic_intelligence_poor',
        ],
    },
    'trait_thrifty'                         : {
        cost: 2,
        no  : ['trait_hive_mind'],
    },
    'trait_natural_engineers'               : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
        ],
    },
    'trait_natural_physicists'              : {
        cost: 1,
        no  : [
            'trait_natural_engineers',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
        ],
    },
    'trait_natural_sociologists'            : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_engineers',
            'trait_nerve_stapled',
        ],
    },
    'trait_talented'                        : {
        cost: 1,
        no  : [
            'trait_nerve_stapled',
            'trait_humanoid_jinxed',
        ],
    },
    'trait_quick_learners'                  : {
        cost: 1,
        no  : [
            'trait_slow_learners',
            'trait_syncretic_proles',
        ],
    },
    'trait_slow_learners'                   : {
        cost: -1,
        no  : [
            'trait_quick_learners',
            'trait_enigmatic_intelligence',
        ],
    },
    'trait_traditional'                     : {
        cost: 1,
        no  : ['trait_quarrelsome'],
    },
    'trait_quarrelsome'                     : {
        cost: -1,
        no  : ['trait_traditional'],
    },
    'trait_docile'                          : {
        cost: 2,
        no  : ['trait_unruly'],
    },
    'trait_unruly'                          : {
        cost: -2,
        no  : ['trait_docile'],
    },
    'trait_very_strong'                     : {
        cost: 3,
        no  : [
            'trait_weak',
            'trait_strong',
        ],
    },
    'trait_strong'                          : {
        cost: 1,
        no  : [
            'trait_weak',
            'trait_very_strong',
        ],
    },
    'trait_weak'                            : {
        cost: -1,
        no  : [
            'trait_strong',
            'trait_very_strong',
            'trait_perfected_genes',
        ],
    },
    'trait_nomadic'                         : {
        cost: 1,
        no  : ['trait_sedentary'],
    },
    'trait_sedentary'                       : {
        cost: -1,
        no  : [
            'trait_nomadic',
            'trait_stargazer',
        ],
    },
    'trait_communal'                        : {
        cost: 1,
        no  : ['trait_solitary'],
    },
    'trait_solitary'                        : {
        cost: -1,
        no  : ['trait_communal'],
    },
    'trait_charismatic'                     : {
        cost: 2,
        no  : ['trait_repugnant'],
    },
    'trait_repugnant'                       : {
        cost: -2,
        no  : ['trait_charismatic'],
    },
    'trait_conformists'                     : {
        cost: 2,
        no  : ['trait_deviants'],
    },
    'trait_deviants'                        : {
        cost: -1,
        no  : ['trait_conformists'],
    },
    'trait_venerable'                       : {
        cost: 4,
        no  : [
            'trait_enduring',
            'trait_fleeting',
            'trait_fleeting_lithoid',
        ],
    },
    'trait_enduring'                        : {
        cost: 1,
        no  : [
            'trait_venerable',
            'trait_fleeting',
            'trait_fleeting_lithoid',
        ],
    },
    'trait_fleeting_lithoid'                : {
        cost: -1,
        no  : [
            'trait_venerable',
            'trait_enduring',
            'trait_fleeting', // ?
        ],
    },
    'trait_decadent'                        : {
        cost: -1,
        no  : ['trait_syncretic_proles'],
    },
    'trait_resilient'                       : {
        cost: 1,
        no  : [],
    },
    'trait_conservational'                  : {
        cost: 1,
        no  : ['trait_wasteful'],
    },
    'trait_wasteful'                        : {
        cost: -1,
        no  : ['trait_conservational'],
    },
    'trait_lithoid_scintillating'           : {
        cost: 2,
        no  : [
            'trait_lithoid_volatile_excretions',
            'trait_lithoid_gaseous_byproducts',
        ],
    },
    'trait_lithoid_gaseous_byproducts'      : {
        cost: 2,
        no  : [
            'trait_lithoid_volatile_excretions',
            'trait_lithoid_scintillating',
        ],
    },
    'trait_lithoid_volatile_excretions'     : {
        cost: 2,
        no  : [
            'trait_lithoid_gaseous_byproducts',
            'trait_lithoid_scintillating',
        ],
    },
    'trait_humanoid_existential_iteroparity': {
        cost: 2,
        no  : [
            'trait_humanoid_psychological_infertility',
            'trait_rapid_breeders',
            'trait_fertile',
            'trait_rapid_breeders_lithoid',
            'trait_plantoid_budding',
            'trait_lithoid_budding',
            'trait_vat_grown',
            'trait_tiyanki',
            'trait_pathogenic_genes',
        ],
    },
    'trait_humanoid_jinxed'                 : {
        cost: -1,
        no  : [
            'trait_talented',
        ],
    },
};

basegame_machine_traits = {
    'trait_auto_mod_robotic'             : {
        cost: 3,
        no  : [],
    },
    'trait_robot_power_drills'           : {
        cost: 2,
        no  : [],
    },
    'trait_robot_harvesters'             : {
        cost: 2,
        no  : [],
    },
    'trait_robot_superconductive'        : {
        cost: 2,
        no  : [],
    },
    'trait_robot_efficient_processors'   : {
        cost: 3,
        no  : [],
    },
    'trait_robot_logic_engines'          : {
        cost: 2,
        no  : [],
    },
    'trait_robot_loyalty_circuits'       : {
        cost: 2,
        no  : [],
    },
    'trait_robot_double_jointed'         : {
        cost: 1,
        no  : ['trait_robot_bulky'],
    },
    'trait_robot_bulky'                  : {
        cost: -1,
        no  : ['trait_robot_double_jointed'],
    },
    'trait_robot_enhanced_memory'        : {
        cost: 2,
        no  : [],
    },
    'trait_robot_emotion_emulators'      : {
        cost: 1,
        no  : ['trait_robot_uncanny'],
    },
    'trait_robot_uncanny'                : {
        cost: -1,
        no  : ['trait_robot_emotion_emulators'],
    },
    'trait_robot_durable'                : {
        cost: 1,
        no  : ['trait_robot_high_maintenance'],
    },
    'trait_robot_high_maintenance'       : {
        cost: -1,
        no  : ['trait_robot_durable'],
    },
    'trait_robot_learning_algorithms'    : {
        cost: 1,
        no  : ['trait_robot_repurposed_hardware'],
    },
    'trait_robot_repurposed_hardware'    : {
        cost: -1,
        no  : ['trait_robot_learning_algorithms'],
    },
    'trait_robot_mass_produced'          : {
        cost: 1,
        no  : ['trait_robot_custom_made'],
    },
    'trait_robot_custom_made'            : {
        cost: -1,
        no  : ['trait_robot_mass_produced'],
    },
    'trait_robot_recycled'               : {
        cost: 2,
        no  : ['trait_robot_luxurious'],
    },
    'trait_robot_luxurious'              : {
        cost: -2,
        no  : ['trait_robot_recycled'],
    },
    'trait_robot_propaganda_machines'    : {
        cost: 1,
        no  : ['trait_robot_quarrelsome'],
    },
    'trait_robot_streamlined_protocols'  : {
        cost: 2,
        no  : ['trait_robot_high_bandwidth'],
    },
    'trait_robot_high_bandwidth'         : {
        cost: -2,
        no  : ['trait_robot_streamlined_protocols'],
    },
    'trait_robot_trading_algorithms'     : {
        cost: 2,
        no  : ['trait_robot_scarcity_algorithms'],
    },
    'trait_robot_quarrelsome'            : {
        cost: -1,
        no  : ['trait_robot_scarcity_algorithms'],
    },
    'trait_robot_deviants'               : {
        cost: -1,
        no  : [],
    },
    'trait_robot_decadent'               : {
        cost: -1,
        no  : [],
    },
    'trait_robot_wasteful'               : {
        cost: -1,
        no  : [],
    },
    'trait_robot_artificial_engineers'   : {
        cost: 1,
        no  : [
            'trait_robot_artificial_sociologists',
            'trait_robot_artificial_physicists',
        ],
    },
    'trait_robot_artificial_physicists'  : {
        cost: 1,
        no  : [
            'trait_robot_artificial_sociologists',
            'trait_robot_artificial_engineers',
        ],
    },
    'trait_robot_artificial_sociologists': {
        cost: 1,
        no  : [
            'trait_robot_artificial_physicists',
            'trait_robot_artificial_engineers',
        ],
    },
    'trait_robot_integrated_weaponry'    : {
        cost: 2,
        no  : ['trait_robot_delicate_frames'],
    },
    'trait_robot_delicate_frames'        : {
        cost: -1,
        no  : ['trait_robot_integrated_weaponry'],
    },
    'trait_robot_scarcity_algorithms'    : {
        cost: -1,
        no  : [
            'trait_robot_trading_algorithms',
            'trait_robot_matrix_trading',
        ],
    },
    'trait_robot_immortality'            : {
        cost: 4,
        no  : [],
    },
};

// Some robots traits are not available gestalt consciousness robots (since 3.12)
machine_gestalt_disabled_traits = [
    'trait_robot_loyalty_circuits',
    'trait_robot_domestic_protocols',
    'trait_robot_trading_algorithms',
    'trait_robot_quarrelsome',
    'trait_robot_deviants',
    'trait_robot_decadent',
    'trait_robot_wasteful',
    'trait_robot_scarcity_algorithms',
    'trait_robot_matrix_trading',
];

// Machines get a single free trait
basegame_machine_background_traits = [
    'trait_robot_history_warbot',
    'trait_robot_history_artbot',
    'trait_robot_history_explorebot',
    'trait_robot_history_researchbot',
    'trait_robot_history_resourcebot',
    'trait_robot_history_chatbot',
];

basegame_plant_traits = {
    'trait_plantoid_phototrophic': {
        cost: 1,
        no  : [
            'trait_plantoid_radiotrophic',
            'trait_cave_dweller',
        ],
    },
    'trait_plantoid_radiotrophic': {
        cost: 2,
        no  : [
            'trait_plantoid_phototrophic',
        ],
    },
    'trait_plantoid_budding'     : {
        cost: 2,
        no  : [
            'trait_slow_breeders',
            'trait_rapid_breeders',
            'trait_rapid_breeders_lithoid',
            'trait_necrophage',
            'trait_clone_soldier_infertile',
            'trait_clone_soldier_infertile_full_potential',
            'trait_humanoid_existential_iteroparity',
            'trait_pathogenic_genes',
        ],
    },
    'trait_invasive'             : {
        cost: 2,
        no  : [
            'trait_agrarian',
            'trait_ingenious',
            'trait_industrious',
            'trait_intelligent',
            'trait_thrifty',
            'trait_natural_engineers',
            'trait_natural_physicists',
            'trait_natural_sociologists',
            'trait_extremely_adaptive',
            'trait_adaptive',
            'trait_rapid_breeders',
            'trait_talented',
            'trait_quick_learners',
            'trait_traditional',
            'trait_docile',
            'trait_very_strong',
            'trait_strong',
            'trait_nomadic',
            'trait_communal',
            'trait_charismatic',
            'trait_conformists',
            'trait_venerable',
            'trait_enduring',
            'trait_resilient',
            'trait_conservational',
            'trait_noxious',
            'trait_inorganic_breath',
            'trait_humanoid_existential_iteroparity',
            'trait_incubator',
            'trait_delicious',
            'trait_nerve_stapled',
            'trait_fertile',
            'trait_robust',
            'trait_erudite',
            'trait_vat_grown',
            'trait_felsic',
            'trait_natural_machinist',
            'trait_drake_scaled',
            'trait_voidling',
            'trait_tiyanki',
            'trait_advanced_scintillating',
            'trait_advanced_gaseous_byproducts',
            'trait_advanced_volatile_excretions',
            'trait_exotic_metabolism',
        ],
    },
};

ocean_traits = {
    'trait_aquatic': {
        cost: 2,
        no  : [
            'trait_cave_dweller',
        ],
    },
};

basegame_overtuned_traits = {
    'trait_crack_miner'            : {
        cost: 1,
        no  : [],
    },
    'trait_technical_skill'        : {
        cost: 1,
        no  : [],
    },
    'trait_crafted_smiles'         : {
        cost: 1,
        no  : [],
    },
    'trait_low_maintenance'        : {
        cost: 1,
        no  : [],
    },
    'trait_artificial_intelligence': {
        cost: 1,
        no  : [],
    },
    'trait_gene_mentorship'        : {
        cost: 1,
        no  : [],
    },
    'trait_expressed_tradition'    : {
        cost: 1,
        no  : [],
    },
    'trait_elevated_synapses'      : {
        cost: 2,
        no  : [],
    },
    'trait_preplanned_growth'      : {
        cost: 2,
        no  : [],
    },
    'trait_excessive_endurance'    : {
        cost: 3,
        no  : [],
    },
    'trait_incubator'              : {
        cost: 2,
        no  : [
            'trait_slow_breeders',
            'trait_rapid_breeders',
            'trait_rapid_breeders_lithoid',
            'trait_fertile',
            'trait_plantoid_budding',
            'trait_lithoid_budding',
            'trait_invasive',
            'trait_pathogenic_genes',
        ],
    },
};

basegame_biological_overtuned_traits = {
    'trait_spliced_adaptability': {
        cost: 1,
        no  : [],
    },
    'trait_juiced_power'        : {
        cost: 1,
        no  : [],
    },
    'trait_farm_hands'          : {
        cost: 1,
        no  : [],
    },
};

// Traits that are incompatible with syncretic species (through the forced 'Serviles' trait, trait_syncretic_proles)
syncretic_disabled_traits = [
    'trait_natural_engineers',
    'trait_natural_physicists',
    'trait_natural_sociologists',
    'trait_intelligent',
    'trait_talented',
];

basegame_leader_traits = {
    'leader_trait_principled'           : {
        cost: 1,
        yes : {
            'class' : ['official'],
            'ethics': [],
        },
    },
    'leader_trait_fleet_organizer'      : {
        cost: 1,
        yes : {
            'class' : ['commander'],
            'ethics': [],
        },
    },
    'leader_trait_spycraft'             : {
        cost: 1,
        yes : {
            'class' : ['official'],
            'ethics': [],
        },
    },
    'leader_trait_spark_of_genius'      : {
        cost: 1,
        yes : {
            'class' : ['scientist'],
            'ethics': [],
        },
    },
    'trait_ruler_industrialist'         : {
        cost: 1,
        yes : {
            'class' : ['official', 'scientist'],
            'ethics': [],
        },
    },
    'trait_ruler_warlike'               : {
        cost: 1,
        yes : {
            'class' : ['commander'],
            'ethics': [],
        },
    },
    'trait_ruler_charismatic'           : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': [],
        },
    },
    'trait_ruler_logistic_understanding': {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': [],
        },
    },
    'trait_ruler_eye_for_talent'        : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': [],
        },
    },
    'trait_ruler_feedback_loop'         : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_gestalt_consciousness'],
        },
    },
};

basegame_paragon_traits = {
    'leader_trait_legendary_military_knowledge'  : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_militarist', 'ethic_fanatic_militarist'],
        },
    },
    'leader_trait_legendary_foe_hammer'          : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_militarist', 'ethic_fanatic_militarist'],
        },
    },
    'leader_trait_legendary_great_teacher'       : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_spiritualist', 'ethic_fanatic_spiritualist'],
        },
    },
    'leader_trait_legendary_pious_ascet'         : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_spiritualist', 'ethic_fanatic_spiritualist'],
        },
    },
    'leader_trait_legendary_commanding_presence' : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_authoritarian', 'ethic_fanatic_authoritarian'],
        },
    },
    'leader_trait_legendary_high_king'           : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_authoritarian', 'ethic_fanatic_authoritarian'],
        },
    },
    'leader_trait_legendary_gunboat_diplomacy'   : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_xenophile', 'ethic_fanatic_xenophile'],
        },
    },
    'leader_trait_legendary_scientific_diplomacy': {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_xenophile', 'ethic_fanatic_xenophile'],
        },
    },
    'leader_trait_legendary_autarky'             : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_pacifist', 'ethic_fanatic_pacifist'],
        },
    },
    'leader_trait_legendary_natural_ruler'       : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_pacifist', 'ethic_fanatic_pacifist'],
        },
    },
    'leader_trait_legendary_industry_titan'      : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_materialist', 'ethic_fanatic_materialist'],
        },
    },
    'leader_trait_legendary_great_inventor'      : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_materialist', 'ethic_fanatic_materialist'],
        },
    },
    'leader_trait_legendary_genetic_purist'      : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_xenophobe', 'ethic_fanatic_xenophobe'],
        },
    },
    'leader_trait_legendary_evervigilant'        : {
        cost: 1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_xenophobe', 'ethic_fanatic_xenophobe'],
        },
    },
};

basegame_bad_paragon_traits = {
    'leader_trait_legendary_unfriendly'     : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_xenophobe', 'ethic_fanatic_xenophobe'],
        },
    },
    'leader_trait_legendary_warmonger'      : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_militarist', 'ethic_fanatic_militarist'],
        },
    },
    'leader_trait_legendary_dreamlike'      : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_spiritualist', 'ethic_fanatic_spiritualist'],
        },
    },
    'leader_trait_legendary_harsh_ruler'    : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_authoritarian', 'ethic_fanatic_authoritarian'],
        },
    },
    'leader_trait_legendary_too_open'       : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_xenophile', 'ethic_fanatic_xenophile'],
        },
    },
    'leader_trait_legendary_hoplofobia'     : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_pacifist', 'ethic_fanatic_pacifist'],
        },
    },
    'leader_trait_legendary_bad_meritocracy': {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': ['ethic_materialist', 'ethic_fanatic_materialist'],
        },
    },
};

basegame_treasure_hunter_traits = {
    'leader_trait_buccaneer'     : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': [],
        },
    },
    'leader_trait_trailblazer'     : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': [],
        },
    },
    'leader_trait_treasure_hoarder'     : {
        cost: -1,
        yes : {
            'class' : ['scientist', 'official', 'commander'],
            'ethics': [],
        },
    },
};