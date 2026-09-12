import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '../../components/PageLayout';
import { generateResume, ResumePayload } from '../../services/resumeGenerator';
import { downloadBase64File } from '../../utils/downloadBase64File';
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
import { payload } from './mock';

const MaintenancePage = () => {
  const { t } = useTranslation('maintenance');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCv = async () => {
    try {
      setIsDownloading(true);
      const resumeBase64 = await generateResume(payload as ResumePayload);

      downloadBase64File(resumeBase64, 'Guilherme-Amaral-CV.pdf');
    } catch (error) {
      console.error('Unable to download the CV:', error);
    } finally {
      setIsDownloading(false);
    }
  };

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
              <CustomButton
                variant="contained"
                onClick={handleDownloadCv}
                disabled={isDownloading}
                startIcon={<DownloadIcon />}
              >
                {isDownloading ? 'Downloading...' : 'Download CV'}
              </CustomButton>
            </SocialButtons>
          </Content>
        </Panel>
      </PageContainer>
    </MaintenanceLayout>
  );
};

export default MaintenancePage;
