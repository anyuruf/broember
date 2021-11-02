import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked errorMessage;
  @service session;
  @tracked email;
  @tracked password;
  @tracked errorMessage;

  @action
  async authenticate(event) {
    event.preventDefault();
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
      this.transitionToRoute('add-user');
    }
  }
}
