import Header from '../components/Header';
import { Page, PageContainer } from '../components/PageLayout';

const Home = () => {
  return (
    <Page id="home">
      <Header />
      <PageContainer maxWidth="lg"></PageContainer>
    </Page>
  );
};

export default Home;
