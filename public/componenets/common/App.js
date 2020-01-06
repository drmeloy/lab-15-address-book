import Component from '../Component.js';
import Header from './Header.js';

class App extends Component {
  onRender(dom){
    const header = new Header();
    dom.prepend(header.renderDOM());
  }

  renderHTML(){
    const name = this.props;

    return /*html*/`
    <div>
        <main>
         <h1>What's up ${name}!</h1>
         <p id="greeting">Welcome back! If you have new addresses that you want to save, add them to your Address Book by clicking the "Add An Entry" link on navigation bar above. If you want to view or edit your existing entries, click the "Address Book" link instead.</p>
        </main>
    </div>
`;
  }
}

export default App;
