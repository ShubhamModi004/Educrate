import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import Landing from '../components/Home/Landing';
import About from '../components/Home/About';
import How from '../components/Home/How';
import Product from '../components/Home/Product';
import Smart from '../components/Home/Smart';
import Future from '../components/Home/Future';
import Counter from '../components/Home/Counter';

const IndexPage = () => (
  <>
  <SEO title="Smart classroom Projectors" keywords={[`EDUCRATE`, `PROJECTORS FOR SCHOOLS`, `BEST PROJECTORS IN SCHOOL`, `SMART CLASSROOM`, `PROJECTOR COMPANIES IN KANPUR`, `SMART EDUCATION FOR STUDENTS`]} />

  <Landing />
  <About />
  <How />
  <Product />
  <Smart />
  <Future />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
