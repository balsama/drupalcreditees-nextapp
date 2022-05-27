import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
    scales: {
        x: {
            min: 72,
        },
        y: {
            max:115,
            min: 0,
            type: 'linear',
        }
    }
};

const crediteesByMonth = require('../public/data/creditees-by-month.json');
const labels = crediteesByMonth.labels;
const newCreditees = crediteesByMonth.newCreditees;
const averageAgeInMonths = crediteesByMonth.averageAgeInMonths;

export const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'Average age of new creditee account (in months)',
            data: averageAgeInMonths,
            backgroundColor: 'rgba(255,166,0,0.8)',
            pointRadius: 1,
            borderColor: 'rgba(255,166,0,0.6)',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Number of new creditees',
            data: newCreditees,
            backgroundColor: 'rgba(0,174,255,0.75)',
        },

    ],
};

export function CrediteesByMonth() {
    return <Line options={options} data={data} />;
}
