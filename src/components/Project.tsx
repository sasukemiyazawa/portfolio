import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Button,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { motion } from "motion/react";

function Project() {
  const MotionCard = motion.create(Card);

  const projects = [
    {
      id: 1,
      title: "プロジェクト 1",
      description:
        "React と TypeScript を使用したモダンな Web アプリケーション",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "プロジェクト 2",
      description: "データ可視化ダッシュボード",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
    {
      id: 3,
      title: "プロジェクト 3",
      description: "モバイルファーストなレスポンシブサイト",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 4,
      title: "プロジェクト 4",
      description: "E コマースプラットフォーム",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      tags: ["Next.js", "MongoDB", "Stripe"],
      link: "#",
    },
  ];

  return (
    // {/* Projects Section */}
    <Box
      id="projects"
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
            作品紹介
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={project.id}>
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
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      // paragraph
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      endIcon={<OpenInNew />}
                      href={project.link}
                    >
                      詳細を見る
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default Project;
