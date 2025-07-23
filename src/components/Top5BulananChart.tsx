'use client'

import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

interface Dataset {
  label: string
  data: number[]
}

interface Top5Bulanan {
  labels: string[]
  datasets: Dataset[]
}

interface Top5BulananChartProps {
  data: Top5Bulanan
}

const Top5BulananChart: React.FC<Top5BulananChartProps> = ({ data }) => {
  const { labels, datasets } = data

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 500,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: labels,
      title: {
      text: 'Month',
      style: {
        fontSize: '13px',
        fontWeight: 600,
        color: '#374151',
      },
    },
      labels: {
        style: {
          fontSize: '13px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Number of Reviews',
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
        },
      },
      labels: {
        style: {
          fontSize: '11px',
        },
      },
    },
    colors: ['#2D3748', '#718096', '#4FD1C5', '#A78BFA', '#F7FAFC'],
    legend: {
      position: 'top',
    },
  }

  const series = datasets.map((ds) => ({
    name: ds.label,
    data: ds.data,
  }))

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      {/* <h2 className="text-xl font-bold mb-4 text-gray-800">Top 5 Sektor Bulanan</h2> */}
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  )
}

export default Top5BulananChart
