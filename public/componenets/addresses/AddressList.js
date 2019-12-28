import Componenet from '../Component.js';
import fetchAddresses from '../util/fetchAddresses.js';
import AddressEntry from './AddressEntry.js';

class AddressList extends Componenet {
  onRender(dom){
    const addressList = dom.querySelector('#address-list');    

    fetchAddresses()
      .then(fetchedAddresses => {
        fetchedAddresses.forEach(address => {
          const props = { address };
          const addressEntry = new AddressEntry(props);
          addressList.appendChild(addressEntry.renderDOM());
        });  
      });
      
  }

  renderHTML(){
    return /*html*/ `
      <div>
        <div id="address-list">
        </div>
      </div>
    `;
  }
}

export default AddressList;
