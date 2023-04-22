<template>
    <div>
<DailyOrderReport />
<StockBuyRequestReport/>
<DailyStockRequestReport />
<DailySellStockReport />
<DailyAcceptedOrderReport />
<DailyDeliveredOrderReport/>
<DailyPendingOrderReport/>
<DailyMessageRequestReport/>

    </div>
</template>

<script setup>
import DailyOrderReport from '../../../components/DailyOrderReport.vue';
import DailyStockRequestReport from '../../../components/DailyStockRequestReport.vue';
import StockBuyRequestReport from '../../../components/StockBuyRequestReport.vue';
import DailySellStockReport from '../../../components/DailySellStockReport.vue';
import DailyAcceptedOrderReport from '../../../components/DailyAcceptedOrderReport.vue';
import DailyPendingOrderReport from '../../../components/DailyPendingOrderReport.vue';
import DailyDeliveredOrderReport from '../../../components/DailyDeliveredOrderReport.vue';
import DailyMessageRequestReport from '../../../components/DailyMessageRequestReport.vue';






</script>

<style scoped>

</style>