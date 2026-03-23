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
import { useState } from "react";
import ProjectModal from "./ProjectModal";

import dx1 from "../assets/project/signage.png";
import dx2 from "../assets/project/sumaho.png";
import dx3 from "../assets/project/sumaho2.png";
import dx4 from "../assets/project/sumaho3.png";
import nurse1 from "../assets/project/nurse.png";
import nurse2 from "../assets/project/nurse2.png";
import baseball from "../assets/project/yakyu.png";
import baseball2 from "../assets/project/yakyu2.png";
import baseball3 from "../assets/project/yakyu3.png";
import hackason from "../assets/project/gesyuku.png";
import hackason2 from "../assets/project/gesyuku2.png";
import portfolio from "../assets/project/portfolio.png";

// MotionCardはコンポーネント外で定義（再レンダリングのたびに再生成されるのを防ぐ）
// TODO: motion.create(Card)に変更して、MotionCardを再利用可能なモーションコンポーネントにする
const MotionCard = motion.create(Card);

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
                sx={{ height, objectFit: "contain", width: "100%" }}
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
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "病院DXプロジェクト",
      description: "Webアプリケーションで動作するSNSとSNS管理アプリケーション",
      detailDescription:
        "病院DXプロジェクトは、病院内のコミュニケーションを活性化するためのWebアプリケーションです。SNS機能を備えたフロントエンドと、管理者がコンテンツを管理できるバックエンドで構成されています。ReactとMaterial UIを使用してユーザーフレンドリーなインターフェースを実現し、Ruby on Railsで堅牢なAPIを構築しました。",
      images: [dx1, dx2, dx3, dx4],
      tags: ["React", "Ruby on Rails", "Material UI", "github"],
      features: [
        "SNS機能",
        "コンテンツ管理",
        "ユーザーフレンドリーなインターフェース",
      ],
      link: "#",
      height: 700,
    },
    {
      id: 2,
      title: "ナーススケジューリングシステム",
      description:
        "GAと数値最適化を用いた看護師のシフトスケジューリングシステム",
      detailDeascription:
        "ナーススケジューリングシステムは、看護師のシフトを効率的に管理するためのWebアプリケーションです。フロントエンドはReactで構築し、バックエンドはFastAPIを使用して高速なAPIを提供しています。スケジューリングアルゴリズムには、遺伝的アルゴリズムと数値最適化手法を組み合わせて、複雑な制約条件を考慮した最適なシフト配置を実現しています。",
      images: [nurse1, nurse2],
      tags: ["React", "Fast API", "Pulp", "Genelation Algorithm"],
      features: [
        "看護師のシフト管理",
        "遺伝的アルゴリズムと数値最適化",
        "高速なAPI",
      ],
      link: "#",
      height: 326,
    },
    {
      id: 3,
      title: "デジタル野球盤",
      description: "イラストと演出を重視した野球盤ゲーム",
      detaulDescription:
        "デジタル野球盤は、従来の物理的な野球盤ゲームをデジタル化したプロジェクトです。Processingを使用して、イラストと演出にこだわったビジュアルを実現しています。プレイヤーは、マウスやキーボードを使って選手を操作し、リアルタイムで試合を楽しむことができます。シンプルながらも奥深いゲーム性と、魅力的なグラフィックが特徴です。",
      images: [baseball, baseball2, baseball3],
      tags: ["Processing"],
      features: [
        "デジタル化された野球盤ゲーム",
        "イラストと演出にこだわったビジュアル",
        "リアルタイムな操作と試合展開",
      ],
      link: "#",
      height: 326,
    },
    {
      id: 4,
      title: "Web授業アプリケーション",
      description:
        "GPSを用いたWeb授業アプリケーション: ハッカソンで開発したプロジェクト",
      detailDescription:
        "Web授業アプリケーションは、GPS機能を活用して、ユーザーの位置情報に基づいた授業コンテンツを提供するプロジェクトです。ハッカソンで開発され、短期間で完成させることが求められました。フロントエンドはReactで構築し、バックエンドはNode.jsを使用してリアルタイムなデータ処理を実現しています。ユーザーは、自分の位置に応じた授業資料やクイズにアクセスできるため、インタラクティブな学習体験が可能です。",
      images: [hackason, hackason2],
      tags: ["Node.js", "github"],
      features: [
        "GPSを活用した授業コンテンツ提供",
        "リアルタイムなデータ処理",
        "インタラクティブな学習体験",
      ],
      link: "#",
      height: 350,
    },
    {
      id: 5,
      title: "ポートフォリオサイト",
      description: "Reactを使ったSPAのポートフォリオサイト",
      detailDescription:
        "このポートフォリオサイトは、Reactを使用して構築されたシングルページアプリケーション（SPA）です。Material UIを活用して、モダンでレスポンシブなデザインを実現しています。プロジェクトの紹介やスキルセットを効果的に展示するために、アニメーションやインタラクティブな要素も取り入れています。Figmaでデザインを作成し、ユーザーフレンドリーなUI/UXを追求しました。",
      images: [portfolio],
      tags: ["React", "TypeScript", "Material UI", "figma"],
      features: [
        "Reactを使用したSPA構築",
        "Material UIによるモダンなデザイン",
        "アニメーションとインタラクティブな要素",
      ],
      link: "#",
      height: 350,
    },
  ];

  return (
    <>
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
                  onClick={() => {
                    // TODO: モーダルを開いてプロジェクトの詳細を表示する機能を実装
                    // setSelectedProject(project.id);
                    // console.log("Selected project ID:", selectedProject);
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
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        projects={projects}
      />
    </>
  );
}

export default Project;
