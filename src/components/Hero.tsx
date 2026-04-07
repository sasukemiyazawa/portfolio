import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "motion/react";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "100vh",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center" }}
        >
          <Typography
            component="h1"
            gutterBottom
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.75rem" },
              fontWeight: 300,
            }}
          >
            はじめまして、
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "primary.main",
              mb: 4,
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.75rem" },
              fontWeight: 300,
            }}
          >
            宮沢颯助です。
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: 1000,
              mx: "auto",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
              px: { xs: 1, sm: 0 },
            }}
          >
            ReactとTypeScriptを中心に、フロントエンドからバックエンドまで幅広く開発しています。
            このポートフォリオでは、私のプロジェクトや研究活動、趣味などを紹介しています。
            <br />
            よろしくお願いします！
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, sm: 2 },
              justifyContent: "center",
              flexWrap: "wrap",
              px: { xs: 2, sm: 0 },
            }}
          >
            <Button
              variant="contained"
              size={isMobile ? "medium" : "large"}
              onClick={scrollToProject}
              sx={{ minWidth: { xs: "100px", sm: "auto" } }}
            >
              作品を見る
            </Button>
            <Button
              variant="outlined"
              size={isMobile ? "medium" : "large"}
              onClick={scrollToStudy}
              sx={{ minWidth: { xs: "100px", sm: "auto" } }}
            >
              研究を見る
            </Button>
            <Button
              variant="outlined"
              size={isMobile ? "medium" : "large"}
              onClick={scrollToHobby}
              sx={{ minWidth: { xs: "100px", sm: "auto" } }}
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
