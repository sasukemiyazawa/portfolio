import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface CustomArrowProps {
  onClick?: () => void;
  direction: "prev" | "next";
}

export function CustomArrow({
  onClick,
  direction,
}: CustomArrowProps) {
  return (
    <Box
      onClick={onClick}
      className="slider-arrows"
      sx={{
        display: "flex !important",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.3s",
        zIndex: 1,
        "&:before": { display: "none" },
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        ...(direction === "prev"
          ? { left: 10 }
          : { right: 10 }),
      }}
    >
      <IconButton
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.9)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 1)",
          },
        }}
      >
        {direction === "prev" ? (
          <ArrowBack />
        ) : (
          <ArrowForward />
        )}
      </IconButton>
    </Box>
  );
}