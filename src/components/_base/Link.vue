<template>
  <div class="link-field">
    <div
      v-if="isEdit"
      class="link-field__input-wrapper"
    >
      <InputText
        v-model="value"
        placeholder="https://"
        class="link-field__input"
        @change="onChange"
        @keyup.enter="hideEditor"
        @blur="hideEditor"
        :disabled="isLoading"
        :invalid="isInvalid"
      />

      <div
        v-if="isLoading"
        class="preloader-wrapper"
      >
        <i class="pi pi-spin pi-spinner"></i>
      </div>
    </div>

    <a
      v-else
      :href="value"
      target="_blank"
      class="link-field__active-link p-inputtext"
    >
      {{ link.title }}

      <i
        class="pi pi-cog"
        @click.prevent="toEdit"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import { type Link } from '@/types';

import InputText from 'primevue/inputtext';

import { useFetchTitle } from '@/composables/useFetchTitle';

const HTTPS_STR = 'https://';
const HTTP_STR = 'http://';

export default defineComponent({
  name: 'LinkField',

  components: {
    InputText,
  },

  props: {
    link: {
      type: Object as PropType<Link>,
      default: () => ({}),
    },
  },

  setup() {
    const { isLoading, fetch } = useFetchTitle();

    return {
      fetch,
      isLoading,
    };
  },

  data() {
    return {
      value: this.link.url,
      isEdit: true,
      isInvalid: false,
    };
  },

  methods: {
    async onChange(e: Event) {
      this.isInvalid = false;

      const url = this.formatUrl((e.target as HTMLInputElement).value);

      if (url && !(url === this.link.url)) {
        let title;

        try {
          title = await this.fetch(url);
        } catch {
          this.isInvalid = true;

          return;
        }

        this.value = url;
        this.$emit('update', { title, url });
      }

      this.isEdit = false;
    },

    hideEditor(e: Event) {
      if (!this.link.title) {
        if (this.isInvalid) {
          this.onChange(e);
        }

        return;
      }

      this.isEdit = false;
    },

    formatUrl(url: string) {
      const lowerUrl = url.toLowerCase();

      if (lowerUrl.startsWith(HTTP_STR) || lowerUrl.startsWith(HTTPS_STR)) {
        return url;
      }

      return `${HTTPS_STR}${url}`;
    },

    toEdit() {
      this.isEdit = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.link-field {
  &__input-wrapper {
    position: relative;

    .preloader-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .pi {
        color: var(--p-form-field-focus-border-color);
      }
    }
  }

  &__input {
    height: 40px;
    width: 100%;

    &.p-invalid {
      color: var(--p-form-field-invalid-border-color);
    }
  }

  &__active-link {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: var(--p-form-field-focus-border-color);
    border-color: var(--p-form-field-focus-border-color);
    color: #000;
    text-decoration: none;
    box-sizing: border-box;

    .pi {
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
