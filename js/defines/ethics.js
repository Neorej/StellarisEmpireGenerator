ethics = {
    'ethic_fanatic_authoritarian': {
        cost: 2,
        no  : [
            'ethic_authoritarian',
            'ethic_fanatic_egalitarian',
            'ethic_egalitarian',
        ],
    },
    'ethic_authoritarian'        : {
        cost: 1,
        no  : [
            'ethic_fanatic_authoritarian',
            'ethic_fanatic_egalitarian',
            'ethic_egalitarian',
        ],
    },
    'ethic_fanatic_egalitarian'  : {
        cost: 2,
        no  : [
            'ethic_egalitarian',
            'ethic_fanatic_authoritarian',
            'ethic_authoritarian',
        ],
    },
    'ethic_egalitarian'          : {
        cost: 1,
        no  : [
            'ethic_fanatic_egalitarian',
            'ethic_fanatic_authoritarian',
            'ethic_authoritarian',
        ],
    },
    'ethic_fanatic_xenophobe'    : {
        cost: 2,
        no  : [
            'ethic_xenophobe',
            'ethic_fanatic_xenophile',
            'ethic_xenophile',
        ],
    },
    'ethic_xenophobe'            : {
        cost: 1,
        no  : [
            'ethic_fanatic_xenophobe',
            'ethic_fanatic_xenophile',
            'ethic_xenophile',
        ],
    },
    'ethic_fanatic_xenophile'    : {
        cost: 2,
        no  : [
            'ethic_xenophile',
            'ethic_fanatic_xenophobe',
            'ethic_xenophobe',
        ],
    },
    'ethic_xenophile'            : {
        cost: 1,
        no  : [
            'ethic_fanatic_xenophile',
            'ethic_fanatic_xenophobe',
            'ethic_xenophobe',
        ],
    },
    'ethic_fanatic_militarist'   : {
        cost: 2,
        no  : [
            'ethic_militarist',
            'ethic_fanatic_pacifist',
            'ethic_pacifist',
        ],
    },
    'ethic_militarist'           : {
        cost: 1,
        no  : [
            'ethic_fanatic_militarist',
            'ethic_fanatic_pacifist',
            'ethic_pacifist',
        ],
    },
    'ethic_fanatic_pacifist'     : {
        cost: 2,
        no  : [
            'ethic_pacifist',
            'ethic_fanatic_militarist',
            'ethic_militarist',
        ],
    },
    'ethic_pacifist'             : {
        cost: 1,
        no  : [
            'ethic_fanatic_pacifist',
            'ethic_fanatic_militarist',
            'ethic_militarist',
        ],
    },
    'ethic_fanatic_spiritualist' : {
        cost: 2,
        no  : [
            'ethic_fanatic_materialist',
            'ethic_spiritualist',
            'ethic_materialist',
        ],
    },
    'ethic_spiritualist'         : {
        cost: 1,
        no  : [
            'ethic_fanatic_spiritualist',
            'ethic_fanatic_materialist',
            'ethic_materialist',
        ],
    },
    'ethic_fanatic_materialist'  : {
        cost: 2,
        no  : [
            'ethic_materialist',
            'ethic_fanatic_spiritualist',
            'ethic_spiritualist',
        ],
    },
    'ethic_materialist'          : {
        cost: 1,
        no  : [
            'ethic_fanatic_materialist',
            'ethic_fanatic_spiritualist',
            'ethic_spiritualist',
        ],
    },
    'ethic_gestalt_consciousness': {
        cost: 3,
        no  : [],
    },
};