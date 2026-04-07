import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  Box,
  CardMedia,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import { Close, OpenInNew, ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// モーダル内スライダー（embla版）
function ModalSlider({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Box sx={{ position: "relative", mb: 3 }}>
      <Box ref={emblaRef} sx={{ overflow: "hidden", borderRadius: 1 }}>
        <Box sx={{ display: "flex" }}>
          {images.map((image, i) => (
            <Box key={i} sx={{ flex: "0 0 100%", minWidth: 0 }}>
              <CardMedia
                component="img"
                image={image}
                alt={`${title} - ${i + 1}`}
                sx={{ height: 400, objectFit: "contain", width: "100%" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      {images.length > 1 && (
        <>
          <IconButton
            onClick={scrollPrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.9)",
              "&:hover": { bgcolor: "white" },
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={scrollNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.9)",
              "&:hover": { bgcolor: "white" },
            }}
          >
            <ArrowForward />
          </IconButton>
        </>
      )}
    </Box>
  );
}

function ProjectModal({
  selectedProject,
  setSelectedProject,
  projects,
}: {
  selectedProject: number | null;
  setSelectedProject: (id: number | null) => void;
  projects: any[];
}) {
  const project = projects.find((p) => p.id === selectedProject);

  return (
    <Dialog
      open={selectedProject !== null}
      onClose={() => setSelectedProject(null)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.3 },
      }}
    >
      {project && (
        <>
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <IconButton onClick={() => setSelectedProject(null)} size="small">
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers>
            <ModalSlider images={project.images} title={project.title} />

            <Typography variant="h6" gutterBottom>
              プロジェクト概要
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {project.detailDescription} {/* ← キー名を統一 */}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              使用技術
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
              {project.tags.map((tag: string) => (
                <Chip key={tag} label={tag} color="primary" />
              ))}
            </Box>

            <Typography variant="h6" gutterBottom>
              主な機能
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
              {project.features.map((feature: string, idx: number) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={idx}
                  sx={{ mb: 1 }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>
          </DialogContent>

          <DialogActions sx={{ p: 2 }}>
            <Button variant="outlined" onClick={() => setSelectedProject(null)}>
              閉じる
            </Button>
            <Button
              variant="contained"
              endIcon={<OpenInNew />}
              href={project.link}
            >
              プロジェクトを見る
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default ProjectModal;
