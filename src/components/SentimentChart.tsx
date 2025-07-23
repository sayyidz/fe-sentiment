'use client'

import React from 'react'
import ReactApexChart from 'react-apexcharts'

interface SentimentChartProps {
  data: {
    Positif: number
    Netral: number
    Negatif: number
  }
}

const SentimentChart: React.FC<SentimentChartProps> = ({ data }) => {
  const series = [
    {
      name: 'Jumlah',
      data: [data.Positif, data.Netral, data.Negatif],
    },
  ]

  const options = {
    chart: {
      type: 'bar' as const,
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
        columnWidth: '45%',
        borderRadius: 6,
        distributed: true,
      },
    },
    colors: ['#4ade80', '#a3a3a3', '#f87171'], // Positif, Netral, Negatif
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ['Positive', 'Neutral', 'Negative'],
      title: {
      text: 'Sentiment Label',
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
    tooltip: {
      y: {
        formatter: (val: number) => `${val} reviews`,
      },
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 4, // ← garis putus-putus
    },
    legend: {
      show: false,
    },
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">Distribusi Sentimen</h2> */}
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  )
}

export default SentimentChart
