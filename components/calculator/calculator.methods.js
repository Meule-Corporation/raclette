import { LOADING_TIME } from '~/components/calculator/calculator.const';

export { getLoadingTimes };

function getLoadingTimes({ usageCount }) {
  return ((LOADING_TIME / Math.log(usageCount + 3)) + 1) * 1000
}
