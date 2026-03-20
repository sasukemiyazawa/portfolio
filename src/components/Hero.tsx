import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "motion/react";

const MotionBox = motion(Box);

function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        scrollSnapAlign: "start",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          scrollSnapAlign: "start",
          display: "position",
          marginTop: "50%",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", height: "25vh", paddingTop: "25vh" }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 3 }}>
            こんにちは、私は
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{ display: "block", color: "primary.main", mb: 4 }}
          >
            クリエイティブデベロッパー
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            ユーザー体験を重視した Web
            アプリケーションとデジタルソリューションを制作しています
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              // onClick={() => scrollToSection("projects")}
            >
              作品を見る
            </Button>
            <Button
              variant="outlined"
              size="large"
              // onClick={() => scrollToSection("contact")}
            >
              お問い合わせ
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Hero;
