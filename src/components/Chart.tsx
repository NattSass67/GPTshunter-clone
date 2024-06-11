import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { ChartsColorPalette } from '@mui/x-charts/colorPalettes';

export function BasicSparkLine(props:{data:number[]|null}) {
    return (
      <Stack direction="row" className="shadow rounded-lg pt-4" sx={{ width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            colors={["#3f3f46"]}
            plotType="bar"
            data={[10, 4, 2, 8 ,1, 4, 2, 5, 7, 2, 4, 6, 10, 4, 2, 8 ,1, 4, 2, 5, 7, 2, 4, 6]}
            height={120}
          />
        </Box>
      </Stack>
    );
  }