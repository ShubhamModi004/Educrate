import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';

const NotFoundPage = () => (
  <>
  <SEO title="404" keywords={[`EDUCRATE`, `PROJECTORS FOR SCHOOLS`, `BEST PROJECTORS IN SCHOOL`, `SMART CLASSROOM`, `PROJECTOR COMPANIES IN KANPUR`, `SMART EDUCATION FOR STUDENTS`]} />
  <div style={{ width: '100vw', height: '40rem' }}>
    <h1>
      <FormattedMessage id="error404.NOT FOUND" />
    </h1>
    <p>
      <FormattedMessage id="error404.You just hit a route that doesnt exist the sadness" />
    </p>
  </div>
  </>
);

const customProps = {
  localeKey: 'error404',
  hideLangs: true,
};

export default withLayout(customProps)(NotFoundPage);
