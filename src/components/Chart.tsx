/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import { ChartsColorPalette } from '@mui/x-charts/colorPalettes'
import { useState, useRef, useEffect } from 'react'
import { GptTrend } from '@/types/gpt'

export function BasicSparkLine(props: { data: number[] | null }) {
  return (
    <Stack
      direction="row"
      className="rounded-lg pt-4 shadow"
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          colors={['#3f3f46']}
          plotType="bar"
          data={[
            10, 4, 2, 8, 1, 4, 2, 5, 7, 2, 4, 6, 10, 4, 2, 8, 1, 4, 2, 5, 7, 2,
            4, 6,
          ]}
          height={120}
        />
      </Box>
    </Stack>
  )
}

export function MyChart({ data1 }: { data1: GptTrend | undefined }) {
  const [maxHeight, setMaxHeight] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const data= [
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
  ]
  const findMaxHeight = (props: GptTrend) => {
    let max = props[0].value
    for (let i = 1; i < props.length; i++) {
      if (props[i].value > max) {
        max = props[i].value
      }
    }
    setMaxHeight(max)
  }

  const calculateHeight = (height: number) => {
    if (containerRef.current) {
      return Math.floor(
        containerRef.current.offsetHeight * (height / maxHeight),
      )
    }
    return 0
  }

  const firstHalfData = data?.slice(0, Math.ceil(data.length / 2))
  const secondHalfData = data?.slice(Math.ceil(data.length / 2))

  const listChartFirst = firstHalfData?.map((object, index) => (
    <li
      className="group relative flex h-full w-full flex-col justify-end px-0.5"
      key={index}
    >
      <div
        className="w-full bg-zinc-700"
        style={{ height: `${calculateHeight(object.value)}px` }}
      ></div>
      <div className="absolute left-0 top-0 z-50 hidden w-32 rounded-lg bg-white p-2 text-[12px] shadow group-hover:block">
        <p>{object.date}</p>
        <p>Conversations {object.value}K</p>
      </div>
    </li>
  ))

  const listChartSecond = secondHalfData?.map((object, index) => (
    <li
      className="group relative flex h-full w-full flex-col justify-end px-0.5"
      key={index}
    >
      <div
        className="w-full bg-zinc-700"
        style={{ height: `${calculateHeight(object.value)}px` }}
      ></div>
      <div className="absolute right-0 top-0 z-50 hidden w-32 rounded-lg bg-white p-2 text-[12px] shadow group-hover:block">
        <p>{object.date}</p>
        <p>Conversations {object.value}K</p>
      </div>
    </li>
  ))

  useEffect(() => {
    if (data) {
      findMaxHeight(data)
    }
  }, [data])

  return (
    <div ref={containerRef} className="mt-4 h-full w-full">
      <ul className="flex h-full">
        {listChartFirst}
        {listChartSecond}
      </ul>
    </div>
  )
}
