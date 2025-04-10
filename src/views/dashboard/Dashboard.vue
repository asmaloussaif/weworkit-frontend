<template>
  <div class="dashboard-container">
    <h2 class="text-center">Dashboard</h2>
    <p class="text-center">Welcome to your dashboard!</p>
    <div class="dashboard-widgets">
      <div class="widget">
        <h3>Total Projects</h3>
        <p>120</p>
      </div>
      <div class="widget">
        <h3>Active Offers</h3>
        <p>45</p>
      </div>
      <div class="widget">
        <h3>Completed Projects</h3>
        <p>75</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import necessary CoreUI components
import { CRow, CCol } from '@coreui/vue';
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  text-align: center;
}

.dashboard-widgets {
  display: flex;
  justify-content: space-around;
}

.widget {
  padding: 10px;
  background: #f4f7fc;
  border-radius: 8px;
  width: 30%;
}

.widget h3 {
  margin: 0;
  font-size: 20px;
}

.widget p {
  font-size: 24px;
  font-weight: bold;
}
</style>
