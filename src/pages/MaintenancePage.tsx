import { Button, Card, CardContent, Chip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import { Page, PageContainer } from '../components/PageLayout';

const MaintenanceLayout = styled(Page)`
  display: grid;
  place-items: center;
`;

const Panel = styled(Card)`
  && {
    width: min(620px, 100%);
    border: 1px solid var(--border);
    border-radius: 16px;
    background: rgba(17, 17, 19, 0.92);
  }
`;

const Content = styled(CardContent)`
  && {
    padding: 48px;

    &:last-child {
      padding-bottom: 48px;
    }
  }
`;

const StatusChip = styled(Chip)`
  && {
    color: var(--orange);
    font:
      600 10px ui-monospace,
      monospace;
    letter-spacing: 0.12em;
    background: rgba(255, 138, 61, 0.1);
  }
`;

const Title = styled(Typography)`
  && {
    margin-top: 19.2px;
    font-size: 52px;
    line-height: 1;
    letter-spacing: -0.055em;
    font-weight: 700;
  }
`;

const Description = styled(Typography)`
  && {
    margin-top: 20px;
    max-width: 450px;
    color: var(--muted);
    line-height: 1.8;
  }
`;

const CustomButton = styled(Button)<{ target?: string }>`
  && {
    margin-top: 24px;
    color: #17110d;
    box-shadow: none;
    line-height: normal;

    &:hover {
      box-shadow: none;
      transform: translateY(-2px);
    }
  }
`;

const LinkedInButton = styled(CustomButton)`
  && {
    color: #ffffff;
    background: #0a66c2;

    &:hover {
      background: #004182;
    }
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

const Highlight = styled('span')<{ color?: string }>`
  color: ${({ color = 'var(--orange)' }) => color};
  font-weight: 700;
`;

const MaintenancePage = () => {
  const { t } = useTranslation('maintenance');

  return (
    <MaintenanceLayout>
      <Header maintenance />
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
