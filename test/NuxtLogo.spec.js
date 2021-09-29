import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('Main page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index, {
      mocks: {
        $t: (msg) => msg
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
