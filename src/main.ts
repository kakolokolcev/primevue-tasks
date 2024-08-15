import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/index.scss';
import Aura from '@primevue/themes/aura';

import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount('#app');
