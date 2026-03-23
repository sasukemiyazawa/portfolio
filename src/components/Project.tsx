import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "motion/react";
import Masonry from "@mui/lab/Masonry";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// MotionCardはコンポーネント外で定義（再レンダリングのたびに再生成されるのを防ぐ）
const MotionCard = motion(Card);

// -------------------------------------------------------
// Emblaベースの画像スライダー（react-slick代替）
// -------------------------------------------------------
function ImageSlider({
  images,
  height,
  title,
}: {
  images: string[];
  height: number;
  title: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      emblaApi?.scrollPrev();
    },
    [emblaApi],
  );

  const scrollNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      emblaApi?.scrollNext();
    },
    [emblaApi],
  );

  return (
    <Box sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
      {/* Emblaビューポート */}
      <Box ref={emblaRef} sx={{ overflow: "hidden", height: "100%" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          {images.map((image, i) => (
            <Box key={i} sx={{ flex: "0 0 100%", minWidth: 0 }}>
              <CardMedia
                component="img"
                image={image}
                alt={`${title} - ${i + 1}`}
                sx={{ height, objectFit: "cover", width: "100%" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* 前へボタン */}
      <IconButton
        onClick={scrollPrev}
        className="slider-arrows"
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.9)",
          opacity: 0,
          transition: "opacity 0.3s",
          zIndex: 2,
          "&:hover": { bgcolor: "rgba(255,255,255,1)" },
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* 次へボタン */}
      <IconButton
        onClick={scrollNext}
        className="slider-arrows"
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.9)",
          opacity: 0,
          transition: "opacity 0.3s",
          zIndex: 2,
          "&:hover": { bgcolor: "rgba(255,255,255,1)" },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

// -------------------------------------------------------
// Project コンポーネント本体
// -------------------------------------------------------
function Project({
  props,
  ref,
}: {
  props: any;
  ref: React.Ref<HTMLDivElement>;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const projects = [
    {
      id: 1,
      title: "病院DXプロジェクト",
      description: "Webアプリケーションで動作するSNSとSNS管理アプリケーション",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      ],
      tags: ["React", "Ruby on Rails", "Material UI"],
      link: "#",
      height: 700,
    },
    {
      id: 2,
      title: "ナーススケジューリングシステム",
      description:
        "GAと数値最適化を用いた看護師のシフトスケジューリングシステム",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      ],
      tags: ["React", "Fast API", "Pulp", "Genelation Algorithm"],
      link: "#",
      height: 326,
    },
    {
      id: 3,
      title: "デジタル野球盤",
      description: "イラストと演出を重視した野球盤ゲーム",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      ],
      tags: ["Processing"],
      link: "#",
      height: 326,
    },
    {
      id: 4,
      title: "その他のプロジェクト",
      description:
        "Reactを使ったSPAのポートフォリオサイトや、GPSを用いたWeb授業アプリケーションなど",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      ],
      tags: ["Node.js", "React", "TypeScript", "Material UI"],
      link: "#",
      height: 350,
    },
    {
      id: 5,
      title: "その他のプロジェクト",
      description:
        "Reactを使ったSPAのポートフォリオサイトや、GPSを用いたWeb授業アプリケーションなど",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      ],
      tags: ["Node.js", "React", "TypeScript", "Material UI"],
      link: "#",
      height: 350,
    },
  ];

  return (
    <Box
      id="projects"
      ref={ref}
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
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 2 }}
          >
            作品紹介
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            これまでに手がけたプロジェクトの一部をご紹介します
          </Typography>

          <Masonry columns={isMobile ? 1 : 3} spacing={3}>
            {projects.map((project, index) => (
              <MotionCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                sx={{
                  overflow: "hidden",
                  height: project.height,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover .image-overlay": { opacity: 1 },
                  "&:hover .slider-arrows": { opacity: 1 },
                }}
              >
                {/* 画像エリア */}
                <Box
                  sx={{
                    position: "relative",
                    flexGrow: 1,
                    height: project.height - 140,
                  }}
                >
                  {project.images.length > 1 ? (
                    // 複数画像 → Emblaスライダー
                    <ImageSlider
                      images={project.images}
                      height={project.height - 140}
                      title={project.title}
                    />
                  ) : (
                    // 1枚 → そのまま表示
                    <CardMedia
                      component="img"
                      image={project.images[0]}
                      alt={project.title}
                      sx={{ height: "100%", objectFit: "cover" }}
                    />
                  )}

                  {/* ホバー時グラデーションオーバーレイ */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  />
                </Box>

                {/* テキストエリア */}
                <CardContent sx={{ flexShrink: 0 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            ))}
          </Masonry>
        </Box>
      </Container>
    </Box>
  );
}

export default Project;
