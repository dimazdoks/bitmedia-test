import React from 'react';
import Chart from "react-google-charts";
import {stringToDate} from "../../../DateString/DateString";

export const Statistics = ({min, max, data, label}) => {
    let data_ln = data.length;
    let str_format = data_ln < 90 ? 'MMM, d' : 'MMM';

    let count_number = data_ln - 3;
    let diff_data = 1;

    if (data_ln > 9) {
        diff_data = Math.ceil((data_ln - 1) / 60);
        count_number = diff_data * 5;
    }
    data[1][2] = data[1][1];
    data[data_ln - 1][2] = data[data_ln - 1][1];

    min = stringToDate(min);
    max = stringToDate(max);
    min.setDate(min.getDate() - diff_data);
    max.setDate(max.getDate() + diff_data);


    const font_style = {
        color: '#CCCCCC',
        fontSize: '16px',
        bold: false,
        fontName: 'Montserrat',
        height: '30px'
    };

    return (
        <div>
            <h3>{label}</h3>
            <Chart
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    curveType: 'function',
                    intervals: {style: 'line'},
                    height: '350px',
                    // Use the same chart area width as the control for axis alignment.
                    chartArea: {
                        top: 30,
                        left: 50,
                        height: '85%',
                        width: '100%'
                    },
                    hAxis: {
                        viewWindow: {min, max},
                        slantedText: false,
                        format: str_format,
                        textStyle: font_style,
                        gridlines: {
                            color: '#FFFFFF',
                            count: count_number,
                        },
                    },

                    fontSize: '16px',
                    fontName: 'Montserrat',
                    vAxis: {
                        format: '####',
                        viewWindow: {min: -50, max: 1050},
                        //baseline: 1,
                        baselineColor: '#F1F1F1',
                        gridlines: {
                            minSpacing: 50,
                            count: 0.5,
                            color: '#F1F1F1',
                        },
                        textStyle: font_style
                    },

                    pointSize: 16,
                    series: {
                        0: {
                            lineWidth: 4,
                            pointSize: 0,
                        },
                        1: {pointShape: 'circle'},
                    },
                    legend: 'none',

                    colors: ['#3A80BA'],

                }}
                rootProps={{'data-testid': '4'}}
            />
        </div>
    );
};