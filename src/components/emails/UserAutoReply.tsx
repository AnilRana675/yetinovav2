import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { type ContactFormData, inquiryTypeLabels } from "@/lib/validations/contact";

interface UserAutoReplyEmailProps extends ContactFormData {}

const LOGO_URL = "https://yetinova.com/images/SideWaysIcon.webp";

export function UserAutoReplyEmail({ name, inquiryType }: UserAutoReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out, {name}! We've received your inquiry.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img src={LOGO_URL} alt="YetiNova" width="60" height="60" style={logo} />
          </Section>

          <Heading style={heading}>Thanks for reaching out, {name}!</Heading>

          <Text style={bodyText}>
            We&apos;ve received your inquiry about &quot;{inquiryTypeLabels[inquiryType]}&quot; and
            our team will review it shortly.
          </Text>

          <Section style={stepsSection}>
            <Text style={stepsHeading}>What happens next:</Text>
            <Text style={stepItem}>Our team reviews your inquiry within 24-48 hours</Text>
            <Text style={stepItem}>We&apos;ll reach out via email to discuss next steps</Text>
            <Text style={stepItem}>Feel free to explore our portfolio in the meantime</Text>
          </Section>

          <Section style={buttonSection}>
            <Button href="https://yetinova.com" style={button}>
              Visit YetiNova
            </Button>
          </Section>

          <Section style={footerSection}>
            <Text style={footerText}>YetiNova AI-Tech Pvt. Ltd.</Text>
            <Text style={footerSubtext}>The Launchpad for Himalayan Innovation</Text>
            <Link href="mailto:contact@yetinova.com" style={footerLink}>
              contact@yetinova.com
            </Link>
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
  marginBottom: "24px",
  color: "#ffffff",
};

const bodyText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#a3a3a3",
  textAlign: "center" as const,
  marginBottom: "32px",
};

const stepsSection = {
  backgroundColor: "#1a1a1a",
  borderRadius: "16px",
  padding: "24px",
  marginBottom: "32px",
};

const stepsHeading = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#7cff67",
  marginBottom: "16px",
};

const stepItem = {
  fontSize: "15px",
  color: "#d4d4d4",
  marginBottom: "12px",
  paddingLeft: "16px",
  borderLeft: "2px solid #7cff67",
};

const buttonSection = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#7cff67",
  borderRadius: "12px",
  color: "#000000",
  fontSize: "16px",
  fontWeight: "600" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
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
  marginBottom: "8px",
};

const footerLink = {
  color: "#7cff67",
  fontSize: "14px",
  textDecoration: "none",
};

export default UserAutoReplyEmail;
