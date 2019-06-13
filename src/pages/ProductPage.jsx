import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import Products from '../components/Products/Landing';
import Features from '../components/Products/Features';



const AboutPage = () => (
  <>
  <SEO title="Product" />

  <Products />
  <Features />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(AboutPage);
