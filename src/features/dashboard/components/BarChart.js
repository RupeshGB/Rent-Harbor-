import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Vrbo',
            data: labels.map(() => { return Math.random() * 1000 + 5 }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'Airbnb',
            data: labels.map(() => { return Math.random() * 1000 + 5 }),
            backgroundColor: 'rgba(53, 162, 235, 1)',
          },
          {
            label: 'Apartments',
            data: labels.map(() => { return Math.random() * 1000 + 5 }),
            backgroundColor: 'rgba(255, 206, 255, 0.8)',
          },
          {
            label: 'Zillow',
            data: labels.map(() => { return Math.random() * 1000 + 5 }),
            backgroundColor: 'rgba(153, 102, 255, 0.8)',
          },
        ],
      };

    return(
      <TitleCard title={"Monthly Revenue by Platform"}>
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart