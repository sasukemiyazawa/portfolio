import { Box, Typography } from "@mui/material";

function Study() {
  return (
    <Box
      sx={{
        height: "100vh",
        scrollSnapAlign: "start",
        bgcolor: "primary.light",
      }}
    >
      <Typography variant="h1">Studies</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          maxWidth: "600px",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translateX(-50% -50%)",
        }}
      >
        ここになんかのカード的なのを置いて、研究内容とかを紹介する感じにしたいなあ。
        <br />
      </Typography>
    </Box>
  );
}
export default Study;
