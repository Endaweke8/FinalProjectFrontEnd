<template>
    
   
    
    <div  class=" mx-auto mt-12 ">
        
        <div class="text-gray-900 text-xl">Carts</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>

        <div v-if="cartStore.carts" class="bg-white rounded px-8 pt-6 pb-8">
            <div  v-for="(cart ,index) in cartStore.carts.cart" :key="index"  class="flex flex-wrap items-center">
                
                <div v-if="cart.quantity>0" class="w-1/4 flex flex-wrap mr-auto mt-2 text-lg p-1 text-gray-900">
                   {{++index}}   
                   
                </div>
                <div v-if="cart.quantity>0" v-for="cartwproduct in cartStore.carts.cartwithproduct" :key="cartwproduct">
                   
                   <div v-if="cart.product_id==cartwproduct.id">
                      
                      <img :src="cartwproduct.image_name" class="rounded-full" width="60">
                   </div>
                   <div v-if="cart.product_id==cartwproduct.id">
                        product id {{ cart.product_id }}
                   </div>
                     
                   <div v-if="cart.product_id==cartwproduct.id">
                      
                      Name :  {{cartwproduct.name}}
                   </div>

                   <div v-if="cart.product_id==cartwproduct.id">
                      
                      Sale_price :  {{cartwproduct.sale_price}} birr
                   </div>
                   <div v-if="cart.product_id==cartwproduct.id">
                      
                      Subtotal :  {{cartwproduct.total}} birr
                   </div>
                   <div v-if="cart.product_id==cartwproduct.id">
                           
               
                    
                      
                   </div>
              
                  
                 </div>
                 <span v-if="cart.quantity>0">
                    <button
                        @click="addToCart(cart.product_id)"
                        class="
                           
                            bg-transparent
                            hover:bg-green-400
                            text-gray-900
                            font-semibold
                            hover:text-white
                            py-2
                            px-4
                            mx-2
                            border
                            border-green-400
                            hover:border-transparent
                            rounded
                        "
                    >
                        +
                    </button>
                   <span class="items-center justify-center"> {{ cart.quantity }}</span>
                    <button
                        @click="removeFromCart(cart.product_id,cart.quantity)"
                        class="
                           
                            bg-transparent
                            hover:bg-yellow-400
                            text-gray-900
                            font-semibold
                            hover:text-white
                            py-2
                            px-4
                            mx-2
                            border
                            border-green-300
                            hover:border-transparent
                            rounded
                        "
                    >
                        -
                    </button>
                 </span>
                <div v-if="cart.quantity>0" class="w-1/4 mr-auto mt-2 mx-4 items-center text-lg p-1 text-gray-900">
                   quantity {{ cart.quantity }}
                  
                    <!-- <iframe class="w-full h-20" :src="video.url"></iframe> -->
                </div>




                <div v-if="cart.quantity>0" class="w-1/4 flex flex-wrap ml-auto p-1">
                    <button
                        @click="deleteCart(cart)"
                        class="
                            float-right
                            bg-transparent
                            hover:bg-red-500
                            text-gray-900
                            font-semibold
                            hover:text-white
                            py-2
                            px-4
                            border
                            border-red-500
                            hover:border-transparent
                            rounded
                        "
                    >
                        Remove
                    </button>
                </div>
                <br>
                <br>
                <div v-if="cart.quantity>0" class="bg-black w-full h-0.5 rounded mb-4"></div>
            
                
                 
            </div>
        </div>
       
        <div class="mb-10">

            <span v-if="cartStore.carts">Total Amount : {{ cartStore.carts.cartwithproduct.totalAmount }} birr</span>
                  
            <router-link to="/checkout">
                <button class="bg-green-500 mt-3 mx-5 text-white  p-1"> Order Now</button>
            </router-link>
        </div>

    </div>
</template>

<script setup>
    import axios from 'axios'
    import { ref } from 'vue'
    import Swal from 'sweetalert2'
    import { useCartStore } from '../../../stores/cart-store'
    import { useUserStore } from '../../../stores/user-store'
    const userStore = useUserStore()
    const cartStore = useCartStore()
    const cartQuantity = ref(0)
    const productQuantity = ref(0)
    const deleteCart = async (cart) => {
        Swal.fire({
            title: 'Are you sure you want to remove this from cart?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete('http://127.0.0.1:8000/api/cart/' + cart.id)
                    cartStore.fetchCartsByUserId(userStore.id)
                    Swal.fire(
                        'Deleted!',
                        'Your video has been deleted.',
                        'success'
                    )
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }



    const   addToCart=async(product_id)=>{
           
        let res = await axios.get('http://127.0.0.1:8000/api/getcart/' + product_id );
        cartQuantity.value=res.data.cartQuantity;
        console.log(cartQuantity.value);
        let ress= await axios.get('http://127.0.0.1:8000/api/getsingleproduct/' + product_id );
        productQuantity.value=ress.data[0].productquantity;
        console.log(ress.data[0].productquantity);
  if(cartQuantity.value>=productQuantity.value){
   
    Swal.fire({
        toast: true,
        icon: "error",
        title: "Sorry,You are ordering " + cartQuantity.value + " currently the available quantity of this product is "  + productQuantity.value,
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    return
  } 
         await axios.post("http://127.0.0.1:8000/api/cart/"+userStore.id,{
                'product_id':product_id,
                'user_id':userStore.id
            }).then((response)=>{
                    
                cartStore.fetchCartsByUserId(userStore.id)
                Swal.fire({
              toast: true,
              icon: "success",
              title: 'You added to cart successfuly'  ,
              animation: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
              }
          });
               
                
            });




        }



        const removeFromCart=async (product_id,quantity)=>{
            if(quantity<1){
                Swal.fire({
              toast: true,
              icon: "error",
              title: 'The item is empty'   ,
              animation: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
              }
          });

            }
           
            else{

                var url = "http://127.0.0.1:8000/api/removeFromCart";
         await axios.post(url,{
                'product_id':product_id,
                // 'user_id':user.value.id
            }).then((response)=>{
                cartStore.fetchCartsByUserId(userStore.id)
                Swal.fire({
              toast: true,
              icon: "warning",
              title: 'You removed from cart succesfuly'   ,
              animation: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
              }
          });
                console.log(response.data);
                
            });


            }


        }

</script>