import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "motion/react";
const MotionCard = motion(Card);
import { CameraAlt, Hiking, MenuBook, MusicNote } from "@mui/icons-material";
function Hobby() {
  const hobbies = [
    {
      id: 1,
      title: "写真撮影",
      description:
        "風景や街並みを撮影することが好きです。特に夕暮れ時の光を捉えることに魅力を感じています。",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop",
      icon: <CameraAlt />,
    },
    {
      id: 2,
      title: "ハイキング",
      description:
        "自然の中を歩くことでリフレッシュし、新しいアイデアを得ています。",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop",
      icon: <Hiking />,
    },
    {
      id: 3,
      title: "読書",
      description:
        "技術書からフィクションまで幅広く読んでいます。知識の探求が楽しみです。",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
      icon: <MenuBook />,
    },
    {
      id: 4,
      title: "音楽鑑賞",
      description:
        "ジャズやクラシックを聴きながらコーディングすることが多いです。",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop",
      icon: <MusicNote />,
    },
  ];

  return (
    <Box
      id="hobbies"
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        py: 10,
        bgcolor: "action.hover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 8 }}
          >
            趣味
          </Typography>
          <Grid container spacing={4}>
            {hobbies.map((hobby, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={hobby.id}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hobby.image}
                    alt={hobby.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          display: "flex",
                        }}
                      >
                        {hobby.icon}
                      </Box>
                      <Typography variant="h6" component="h3">
                        {hobby.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {hobby.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default Hobby;
