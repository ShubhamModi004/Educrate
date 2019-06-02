import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Contact from '../components/ContactComponent';
import Form from '../components/ContactComponent/Form';
import Yellow from '../components/ContactComponent/Yellow';
import Map from '../components/ContactComponent/MapComponent';


const IndexPage = () => (
  <>
  <Form />
  <Yellow />
  <Map />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
