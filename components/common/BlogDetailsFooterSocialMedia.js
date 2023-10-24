import React from "react";

export default function BlogDetailsFooterSocialMedia({ blogSlug }) {
  const handleOnClickCopyUrl = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${blogSlug}`
    );
  };

  return (
    <div className="row mx-0 align-items-center justify-content-center blog-details-social-media-block">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${process.env.NEXT_PUBLIC_SOCIAL_MEDIA_WEBSITE_LINK_TEXT}%2Fblog%2F${blogSlug}`}
      >
        <div className="blog-details-social-media-block__twitter">
          <i className="fa fa-twitter"></i>
        </div>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2F${process.env.NEXT_PUBLIC_SOCIAL_MEDIA_WEBSITE_LINK_TEXT}%2Fblog%2F${blogSlug}`}
      >
        <div className="blog-details-social-media-block__facebook">
          <i className="fa fa-facebook"></i>
        </div>
      </a>
      <button
        className="blog-details-social-media-block__copy"
        onClick={handleOnClickCopyUrl}
      >
        <img src="./img/desktop/blog-detail/blog-social-media-3.svg" alt="" />
      </button>
    </div>
  );
}
