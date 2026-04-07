import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion } from "motion/react";

function StudyModal({
  selectedResearch,
  setSelectedResearch,
  research,
}: {
  selectedResearch: number | null;
  setSelectedResearch: (id: number | null) => void;
  research: any[];
}) {
  const item = research.find((r) => r.id === selectedResearch);

  return (
    <Dialog
      open={selectedResearch !== null}
      onClose={() => setSelectedResearch(null)}
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
      {item && (
        <>
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ color: item.color }}>{item.icon}</Box>
              <Box>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Chip
                  label={item.year}
                  size="small"
                  sx={{
                    mt: 1,
                    bgcolor: item.color,
                    color: "white",
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Box>
            <IconButton onClick={() => setSelectedResearch(null)} size="small">
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers>
            <Typography variant="h6" gutterBottom>
              研究概要
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {item.detailDescription}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              主な研究トピック
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: "text.secondary" }}>
              {item.topics.map((topic: string, idx: number) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={idx}
                  sx={{ mb: 1 }}
                >
                  {topic}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              主な成果
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, color: "text.secondary" }}>
              {item.achievements.map((a: string, idx: number) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={idx}
                  sx={{ mb: 1 }}
                >
                  {a}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              関連論文・発表
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
              {item.publications.map((p: string, idx: number) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={idx}
                  sx={{ mb: 1 }}
                >
                  {p}
                </Typography>
              ))}
            </Box>
          </DialogContent>

          <DialogActions sx={{ p: 2 }}>
            <Button
              variant="outlined"
              onClick={() => setSelectedResearch(null)}
            >
              閉じる
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default StudyModal;
