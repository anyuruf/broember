import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @service session;
  @tracked email;
  @tracked password;
  @tracked errorMessage;

  @action
  async authenticate(e) {
    e.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:graphql',
        this.email,
        this.password
      );
    } catch (error) {
      this.errorMessage = error.error || error;
    }

    if (this.session.isAuthenticated) {
      // What to do with all this success?
    }
  }
}
