import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Contact from '../components/ContactComponent';


const IndexPage = () => (
  <>
    <Contact/>
  </>
);

const customProps = {
    localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
