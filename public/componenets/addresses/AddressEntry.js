import Component from '../Component.js';

class AddressEntry extends Component {
  onRender(dom){

  }

  renderHTML(){
    const { address } = this.props;

    return /*html*/ `
    <section class="address-entry">
      <div>${address.firstName} ${address.lastName}</div>
      <div>${address.address}</div>
      <div>${address.city}, ${address.state} ${address.zipcode}</div>
      <div>${address.country}</div>
    </section>
    `;
  }
}

export default AddressEntry;
