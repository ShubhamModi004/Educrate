import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';
import Landing from '../components/Home/AboutComponent/AboutLanding';
import Sections from '../components/Home/AboutComponent/Sections';

const AboutPage = () => (
  <>
    <Landing />
    <Sections />
  </>
);

const customProps = {
    localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(AboutPage);
