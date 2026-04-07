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
import { useState } from "react";
import StudyModal from "./StudyModal";

// コンポーネント外で定義（再レンダリングのたびに再生成されるのを防ぐ）
const MotionBox = motion.create(Box);

function Study({ ref }: { ref: React.Ref<HTMLDivElement> }) {
  const [selectedResearch, setSelectedResearch] = useState<number | null>(null);

  const research = [
    {
      id: 1,
      title: "暗意-実現モデルによって生じる事象関連電位についての研究",
      year: "2023-2024",
      description:
        "音楽理論「暗意-実現モデル」に基づき、旋律の期待の実現/裏切りが脳波に与える影響をERP（事象関連電位）で分析しました。",
      detailDescription:
        "音楽理論「暗意-実現モデル」に基づき、旋律の期待の実現/裏切りが脳波に与える影響をERP（事象関連電位）で分析しました。EEGLABとMatlabを用いてデータ処理を行い、音楽理論の科学的証明を目指しました。",
      topics: [
        "音楽理論の科学的証明",
        "脳波測定とERP抽出",
        "EEGLAB-Matlabを用いたデータ処理",
      ],
      achievements: [
        "ERP成分の抽出と分析手法の確立",
        "暗意-実現モデルの脳波への影響を定量化",
      ],
      publications: ["学内研究発表会 2024"],
      icon: <PsychologyAlt sx={{ fontSize: 40 }} />,
      color: "#9c27b0",
    },
    {
      id: 2,
      title: "音響的特徴が時間知覚に与える影響",
      year: "2024-2026",
      description:
        "タッピング課題を用いて、音の高さや倍音が人の時間知覚（≒リズム知覚）にどのように影響するかを調査しています。",
      detailDescription:
        "タッピング課題を用いて、音の高さや倍音が人の時間知覚（≒リズム知覚）にどのように影響するかを調査しています。心理指標・行動指標の両面からアプローチし、統計解析により音響的特徴と時間知覚の関係を明らかにすることを目指しています。",
      topics: [
        "倍音・音高などの音響的特徴を波形から作成",
        "データ分析と統計解析",
        "心理指標・行動指標の両面からのアプローチ",
      ],
      achievements: [
        "独自の音響刺激生成パイプラインの構築",
        "タッピング課題による行動データの収集・分析",
      ],
      publications: ["研究進行中（2026年発表予定）"],
      icon: <GraphicEq sx={{ fontSize: 40 }} />,
      color: "#2196f3",
    },
  ];

  return (
    <>
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
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      onClick={() => setSelectedResearch(item.id)} // ← 追加
                      sx={{
                        height: "100%",
                        p: 4,
                        borderLeft: 4,
                        borderColor: item.color,
                        bgcolor: "background.paper",
                        transition: "all 0.3s",
                        cursor: "pointer", // ← 追加
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 6,
                        },
                      }}
                    >
                      {/* 中身は元のままでOK */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box sx={{ color: item.color }}>{item.icon}</Box>
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
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
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

      {/* モーダル */}
      <StudyModal
        selectedResearch={selectedResearch}
        setSelectedResearch={setSelectedResearch}
        research={research}
      />
    </>
  );
}

export default Study;
