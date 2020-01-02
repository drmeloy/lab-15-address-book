import Component from '../Component.js';

class AddressEntry extends Component {
  onRender(dom){

  }

  renderHTML(){
    const { address } = this.props;

    return /*html*/ `
    <div class="address-entry">
      <div class="edit-icon"><i class="fas fa-user-edit"></i><span class="edit-tooltip">Edit</span></div>
      <div>${address.firstName} ${address.lastName}</div>
      <div>${address.address}</div>
      <div>${address.city}, ${address.state} ${address.zipcode}</div>
      <div>${address.country}</div>
    </div>
    `;
  }
}

export default AddressEntry;
