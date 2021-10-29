import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.prohibitAuthentication(transition, 'add-user');
  }
}
