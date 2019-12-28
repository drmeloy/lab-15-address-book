import Component from '../Component.js';

class AddressEntry extends Component {
  onRender(dom){

  }

  renderHTML(){
    const { address } = this.props;

    return /*html*/ `
    <div class="address-entry">
      ${address.firstName}
      ${address.lastName}
      ${address.address}
      ${address.city}
      ${address.state}
      ${address.country}
      ${address.zipcode}
    </div>
    `;
  }
}

export default AddressEntry;
