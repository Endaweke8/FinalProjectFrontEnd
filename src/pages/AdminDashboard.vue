<template>
  <div class="w-screen relative h-screen flex">
    <!-- Side bar -->
    <div class="w-[290px] h-full bg-gray-200 text-white" v-show="showSide">
      <div
        class="h-[60px] w-1/5 bg-gray-900 fixed flex justify-start items-center"
      >
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">Admin Dashboard</h3>
        </div>
      </div>
      <div
        class="overflow-y-scroll h-full w-1/5 xs:hidden md:flex fixed z-20 bottom-0 h-[calc(100vh-70px)] bg-gray-800 py-[20px]"
      >
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              active-class="active"
              to="/dashboardhome"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              Home
            </router-link>
            <router-link
              to="/profile"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              Profile
            </router-link>
            <router-link
             v-if="userStore.role=='manager'"
              to="/messages"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              Messages
            </router-link>
            <router-link
              to="/userstockrequests"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              StockRequests
            </router-link>
            <router-link
              to="/orders"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              Orders
            </router-link>
          
            <router-link
              v-if="userStore.role=='manager'"
              to="/products"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>

              Products Store
            </router-link>
            <router-link
              v-if="userStore.role=='manager'"
              to="/adminstocks"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>

              Stocks Store
            </router-link>
            <router-link
              v-if="userStore.role=='manager'"
              to="/users"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              Users
            </router-link>
          </div>
          <div class="h-[60px]">
            <div  v-if="userStore.role=='manager'">
              <router-link
                to="/addemployeerole"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 w-[25px] h-[25px] fill-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                Add Employee role
              </router-link>
            </div>
  

            <div  v-if="userStore.role=='manager'">
              <router-link
                
                to="/addproducts"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 w-[25px] h-[25px] fill-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                Add Products
              </router-link>
            </div>
  
            <div>
              <router-link
                v-if="userStore.role=='manager'"
                to="/addstocks"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 w-[25px] h-[25px] fill-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                Add Stock
              </router-link>
            </div>

            <div>
              <router-link
                to="/"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mr-2 w-[25px] h-[25px] fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
               Go front home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-gray-100 w-4/5 absolute inset-y-0 right-0 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-[25px] h-[25px]"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        <!-- Search bar -->

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center">
          
            <!-- <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-auto text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <router-link
                  to="/"
                  class="flex absolute inset-y-0 right-0 items-center pr-3"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </router-link>
              </div>
            </form> -->
          </div>
          <!-- Notification -->
          <!-- User login -->
          <div v-if="userStore.role=='manager'" class="w-[200px]">
            <div
              class="flex items-center justify-start space-x-4"
              @click="toggleDropNotification"
            >
              <div class="inline-flex mt-3 relative w-fit">
                <div
                  class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-700 text-white rounded-full z-10"
                >
                  {{ notifications.length }}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <!--             
              <div class="font-semibold dark:text-white text-left">
                <div class="mr-10">
                  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
             
            </svg>
            
            {{notifications.length}}
          </div>
              </div> -->
            </div>
            <!-- Drop down -->
            <div
              
              v-show="showDropDownNotifications"
              class="absolute right-[0px] z-10 mt-2 w-70 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div
                class="py-1 text-left"
                role="none"
                v-for="notification in notifications"
                :key="notification.id"
              >
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <span>
                  <div
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    {{ notification.data }}
                    <router-link to="/adminnotification" class="text-bluej-500"
                      >View Detail</router-link
                    >
                    <button
                      @click="markAsRead(notification.id)"
                      class="m-3 items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="blue"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </span>

                <hr />
              </div>
            </div>
          </div>
          <div class="w-[350px]">
            <div
              class="flex items-center justify-start space-x-4"
              @click="toggleDrop"
            >
              <img
                class="w-10 h-10 rounded-full border-2 border-gray-50"
                :src="userStore.image"
                alt=""
              />
              <div class="font-semibold dark:text-white text-left">
                <div>Welcome {{ userStore.firstName }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  {{ userStore.role }}
                </div>
              </div>
            </div>
            <!-- Drop down -->
            <div
              v-show="showDropDown"
              class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Account settings</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Support</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >License</a
                >

                <button
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  @click="logout"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-[calc(100vh-40px)] w-4/5 absolute inset-y-0 mt-12 right-0 bg-gray-50 p-[20px]"
      >
        <div class="border border-gray-300 rounded-md p-[20px] mb-10 z-19">
          <div class="grid gap-4 lg:grid-cols-4">
            <div v-if="userStore.role=='manager'"
              class="flex border-gray-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-md"
            >
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <h4 class="text-2xl font-semibold text-gray-700">
                  {{ totalUsers }}
                </h4>
                <div class="text-gray-500">All Customers</div>
              </div>
            </div>
            <div v-if="userStore.role=='manager'"
              class="flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-md"
            >
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <h4 class="text-2xl font-semibold text-gray-700">
                  {{ totalProducts }}
                </h4>
                <div class="text-gray-500">All Products</div>
              </div>
            </div>
            <div
             
              class="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-md"
            >
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <h4 class="text-2xl font-semibold text-gray-700">
                  {{ totalTransactions }}
                </h4>
                <div class="text-gray-500">All Orders</div>
              </div>
            </div>
            <div
            v-if="userStore.role=='manager'"
              class="flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100"
            >
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <span class="text-2xl font-semibold text-gray-700">
                  {{ totalSales }} 
                </span>
                <span class="ml-1 text-xl text-blue-400">birr</span >
                <div class="text-gray-500">Total Sales</div>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- Main  -->
  </div>
  <!-- <FooterSection /> -->
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import { useUserStore } from "../stores/user-store";

import { useBookmarkStore } from "../stores/bookmark-store";
import { usePostStore } from "../stores/post-store";
import { useCartStore } from "../stores/cart-store";
import { useProfileStore } from "../stores/profile-store";
import { useSongStore } from "../stores/song-store";
import { useVideoStore } from "../stores/video-store";
import axios from "axios";
// import FooterSection from "../components/structure/FooterSection.vue";

const bookmarkStore = useBookmarkStore();
const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();
const cartStore = useCartStore();
const store = useStore();
const router = useRouter();

const showDropDownNotifications = ref(false);
const showDropDown = ref(false);
const showSide = ref(true);
const notifications = ref([]);
const totalUsers = ref(0);
const totalProducts = ref(0);
const totalTransactions = ref(0);
const totalSales = ref(0);

onMounted(() => {
  getNotification();
  getTotalUsers();
  getTotalProducts();
  getTotalTransaction();
  getTotalSales();
});

const getTotalUsers = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_users");

  totalUsers.value = res.data.totalUsers;

  console.log("response", res);
};

const getTotalProducts = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_products");

  totalProducts.value = res.data.totalProducts;

  console.log("response", res);
};

const getTotalTransaction = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_transactions");

  totalTransactions.value = res.data.totalTransactions;

  console.log("response", res);
};

const getTotalSales = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_sales");

  totalSales.value = res.data.totalSales;

  console.log("response", res);
};

var user = ref([]);
const logout = async () => {
  try {
    deleteBookmark();
    let res = await axios.post("http://127.0.0.1:8000/api/logout", {
      user_id: userStore.id,
    });
    deleteCart();
    console.log(res.data);

    cartStore.clearCarts();
    userStore.clearUser();
    profileStore.clearProfile();
    songStore.clearSongs();
    postStore.clearPosts();
    videoStore.clearVideos();
    bookmarkStore.clearBookmarks();

    open.value = !open.value;
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};
const deleteCart = async () => {
  try {
    let res = await axios.delete(
      "http://127.0.0.1:8000/api/clearCartItem/" + userStore.id
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
const deleteBookmark = async () => {
  try {
    let res = await axios.delete(
      "http://127.0.0.1:8000/api/bookmarks/" + userStore.id
    );
    console.log(res.data);
    bookmarkStore.clearBookmarks();
  } catch (err) {
    console.log(err);
  }
};
const markAsRead = (id) => {
  alert(id);

  try {
    var page = "http://127.0.0.1:8000/api/notification/" + id;
    axios.put(page, {
      read_at: "2023-01-13 08:39:36",
    });
    getNotification();
  } catch (err) {
    console.log(err);
  }
};
const toggleSideBar = () => {
  showSide.value = !showSide.value;
};

const toggleDropNotification = () => {
  showDropDownNotifications.value = !showDropDownNotifications.value;
};

const toggleDrop = () => {
  showDropDown.value = !showDropDown.value;
};
user.value = computed(() => store.state.user.data);

const getNotification = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/notifications");
  console.log(res.data);
  notifications.value = res.data;
};

// export default {
//   data() {
//     return {
//       showDropDown: false,
//       showSide: true,
//     };
//   },
//   setup() {
//     const store = useStore();
//     const router = useRouter();
//     function logout() {
//       store.dispatch("logout").then(() => {
//         localStorage.clear();
//         router.push({ name: "LoginV" });
//       });
//     }
//     return {
//       user: computed(() => store.state.user.data),
//       logout,
//     };
//     console.log(user);
//   },
//   methods: {
//     // hide show side bar
//     toggleSideBar() {
//       this.showSide = !this.showSide;
//     },
//     // toggle user
//     toggleDrop() {
//       this.showDropDown = !this.showDropDown;
//     },
//   },
//   components: { FooterSection },
// };
</script>

<style></style>
