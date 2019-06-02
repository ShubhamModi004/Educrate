import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';
import KnowledgeLanding from '../components/KnowledgeBank/KnowledgeLanding';
import KnowledgeDetails from '../components/KnowledgeBank/KnowledgeDetails';


const IndexPage = () => (
  <>
    <KnowledgeLanding />
    <KnowledgeDetails />
  </>
);

const customProps = {
    localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
