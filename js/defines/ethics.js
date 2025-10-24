basegame_ethics = {
  "ethic_fanatic_authoritarian": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_authoritarian",
      "ethic_egalitarian",
      "ethic_fanatic_egalitarian"
    ],
    "required_authorities": [
      "auth_dictatorial",
      "auth_imperial"
    ]
  },
  "ethic_authoritarian": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_authoritarian",
      "ethic_egalitarian",
      "ethic_fanatic_egalitarian"
    ],
    "required_authorities": [
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_egalitarian": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_egalitarian",
      "ethic_authoritarian",
      "ethic_fanatic_authoritarian"
    ],
    "required_authorities": [
      "auth_democratic"
    ]
  },
  "ethic_egalitarian": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_egalitarian",
      "ethic_authoritarian",
      "ethic_fanatic_authoritarian"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_xenophobe": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_xenophobe",
      "ethic_xenophile",
      "ethic_fanatic_xenophile"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_xenophobe": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_xenophobe",
      "ethic_xenophile",
      "ethic_fanatic_xenophile"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_xenophile": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_xenophile",
      "ethic_xenophobe",
      "ethic_fanatic_xenophobe"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_xenophile": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_xenophile",
      "ethic_xenophobe",
      "ethic_fanatic_xenophobe"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_militarist": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_militarist",
      "ethic_pacifist",
      "ethic_fanatic_pacifist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_militarist": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_militarist",
      "ethic_pacifist",
      "ethic_fanatic_pacifist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_pacifist": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_pacifist",
      "ethic_militarist",
      "ethic_fanatic_militarist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_pacifist": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_pacifist",
      "ethic_militarist",
      "ethic_fanatic_militarist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_spiritualist": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_spiritualist",
      "ethic_materialist",
      "ethic_fanatic_materialist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_spiritualist": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_spiritualist",
      "ethic_materialist",
      "ethic_fanatic_materialist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_fanatic_materialist": {
    "cost": 2,
    "incompatible_ethics": [
      "ethic_materialist",
      "ethic_spiritualist",
      "ethic_fanatic_spiritualist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  },
  "ethic_materialist": {
    "cost": 1,
    "incompatible_ethics": [
      "ethic_fanatic_materialist",
      "ethic_spiritualist",
      "ethic_fanatic_spiritualist"
    ],
    "required_authorities": [
      "auth_democratic",
      "auth_oligarchic",
      "auth_dictatorial",
      "auth_imperial",
      "auth_corporate"
    ]
  }
}