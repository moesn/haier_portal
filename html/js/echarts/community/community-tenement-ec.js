getechart("ecDescribe", "themeEightteen", {
    "title": {
        "text": "289",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月投诉量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "right":'3%',
        "top": '20%',
        data: ['新投诉', '对话中', '已完成']
    },
    grid: {
        //left: '3%',
        //right: '4%',
        bottom: '10%',
        "height": "50%",
        "width": "80%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '新投诉',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '对话中',
            type: 'bar',
            data: [ 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [ 220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '新投诉',
            type: 'line',
            yAxisIndex: 1,
            data: [320, 302, 301, 334, 390, 330, 320]
        }
    ]
});
getechart("ecEnsure", "themeEightteen", {
    "title": {
        "text": "367",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },


    legend: {
        "top": '20%',
        "right": '12%',
        data: ['未受理', '已受理', '已完成']
    },
    grid: {
        right:'8%',
        bottom: '10%',
        "height": "50%",
        //"width": "70%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '未受理',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '已受理',
            type: 'bar',
            data: [120,
                132,
                101,
                134,
                90,
                230,
                210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [220,
                182,
                191,
                234,
                290,
                330,
                310]
        },
        {
            name: '未受理',
            type: 'line',
            yAxisIndex: 1,
            data: [320,
                302,
                301,
                334,
                390,
                330,
                320]
        }
    ]
});
getechart("ecHouseRepair", "themeEightteen", {
    "title": {
        "text": "200",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '20%',
        "right": '12%',
        data: ['新报修', '对话中', '已完成']
    },
    grid: {
        right:'8%',
        bottom: '10%',
        "height": "50%",
        //"width": "70%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '新报修',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '对话中',
            type: 'bar',
            data: [120,
                132,
                101,
                134,
                90,
                230,
                210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [220,
                182,
                191,
                234,
                290,
                330,
                310]
        },
        {
            name: '新报修',
            type: 'line',
            yAxisIndex: 1,
            data: [  320,
                302,
                301,
                334,
                390,
                330,
                320]
        }
    ]

});
getechart("ecType", "themeEightteen", {
    "title": {
        "text": "167",
        "textStyle": {
            "fontSize": "24",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "subtext": "月报修量",
        "subtextStyle": {
            "fontSize": "14",
            "color": "#000",
            "fontFamily": "SimSun"

        },
        "x": "left"
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        "top": '20%',
        "right": '12%',
        data: ['新报修', '对话中', '已完成']
    },
    grid: {
        bottom: '10%',
        right:'8%',
        "height": "50%",
        //"width": "70%"
    },
    xAxis: [
        {
            type: 'category',
            data: ["6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '新报修',
            min: 0,
            max: 600,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '对话中',
            type: 'bar',
            data: [120,
                132,
                101,
                134,
                90,
                230,
                210]
        },
        {
            name: '已完成',
            type: 'bar',
            data: [220,
                182,
                191,
                234,
                290,
                330,
                310]
        },
        {
            name: '新报修',
            type: 'line',
            yAxisIndex: 1,
            data: [ 320,
                302,
                301,
                334,
                390,
                330,
                320]
        }
    ]
});

function getechart(idName, themes, idOption) {
    var id = echarts.init(document.getElementById(idName), themes);
    var Option = idOption;
    id.setOption(Option);
    adaptionWindows(id);
}

function adaptionWindows(chartName) {
    window.addEventListener('resize', function () {
        chartName.resize();
    });
}

