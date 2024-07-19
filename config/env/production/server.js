module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('VERCEL_URL', 'http://localhost:1337'),
    app: {
      keys: env.array('APP_KEYS'),
    },
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'vODF/Pj34Io+WFXseWI/aQ=='),
      },
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  });
  