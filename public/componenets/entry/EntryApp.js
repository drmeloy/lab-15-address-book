import Component from '../Component.js';
import Header from '../common/Header.js';
import EntryForm from './EntryForm.js';

class EntryApp extends Component {
  onRender(dom){
    const header = new Header();
    dom.prepend(header.renderDOM());

    const entryForm = new EntryForm();
    dom.appendChild(entryForm.renderDOM());
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

export default EntryApp;
