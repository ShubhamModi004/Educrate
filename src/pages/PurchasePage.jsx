import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import PurchaseLanding from '../components/Purchase/PurchaseLanding';
import Steps from '../components/Purchase/Steps';
import FaqSection from '../components/Purchase/FaqSection';


const AboutPage = () => (
  <>
  <SEO title="Purchase" />

  <PurchaseLanding />
  <Steps />
  <FaqSection />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(AboutPage);
