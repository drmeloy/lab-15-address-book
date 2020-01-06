import Componenet from '../Component.js';
import fetchAddresses from '../util/fetchAddresses.js';
import AddressEntry from './AddressEntry.js';

class AddressList extends Componenet {
  onRender(dom){
    const addressList = dom.querySelector('#address-list');    
    fetchAddresses()
      .then(fetchedAddresses => {
        if(fetchedAddresses.length < 1){
          const emptyNotification = document.createElement('div');
          emptyNotification.classList.add('empty-notification');
          emptyNotification.innerHTML = /*html*/ `
            <h1>Oops!</h1>
            <p>It looks like you don't have any addresses added to your Address Book yet. Follow the "Add An Entry" link above to add your first address!</p>
          `;
          addressList.appendChild(emptyNotification);
        } else {
          fetchedAddresses.forEach(address => {
            const props = { address };
            const addressEntry = new AddressEntry(props);
            addressList.appendChild(addressEntry.renderDOM());
          }); 
        }
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
