import Component from '../Component.js';

class AddressEntry extends Component {
  onRender(dom){
    const { address } = this.props;

    const editButton = dom.querySelector('.edit-icon');
    editButton.addEventListener('click', () => {
      const addressEntry = dom.querySelector('.address-entry');

      addressEntry.innerHTML = /*html*/ `
        <form id="edit-form">
          <input class="edit-name" name="first-name" type="text" value="${address.firstName}">
          <input class="edit-name" name="last-name" type="text" value="${address.lastName}">
          <input class="edit-address" name="address" type="text" value="${address.address}">
          <input class="edit-city" name="city" type="text" value="${address.city}">
          <input class="edit-state" name="state" type="text" value="${address.state}">
          <input class="edit-zip" name="zipcode" type="text" value="${address.zipcode}">
          <input class="edit-country" name="country" type="text" value="${address.country}">
          <button id="edit-submit">Submit</button>
        </form>
      `;

      const editForm = dom.querySelector('#edit-form');
      editForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const entry = {
          firstName: formData.get('first-name'),
          lastName: formData.get('last-name'),
          address: formData.get('address'),
          city: formData.get('city'),
          state: formData.get('state'),
          country: formData.get('country'),
          zipcode: formData.get('zipcode')
        };

        fetch(`/api/v1/entry/${address._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(entry)
        })
          .then(res => res.json())
          .then(() => {
            window.location.reload();
          });
      });
    });

    const deleteButton = dom.querySelector('.delete-icon');
    deleteButton.addEventListener('click', () => {
      fetch(`/api/v1/entry/${address._id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => {
          window.location.reload();
        });
    });
  }

  renderHTML(){
    const { address } = this.props;

    return /*html*/ `
    <div>
      <div class="address-entry">
        <div class="edit-icon"><i>Woo!</i><span class="edit-tooltip">Edit</span></div>
        <div class="delete-icon">Delete</div>
        <div class="name">${address.firstName} ${address.lastName}</div>
        <div class="address">${address.address}</div>
        <div class="city-state-zip">${address.city}, ${address.state} ${address.zipcode}</div>
        <div class="country">${address.country}</div>
      </div>
    <div>
    `;
  }
}

export default AddressEntry;

/* <i class="fas fa-user-edit"></i>  */
