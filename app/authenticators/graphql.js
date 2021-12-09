import Base from 'ember-simple-auth/authenticators/base';
import { useMutation } from 'glimmer-apollo';
import { reject, resolve } from 'rsvp';
import { SIGN_IN } from '../gql/mutations/sign-in';

export default class extends Base {
  signIn = useMutation(this, () => [
    SIGN_IN,
    {
      onComplete: (data) => {
        return data;
      },
      onError: (error) => {
        throw new Error(error);
      },
    },
  ]);

  restore(data) {
    if (data) {
      return resolve(data);
    }

    return reject();
  }

  async authenticate(email, password) {
    await this.signIn.mutate({ email, password });
  }
}
