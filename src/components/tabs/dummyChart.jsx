import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';
import { chartData } from '../../lib/faker';

export default function DummyChart() {
  return (
    <>
      {chartData ? (
        <BarChart
          dataset={chartData}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { dataKey: 'london', label: 'London' },
            { dataKey: 'paris', label: 'Paris' },
            { dataKey: 'newYork', label: 'New York' },
            { dataKey: 'seoul', label: 'Seoul' },
          ]}
        />
      ) : (
        <Typography>Loading ...</Typography>
      )}
    </>
  );
}
