import { describe, it, expect } from 'vitest'
import {  mountSuspended } from '@nuxt/test-utils/runtime'
import ForTesting from '~/pages/for-testing.vue'

describe('Simple Test', () => {
  it('should pass this simple test', async () => {
    const component = await mountSuspended(ForTesting)
    expect(component.find('h1').text()).toBe('For Testing')
  })
})
