import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '../../components/PageLayout';
import {
  Content,
  CustomButton,
  Description,
  Highlight,
  LinkedInButton,
  MaintenanceLayout,
  Panel,
  SocialButtons,
  StatusChip,
  Title,
} from './styles';

const MaintenancePage = () => {
  const { t } = useTranslation('maintenance');

  return (
    <MaintenanceLayout>
      <PageContainer maxWidth="sm">
        <Panel>
          <Content>
            <StatusChip label={t('badge').toUpperCase()} />
            <Title>
              {t('titleStart')}
              <br />
              <Highlight color="var(--muted)">{t('titleEnd')}</Highlight>
            </Title>
            <Description>{t('description')}</Description>
            <SocialButtons>
              <CustomButton
                variant="contained"
                href="https://github.com/Guimrl"
                target="_blank"
                rel="noreferrer"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </CustomButton>
              <LinkedInButton
                variant="contained"
                href="https://www.linkedin.com/in/guimrl/"
                target="_blank"
                rel="noreferrer"
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </LinkedInButton>
            </SocialButtons>
          </Content>
        </Panel>
      </PageContainer>
    </MaintenanceLayout>
  );
};

export default MaintenancePage;
