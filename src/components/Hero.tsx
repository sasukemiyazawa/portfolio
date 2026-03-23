import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "motion/react";

// FIXME: motion.divをmotion.create(Box)に変更
const MotionBox = motion.create(Box);

function Hero({
  scrollToProject,
  scrollToStudy,
  scrollToHobby,
}: {
  scrollToProject: () => void;
  scrollToStudy: () => void;
  scrollToHobby: () => void;
}) {
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
            はじめまして、
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{ display: "block", color: "primary.main", mb: 4 }}
          >
            宮沢颯助です。
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 1000, mx: "auto" }}
          >
            ReactとTypeScriptを中心に、フロントエンドからバックエンドまで幅広く開発しています。
            このポートフォリオでは、私のプロジェクトや研究活動、趣味などを紹介しています。
            <br />
            よろしくお願いします！
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
              onClick={() => scrollToProject()}
            >
              作品を見る
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToStudy()}
            >
              研究を見る
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToHobby()}
            >
              趣味を見る
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Hero;
