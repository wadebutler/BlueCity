import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import { useEffect } from 'react';
import axios from 'axios';

const Graph = () => {
    const [chartData, setChartData] = useState({})
    const [labels, setLabels] = useState([])

    const api = axios.create({
        baseURL: `https://api.bluecitytechnology.com/s/smp/`
    })

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: "Data",
                    data: [1, 4, 2, 1, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 2
                }
            ]
        })
    }

    useEffect(() => {
        api.get("/").then(res => {
            const result = res.data.plot.x
            setLabels(result)
        })
        chart()
    }, [])

    return (
        <div className="chartContainer">
            <Line data={chartData} options={{responsive: true}} />
        </div>
    )
}

export default Graph;