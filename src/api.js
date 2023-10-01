import axios from 'axios';

const apiKey = '967c8abd76msh268b0b032e7b608p18783bjsnfbec53bd0d0a';

const api = axios.create({
  baseURL: 'https://healthruwords.p.rapidapi.com/v1/',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
  },
});

export async function getQuote() {
  try {
    const response = await api.get('quotes/', {
      params: {
        t: 'Wisdom',
        maxR: '1',
        size: 'medium',
        id: '731',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default api;
