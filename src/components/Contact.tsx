import { Box, Container, Typography, Button } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
function Contact() {
  return (
    // {/* Contact Section */}
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        py: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 3 }}>
            お問い合わせ
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            プロジェクトのご相談やお仕事のご依頼など、お気軽にご連絡ください
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Email />}
              href="mailto:sasuke.miyazawa@gmail.com"
            >
              メール
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/sasukemiyazawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Contact;
