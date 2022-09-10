import axios from 'axios';

export const getTenisesPlayers = async () => {
  const {
    data: { players },
  } = await axios.get('/api/players');

  return { players };
};
