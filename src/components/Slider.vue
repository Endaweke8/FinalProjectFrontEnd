<template>
    <main  class="mb-3">

      <Swiper class="hidden lg:flex "
        :modules="[EffectCube,Autoplay,Pagination]"
        effect="cube"
        :grab-cursor="true"
        :loop="true"
        :cyclic="true"
        :cube-effect="{
         
          slideShow: true,
          shadowOffset: 20,
          shadowScale:0.94
        }"
        :pagination="true"
        :autoplay='{
             "delay": 5000,
             "speed":3000,
           "disableOnInteraction": false
           }'
      >
        <SwiperSlide  v-for="product in products" :key="product.id" >
          <router-link  :to="`/detailview/${product.id}`" class="max-w-sm w-full lg:h-60  lg:max-w-full lg:flex ">
    <div class="lg:h-60 lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
    
        <img :src="product.image_name" class="h-full" height="48"  alt="">
      
    </div>
    <div class="border-r lg:h-60 lg:w-full bg-teal-50 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
         {{product.name}}
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">{{product.subcategory1}}</div>
        <p class="text-gray-700 text-base ">{{ product.description }}</p>
      </div>
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center justify-between mb-2 ml-2 mr-2 border-t border-gray-300">

<div >
   
   <span ><i :class="getStars(product.stars,product.stars.length)>=1?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>

 <span ><i :class="getStars(product.stars,product.stars.length)>=2?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
 
 <span ><i :class="getStars(product.stars,product.stars.length)>=3?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
 
 <span ><i :class="getStars(product.stars,product.stars.length)>=4?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>

 <span ><i :class="getStars(product.stars,product.stars.length)>=5?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
 
 
</div>



</div>
           
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >{{ product.price }} Birr</span
          >
          <router-link
            :to="`/detailview/${product.id}`"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Buy Now</router-link
          >
        </div>
    </div>
          </router-link>
        </SwiperSlide>
      </Swiper>
    </main>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import { EffectCube,Pagination ,Autoplay} from "swiper";
  import "swiper/css/effect-cube";
  import "swiper/css/pagination";
  import {ref,onMounted} from 'vue'
  import axios from "axios";
  const products=ref([])
  

  const photos = [
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYA0gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xAA4EAABAwIEBAQEBQMEAwAAAAABAAIDBBEFEiExBhNBUSJhcYEHMlKRFCNCobHB0fBDYpLxFRYz/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAQCAwEF/8QAIREBAAICAgIDAQEAAAAAAAAAAAECAxESIQQxIkFREwX/2gAMAwEAAhEDEQA/AO4oiICIiAiIgIiICHRF4dkHmZt7X17LW4rjuH4VPDDWziN8wJboToOptsFEONOIX8L46K2bMadzWktabOIOhy99hp5dFxjiHiqtxrFpqs1Mh5jnNjY92kTS42H2WZn8airsNbxxTUWIyiasAey2jZc7X6DYDQG5O4GhUe4g+JtUKprMOlgkp+bZ0gsHvFz4R0FgBqba36Lk0UEsuVzL5SLGxv8Ab7BYUzpo5TmgIadC2+/us739tzWI7071gnxRpqio5VRzRShhLpAwu1vsbE5Qe5KmuGcS0k0cLKyWGKSW2VzZmuYSb2bfTW3kvlYSyRksbISf1gEjMOxtoVs8HxGakraaWmd4oy6zLfKCNTp6kd17uYecYl9bXGy9UP8Ah/jlTjtBHUz1T3jKWhkjWtcSLXJtt/XdTBbYmNCIiPBERAREQEREBERAREQEREBERAREQFh4nVGiopanw2iGZ2Y6W+4WYo9xwWf+vziS1iRo7Ll2O+bS1r/9oQ4F8Q+KqjGsVmADWQkgtjY8luws6/U+y1/DXDMuJBlRUOyRO1AHZaXE2tfXvggFo+ZlaL3I6b+y6pgcfKooI2NIysA0Cmy3msdLPHpFrd/TNw/hijjphBE23d/Un1VWI8BUNRQmFjpGPOofe5BW5o5nMtcb+Sz5akBgAUtZn2ttH04li3B9Rh9YY3PbITsWNIPTVaaeN2GzOilaWEm9z/K7hXlj2+Nt7bXXL/iNHEyamc0DXMSL6ldsWSbW1KfPhrWvKqW/CXiWip8SFHV2bnuYpL6h2ml+1vt7rujHNeLtIIPUL5J4bhjqq6ki5DniSVrCwa5gTay+qsGp4KXDaeGlZkibG3KNdPuq6/iG/wCs5ERaYEREBERAREQEREBERAREQEREBERAWj4xwuDF8Bnp6kzhrS2UGGQscHNNwbjtv7LeLw7IPk6pocQk4sdPWUpaPxdnuazK0ku0I9V0Kslo8ODHV874obC0bTYuKlvxNwISz4ditMxoljc6GQbBzXOa6572yu9ysSGmM4baTl+HcAH+VJmnvtf48fHcfaO0GOYZXT8rC6qVzmgF0cl75SbXHutvWzupgOY7lC18ztgO6rZ+Aw2flzVEYe46ukysB8gBa6zauSkqyIzLC4HKARYgOGo0Pop9130piL67aMV8NW0ilxOnqJG6mEAXsoB8RyW1FPmGr2+EW1sN/wCV0OLhGjpasVooIWzh1+dHK+/2P8KJfEKmiqKjNyHTPaWRRtBy+J17euo/ZdsfHluHDLymurMP4SYLLiuPQuYW5aZzZSO9iCLr6XiYGMDG7N0ChPwr4UiwDA4aieNn4+dgL3hpFhp4RdTlWQ+fP4IiL14IiICIiAiIgIiICIiAiIgIiICIiAvDshViorKemIE0oaTsOqPJY2N4ZHi1A6kkkdFcgh7QCQQub1s8tHPURgeOElpZ6Lo78bw9rSTNqBe2U3XOcSqJMU4olqzC2CmDAAGk3e6+59rbLh5GOZryU+LniL8Vigir6qnLq3DoQ1p2qHtF79t+61cmNYThmISUc2Etoq5rfCAwPzNvuHN36qX1+H0tdQGOszNp9zaUx7a7jXz3Ude2HCDUzTvj5bLNhmkOaRzTsC46nfdS1q+hN23pcQlngiErCx5GoPRXsE4UfjGIYdi9W7lU1JNI8QOj8UzrWY7XYC5PW9/daLBcZjkqGVzqOqrKaM5g2naLSOGwubAjvZdFwvizDq5l7TQPtdzJI3DL/ndVYcMx3KDyPJrM8YlIABuvVjUlbT1YJp5A624sQVkrulidiIiPRERAREQEREBERAREQEREBERARF4gtVUzaankmeCQxpcbDVc2nrMWrp3SPqqSldI64p3tzyW89f2Uk4trZ53jDqWVsTSPzJbm/oAFGGYDh7fFUR847gvJHvoqMVYiO0ee8zOo9LjZ5I6swTsDHZL/AJdzG+303+U30t5qswua7nygC+w8lQ54gncXatafAOw6LV41i80zeVSnK8ke6hzZbZL8IfT8bBTDj/pb2wONMRqXupKaljbKHSZ3QvPhe1vcdr2+ywKPhuoxSppqnHp5KgMdmNNlyxnQ2Fh5+quQ4TVPxEV3NL5bAFp+UgdLdFMogJaVjowA8EAZm7H6T67KvFgrWO47Q5/KvedVnpdhnmjAbLTFsGwewaDy9FmOAY+K/wAoblbptbX/AD0VLXHKHMN2HQsOxVT4jbKw30zMIO1tV2TR6ZdK90Tw5rspGoN9lKYJWzRNewgghQh0zheMbSWv3AJW1w+tdSOABLo72IPVcr0d8V9dJOioikZLGHsNwVWuKkREQEREBERAREQEREBERAREQFSdiql4dkECqpxz5ahzQ4vLiR13KxPxbHtOeR1wPl8lfxWmdRYpLTu2eCWem4WkmeXua3KQWg6hVV1p8+3U6Xa2RkrLOBaQPC7r7rWYU2JuLF9TIJI+WbutlDSSLDzOhXlVKxkZke8DoMztXeQCz8Ew9sg5tQxxz6lrjoV5/OnLlrtqMuSKcN9N9TRU5bmjIP0kahVOhcJszLXcLPbsHD+6w2UElNd1BIWg/ocLhZLKkOHKro3Quto7Wx916ys04dHJJC4/K4FuvcW/kfuq46ttPUtz+GKR2Rzfpf0I8iq3UzWvaOZma4ZQbahXKqljniddhIAykX6dPstTLyIlZqs0U7JLDR1jmPRZTKh5f+TGMp/VItfLIJKN8c5LnMbZxYPEbagjzKoop5w0hkMrISLh1TYOHtuvNbOWpSjCqx9POI5cpjkO7ToD3UiChdNI2SPw/ON7H+6mMD+ZEx/1NBU94WYp3C4iIsOoiIgIiICIiAiIgIiICIiAiIg1GP4KMViY6OTlVMf/AM5P6FQvGeGMSoaKSrklp3hp1DSSbk+i6WsLGIhNhdSy1/yybemq3W0xLnekT25HhWCOlqRWYjK+V1vBHsGeilEIzBrBqB8qsNa+MWLQL7EdFdDwWjw5bH5rdVQjZrS4nLbUdEcwTHK8XO1irDJHhuZtyOpCOj5gzPDi09narLT0xOZE6P5gNQ4HUeyuwSk2It4m7WWK6npy/wAMEmm3iOn7rHiEkxbC2R0YaPmBFwte4ZmdSxOJ5n0stPURkBjgYpMuhA3B9jf7rOwStdXYdDI7K6Ros4gDcaFYOMxSTRNgn8VrtJI30V7C3U+GUDWRvbFCxuZ0j7DzJJWp7qzE/JuswkcD1HYKUYS4uw+EnsR9jZQGLiGgLhaaQNP+qYXhn/K1lLeGKh72TQvdcNs5uvQ3U99THSrFuJ1MN6iIuSgREQEREBERAREQEREBERAREQF44BzSCLgixREHO8RYacu5Vvynlrgf1gGwWM2YuGmgcdr7Iiqj0+fPtes5gtm31sNlYkxF9MTZocBuCvUXrEzpsRM+aBrozkbINR5K3TjLEG/S4s+xREhufamuiL6d7nH5R3Wugw+Gajg/8g0TgPBa3pfobeS8RS+Xe1cfS7/Px1tlnlHpnGkaxw5TnC42OoKknBND+Ew57nPzOfI4N/2sDiQ32uiKXx5ncrvKrGoSNERUoxERAREQEREH/9k=",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAkgMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABAMFBwIGAQj/xAA7EAABAwIDBQUGBAQHAAAAAAABAAIDBAUGESESMUFRYQcTMnGRIoGhscHRFCNCUhUzYvAkcpKiwtLh/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAIBAwQFBgf/xAA0EQACAgEBBAYKAgMBAQAAAAAAAQIDEQQFEiExE0FRYbHRBiIjMnGBkaHh8BTBQ1LxgkL/2gAMAwEAAhEDEQA/ANxQAIApr7iW12Nn+Nn/ADss2wR+1I73cPM5BVztjDmbdHs7Uat+zXDtfL9+B4a49otyncW2ylhpo8/FL7bz9B8Vneok+SPRUej1EFm6Tk+7gvPwKd+J8RyuJdd5xn+1rG/Jqr6SztOgtm6CP+JffzOocT4kicCLrM7Lg9jHA/7VPSWdpEtmaCX+JfV+ZcUHaFdIHAXClgqY+JjBY/6g/BPHUSXNGC70f0817KTi+/ivM9tYcTWy9t2aSUtnAzdTyjZePdx8xmtELYz5HntZs7UaR+0XDtXL9+JdKwwggCpveIbZZWZ11QBIRm2FntSO8h9ToknZGHM2aTQajVv2UeHb1Hja3tFrJXEWy2xxt4PqXFx/0t+6zvUt+6jvU+jtcVm6zPw835Fc7GeJXnMTUzejYPuUnTWGxbG0C6n9TuPGmJIyC51LJlwfDv8AQhHTWIWWxNDLllfMuLd2iM2msu9vfDmf5lOdto6kHX0zVsdR/sjn3+jsks0Tz3Ph9+Xge0oLjR3GnFRQ1DJ4j+phz9eXvWiMlJZRwLqLaJblkWmNKSoEACABAHhMcY1NvfJbLQ4OqxpLNkCIeg5u+SzXXY9WPM9FsnY3TJX3+71Lt/HiZrm+aV8sz3SSPOb3vOZcepWRI9ZwilGKwkMxMTFUpDsMOadIolMbZSbQ3Jt0pdpzJRDLco3Ro2iUlI+J7ZYS5kjHbTHtORaeYKRrHFGhWKUXGXFM0HBeLHXFwt11cBXNH5cmQAnA/wCXT3rTTbverLmeW2rspUe2p9zrXZ+D5jTFzre91ttRDq4j8yXeIQfm7pw+CLbccI8ydlbJ6f21/udS7fweBipJKiZ09Q50kshze95zLj1KzKOXk9PKyMIqMVhItKegHJWqBlnePRW7P9KdQM0tQTfwnMeFHRifyxSqs+ngSusur1ZWMZW2iq/FW6Z0E3Ejc4cnDcQq8OLyjVLodVDctWV+8jQsKYqhvbfw9QBBXsbm6InR4/c3mOnD4rVXap8HzPKbR2ZPRveXGD6/6Z6UHPcrTlggDzuOL8bFZHyxOAqpnd1BxycR4vcMz6Kq6zcidLZWi/mahRl7q4v4dnzMVDtpxJJJJzJJzJK559AfDghmJOimTHIQpKZFhTp0Z5ljCQArEZ5I6cAUELgRuha7gowOptCFTTPjkbNASySNwcxzd7SNxVbjg0QmpLdlyZzSUj3yOllLnyPcXvcd7iTmSUKJNliilGPJFzTUoGWitUTDZaWUEA5KxIyTsHoYRyTGWUx2OMAbk2CiUjiena5pOyowTCxplJXUQId7KrlHJ0ab2jy9dBNSVDKmlcYp4nbccjd7TzWeScXlHXqnCyDhNZT5o1DC17ZfLTHUhobM07E8efgePod481srnvxyeM2ho3o73X1dT7i5TmIx3tbuLpsQQULXfl00AcQD+txzPwDVh1Eszx2Hs/R2lQ00rOuT8Dx0RVB3WOwncnRUx6F2qkqkPwvTIokhyN+icqaJw7NNkTB2CgVg5ocEYBPBLBEBwUpCTkWELBonRlnIcjATGeTGo8kFEhlh0TFTOjqggTqYwQUpfXI89daYOa7Tgq5o6untIcB1ht+JnUbjlDWMIy/rbqPhtfBV0vE8dobZpV2k6Rc4P7Pn/RqC2HkDAMeyd7jO7O5TBvo1o+i5lr9pI+hbJju6Gtd39sqIilRvY5E5OipjkTlJU0ORPU5K2hyJ+icqaGGuUiYJWOU5FaJmHNSitobhCZFExyIpzPIajKkpkhmM6KUUyGGFSypo7QKRSjMFQPEp7gzNrkjN9DPKmR1Le6CobvjqY3e7aAPwWd8JJnYcVZp7IPri/A2RbjwR+f8AHkfdYyuzTvM216tB+q5lvCyR9D2TLe0Nb7v7KeMpTcxqN25SVsbicnEY1E5BW0NxP6pkytoZjepyI0MMdmpEaJWHI70wjQ7C/RMjPJDcTkxnkhqN6cplEZY5BS0TtepyVtEgejIm6RyP0QPFFVXO0KRm2lHkLkdqqhA3mRoHqFmnzO1Twg33PwNpA0W8+fGJ9rVIabFvfhuTamnY/PmRm0/ILnaiOLM9p7j0ft39Hu/6t/fieRjKqR22MRuTCMZjcpTEGY3qRMDLHqRcDEcqkRoZjlU5EcSdkqnIjiOQSDJWJmecRuOVNkocRqKTNSimURpkicpcSVsnVBW4nfeoI3COSbRA0YFTXz+y7VVyZtpgUFIz8ZiK3U4126qPToDmfgCqPekkdG2XRaWyXYn5eJs63ngTPO2O1moslNco25uo5dl+XBjtM/UN9Vl1UfVUuw9B6PajcvlU/wD6X3RkTHLEmey5jDHJiCdjlIrROx6kRonZIpIwTMkUitDDJcuKBXEkZL1QQ4jlPMeadMpnAdik6p0zPKI5DJu1TpmeURpkvVTkpcSTvhzU5E3A78c0ZDoyCapAadVDZbGspbhVDI6qqUjdTWOdm9GazEM1c4ZxUkRA/wA7tB8A71UURzPPYZdu3dHpVUucn9l+cGpraePFbpRQ3G31FFUt2oZ4zG/yIUSipLDLKrZVWRsjzTPzbcaGe1XKpoKoZTU7yx3XkR0IyPvXJacW0z6Pp7431RsjyYRu0UovJmFSQyZrlIuCQPRkMEjZFOSN0mbKjIu6SNlU5DdHKeVSiucR6KVMmZ5RHIpdydMzyiMCbRNkq3D4ahGSejOHVPVRkZVidTV6HVK5F0Kyjr6s6gZknQAbyqpSNtVa6zXME2V1ksUMMoAqZT3s5H7jw9wyHuW2mG5DjzPD7V1n8vUuUfdXBfD88z0CtOcBGaAMw7YMNmaFl+o4yZIQI6oNG9nB3u3HoeiyamvK30ei2DrtyX8eT4Pl8ewyuJ+5YkewTyMsKYGSgqSD7tKCUj6HoJwStkUkYO2yqMhgbglTJlc4j0UqdMzyiOxS6JkymUTt04CnIu4QuqQOKhsdVkElWOajeHjUV9VWaHVI5GiFR6Ps2sBu1y/itWzOkpXflAj+ZKPoN/nkrKIb8t58kcfbmv6Cr+PB+tLn3L8+BrYW88WfUACAI5o2TRPjmY18b2lrmuGYIO8FHMlNp5RgGOcMSYZvGzE0m3zkuppDr5tJ5j5ZdVzLqujl3Hutl7QWqr4++ufmUcb1WdfmT56JiT4SlJRztoGwdtegjB2HoJwMwSdVKEkh6GTqnTKZRGmy5DemKnE4kny4qMkqArJU9UrkXRrFJqk80u8WKGB3DNjqsS3QUsJLIGZOnm4Mb9zw/wDFNcHbLCMm0NbXoqd+XN8l2vyN1t1DT26jhpKSMRwRN2WNC6kYqKwj53dbO6x2TeWxpSVggAQAIArcQWalv1rlt9azOOQaOHijdwcOoSzgpxwy7T6iensVkOaPz9iCyVuHLk+hr2jMaxytHsyN5j7cFy5wcJYZ7/Q62Gqr34/Ndgq12YUZNwOOiBkRuclY4NejJODtr0E4GYnqUxZIbikTplLRO6XIKciqIvJMlbLFEVkl1SlqiOWCy12Ibi2koG8jJKfDE3mftxUwg5y3YmTW62rR1dJZ8l1s3XD1jo7BbmUVFHk0ave7xSO4uK6ldarjuo+d6zV26u122f8AEWicyggAQAIAEACAKfE+HqLEVtdSVjSCPailb4oncx9kllasWGatJq7NJZ0lf/TBb9Za7D1xdRXBmo1jkA9mVvMLlzhKEt1nvtFrKtXXvw+nWhEuzCg2kTilyOfAVBKZ2CpGGInKULIajdkmK2j696MgkLyP6pWWpFrhjDddiWs7qkGxTsI76ocPZZ06nonrrlY8IwbQ2lTooZnxb5L96jb8P2OhsVvZSW9hawHae92rpHc3HmunXCMFiJ8+1ert1dvSWvj4FonMoIAEACABAAgAQAIAq8Q2KhxBQPo7hHtMOrHjR0bv3NPNJOuM1hmnS6u3S2dJW+PiYTirDNdhqs7mpbt07ye5qGj2Xj6HmFzbKpVvDPebP2jVrIZjwa5r96iicqjpHwKGCO2lSOiaMqUSxhrsgpEwcSSKBkj0+DcFVmIZBU1IfTW4HWQtydL0Zn893mraqHZx6ji7U2zXo1uQ9afZ2fHyNotlupbXSR0lDCyGCMZNY35nmeq6cYqKwjwl11l9jsseWxtSVAgAQAIAEACABAAgAQAIAUuVupLnRSUddA2aCQZOY75jkeoSyipLDLabrKZqyt4aMYxtgGssRkrbeH1Vu1JOWb4R/VzHX1XPu07hxXFHtNmbahqcV28J/Z/Dv7jxKzndOmoLEStQSSs2nFrWguc4gNAGZJ6KRW0lk0nBnZwXmOvxEz2dHMo/q/8A6+vJa6tNnjP6Hk9p+kHOrSv/ANeXn9DUI2NY0NY0NaBkABkAFuPJHaABAAgAQAIAEACABAAgAQAIAEAfC0EEEaHfmgDOMadmsNaX1tg2IKk5ufTnSOQ9P2n4eSx26VPjA9Fs7bs6sV6jjHt615mUVlHU0FS+mrYJIJ2HJzJG5Ef3zWJpp4Z7Ki6FsVOt5RYWGwXK+1Pc22Avy8cjtGM83fTemhCU3iJVrNdRpIb1r+XW/kbHhDBFBYGtnkIqq/LWdzdGdGDh571vqojDjzZ4faO2LtY91erDs8z1g0GS0HIBAAgAQAIAEACABAAgAQAIAEACABAAgAQBU3uwWu+xCO50jJtnwv3Pb5OGoSTrjNesjTpdbfpZb1MseH0HbfQ0tupWUtDTxwQs8LGNyCaMVFYRVbdZdNzseWMqSsEACABAAgAQAIAEACAP/9k=",
  ];
  onMounted(() => {
    getProducts();
  })




  const getProducts=async()=>{
    let res=await axios.get('http://127.0.0.1:8000/api/forslideproducts')
    products.value = res.data.products
    console.log(products.value)

   }

   const getStars =  (star,starlength) => {
  
  console.log(star)
 
const value = star.reduce((total,e)=>{
console.log(e.stars_rated);
   console.log("star length",starlength)
  return Math.ceil( total+Number(e.stars_rated)/starlength);
},0)
console.log(value);
return value;


 
  // let response = await axios.get("http://127.0.0.1:8000/api/rates/"+id);
  // console.log("totalProductrate", response.data.totalRateGiven);
  // return Math.ceil(response.data.totalRateGiven)
  
};

 
  </script>
  
  <style scoped>
  /* .swiper {
    width: 50%;
    height: 400px;
    overflow: visible;
  } */
  .description {
    width: 50%;
    
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet{
      width: 20px;
      height: 12px;
      background-color: aliceblue;
      opacity: 1;
  }
  .swiper-pagination-bullet-active{
  
      background-color:aqua;
  
  }
  </style>
  