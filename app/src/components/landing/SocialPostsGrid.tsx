"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Share,
  MoreHorizontal,
} from "lucide-react";
import { NexoraMonogram } from "./NexoraMonogram";
import { NexoraWordmark } from "./NexoraWordmark";
import styles from "./Landing.module.css";

interface PostData {
  id: string;
  time: string;
  headline: string;
  subline: string;
  imageSrc: string;
  imageAlt: string;
  mediaBrand?: boolean;
  mediaTagline?: string;
  comments: number;
  retweets: number;
  likes: number;
  views: string;
}

const posts: PostData[] = [
  {
    id: "post-1",
    time: "2h",
    headline: "Prove Permission, Not Identity.",
    subline: "A more private, open internet is possible.",
    imageSrc: "/landing/post-horizon.jpg",
    imageAlt: "Nexora floating above planet horizon",
    mediaBrand: true,
    mediaTagline: "PRIVACY FUELS PROGRESS",
    comments: 128,
    retweets: 412,
    likes: 2100,
    views: "56K",
  },
  {
    id: "post-2",
    time: "1d",
    headline: "Private Authorization Layer for Web3.",
    subline: "Access without exposure.",
    imageSrc: "/landing/post-hands.jpg",
    imageAlt: "Futuristic hands reaching for Nexora logo",
    mediaBrand: false,
    mediaTagline: "CONTROL YOUR ACCESS NOT YOUR IDENTITY",
    comments: 64,
    retweets: 281,
    likes: 1300,
    views: "28K",
  },
  {
    id: "post-3",
    time: "3d",
    headline: "Access without exposure.",
    subline: "Privacy-first infrastructure for a freer Web3.",
    imageSrc: "/landing/post-beam.jpg",
    imageAlt: "Human silhouette standing before vertical light beam",
    mediaBrand: false,
    mediaTagline: "A MORE OPEN TOMORROW",
    comments: 52,
    retweets: 190,
    likes: 892,
    views: "17K",
  },
  {
    id: "post-4",
    time: "5d",
    headline: "Privacy-first infrastructure.",
    subline: "Same internet. More human.",
    imageSrc: "/landing/post-planet.jpg",
    imageAlt: "Planet Earth with purple atmosphere and city lights",
    mediaBrand: true,
    mediaTagline: "PEOPLE  ///  PRIVACY  ///  PROGRESS",
    comments: 71,
    retweets: 314,
    likes: 1600,
    views: "41K",
  },
];

function PostCard({ post }: { post: PostData }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const formatCount = (count: number) => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <article className={styles.tweetCard}>
      {/* Header */}
      <div className={styles.tweetHeader}>
        <div className={styles.tweetAuthor}>
          <div className={styles.tweetAvatar}>
            <NexoraMonogram size={28} showBeam={false} priority={false} />
          </div>
          <div className={styles.tweetMeta}>
            <span className={styles.tweetName}>Nexora</span>
            {/* Verified badge */}
            <svg
              viewBox="0 0 24 24"
              aria-label="Verified account"
              className={styles.verifiedBadge}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 10.45.7 11.82.7 13.4c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.25 1.273 2.62 2.148 4.2 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.25 2.148-2.62 2.148-4.2zM10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.6-5.6 1.4 1.4-7 7z"
                fill="#6F46FF"
              />
            </svg>
            <span className={styles.tweetHandle}>@Nexora · {post.time}</span>
          </div>
        </div>
        <div className={styles.tweetDots}>
          <MoreHorizontal size={18} />
        </div>
      </div>

      {/* Post Text */}
      <div className={styles.tweetContent}>
        <span className={styles.tweetPrimaryText}>{post.headline}</span>
        <span className={styles.tweetSecondaryText}>{post.subline}</span>
      </div>

      {/* Media Image */}
      <div className={styles.tweetMediaWrap}>
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 550px"
          className={styles.tweetMediaImage}
        />
        {(post.mediaBrand || post.mediaTagline) && (
          <div className={styles.tweetMediaOverlay}>
            {post.mediaBrand && (
              <div className={styles.tweetMediaBrand}>
                <NexoraWordmark size="sm" glow={true} />
              </div>
            )}
            {post.mediaTagline && (
              <div className={styles.tweetMediaTagline}>{post.mediaTagline}</div>
            )}
          </div>
        )}
      </div>

      {/* Metrics Row */}
      <div className={styles.tweetMetrics}>
        <span className={styles.metricItem}>
          <MessageCircle size={15} />
          {post.comments}
        </span>
        <span className={styles.metricItem}>
          <Repeat2 size={16} />
          {post.retweets}
        </span>
        <span
          className={styles.metricItem}
          onClick={toggleLike}
          style={{ color: liked ? "#FF6492" : undefined }}
        >
          <Heart
            size={15}
            fill={liked ? "#FF6492" : "none"}
            stroke={liked ? "#FF6492" : "currentColor"}
          />
          {formatCount(likes)}
        </span>
        <span className={styles.metricItem}>
          <BarChart2 size={15} />
          {post.views}
        </span>
        <span className={styles.metricItem}>
          <Share size={15} />
        </span>
      </div>
    </article>
  );
}

export function SocialPostsGrid() {
  return (
    <section className={styles.postsSection}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>SAMPLE X / TWITTER POSTS</div>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
