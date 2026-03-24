import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import { PsychologyAlt, GraphicEq } from "@mui/icons-material";
import { motion } from "motion/react";

function Study({ ref }: { ref: React.Ref<HTMLDivElement> }) {
  // TODO: motion.create(Box)に変更したが、MotionBoxが再利用可能なモーションコンポーネントとして機能しているか確認する
  const MotionBox = motion.create(Box);
  const research = [
    {
      id: 1,
      title: "暗意-実現モデルによって生じる事象関連電位についての研究",
      year: "2023-2024",
      description:
        "音楽理論「暗意-実現モデル」に基づき、旋律の期待の実現/裏切りが脳波に与える影響をERP（事象関連電位）で分析しました。",
      topics: [
        "音楽理論の科学的証明",
        "脳波測定とERP抽出",
        "EEGLAB-Matlabを用いたデータ処理",
      ],
      icon: <PsychologyAlt sx={{ fontSize: 40 }} />,
      color: "#9c27b0",
    },
    {
      id: 2,
      title: "音響的特徴が時間知覚に与える影響",
      year: "2024-2026",
      description:
        "タッピング課題を用いて、音の高さや倍音が人の時間知覚（≒リズム知覚）にどのように影響するかを調査しています。",
      topics: [
        "倍音・音高などの音響的特徴を波形から作成",
        "データ分析と統計解析",
        "心理指標・行動指標の両面からのアプローチ",
      ],
      icon: <GraphicEq sx={{ fontSize: 40 }} />,
      color: "#2196f3",
    },
  ];
  return (
    //  {/* Research Section */}
    <Box
      id="research"
      ref={ref}
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        py: 10,
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(156,39,176,0.05) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 2 }}
          >
            研究活動
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            音楽に関連した研究に取り組み、理論と実践の橋渡しを目指しています
          </Typography>
          <Grid container spacing={4}>
            {research.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                <MotionBox
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: 4,
                      borderLeft: 4,
                      borderColor: item.color,
                      bgcolor: "background.paper",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box sx={{ color: item.color }}>{item.icon}</Box>
                      <Box>
                        <Chip
                          label={item.year}
                          size="small"
                          sx={{
                            bgcolor: item.color,
                            color: "white",
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {item.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      主な研究トピック
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      {item.topics.map((topic, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: item.color,
                            }}
                          />
                          <Typography variant="body2">{topic}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
export default Study;
