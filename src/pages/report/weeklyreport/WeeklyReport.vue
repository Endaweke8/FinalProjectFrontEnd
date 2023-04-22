<template>
    <div>

<WeeklyOrderReport />
<WeeklyDeliveredOrderReport/>
<WeeklyAcceptedOrderReport/>
<WeeklyPendingOrderReport/>
<WeeklyStockSellRequestReport/>
<WeeklyStockRequestReport/>
    </div>
</template>

<script setup>
import WeeklyOrderReport from '../components/weeklyreport/WeeklyOrderReport.vue';
import WeeklyDeliveredOrderReport from '../components/weeklyreport/WeeklyDeliveredOrderReport.vue';
import WeeklyAcceptedOrderReport from '../components/weeklyreport/WeeklyAcceptedOrderReport.vue';
import WeeklyPendingOrderReport from '../components/weeklyreport/WeeklyPendingOrderReport.vue';
import WeeklyStockSellRequestReport from '../components/weeklyreport/WeeklyStockSellRequestReport.vue';
import WeeklyStockRequestReport from '../components/weeklyreport/WeeklyStockRequestReport.vue';






</script>

<style scoped>

</style>