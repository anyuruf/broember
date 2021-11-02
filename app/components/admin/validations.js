import { validator, buildValidations } from 'ember-cp-validations';

export default buildValidations({
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
    }),
  ],
  email: [validator('presence', true), validator('format', { type: 'email' })],
});
