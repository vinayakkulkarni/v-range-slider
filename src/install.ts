import VueCompositionApi from '@vue/composition-api';
import { VueConstructor } from 'vue';
import VRangeSlider from './components/VRangeSlider.vue';

let installed = false;

const install = {
  install(Vue: VueConstructor): void {
    if (installed) return;
    Vue.use(VueCompositionApi);
    Vue.component('VRangeSlider', VRangeSlider);
    installed = true;
  },
};

export default install;
