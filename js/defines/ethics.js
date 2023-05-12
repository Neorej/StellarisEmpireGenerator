ethics = {
    'ethic_fanatic_authoritarian': {
        cost                : 2,
        incompatible_ethics : [
            'ethic_authoritarian',
            'ethic_fanatic_egalitarian',
            'ethic_egalitarian',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
        ],
    },
    'ethic_authoritarian'        : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_authoritarian',
            'ethic_fanatic_egalitarian',
            'ethic_egalitarian',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_egalitarian'  : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_egalitarian',
            'ethic_fanatic_authoritarian',
            'ethic_authoritarian',
        ],
        required_authorities: [
            'auth_democratic',
        ],
    },
    'ethic_egalitarian'          : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_egalitarian',
            'ethic_fanatic_authoritarian',
            'ethic_authoritarian',
        ],
        required_authorities: [
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_xenophobe'    : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_xenophobe',
            'ethic_fanatic_xenophile',
            'ethic_xenophile',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_xenophobe'            : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_xenophobe',
            'ethic_fanatic_xenophile',
            'ethic_xenophile',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_xenophile'    : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_xenophile',
            'ethic_fanatic_xenophobe',
            'ethic_xenophobe',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_xenophile'            : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_xenophile',
            'ethic_fanatic_xenophobe',
            'ethic_xenophobe',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_militarist'   : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_militarist',
            'ethic_fanatic_pacifist',
            'ethic_pacifist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_militarist'           : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_militarist',
            'ethic_fanatic_pacifist',
            'ethic_pacifist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_pacifist'     : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_pacifist',
            'ethic_fanatic_militarist',
            'ethic_militarist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_pacifist'             : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_pacifist',
            'ethic_fanatic_militarist',
            'ethic_militarist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_spiritualist' : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_fanatic_materialist',
            'ethic_spiritualist',
            'ethic_materialist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_spiritualist'         : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_spiritualist',
            'ethic_fanatic_materialist',
            'ethic_materialist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_fanatic_materialist'  : {
        cost                : 2,
        incompatible_ethics : [
            'ethic_materialist',
            'ethic_fanatic_spiritualist',
            'ethic_spiritualist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    'ethic_materialist'          : {
        cost                : 1,
        incompatible_ethics : [
            'ethic_fanatic_materialist',
            'ethic_fanatic_spiritualist',
            'ethic_spiritualist',
        ],
        required_authorities: [
            'auth_dictatorial',
            'auth_imperial',
            'auth_democratic',
            'auth_oligarchic',
            'auth_corporate',
        ],
    },
    // ethic_gestalt_consciousness is set based on the selected authority and is therefore never picked randomly
    //'ethic_gestalt_consciousness': {
    //    cost: 3,
    //    no  : [],
    //    required_authorities: [
    //        'auth_hive_mind',
    //        'auth_machine_intelligence',
    //    ],
    //},
};