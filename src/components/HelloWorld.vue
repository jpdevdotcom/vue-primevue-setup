<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import Chart from 'primevue/chart'
import ImageCompare from 'primevue/imagecompare'

import { ref, onMounted } from 'vue'

const toast = useToast()

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 })
}

const chartData = ref()
const chartOptions = ref()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 55, 98, 82, 56, 45],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
        tension: 0.4,
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90, 12, 45, 67, 89, 34],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4,
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<template>
  <div class="w-full">
    <Toast position="top-center" />
    <div>
      <Button size="small" label="Show Toast" @click="show()" />
      <Button size="small" label="Submit" />
    </div>

    <div>Hello</div>

    <div class="card flex justify-center">
      <Image
        src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
        alt="Image"
        preview
      />
    </div>

    <div class="card">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </div>

    <div class="card flex justify-center">
      <ImageCompare class="shadow-lg">
        <template #left>
          <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
        </template>
        <template #right>
          <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
        </template>
      </ImageCompare>
    </div>
  </div>
</template>
