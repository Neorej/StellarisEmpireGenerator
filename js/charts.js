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