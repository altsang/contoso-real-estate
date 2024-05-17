export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "9rp9GMCzkMy1CQOtrPkmnNeO+RdXKUFftJtSaHzfbDPP6dtfoM7dr4/hDEwhvuhDrKCN9GMdxvGhCcARQhHW7A=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "mdOf3nrF0umEOhnYhwQ+Tw=="),
  },
});
