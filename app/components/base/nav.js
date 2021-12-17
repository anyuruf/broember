import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NavComponent extends Component {
  @service session;
  @tracked showMenu = false;

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
