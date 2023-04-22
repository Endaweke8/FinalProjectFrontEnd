<template>
  <div class="carausel z-[1px]">
    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <slot :currentSlide="currentSlide" />
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination -->
    <div
      class="pagination lg:flex lg:justify-center lg:items-center flex items-center justify-center"
    >
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const currentSlide = ref(1);
const getSlideCount = ref(null);
const autoPlayEnabled = ref(true);
const timeoutDuration = ref(10000);

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = getSlideCount.value;
    return;
  }

  currentSlide.value -= 1;
};

const goToSlide = (index) => {
  currentSlide.value = index + 1;
};

const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, timeoutDuration.value);
};

if (autoPlayEnabled.value) {
  autoPlay();
}

onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".slide").length;
  console.log("current slide value=", getSlideCount.value);
});
</script>

<style lang="scss">
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .toggle-page {
    display: flex;
    flex: 1;
  }
  .right {
    justify-content: flex-end;
  }
  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #6347c7;
    color: #fff;
  }
}

.carausel {
  position: relative;
  z-index: 1;
}
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;

  gap: 16px;

  span {
    cursor: pointer;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: #e2e2d3;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .active {
    background-color: #6347c7;
  }
}
</style>
