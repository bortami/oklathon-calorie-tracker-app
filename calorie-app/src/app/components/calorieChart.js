"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [{ month: "january", consumedCalories: 630, remainingCalories: 1200 }];

const chartConfig = {
  consumedCalories: {
    label: "consumedCalories",
    color: "hsl(var(--chart-4))",
  },
  remainingCalories: {
    label: "remainingCalories",
    color: "hsl(var(--chart-2))",
  },
}

export function RadialChart(data) {
  const totalVisitors = chartData[0].consumedCalories + chartData[0].remainingCalories

  return (
    <Card className="flex flex-col border-none">
      <CardHeader className="items-center pb-2">
        <CardTitle>Calories Tracked</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-xl font-bold"
                        >
                          {chartData[0].consumedCalories.toLocaleString()} kCal
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          of {totalVisitors.toLocaleString()} kCal
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="remainingCalories"
              fill="var(--color-remainingCalories)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="consumedCalories"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-consumedCalories)"
              className="stroke-transparent stroke-2"
            />
            
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
