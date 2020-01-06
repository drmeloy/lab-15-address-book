import Component from '../Component.js';

class EntryForm extends Component {
  onRender(dom){
    const form = dom.querySelector('#entry-form');    
    
    form
      .addEventListener('submit', event => {
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
        

        fetch('/api/v1/entry', {
          method: 'POST',
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
  }

  renderHTML(){
    return /*html*/ `
    <div>
      <form id="entry-form">
        <fieldset>
          <legend>Address entry</legend>
          <input name="first-name" type="text" placeholder="First name">
          <input name="last-name" type="text" placeholder="Last name">
          <input name="address" type="text" placeholder="Street address">
          <input name="city" type="text" placeholder="City">
          <input name="state" type="text" placeholder="State">
          <input name="country" type="text" placeholder="Country">
          <input name="zipcode" type="text" placeholder="Zipcode">
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
    `;
  }
}

export default EntryForm;
