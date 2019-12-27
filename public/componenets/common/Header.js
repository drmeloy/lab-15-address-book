import Component from '../Component.js';
import deleteCookie from '../util/deleteCookie.js';

class Header extends Component {
  onRender(dom){
    const logoutButton = dom.querySelector('#logout');
    logoutButton
      .addEventListener('click', () => {
        deleteCookie('session');
      });
  }

  renderHTML() {
    return /*html*/ `
      <header>
        <ul>
          <a href="../home.html">Home</a>
          <a href="../addresses.html">Address book</a>
          <a href="../entry.html">Add an entry</a>
          <button id="logout">Log out</button>
        </ul>
      </header>
    `;
  }
}

export default Header;
