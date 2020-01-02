import App from './componenets/common/App.js';
import getName from './componenets/util/getName.js';

getName()
  .then(name => {    
    const props = name;
    const app = new App(props);
    document.body.prepend(app.renderDOM());
  });



