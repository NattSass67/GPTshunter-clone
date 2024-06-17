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

export function MyChart({ data }: { data: GptTrend }) {
  const [maxHeight, setMaxHeight] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const firstHalfData = data.slice(0, Math.ceil(data.length / 2))
  const secondHalfData = data.slice(Math.ceil(data.length / 2))

  const listChartFirst = firstHalfData.map((object, index) => (
    <li
      className="group relative flex h-full w-full flex-col justify-end px-0.5"
      key={index}
    >
      <div
        className="w-full bg-zinc-800/90 dark:bg-zinc-600"
        style={{ height: `${calculateHeight(object.value)}px` }}
      ></div>
      <div className="absolute left-0 top-0 z-20 hidden w-32 rounded-lg bg-white/90 p-2 text-[12px] shadow group-hover:block dark:bg-zinc-800/50">
        <p>{object.date}</p>
        <p>Conversations {object.value}K</p>
      </div>
    </li>
  ))

  const listChartSecond = secondHalfData.map((object, index) => (
    <li
      className="group relative flex h-full w-full flex-col justify-end px-0.5"
      key={index}
    >
      <div
        className="w-full bg-zinc-800/90 dark:bg-zinc-600"
        style={{ height: `${calculateHeight(object.value)}px` }}
      ></div>
      <div className="absolute right-0 top-0 z-20 hidden w-32 rounded-lg bg-white/90 p-2 text-[12px] shadow group-hover:block dark:bg-zinc-800/50">
        <p>{object.date}</p>
        <p>Conversations {object.value}K</p>
      </div>
    </li>
  ))

  useEffect(() => {
    findMaxHeight(data)
  }, [data])

  return (
    <>
     <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Conversations today
      </p>
      <p className="text-2xl font-semibold text-zinc-800 sm:text-3xl dark:text-zinc-200">
        {data[data.length-1].value}K+
      </p>
      <div ref={containerRef} className="mt-4 h-28 w-full">
        <ul className="flex h-full">
          {listChartFirst}
          {listChartSecond}
        </ul>
      </div>
    </>
  )
}
