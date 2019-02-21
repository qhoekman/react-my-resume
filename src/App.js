import { Font, PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';

import { MyDocument } from './elements/Document';

// Register Fonts

// Font.register('https://fonts.googleapis.com/css?family=Roboto', { family: 'Roboto' });
// eslint-disable-next-line no-restricted-globals
Font.register(`http://localhost:3000/assets/Lato-Regular.ttf`, { family: 'Lato' });
Font.register(`http://localhost:3000/assets/Roboto-Regular.ttf`, { family: 'Roboto' });
Font.register(`http://localhost:3000/assets/Roboto-Bold.ttf`, { family: 'Roboto-Bold' });

class App extends Component {
  render() {
    return (
      <PDFViewer style={{ width: '100vw', height: '100vh' }}>
        <MyDocument />
      </PDFViewer>
    );
  }
}

export default App;
