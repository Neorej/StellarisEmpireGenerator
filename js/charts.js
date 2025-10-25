function showAuthorities(contents) {
    const data = [
        {authority: 'Hive', count: (contents.match(/auth_hive_mind/g) || []).length},
        {authority: 'Machine', count: (contents.match(/auth_machine_intelligence/g) || []).length},
        {authority: 'Corporate', count: (contents.match(/auth_corporate/g) || []).length},
        {authority: 'Democratic', count: (contents.match(/auth_democratic/g) || []).length},
        {authority: 'Oligarchic', count: (contents.match(/auth_oligarchic/g) || []).length},
        {authority: 'Dictatorial', count: (contents.match(/auth_dictatorial/g) || []).length},
        {authority: 'Imperial', count: (contents.match(/auth_imperial/g) || []).length},
    ];

    return new Chart(document.getElementById('chart_authorities'), {
        type   : 'bar',
        data   : {
            labels  : data.map(row => row.authority),
            datasets: [{
                data           : data.map(row => row.count),
                backgroundColor: [
                    'rgba(107, 243, 83,  0.4)',
                    'rgba(75, 192, 192,  0.4)',
                    'rgba(255, 205, 86,  0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(54, 162, 235,  0.4)',
                    'rgba(255, 159, 64,  0.4)',
                    'rgba(255, 99, 132,  0.4)',
                ],
                borderColor    : [
                    'rgb(107, 243, 83)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(153, 102, 255)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                ],
                borderWidth    : 2,
            }],
        },
        options: {
            maintainAspectRatio: false,
            plugins            : {
                legend: {
                    display: false,
                },
                title : {
                    display: true,
                    text   : 'Authorities',
                    color  : '#ffffff',
                },
            },
            scales             : {
                y: {
                    ticks: {color: '#ffffff', stepSize: 1},
                },
                x: {
                    ticks: {color: '#ffffff'},
                },
            },
        },
    });
}

function showEthics(contents) {
    const data = [
        {ethic: 'Gestalt consciousness', count: (contents.match(/ethic_gestalt_consciousness/g) || []).length},
        {ethic: 'Authoritarian', count: (contents.match(/ethic_authoritarian/g) || []).length},
        {ethic: 'Fanatic authoritarian', count: (contents.match(/ethic_fanatic_authoritarian/g) || []).length},
        {ethic: 'Egalitarian', count: (contents.match(/ethic_egalitarian/g) || []).length},
        {ethic: 'Fanatic egalitarian', count: (contents.match(/ethic_fanatic_egalitarian/g) || []).length},
        {ethic: 'Xenophobe', count: (contents.match(/ethic_xenophobe/g) || []).length},
        {ethic: 'Fanatic xenophobe', count: (contents.match(/ethic_fanatic_xenophobe/g) || []).length},
        {ethic: 'Xenophile', count: (contents.match(/ethic_xenophile/g) || []).length},
        {ethic: 'Fanatic xenophile', count: (contents.match(/ethic_fanatic_xenophile/g) || []).length},
        {ethic: 'Militarist', count: (contents.match(/ethic_militarist/g) || []).length},
        {ethic: 'Fanatic militarist', count: (contents.match(/ethic_fanatic_militarist/g) || []).length},
        {ethic: 'Pacifist', count: (contents.match(/ethic_pacifist/g) || []).length},
        {ethic: 'Fanatic pacifist', count: (contents.match(/ethic_fanatic_pacifist/g) || []).length},
        {ethic: 'Spiritualist', count: (contents.match(/ethic_spiritualist/g) || []).length},
        {ethic: 'Fanatic spiritualist', count: (contents.match(/ethic_fanatic_spiritualist/g) || []).length},
        {ethic: 'Materialist', count: (contents.match(/ethic_materialist/g) || []).length},
        {ethic: 'Fanatic materialist', count: (contents.match(/ethic_fanatic_materialist/g) || []).length},
    ];

    return new Chart(document.getElementById('chart_ethics'), {
        type   : 'bar',
        data   : {
            labels  : data.map(row => row.ethic),
            datasets: [{
                data           : data.map(row => row.count),
                backgroundColor: [
                    'rgba(107, 243, 83,  0.2)',
                    'rgba(75, 192, 192,  0.4)',
                    'rgba(75, 192, 192,  0.2)',
                    'rgba(255, 205, 86,  0.4)',
                    'rgba(255, 205, 86,  0.2)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(54, 162, 235,  0.4)',
                    'rgba(54, 162, 235,  0.2)',
                    'rgba(255, 159, 64,  0.4)',
                    'rgba(255, 159, 64,  0.2)',
                    'rgba(255, 99, 132,  0.4)',
                    'rgba(255, 99, 132,  0.2)',
                    'rgba(52, 180, 52,   0.4)',
                    'rgba(52, 180, 52,   0.2)',
                    'rgba(180, 170, 60,  0.4)',
                    'rgba(180, 170, 60,  0.2)',
                ],
                borderColor    : [
                    'rgba(107, 243, 83)',
                    'rgba(75, 192, 192)',
                    'rgba(75, 192, 192)',
                    'rgba(255, 205, 86)',
                    'rgba(255, 205, 86)',
                    'rgba(153, 102, 255)',
                    'rgba(153, 102, 255)',
                    'rgba(54, 162, 235)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 99, 132)',
                    'rgba(52, 180, 52)',
                    'rgba(52, 180, 52)',
                    'rgba(180, 170, 60)',
                    'rgba(180, 170, 60)',
                ],
                borderWidth    : 2,
            }],
        },
        options: {
            maintainAspectRatio: false,
            plugins            : {
                legend: {
                    display: false,
                },
                title : {
                    display: true,
                    text   : 'Ethics',
                    color  : '#ffffff',
                },
            },
            scales             : {
                y: {
                    ticks: {color: '#ffffff', stepSize: 1},
                },
                x: {
                    ticks: {color: '#ffffff'},
                },
            },
        },
    });
}

function showGenocidal(contents) {
    const data = [
        {type: 'Devouring Swarm', count: (contents.match(/civic_hive_devouring_swarm/g) || []).length},
        {type: 'Determined Exterminator', count: (contents.match(/civic_machine_terminator/g) || []).length},
        {type: 'Fanatic Purifiers', count: (contents.match(/civic_fanatic_purifiers/g) || []).length},
    ];

    return new Chart(document.getElementById('chart_genocidal'), {
        type   : 'bar',
        data   : {
            labels  : data.map(row => row.type),
            datasets: [{
                data           : data.map(row => row.count),
                backgroundColor: [
                    'rgba(107, 243, 83,  0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 99, 132,  0.4)',
                ],
                borderColor    : [
                    'rgb(107, 243, 83)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 99, 132)',
                ],
                borderWidth    : 2,
            }],
        },
        options: {
            maintainAspectRatio: false,
            plugins            : {
                legend: {
                    display: false,
                },
                title : {
                    display: true,
                    text   : 'Genocidal empires',
                    color  : '#ffffff',
                },
            },
            scales             : {
                y: {
                    ticks: {color: '#ffffff', stepSize: 1},
                },
                x: {
                    ticks: {color: '#ffffff'},
                },
            },
        },
    });
}

function showOrigins(contents) {
    const data = [
        {origin: 'Prosperous Unification', count: (contents.match(/origin_default/g) || []).length},
        {origin: 'Galactic Doorstep', count: (contents.match(/origin_galactic_doorstep/g) || []).length},
        {origin: 'Lost Colony', count: (contents.match(/origin_lost_colony/g) || []).length},
        {origin: 'Mechanists', count: (contents.match(/origin_mechanists/g) || []).length},
        {origin: 'Syncretic Evolution', count: (contents.match(/origin_syncretic_evolution/g) || []).length},
        {origin: 'Life Seeded', count: (contents.match(/origin_life_seeded/g) || []).length},
        {origin: 'Post-Apocalyptic', count: (contents.match(/origin_post_apocalyptic/g) || []).length},
        {origin: 'Post-Apocalyptic Machines', count: (contents.match(/origin_post_apocalyptic_machines/g) || []).length},
        {origin: 'Remnants', count: (contents.match(/origin_remnants/g) || []).length},
        {origin: 'Shattered Ring', count: (contents.match(/origin_shattered_ring/g) || []).length},
        {origin: 'Void Dwellers', count: (contents.match(/origin_void_dwellers/g) || []).length},
        {origin: 'Void Machines', count: (contents.match(/origin_void_machines/g) || []).length},
        {origin: 'Scion', count: (contents.match(/origin_scion/g) || []).length},
        {origin: 'Shoulders of Giants', count: (contents.match(/origin_shoulders_of_giants/g) || []).length},
        {origin: 'Doomsday', count: (contents.match(/origin_doomsday/g) || []).length},
        {origin: 'Common Ground', count: (contents.match(/origin_common_ground/g) || []).length},
        {origin: 'Hegemon', count: (contents.match(/origin_hegemon/g) || []).length},
        {origin: 'Tree of Life', count: (contents.match(/origin_tree_of_life/g) || []).length},
        {origin: 'Lithoid', count: (contents.match(/origin_lithoid/g) || []).length},
        {origin: 'Necrophage', count: (contents.match(/origin_necrophage/g) || []).length},
        {origin: 'Clone Army', count: (contents.match(/origin_clone_army/g) || []).length},
        {origin: 'Ocean Paradise', count: (contents.match(/origin_ocean_paradise/g) || []).length},
        {origin: 'Ocean Machines', count: (contents.match(/origin_ocean_machines/g) || []).length},
        {origin: 'Here Be Dragons', count: (contents.match(/origin_here_be_dragons/g) || []).length},
        {origin: 'Subterranean', count: (contents.match(/origin_subterranean/g) || []).length},
        {origin: 'Subterranean Machines', count: (contents.match(/origin_subterranean_machines/g) || []).length},
        {origin: 'Progenitor Hive', count: (contents.match(/origin_progenitor_hive/g) || []).length},
        {origin: 'Overtuned', count: (contents.match(/origin_overtuned/g) || []).length},
        {origin: 'Shroudwalker Apprentice', count: (contents.match(/origin_shroudwalker_apprentice/g) || []).length},
        {origin: 'Machine', count: (contents.match(/origin_machine/g) || []).length},
        {origin: 'Fruitful', count: (contents.match(/origin_fruitful/g) || []).length},
        {origin: 'Imperial Fiefdom', count: (contents.match(/origin_imperial_vassal/g) || []).length},
        {origin: 'Star Slingshot', count: (contents.match(/origin_star_slingshot/g) || []).length},
        {origin: 'Broken Shackles', count: (contents.match(/origin_broken_shackles/g) || []).length},
        {origin: 'Payback', count: (contents.match(/origin_payback/g) || []).length},
        {origin: 'Fear of the Dark', count: (contents.match(/origin_fear_of_the_dark/g) || []).length},
        {origin: 'Legendary Leader (total)', count: (contents.match(/origin_legendary_leader/g) || []).length},
        {origin: 'Legendary Leader Death', count: (contents.match(/origin_legendary_leader_death/g) || []).length},
        {origin: 'Legendary Leader Imperial', count: (contents.match(/origin_legendary_leader_imperial/g) || []).length},
        {origin: 'Legendary Leader Dictatorial', count: (contents.match(/origin_legendary_leader_dictatorial/g) || []).length},
        {origin: 'Riftworld', count: (contents.match(/origin_riftworld/g) || []).length},
        {origin: 'Toxic Knights', count: (contents.match(/origin_toxic_knights/g) || []).length},
        {origin: 'Arc Welders', count: (contents.match(/origin_arc_welders/g) || []).length},
        {origin: 'Synthetic Fertility', count: (contents.match(/origin_synthetic_fertility/g) || []).length},
        {origin: 'Cybernetic Creed', count: (contents.match(/origin_cybernetic_creed/g) || []).length},
        {origin: 'Unplugged', count: (contents.match(/origin_unplugged/g) || []).length},
        {origin: 'Primal Calling', count: (contents.match(/origin_primal_calling/g) || []).length},
        {origin: 'Storm Chasers', count: (contents.match(/origin_storm_chasers/g) || []).length},
        {origin: 'Treasure Hunters', count: (contents.match(/origin_treasure_hunters/g) || []).length},
        {origin: 'Wilderness', count: (contents.match(/origin_wilderness/g) || []).length},
        {origin: 'Starlit Citadel', count: (contents.match(/origin_starlit_citadel/g) || []).length},
        {origin: 'Evolutionary Predators', count: (contents.match(/origin_evolutionary_predators/g) || []).length},
        {origin: 'Endbringers', count: (contents.match(/origin_endbringers/g) || []).length},
        {origin: 'Mindwardens', count: (contents.match(/origin_mindwardens/g) || []).length},
        {origin: 'Shroud Forged', count: (contents.match(/origin_shroud_forged/g) || []).length},
    ];

    // Generate colors dynamically for all origins
    const colors = [];
    const borderColors = [];
    for (let i = 0; i < data.length; i++) {
        const hue = (i * 360 / data.length) % 360;
        colors.push(`hsla(${hue}, 70%, 60%, 0.4)`);
        borderColors.push(`hsl(${hue}, 70%, 60%)`);
    }

    return new Chart(document.getElementById('chart_origins'), {
        type   : 'bar',
        data   : {
            labels  : data.map(row => row.origin),
            datasets: [{
                data           : data.map(row => row.count),
                backgroundColor: colors,
                borderColor    : borderColors,
                borderWidth    : 2,
            }],
        },
        options: {
            maintainAspectRatio: false,
            plugins            : {
                legend: {
                    display: false,
                },
                title : {
                    display: true,
                    text   : 'Origins',
                    color  : '#ffffff',
                },
            },
            scales             : {
                y: {
                    ticks: {color: '#ffffff', stepSize: 1},
                },
                x: {
                    ticks: {
                        color: '#ffffff',
                        maxRotation: 90,
                        minRotation: 45
                    },
                },
            },
        },
    });
}
