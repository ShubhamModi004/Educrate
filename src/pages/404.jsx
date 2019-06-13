import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';

const NotFoundPage = () => (
  <>
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
