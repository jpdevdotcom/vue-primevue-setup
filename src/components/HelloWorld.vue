<script setup lang="ts">
import Button from 'primevue/button'
import Image from 'primevue/image'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 })
}
</script>

<template>
  <div>
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
        width="250"
        preview
      />
    </div>
  </div>
</template>

<style scoped></style>
