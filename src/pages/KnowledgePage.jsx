import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import withLayout from '../layout';
import Link from '../components/Link';
import KnowledgeLanding from '../components/KnowledgeBank/KnowledgeLanding';
import KnowledgeDetails from '../components/KnowledgeBank/KnowledgeDetails';


const IndexPage = () => (
  <>
  <SEO title="Knowledge Bank" keywords={[`EDUCRATE`, `PROJECTORS FOR SCHOOLS`, `BEST PROJECTORS IN SCHOOL`, `SMART CLASSROOM`, `PROJECTOR COMPANIES IN KANPUR`, `SMART EDUCATION FOR STUDENTS`]} />

  <KnowledgeLanding />
  <KnowledgeDetails />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
