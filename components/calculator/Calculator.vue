<template>
  <v-row>
    <v-col
      align="center"
      cols="12"
      offset="0"
      sm="10"
      offset-sm="1"
      lg="8"
      offset-lg="2"
    >
      <form v-if="state === statesEnum.INITIAL">
        <h2>{{ $t('who-eat') }}</h2>
        <NumberOfPeoplePicker
          label="adult"
          :count="formData.numberOfAdults"
          @count-updated="
            (updatedCount) => updateForm('numberOfAdults', updatedCount)
          "
        />
        <NumberOfPeoplePicker
          label="children"
          :count="formData.numberOfChildren"
          @count-updated="
            (updatedCount) => updateForm('numberOfChildren', updatedCount)
          "
        />

        <h2 class="mt-5">{{ $t('what-eat') }}</h2>

        <div class="d-flex justify-center">
          <v-switch
            v-model="isUserVege"
            :label="$t('calculator.form.isUserVege')"
            color="yellow-lighten-2"
            @update:model-value="removeVegeSelectedItems"
          ></v-switch>
        </div>

        <h3 class="mt-2">{{ $t('what-eat.base') }}</h3>
        <FoodSelector
          :available-foods="filterFood('base')"
          :selected-foods="selectedBaseFoods"
          @food-clicked="clickItem"
        />

        <h3 class="mt-2">{{ $t('what-eat.extra') }}</h3>
        <FoodSelector
          :available-foods="filterFood('extra')"
          :selected-foods="selectedExtraFoods"
          @food-clicked="clickItem"
        />

        <div class="my-2">
          <ButtonCheese
            :disabled="clearButtonDisabled"
            class="ma-2"
            @click="clear"
            >{{ $t('calculator.form.clear') }}</ButtonCheese
          >
          <ButtonCheese
            :disabled="submitButtonDisabled"
            class="ma-2"
            @click="submit"
            >{{ $t('calculator.form.submit') }}</ButtonCheese
          >
        </div>
      </form>
      <div v-else-if="state === statesEnum.LOADING_RESULTS">
        <LoadingCheese />
      </div>
      <div v-if="state === statesEnum.DISPLAY_RESULTS">
        <CapacitySlider
          @capacity-updated="
            (updatedCapacity) => updateForm('capacity', updatedCapacity)
          "
        />
        <CalculationResults class="mb-8" :results="results" />
        <ButtonCheese
          :disabled="clearButtonDisabled"
          class="ma-2"
          @click="clear"
          >{{ $t('calculator.form.restart') }}</ButtonCheese
        >
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import {
  states,
  food,
} from '@/components/calculator/calculator.const'
import { getLoadingTimes } from '@/components/calculator/calculator.methods'
import { calculateResults } from '@/components/calculator/calculator.computed'

const usageCount = useStorage('usage-count', 0)
const isUserVege = ref(false)
const state = ref(states.INITIAL)
const statesEnum = states

function getInitialFormData() {
  return {
    numberOfAdults: 0,
    numberOfChildren: 0,
    food: [],
    capacity: 1,
  }
}

const formData = ref(getInitialFormData())

const submitButtonDisabled = computed(() => {
  return !(
    (formData.value.numberOfAdults > 0 ||
      formData.value.numberOfChildren > 0) &&
    formData.value.food.length > 0
  )
})

const clearButtonDisabled = computed(() => {
  return (
    JSON.stringify(formData.value) ===
    JSON.stringify(getInitialFormData())
  )
})

const results = computed(() => {
  return calculateResults(formData.value)
})

const selectedBaseFoods = computed(() => {
  return formData.value.food.filter((f) => f.type === 'base')
})

const selectedExtraFoods = computed(() => {
  return formData.value.food.filter((f) => f.type === 'extra')
})

function filterFood(foodType) {
  return food.filter((f) => {
    if (isUserVege.value) {
      return f.type === foodType && f.isVegeFriendly === isUserVege.value
    }
    return f.type === foodType
  })
}

function removeVegeSelectedItems() {
  formData.value = {
    ...formData.value,
    food: formData.value.food.filter(
      (f) => f.isVegeFriendly === isUserVege.value
    ),
  }
}

function submit() {
  state.value = states.LOADING_RESULTS
  usageCount.value += 1

  setTimeout(() => {
    state.value = states.DISPLAY_RESULTS
  }, getLoadingTimes({ usageCount: usageCount.value }))
}

function clear() {
  formData.value = getInitialFormData()
  state.value = states.INITIAL
}

function updateForm(formProperty, value) {
  formData.value[formProperty] = value
}

function clickItem(item) {
  const indexOfItem = formData.value.food.indexOf(item)
  if (indexOfItem < 0) {
    formData.value.food.push(item)
  } else {
    formData.value.food.splice(indexOfItem, 1)
  }
}
</script>

<style scoped>
#slide {
  margin-left: -1000px;
  width: 100px;
  height: 100px;
  background: blue;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  animation-delay: 2s;
}

@-webkit-keyframes slide {
  100% {
    margin-left: 0;
  }
}

@keyframes slide {
  100% {
    margin-left: 0;
  }
}
</style>
