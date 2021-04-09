import { db } from '../database';
import { BaseUrlQuery } from '../database/queries';

const redirect = async (req, res) => {
  let hash = req.url;
  hash = hash.slice(1);
  const [result] = await db.any(BaseUrlQuery.getValidUrl, [hash]);
  if (!result) {
    return res.redirect('/graphql');
  }
  res.status(302);
  if (result.full_url.includes('http')) {
    return res.redirect(result.full_url);
  }
  return res.redirect(`http://${result.full_url}`);
};

export default redirect;
