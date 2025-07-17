'use client'

import React from 'react'
import ReactApexChart from 'react-apexcharts'

interface TopFile {
  name: string
  count: number
}

const TopFilesChart: React.FC<{ data: TopFile[] }> = ({ data }) => {
  const series = [
    {
      name: 'Jumlah Ulasan',
      data: data.map((d) => d.count),
    },
  ]

  const options = {
    chart: {
      type: 'bar' as const,
      toolbar: { show: false },
      animations: {
        enabled: true,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 500 },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '40%',
        distributed: true,
      },
    },
    colors: ['#f87171'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: data.map((d) => d.name),
      labels: {
        style: {
          fontSize: '10px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '10px',
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} ulasan`,
      },
    },
    grid: {
      show: false
    },
    legend: {
      show: false,
    },
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Dataset Terbanyak
        </h2>
      <ReactApexChart options={options} series={series} type="bar" height={200} />
    </div>
  )
}

export default TopFilesChart
