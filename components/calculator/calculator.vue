<template>
  <v-row>
    <v-col align="center" cols="10" offset="1">
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

        <h2>{{ $t('what-eat') }}</h2>

        <div class='d-flex justify-center'>
          <v-switch
            v-model="isUserVege"
            :label="$t('calculator.form.isUserVege')"
            color="yellow lighter-2"
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
        {{ $t('calculator.loading') }}
      </div>
      <div v-if="state === statesEnum.DISPLAY_RESULTS">
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
import buttonCheese from '../button-cheese';
import loadingCheese from '../loading-cheese';
import numberOfPeoplePicker from './numberOfPeoplePicker.vue';
import { units, states, food } from './calculator.const';
import foodSelector from './foodSelector';
import CalculationResults from '@/components/calculator/calculation-results';

export default {
  components: {
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
      results: [],
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
      };
    },
    submit() {
      this.state = states.LOADING_RESULTS;
      const CHEESE_PORTIONS = 215;
      const quantity =
        this.formData.numberOfAdults + this.formData.numberOfChildren / 2;
      this.results = [
        ...this.formData.food.map((aliment) => ({
          ...aliment,
          quantity: aliment.portions * quantity,
        })),
        ...this.formData.extra.map((aliment) => ({
          ...aliment,
          quantity: aliment.portions * quantity,
        })),
        {
          id: 'raclette-cheese',
          portions: CHEESE_PORTIONS,
          quantity: quantity * CHEESE_PORTIONS,
          unit: units.GRAMS,
        },
      ];
      // In ms
      const LOADING_TIME = 5000;
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
