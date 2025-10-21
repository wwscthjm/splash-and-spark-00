-- Update partner categories and add more partners
DELETE FROM public.partners;

-- Insert MNO Partners
INSERT INTO public.partners (name, category, description, website_url) VALUES
('Tele2', 'MNO Partners', 'European mobile network operator', 'https://www.tele2.com'),
('Airtel', 'MNO Partners', 'Leading telecommunications services provider in India', 'https://www.airtel.in'),
('Telenor', 'MNO Partners', 'Norwegian multinational telecommunications company', 'https://www.telenor.com'),
('Jio', 'MNO Partners', 'India''s largest mobile network operator', 'https://www.jio.com'),
('Tata', 'MNO Partners', 'Tata Teleservices providing connectivity across India', 'https://www.tatateleservices.com'),
('Vi', 'MNO Partners', 'Vodafone Idea - major telecommunications operator in India', 'https://www.myvi.in'),
('China Mobile', 'MNO Partners', 'World''s largest mobile network operator', 'https://www.chinamobile.com'),
('China Unicom', 'MNO Partners', 'Major Chinese telecommunications operator', 'https://www.chinaunicom.com'),
('China Telecom', 'MNO Partners', 'Leading integrated information service provider in China', 'https://www.chinatelecom.com.cn');

-- Insert Technology Alliances
INSERT INTO public.partners (name, category, description, website_url) VALUES
('AWS', 'Technology Alliances', 'Amazon Web Services cloud computing platform', 'https://aws.amazon.com'),
('Azure', 'Technology Alliances', 'Microsoft Azure cloud services', 'https://azure.microsoft.com'),
('Google Cloud', 'Technology Alliances', 'Google Cloud Platform for cloud computing', 'https://cloud.google.com'),
('Cisco', 'Technology Alliances', 'Networking hardware and telecommunications equipment', 'https://www.cisco.com'),
('Juniper', 'Technology Alliances', 'Network infrastructure and security solutions', 'https://www.juniper.net');

-- Insert Channel Partners
INSERT INTO public.partners (name, category, description, website_url) VALUES
('System Integrators', 'Channel Partners', 'Global network of certified system integrators', NULL),
('Master Agents', 'Channel Partners', 'Authorized master agent network', NULL);