import { getLoadingTimes } from '@/components/calculator/calculator.methods';

describe('calculator.methods', () => {
  describe('getLoadingTimes', () => {
    it('should be between 1 and 2 after a lot of usage', () => {
      const loadingTimes = getLoadingTimes({ usageCount: 1000000 })
      expect(loadingTimes < 2000 && loadingTimes > 1000).toBe(true);
    })
  })
})
