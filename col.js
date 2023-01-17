Highcharts.chart('col_container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Pineapple', 'Mango', 'Pears', 'Grapes', 'Oranges']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Chad',
        data: [5, 7, 6, 6, 3]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});