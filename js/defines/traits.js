traits = {
    'trait_agrarian'            : {
        cost: 2,
        no  : [],
    },
    'trait_ingenious'           : {
        cost: 2,
        no  : [],
    },
    'trait_industrious'         : {
        cost: 2,
        no  : [],
    },
    'trait_intelligent'         : {
        cost: 2,
        no  : [
            'trait_nerve_stapled',
            'trait_erudite',
            'trait_enigmatic_intelligence_poor',
        ],
    },
    'trait_thrifty'             : {
        cost: 2,
        no  : ['trait_hive_mind'],
    },
    'trait_natural_engineers'   : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
        ],
    },
    'trait_natural_physicists'  : {
        cost: 1,
        no  : [
            'trait_natural_engineers',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
        ],
    },
    'trait_natural_sociologists': {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_engineers',
            'trait_nerve_stapled',
        ],
    },
    'trait_extremely_adaptive'  : {
        cost: 4,
        no  : [
            'trait_nonadaptive',
            'trait_adaptive',
            'trait_robust',
            'trait_adaptive_lithoid', // ??
        ],
    },
    'trait_adaptive'            : {
        cost: 2,
        no  : [
            'trait_nonadaptive',
            'trait_extremely_adaptive',
            'trait_robust',
            'trait_adaptive_lithoid', // ??
        ],
    },
    'trait_nonadaptive'         : {
        cost: -1,
        no  : [
            'trait_adaptive',
            'trait_extremely_adaptive',
            'trait_robust',
            'trait_adaptive_lithoid', // ??
        ],
    },
    'trait_rapid_breeders'      : {
        cost: 2,
        no  : [
            'trait_slow_breeders',
            'trait_fertile',
            'trait_rapid_breeders_lithoid', // ??
        ],
    },
    'trait_slow_breeders'       : {
        cost: -2,
        no  : [
            'trait_rapid_breeders',
            'trait_fertile',
            'trait_rapid_breeders_lithoid', // ??
        ],
    },
    'trait_talented'            : {
        cost: 1,
        no  : ['trait_nerve_stapled'],
    },
    'trait_quick_learners'      : {
        cost: 1,
        no  : [
            'trait_slow_learners',
            'trait_syncretic_proles',
        ],
    },
    'trait_slow_learners'       : {
        cost: -1,
        no  : [
            'trait_quick_learners',
            'trait_enigmatic_intelligence',
        ],
    },
    'trait_traditional'         : {
        cost: 1,
        no  : ['trait_quarrelsome'],
    },
    'trait_quarrelsome'         : {
        cost: -1,
        no  : ['trait_traditional'],
    },
    'trait_docile'              : {
        cost: 2,
        no  : ['trait_unruly'],
    },
    'trait_unruly'              : {
        cost: -2,
        no  : ['trait_docile'],
    },
    'trait_very_strong'         : {
        cost: 3,
        no  : [
            'trait_weak',
            'trait_strong',
        ],
    },
    'trait_strong'              : {
        cost: 1,
        no  : [
            'trait_weak',
            'trait_very_strong',
        ],
    },
    'trait_weak'                : {
        cost: -1,
        no  : [
            'trait_strong',
            'trait_very_strong',
        ],
    },
    'trait_nomadic'             : {
        cost: 1,
        no  : ['trait_sedentary'],
    },
    'trait_sedentary'           : {
        cost: -1,
        no  : ['trait_nomadic'],
    },
    'trait_communal'            : {
        cost: 1,
        no  : ['trait_solitary'],
    },
    'trait_solitary'            : {
        cost: -1,
        no  : ['trait_communal'],
    },
    'trait_charismatic'         : {
        cost: 2,
        no  : ['trait_repugnant'],
    },
    'trait_repugnant'           : {
        cost: -2,
        no  : ['trait_charismatic'],
    },
    'trait_conformists'         : {
        cost: 2,
        no  : ['trait_deviants'],
    },
    'trait_deviants'            : {
        cost: -1,
        no  : ['trait_conformists'],
    },
    'trait_venerable'           : {
        cost: 4,
        no  : [
            'trait_enduring',
            'trait_fleeting',
            'trait_fleeting_lithoid',
        ],
    },
    'trait_enduring'            : {
        cost: 1,
        no  : [
            'trait_venerable',
            'trait_fleeting',
            'trait_fleeting_lithoid',
        ],
    },
    'trait_fleeting'            : {
        cost: -1,
        no  : [
            'trait_venerable',
            'trait_enduring',
            'trait_fleeting_lithoid', // ?
        ],
    },
    'trait_decadent'            : {
        cost: -1,
        no  : [
            'trait_hive_mind',
            'trait_syncretic_proles,',
        ],
    },
    'trait_resilient'           : {
        cost: 1,
        no  : [],
    },
    'trait_conservational'      : {
        cost: 1,
        no  : ['trait_wasteful'],
    },
    'trait_wasteful'            : {
        cost: -1,
        no  : ['trait_conservational'],
    },
    'trait_inorganic_breath'       : {
        cost: 3,
        no  : [],
    },
    'trait_noxious'                : {
        cost: 1,
        no  : [],
    },
};

lithoid_traits = {
    'trait_ingenious'                  : {
        cost: 2,
        no  : [],
    },
    'trait_industrious'                : {
        cost: 2,
        no  : [],
    },
    'trait_intelligent'                : {
        cost: 2,
        no  : [
            'trait_nerve_stapled',
            'trait_erudite',
            'trait_enigmatic_intelligence_poor',
        ],
    },
    'trait_thrifty'                    : {
        cost: 2,
        no  : ['trait_hive_mind'],
    },
    'trait_natural_engineers'          : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
        ],
    },
    'trait_natural_physicists'         : {
        cost: 1,
        no  : [
            'trait_natural_engineers',
            'trait_natural_sociologists',
            'trait_nerve_stapled',
        ],
    },
    'trait_natural_sociologists'       : {
        cost: 1,
        no  : [
            'trait_natural_physicists',
            'trait_natural_engineers',
            'trait_nerve_stapled',
        ],
    },
    'trait_talented'                   : {
        cost: 1,
        no  : ['trait_nerve_stapled'],
    },
    'trait_quick_learners'             : {
        cost: 1,
        no  : [
            'trait_slow_learners',
            'trait_syncretic_proles',
        ],
    },
    'trait_slow_learners'              : {
        cost: -1,
        no  : [
            'trait_quick_learners',
            'trait_enigmatic_intelligence',
        ],
    },
    'trait_traditional'                : {
        cost: 1,
        no  : ['trait_quarrelsome'],
    },
    'trait_quarrelsome'                : {
        cost: -1,
        no  : ['trait_traditional'],
    },
    'trait_docile'                     : {
        cost: 2,
        no  : ['trait_unruly'],
    },
    'trait_unruly'                     : {
        cost: -2,
        no  : ['trait_docile'],
    },
    'trait_very_strong'                : {
        cost: 3,
        no  : [
            'trait_weak',
            'trait_strong',
        ],
    },
    'trait_strong'                     : {
        cost: 1,
        no  : [
            'trait_weak',
            'trait_very_strong',
        ],
    },
    'trait_weak'                       : {
        cost: -1,
        no  : [
            'trait_strong',
            'trait_very_strong',
        ],
    },
    'trait_nomadic'                    : {
        cost: 1,
        no  : ['trait_sedentary'],
    },
    'trait_sedentary'                  : {
        cost: -1,
        no  : ['trait_nomadic'],
    },
    'trait_communal'                   : {
        cost: 1,
        no  : ['trait_solitary'],
    },
    'trait_solitary'                   : {
        cost: -1,
        no  : ['trait_communal'],
    },
    'trait_charismatic'                : {
        cost: 2,
        no  : ['trait_repugnant'],
    },
    'trait_repugnant'                  : {
        cost: -2,
        no  : ['trait_charismatic'],
    },
    'trait_conformists'                : {
        cost: 2,
        no  : ['trait_deviants'],
    },
    'trait_deviants'                   : {
        cost: -1,
        no  : ['trait_conformists'],
    },
    'trait_venerable'                  : {
        cost: 4,
        no  : [
            'trait_enduring',
            'trait_fleeting',
            'trait_fleeting_lithoid',
        ],
    },
    'trait_enduring'                   : {
        cost: 1,
        no  : [
            'trait_venerable',
            'trait_fleeting',
            'trait_fleeting_lithoid',
        ],
    },
    'trait_fleeting_lithoid'           : {
        cost: -1,
        no  : [
            'trait_venerable',
            'trait_enduring',
            'trait_fleeting', // ?
        ],
    },
    'trait_decadent'                   : {
        cost: -1,
        no  : ['trait_syncretic_proles'],
    },
    'trait_resilient'                  : {
        cost: 1,
        no  : [],
    },
    'trait_conservational'             : {
        cost: 1,
        no  : ['trait_wasteful'],
    },
    'trait_wasteful'                   : {
        cost: -1,
        no  : ['trait_conservational'],
    },
    'trait_lithoid_scintillating'      : {
        cost: 2,
        no  : [
            'trait_lithoid_volatile_excretions',
            'trait_lithoid_gaseous_byproducts',
        ],
    },
    'trait_lithoid_gaseous_byproducts' : {
        cost: 2,
        no  : [
            'trait_lithoid_volatile_excretions',
            'trait_lithoid_scintillating',
        ],
    },
    'trait_lithoid_volatile_excretions': {
        cost: 2,
        no  : [
            'trait_lithoid_gaseous_byproducts',
            'trait_lithoid_scintillating',
        ],
    },
};

machine_traits = {
    'trait_robot_power_drills'         : {
        cost: 2,
        no  : [],
    },
    'trait_robot_superconductive'      : {
        cost: 2,
        no  : [],
    },
    'trait_robot_efficient_processors' : {
        cost: 3,
        no  : [],
    },
    'trait_robot_logic_engines'        : {
        cost: 2,
        no  : [],
    },
    'trait_robot_double_jointed'       : {
        cost: 1,
        no  : ['trait_robot_bulky'],
    },
    'trait_robot_bulky'                : {
        cost: -1,
        no  : ['trait_robot_double_jointed'],
    },
    'trait_robot_enhanced_memory'      : {
        cost: 2,
        no  : [],
    },
    'trait_robot_emotion_emulators'    : {
        cost: 1,
        no  : ['trait_robot_uncanny'],
    },
    'trait_robot_uncanny'              : {
        cost: -1,
        no  : ['trait_robot_emotion_emulators'],
    },
    'trait_robot_durable'              : {
        cost: 1,
        no  : ['trait_robot_high_maintenance'],
    },
    'trait_robot_high_maintenance'     : {
        cost: -1,
        no  : ['trait_robot_durable'],
    },
    'trait_robot_learning_algorithms'  : {
        cost: 1,
        no  : ['trait_robot_repurposed_hardware'],
    },
    'trait_robot_repurposed_hardware'  : {
        cost: -1,
        no  : ['trait_robot_learning_algorithms'],
    },
    'trait_robot_mass_produced'        : {
        cost: 1,
        no  : ['trait_robot_custom_made'],
    },
    'trait_robot_custom_made'          : {
        cost: -1,
        no  : ['trait_robot_mass_produced'],
    },
    'trait_robot_recycled'             : {
        cost: 2,
        no  : ['trait_robot_luxurious'],
    },
    'trait_robot_luxurious'            : {
        cost: -2,
        no  : ['trait_robot_recycled'],
    },
    'trait_robot_streamlined_protocols': {
        cost: 2,
        no  : ['trait_robot_high_bandwidth'],
    },
    'trait_robot_high_bandwidth'       : {
        cost: -2,
        no  : ['trait_robot_streamlined_protocols'],
    },
};

robot_traits = {
    'trait_robot_power_drills'         : {
        cost: 2,
        no  : [],
    },
    'trait_robot_harvesters'           : {
        cost: 2,
        no  : [],
    },
    'trait_robot_superconductive'      : {
        cost: 2,
        no  : [],
    },
    'trait_robot_efficient_processors' : {
        cost: 3,
        no  : [],
    },
    'trait_robot_logic_engines'        : {
        cost: 2,
        no  : [],
    },
    'trait_robot_loyalty_circuits'     : {
        cost: 2,
        no  : [],
    },
    'trait_robot_double_jointed'       : {
        cost: 1,
        no  : ['trait_robot_bulky'],
    },
    'trait_robot_bulky'                : {
        cost: -1,
        no  : ['trait_robot_double_jointed'],
    },
    'trait_robot_enhanced_memory'      : {
        cost: 2,
        no  : [],
    },
    'trait_robot_durable'              : {
        cost: 1,
        no  : ['trait_robot_high_maintenance'],
    },
    'trait_robot_high_maintenance'     : {
        cost: -1,
        no  : ['trait_robot_durable'],
    },
    'trait_robot_learning_algorithms'  : {
        cost: 1,
        no  : ['trait_robot_repurposed_hardware'],
    },
    'trait_robot_repurposed_hardware'  : {
        cost: -1,
        no  : ['trait_robot_learning_algorithms'],
    },
    'trait_robot_mass_produced'        : {
        cost: 1,
        no  : ['trait_robot_custom_made'],
    },
    'trait_robot_custom_made'          : {
        cost: -1,
        no  : ['trait_robot_mass_produced'],
    },
    'trait_robot_recycled'             : {
        cost: 2,
        no  : ['trait_robot_luxurious'],
    },
    'trait_robot_luxurious'            : {
        cost: -2,
        no  : ['trait_robot_recycled'],
    },
    'trait_robot_propaganda_machines'  : {
        cost: 1,
        no  : [],
    },
    'trait_robot_streamlined_protocols': {
        cost: 2,
        no  : ['trait_robot_high_bandwidth'],
    },
    'trait_robot_high_bandwidth'       : {
        cost: -2,
        no  : ['trait_robot_streamlined_protocols'],
    },
};

plant_traits = {
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
        ],
    },
};

ocean_traits = {
    'trait_aquatic': {
        cost: 1,
        no  : [
            'trait_cave_dweller',
        ],
    },
};

overtuned_traits = {
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
        ],
    },
};

biological_overtuned_traits = {
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

// Traits that are incompatible with syncretic species (through the forced "Serviles" trait, trait_syncretic_proles)
syncretic_disabled_traits = [
    'trait_natural_engineers',
    'trait_natural_physicists',
    'trait_natural_sociologists',
    'trait_intelligent',
    'trait_talented',
];