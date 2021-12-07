module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e50adc515fb53d37a38c9686092a60e5'),
  },
});
