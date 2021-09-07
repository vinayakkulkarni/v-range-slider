<script lang="ts">
  import { h, defineComponent } from '@vue/composition-api';
  import type { SetupContext } from '@vue/composition-api';
  import RangeSlider from '../lib';

  export default defineComponent({
    name: 'VRangeSlider',
    setup(_, { slots }: SetupContext) {
      const rangeSlider = new RangeSlider();
      return () => h('div', { class: 'w-full h-full' }, slots);
    },
  });
</script>
