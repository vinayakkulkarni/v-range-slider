import VRangeSlider from '@/src/components/VRangeSlider.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import test from 'ava';

let wrapper;
const localVue = createLocalVue();

test.beforeEach(() => {
  wrapper = mount(VRangeSlider, {
    localVue,
  });
});

test('is a Vue instance', (t) => {
  t.is(wrapper.isVueInstance(), true);
});

test('renders correct snapshot', (t) => {
  t.snapshot(wrapper.vm.$el.outerHTML);
});
