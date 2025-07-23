'use client'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

interface CustomBarChartProps {
  title: string
  labels: string[]
  data: number[]
  color?: string
  xAxisTitle?: string
}

export default function CustomBarChart({
  title,
  labels,
  data,
  color = '#60a5fa',
  xAxisTitle,
}: CustomBarChartProps) {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 500
        }
        }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '45%',
        distributed: false,
      },
    },
    xaxis: {
      categories: labels,
      title: {
        text: xAxisTitle,
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
        },
      },

      labels: { 
        rotate: -45,
        trim: false,
        style: { fontSize: '11px' },
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
    fill: { opacity: 0.85 },
    colors: [color],
    dataLabels: { enabled: true },
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
  }

  const series = [{ name: title, data }]

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  )
}
