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
} from "@mui/material";
import { IconButton } from "@mui/material";
import { Close, OpenInNew } from "@mui/icons-material";
import Slider from "react-slick";
import { motion } from "motion/react";
import { useState } from "react";
import { CustomArrow } from "./CustomArrow";

function ProjectModal({
  selectedProject,
  setSelectedProject,
  projects,
}: {
  selectedProject: number | null;
  setSelectedProject: (id: number | null) => void;
  projects: any[];
}) {
  return (
    // {/* Project Modal */}
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
      {selectedProject !== null && (
        <>
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="div">
              {projects.find((p) => p.id === selectedProject)?.title}
            </Typography>
            <IconButton onClick={() => setSelectedProject(null)} size="small">
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ mb: 3 }}>
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={true}
                nextArrow={<CustomArrow direction="next" />}
                prevArrow={<CustomArrow direction="prev" />}
              >
                {projects
                  .find((p) => p.id === selectedProject)
                  ?.images.map((image: string, imgIndex: number) => (
                    <Box key={imgIndex}>
                      <CardMedia
                        component="img"
                        image={image}
                        alt={`${
                          projects.find((p) => p.id === selectedProject)?.title
                        } - ${imgIndex + 1}`}
                        sx={{
                          height: 400,
                          objectFit: "cover",
                          borderRadius: 1,
                        }}
                      />
                    </Box>
                  ))}
              </Slider>
            </Box>
            <Typography variant="h6" gutterBottom>
              プロジェクト概要
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {
                projects.find((p) => p.id === selectedProject)
                  ?.detailedDescription
              }
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" gutterBottom>
              使用技術
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
              {projects
                .find((p) => p.id === selectedProject)
                ?.tags.map((tag: string) => (
                  <Chip key={tag} label={tag} color="primary" />
                ))}
            </Box>
            <Typography variant="h6" gutterBottom>
              主な機能
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
              {projects
                .find((p) => p.id === selectedProject)
                ?.features.map((feature: string, idx: number) => (
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
              href={projects.find((p) => p.id === selectedProject)?.link}
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
