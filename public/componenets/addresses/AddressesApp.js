import Component from '../Component.js';
import Header from '../common/Header.js';
import AddressList from './AddressList.js';

class AddressesApp extends Component {
  onRender(dom){
    const header = new Header();
    dom.prepend(header.renderDOM());

    const addressList = new AddressList();
    dom.appendChild(addressList.renderDOM());
  }

  renderHTML(){
    return /*html*/`
    <div>
      <main>
      </main>
    </div>
`;
  }
}

export default AddressesApp;
