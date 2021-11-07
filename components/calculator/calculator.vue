<template>
  <v-row>
    <v-col align="center" cols="12" offset="0" sm='10' offset-sm='1' lg='8' offset-lg='2'>
      <form v-if="state === statesEnum.INITIAL">
        <h2>{{ $t('who-eat') }}</h2>
        <numberOfPeoplePicker
          label="adult"
          :count="formData.numberOfAdults"
          @count-updated="
            (updatedCount) => updateForm('numberOfAdults', updatedCount)
          "
        />
        <numberOfPeoplePicker
          label="children"
          :count="formData.numberOfChildren"
          @count-updated="
            (updatedCount) => updateForm('numberOfChildren', updatedCount)
          "
        />

        <h2 class="mt-5">{{ $t('what-eat') }}</h2>

        <div class='d-flex justify-center'>
          <v-switch
            v-model="isUserVege"
            :label="$t('calculator.form.isUserVege')"
            color="yellow lighter-2"
            @change='removeVegeSelectedItems'
          ></v-switch>
        </div>

        <h3 class="mt-2">{{ $t('what-eat.base') }}</h3>
        <foodSelector
          :available-foods="filterFood('base')"
          :selected-foods="formData.food"
          @food-clicked="(value) => clickItem('food', value)"
        />

        <h3 class="mt-2">{{ $t('what-eat.extra') }}</h3>
        <foodSelector
          :available-foods="filterFood('extra')"
          :selected-foods="formData.extra"
          @food-clicked="(value) => clickItem('extra', value)"
        />

        <div class="my-2">
          <button-cheese
            :disabled="clearButtonDisabled"
            class="ma-2"
            @click="clear"
            >{{ $t('calculator.form.clear') }}</button-cheese
          >
          <button-cheese
            :disabled="submitButtonDisabled"
            class="ma-2"
            @click="submit"
            >{{ $t('calculator.form.submit') }}</button-cheese
          >
        </div>
      </form>
      <div v-else-if="state === statesEnum.LOADING_RESULTS">
        <loading-cheese></loading-cheese>
      </div>
      <div v-if="state === statesEnum.DISPLAY_RESULTS">
        <capacity-slider
          @capacity-updated="
            (updatedCapacity) => updateForm('capacity', updatedCapacity)
          "
        />
        <calculation-results class="mb-8" :results="results" />
        <button-cheese
          :disabled="clearButtonDisabled"
          class="ma-2"
          @click="clear"
          >{{ $t('calculator.form.restart') }}</button-cheese
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
import buttonCheese from '@/components/button-cheese';
import loadingCheese from '@/components/loading-cheese';
import numberOfPeoplePicker from '@/components/calculator/numberOfPeoplePicker.vue';
import foodSelector from '@/components/calculator/foodSelector';
import { units, states, food, LOADING_TIME, CHEESE_PORTIONS } from '@/components/calculator/calculator.const';
import CalculationResults from '@/components/calculator/calculation-results';
import CapacitySlider from '@/components/calculator/capacity-slider';

export default {
  components: {
    CapacitySlider,
    CalculationResults,
    loadingCheese,
    buttonCheese,
    numberOfPeoplePicker,
    foodSelector,
  },
  data() {
    return {
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
        (this.formData.extra.length > 0 || this.formData.food.length > 0)
      );
    },
    clearButtonDisabled() {
      return (
        JSON.stringify(this.formData) ===
        JSON.stringify(this.getInitalFormData())
      );
    },
    results() {
      const { numberOfAdults, numberOfChildren, food, extra, capacity } =
        this.formData;
      const quantity = numberOfAdults + numberOfChildren / 2;

      return [
        ...food.map((aliment) => ({
          ...aliment,
          quantity: aliment.portions * quantity * capacity,
        })),
        ...extra.map((aliment) => ({
          ...aliment,
          quantity: aliment.portions * quantity * capacity,
        })),
        {
          id: 'raclette-cheese',
          portions: CHEESE_PORTIONS,
          quantity: quantity * capacity * CHEESE_PORTIONS,
          unit: units.GRAMS,
        },
      ]
    }
  },
  methods: {
    filterFood(foodType) {
      return food.filter((food) => {
        if (this.isUserVege) {
          return food.type === foodType && food.isVegeFriendly === this.isUserVege;
        }
        return food.type === foodType;
      })
    },
    getInitalFormData() {
      return {
        numberOfAdults: 0,
        numberOfChildren: 0,
        extra: [],
        food: [],
        capacity: 1,
      };
    },
    removeVegeSelectedItems() {
      this.formData = {
        ...this.formData,
        extra: this.formData.extra.filter((food) => food.isVegeFriendly === this.isUserVege),
        food: this.formData.food.filter((food) => food.isVegeFriendly === this.isUserVege),
      };
    },
    submit() {
      this.state = states.LOADING_RESULTS;

      // Wait and display the result
      setTimeout(() => {
        this.state = states.DISPLAY_RESULTS;
      }, LOADING_TIME);
    },
    clear() {
      this.formData = this.getInitalFormData();
      this.state = states.INITIAL;
    },
    updateForm(formProperty, value) {
      this.formData[formProperty] = value;
    },
    clickItem(type, item) {
      const indexOfItem = this.formData[type].indexOf(item);
      if (indexOfItem < 0) {
        this.formData[type].push(item);
      } else {
        this.formData[type].splice(indexOfItem, 1);
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
