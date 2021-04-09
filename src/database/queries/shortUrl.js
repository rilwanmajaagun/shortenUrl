export default {
  createUrl: `
  INSERT INTO shorten_url(
    hash_url,
    full_url
  )
  VALUES($1, $2)
  `,
  getValidUrl: `
  SELECT * 
  FROM shorten_url
  WHERE full_url = $1 
  OR hash_url = $1`,
};
