<template>
<div class="h-screen bg-gray-200">

  <div class="h-screen">
 <div class="md:flex">
  <div class="mb-5">
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions1"
      :series="series"
    ></apexchart>
    <h1 class="pl-12">Sold Product anlysis</h1>
 </div>


  <div id="chart" class="mt-10 ml-[100px]">
        <apexchart type="pie" width="380" :options="chartOptions3" :series="series3"></apexchart>
        <h1 class="mt-12">Available product quantities in percent</h1>
      </div>
    

  </div>
 


</div>
</div>

<div class="bg-gray-200 w-full">
    <apexchart
      width="100%"
      type="bar"
      :options="chartOptions2"
      :series="series2"
    ></apexchart>
    <h1 class="">Total Monthly Amount Transaction in Birr</h1>
  </div>

  <div class="bg-gray-200 w-full">
    <apexchart
      width="100%"
      type="bar"
      :options="chartOptions4"
      :series="series4"
    ></apexchart>
    <h1 class="">Total Monthly Profit in Birr</h1>
  </div>




     
    
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
  

const categories=ref();
let page = ref(1);
const cat=ref();
const soldQuantity=ref();
const total_sold_amount=ref();
const total_profit=ref();
const totalProductInPercent=ref();
const series3=ref([]);


  onMounted(() => {
    getCategories();
  })
  

  const getCategories = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/getcategoriesbyname");
  if(res){
    console.log(res);
  categories.value = res.data;


const totalSoldQuantities = res.data.sold_quantity.map(item => item.total_sold_quantity);
soldQuantity.value=totalSoldQuantities
 total_sold_amount.value = res.data.total_sales_on_eachmonth.map(item => item.total_amount);
series[0].data=totalSoldQuantities
series2[0].data=total_sold_amount.value
total_profit.value = res.data.total_profit.map(item => item.total_profit);
series4[0].data=total_profit.value

totalProductInPercent.value = res.data.categoriesQuantityinPercent.map(item => item.total_product_quantity);
series3.value=totalProductInPercent.value

console.log(totalSoldQuantities);
}
  }


   const   chartOptions1={
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["","Desktop", "Mobiles", "Television", "Headset", "Laptop"],
        },
      }
      const series= [
        {
          name: "Sold products",
          data: soldQuantity.value,
        },
      ]



      const   chartOptions2={
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["january", "February", "March", "April", "May","June"],
        },
      }
      const series2= [
        {
          name: "Transaction",
          data: soldQuantity.value,
        },
      ]




      const   chartOptions4={
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["january", "February", "March", "April", "May","June"],
        },
      }
      const series4= [
        {
          name: "Transaction",
          data:  total_profit.value,
        },
      ]
      // const series3= [
      //   {
      //     name: "Total Prduct in percent",
      //     data:  totalProductInPercent.value
      //   },
      // ]

      series3.value= totalProductInPercent.value

    const  chartOptions3= {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ["others",'Desktop', 'Mobiles', 'Televison', 'Headset', 'Laptop'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }

//       const fetchProducts = async () => {
//   let res = await axios.get(
//     "http://127.0.0.1:8000/api/products?page=" + page.value
//   );

 
//   products.value = res.data.products.data;

//   console.log("Anlysis report", res);

// };











</script>
