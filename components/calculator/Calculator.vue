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
            color="yellow lighter-2"
            @change="removeVegeSelectedItems"
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

<script>
// Common components
import ButtonCheese from '@/components/ButtonCheese';
import LoadingCheese from '@/components/LoadingCheese';
// Calculator components
import NumberOfPeoplePicker from '@/components/calculator/NumberOfPeoplePicker';
import FoodSelector from '@/components/calculator/FoodSelector';
import CalculationResults from '@/components/calculator/CalculationResults';
import CapacitySlider from '@/components/calculator/CapacitySlider';

// Helpers
import { useStorage } from '@vueuse/core';
import {
  states,
  food,
} from '@/components/calculator/calculator.const';
import { getLoadingTimes } from '@/components/calculator/calculator.methods';
import { calculateResults } from '@/components/calculator/calculator.computed';

export default {
  name: 'Calculator',
  components: {
    CapacitySlider,
    CalculationResults,
    LoadingCheese,
    ButtonCheese,
    NumberOfPeoplePicker,
    FoodSelector,
  },
  data() {
    return {
      usageCount: 0,
      isUserVege: false,
      formData: this.getInitalFormData(),
      // One of INITIAL, LOADING_RESULTS, DISPLAY_RESULTS
      state: states.INITIAL,
      statesEnum: states,
    };
  },
  computed: {
    submitButtonDisabled() {
      return !(
        (this.formData.numberOfAdults > 0 ||
          this.formData.numberOfChildren > 0) &&
        this.formData.food.length > 0
      );
    },
    clearButtonDisabled() {
      return (
        JSON.stringify(this.formData) ===
        JSON.stringify(this.getInitalFormData())
      );
    },
    results() {
      return calculateResults(this.formData);
    },
    selectedBaseFoods() {
      return this.formData.food.filter((food) => food.type === 'base');
    },
    selectedExtraFoods() {
      return this.formData.food.filter((food) => food.type === 'extra');
    },
  },
  created() {
    // Get the usage count from local storage
    this.usageCount = useStorage('usage-count', 0);
  },
  methods: {
    filterFood(foodType) {
      return food.filter((food) => {
        if (this.isUserVege) {
          return (
            food.type === foodType && food.isVegeFriendly === this.isUserVege
          );
        }
        return food.type === foodType;
      });
    },
    getInitalFormData() {
      return {
        numberOfAdults: 0,
        numberOfChildren: 0,
        food: [],
        capacity: 1,
      };
    },
    removeVegeSelectedItems() {
      this.formData = {
        ...this.formData,
        food: this.formData.food.filter(
          (food) => food.isVegeFriendly === this.isUserVege
        ),
      };
    },
    submit() {
      this.state = states.LOADING_RESULTS;
      this.usageCount.value += 1;

      // Wait and display the result
      setTimeout(() => {
        this.state = states.DISPLAY_RESULTS;
      }, getLoadingTimes({ usageCount: this.usageCount.value }));
    },
    clear() {
      this.formData = this.getInitalFormData();
      this.state = states.INITIAL;
    },
    updateForm(formProperty, value) {
      this.formData[formProperty] = value;
    },
    clickItem(item) {
      const indexOfItem = this.formData.food.indexOf(item);
      if (indexOfItem < 0) {
        this.formData.food.push(item);
      } else {
        this.formData.food.splice(indexOfItem, 1);
      }
    },
  },
};
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
