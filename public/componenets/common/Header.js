import Component from '../Component.js';

class Header extends Component {
  onRender(dom){

  }

  renderHTML() {
    return /*html*/ `
      <header>
        <ul>
          <li>Home</li>
          <li>Address book</li>
          <li>Add an entry</li>
        </ul>
      </header>
    `
  }
}

export default Header;
