import { Column } from "@ant-design/charts";
import { useState, useEffect } from "react";
import React from "react";

const DemoColumn = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'city',
        yField: 'value',
        seriesField: 'type',
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };

    return <Column {...config} />;
};


const DemoColumn2 = () => {
    const data = [
        {
            name: 'London',
            月份: 'Jan.',
            月均降雨量: 18.9,
        },
        {
            name: 'London',
            月份: 'Feb.',
            月均降雨量: 28.8,
        },
        {
            name: 'London',
            月份: 'Mar.',
            月均降雨量: 39.3,
        },
        {
            name: 'London',
            月份: 'Apr.',
            月均降雨量: 81.4,
        },
        {
            name: 'London',
            月份: 'May',
            月均降雨量: 47,
        },
        {
            name: 'London',
            月份: 'Jun.',
            月均降雨量: 20.3,
        },
        {
            name: 'London',
            月份: 'Jul.',
            月均降雨量: 24,
        },
        {
            name: 'London',
            月份: 'Aug.',
            月均降雨量: 35.6,
        },
        {
            name: 'Berlin',
            月份: 'Jan.',
            月均降雨量: 12.4,
        },
        {
            name: 'Berlin',
            月份: 'Feb.',
            月均降雨量: 23.2,
        },
        {
            name: 'Berlin',
            月份: 'Mar.',
            月均降雨量: 34.5,
        },
        {
            name: 'Berlin',
            月份: 'Apr.',
            月均降雨量: 99.7,
        },
        {
            name: 'Berlin',
            月份: 'May',
            月均降雨量: 52.6,
        },
        {
            name: 'Berlin',
            月份: 'Jun.',
            月均降雨量: 35.5,
        },
        {
            name: 'Berlin',
            月份: 'Jul.',
            月均降雨量: 37.4,
        },
        {
            name: 'Berlin',
            月份: 'Aug.',
            月均降雨量: 42.4,
        },
    ];
    const config = {
        data,
        isGroup: true,
        xField: '月份',
        yField: '月均降雨量',
        seriesField: 'name',
        columnStyle: {
            radius: [20, 20, 0, 0],
        },

        color: ['#AEAEAE', '#FF6F61'],

        marginRatio: 0.1,
        label: {
            position: 'middle',
            // 'top', 'middle', 'bottom'
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Column {...config} />;
};

export const MyColumnChart = () => {
    return <DemoColumn2 />
}