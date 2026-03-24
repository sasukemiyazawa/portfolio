import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Hiking,
  MenuBook,
  MusicNote,
} from "@mui/icons-material";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import music1 from "../assets/hobby/music1.png";
import music2 from "../assets/hobby/music2.png";
import music3 from "../assets/hobby/music3.png";
import book1 from "../assets/hobby/book1.jpg";
import book2 from "../assets/hobby/book2.png";
import book3 from "../assets/hobby/book3.png";
import mount1 from "../assets/hobby/mount1.jpg";
import mount2 from "../assets/hobby/mount2.jpg";
import mount3 from "../assets/hobby/mount3.jpg";
import mount4 from "../assets/hobby/mount4.jpg";
import circle from "../assets/hobby/circle.png";

const MotionCard = motion.create(Card);

// -------------------------------------------------------
// Emblaスライダー（Project.tsxと同じ実装）
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
    <Box sx={{ position: "relative", height, overflow: "hidden" }}>
      <Box ref={emblaRef} sx={{ overflow: "hidden", height: "100%" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          {images.map((image, i) => (
            <Box key={i} sx={{ flex: "0 0 100%", minWidth: 0 }}>
              <CardMedia
                component="img"
                image={image}
                alt={`${title} - ${i + 1}`}
                sx={{ height, objectFit: "contain", width: "100%" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* 画像が複数のときだけ矢印を表示 */}
      {images.length > 1 && (
        <>
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
        </>
      )}
    </Box>
  );
}

// -------------------------------------------------------
// Hobby コンポーネント本体
// -------------------------------------------------------
function Hobby({ ref }: { ref: React.Ref<HTMLDivElement> }) {
  const hobbies = [
    {
      id: 1,
      title: "音楽活動",
      description:
        "バンドやセッションでギターを演奏しています。アレンジやDTMも行っています。私の日々に欠かせない趣味です。",
      images: [music1, music2, music3],
      icon: <MusicNote />,
    },
    {
      id: 2,
      title: "批評サークル",
      description:
        "noteとYoutubeで、アニメや漫画の批評を発信しています。自分の視点を深めることが楽しいです。",
      images: [circle],
      icon: <MenuBook />,
    },
    {
      id: 3,
      title: "登山",
      description:
        "自然の中で過ごす時間が好きで、暇があれば登山に出かけています。数少ない運動の機会でもあります。",
      images: [mount1, mount2, mount3, mount4],
      icon: <Hiking />,
    },
    {
      id: 4,
      title: "読書",
      description:
        "哲学や文学、プログラミングも音楽も勉強はすべて読書から始めます。読書という1人の時間からみんなの時間に繋がるのが好きです。",
      images: [book1, book2, book3],
      icon: <MenuBook />,
    },
  ];

  const IMAGE_HEIGHT = 260; // ← ここを変えると画像の高さを調整できます

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
        <Box ref={ref}>
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // ホバー時に矢印を表示
                    "&:hover .slider-arrows": { opacity: 1 },
                  }}
                >
                  <ImageSlider
                    images={hobby.images}
                    height={IMAGE_HEIGHT}
                    title={hobby.title}
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
                      <Box sx={{ color: "primary.main", display: "flex" }}>
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
