import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { type ContactFormData, inquiryTypeLabels } from "@/lib/validations/contact";

interface AdminNotificationEmailProps extends ContactFormData {
  timestamp: string;
  ipAddress: string;
}

const LOGO_URL = "https://yetinova.com/images/SideWaysIcon.webp";

export function AdminNotificationEmail({
  name,
  email,
  inquiryType,
  message,
  timestamp,
  ipAddress,
}: AdminNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img src={LOGO_URL} alt="YetiNova" width="60" height="60" style={logo} />
          </Section>

          <Heading style={heading}>New Contact Form Submission</Heading>

          <Section style={contentSection}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Inquiry Type</Text>
            <Text style={value}>{inquiryTypeLabels[inquiryType]}</Text>

            <Text style={label}>Message</Text>
            <Text style={messageValue}>{message}</Text>
          </Section>

          <Section style={metaSection}>
            <Text style={metaText}>Received: {timestamp}</Text>
            <Text style={metaText}>IP Address: {ipAddress}</Text>
          </Section>

          <Section style={footerSection}>
            <Text style={footerText}>YetiNova AI-Tech Pvt. Ltd.</Text>
            <Text style={footerSubtext}>The Launchpad for Himalayan Innovation</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0a0a0a",
  color: "#ffffff",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "40px 20px",
};

const logoSection = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const logo = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "8px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "600" as const,
  textAlign: "center" as const,
  marginBottom: "32px",
  color: "#ffffff",
};

const contentSection = {
  backgroundColor: "#1a1a1a",
  borderRadius: "16px",
  padding: "24px",
  marginBottom: "24px",
};

const label = {
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#7cff67",
  marginBottom: "4px",
  marginTop: "16px",
};

const value = {
  fontSize: "16px",
  color: "#ffffff",
  marginBottom: "8px",
};

const messageValue = {
  fontSize: "16px",
  color: "#a3a3a3",
  lineHeight: "1.6",
  marginBottom: "8px",
};

const metaSection = {
  borderTop: "1px solid #262626",
  paddingTop: "16px",
  marginBottom: "24px",
};

const metaText = {
  fontSize: "14px",
  color: "#737373",
  marginBottom: "4px",
};

const footerSection = {
  borderTop: "1px solid #262626",
  paddingTop: "24px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "14px",
  color: "#ffffff",
  marginBottom: "4px",
};

const footerSubtext = {
  fontSize: "12px",
  color: "#737373",
};

export default AdminNotificationEmail;
