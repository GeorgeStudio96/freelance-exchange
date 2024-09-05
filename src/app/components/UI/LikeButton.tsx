"use client";

import { useState } from "react";

type LikeBtnProps = {
  projectId?: number;
};

export default function LikeButton({ projectId }: LikeBtnProps) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    console.log(`LikeButton clicked for projectId: ${projectId}`); // Логируем клик и ID проекта
    setLiked(!liked);
  }

  return (
    <button className="btn-8--16 like-btn" onClick={handleLike}>
      {liked ? "Liked ❤️" : "Like ♡"}
    </button>
  );
}
