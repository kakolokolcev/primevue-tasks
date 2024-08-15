import { ref } from 'vue';
import axios from 'axios';

const proxyUrl = 'https://api.allorigins.win/get?url=';
const titleRegex = /<title[^>]*>([^<]+)<\/title>/;

const getTitleFromStringHtml = (html: string) => {
  return html.match(titleRegex)?.[1] || '';
};

export const useFetchTitle = () => {
  const isLoading = ref(false);

  const fetch = async (url: string) => {
    let resp;

    isLoading.value = true;

    try {
      resp = await axios.get(`${proxyUrl}${url}`);
    } catch {
      throw Error('Ошибка получения title указанной страницы');
    } finally {
      isLoading.value = false;
    }

    return getTitleFromStringHtml(resp.data.contents);
  };

  return { isLoading, fetch };
};
