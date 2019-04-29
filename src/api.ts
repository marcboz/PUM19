import axios from 'axios';
import md5 from 'js-md5';

const SECRET = 'Ct8TuKPU8g';
const formatRequestURL = (query: string) =>
  `https://a2.wykop.pl/${query}/appkey/7570YJ0lPV`;

export const getHot = async (page: number, period: number) => {
  const url = formatRequestURL(`Entries/Hot/page/${page}/period/${period}`);
  const apisign = md5(SECRET + url);

  return axios.get(url, { headers: { apisign } });
};
