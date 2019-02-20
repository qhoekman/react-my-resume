import { PDFViewer } from '@react-pdf/renderer';
import React, { Component } from 'react';

import { MyDocument } from './elements/Document';

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
