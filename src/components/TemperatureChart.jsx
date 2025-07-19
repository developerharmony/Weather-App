import React from 'react';
import { Line } from 'react-chartjs-2';
import { formatDate } from '../utils/formatDate';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureChart = ({ forecast, theme }) => {
  // Tema renklerini tanımla
  const getThemeColors = () => {
    switch (theme) {
      case 'dark':
        return {
          textColor: '#ffffff',
          gridColor: 'rgba(255, 255, 255, 0.1)',
          lineColor: '#a855f7', // Mor tonları
          backgroundColor: 'rgba(168, 85, 247, 0.2)',
          pointColor: '#a855f7',
        };
      case 'custom':
        return {
          textColor: '#ffffff',
          gridColor: 'rgba(255, 255, 255, 0.1)',
          lineColor: '#ec4899', // Pembe tonları
          backgroundColor: 'rgba(236, 72, 153, 0.2)',
          pointColor: '#ec4899',
        };
      default:
        return {
          textColor: '#1f2937', // Koyu gri
          gridColor: 'rgba(0, 0, 0, 0.1)',
          lineColor: '#f97316', // Turuncu
          backgroundColor: 'rgba(249, 115, 22, 0.2)',
          pointColor: '#f97316',
        };
    }
  };

  const colors = getThemeColors();

  const data = {
    labels: forecast.list
      .filter((_, index) => index % 8 === 0)
      .slice(0, 5)
      .map((item) => formatDate(item.dt)),
    datasets: [
      {
        label: 'Sıcaklık (°C)',
        data: forecast.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 5)
          .map((item) => Math.round(item.main.temp)),
        borderColor: colors.lineColor,
        backgroundColor: colors.backgroundColor,
        pointBackgroundColor: colors.pointColor,
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: colors.pointColor,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: colors.textColor,
        },
      },
      title: {
        display: true,
        text: '5 Günlük Sıcaklık Tahmini',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: colors.textColor,
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 16,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
    scales: {
      x: {
        grid: {
          color: colors.gridColor,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: colors.textColor,
        },
      },
      y: {
        grid: {
          color: colors.gridColor,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: colors.textColor,
        },
        title: {
          display: true,
          text: 'Sıcaklık (°C)',
          font: {
            size: 14,
            weight: 'bold',
          },
          color: colors.textColor,
        },
      },
    },
  };

  return (
    <section className="px-6 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-6 h-80">
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default TemperatureChart;