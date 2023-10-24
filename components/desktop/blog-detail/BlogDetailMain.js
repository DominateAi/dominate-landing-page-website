import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import format from "date-fns/format";
import LandingPageNavbar from "../LandingPageNavbar";
import ScrollDown from "../ScrollDown";
import ScrollTop from "../ScrollTop";
import isEmpty from "../../../store/validation/is-empty";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";

// const categories = [1, 2, 3];

export default function BlogDetailMain({ blogDetail }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LandingPageNavbar activeLink={"blogs"} />
      <ScrollDown />
      <ScrollTop />

      <article>
        <div className="row mx-0 flex-nowrap align-items-center justify-content-center blog-detail-title-block">
          <div className="flex-shrink-0 blog-detail-title-block__img">
            <img
              // src="/img/desktop/blog-detail/blog-detail-title-dummy-img.svg"
              src={blogDetail.featured_image.url}
              alt={blogDetail.featured_image.alternativeText}
            />
          </div>
          <div className="blog-detail-title-block__colm2">
            <div className="row mx-0 align-items-center blog-detail-title-block__colm2-category-tags-block">
              {/* {categories.map((data, index) => (
                <div key={index} className="new-blog-technology-div">
                  <span>Technology</span>
                </div>
              ))} */}
              {!isEmpty(blogDetail.tag1) && (
                <div className="new-blog-technology-div">
                  <span>{blogDetail.tag1}</span>
                </div>
              )}
              {!isEmpty(blogDetail.tag2) && (
                <div className="new-blog-technology-div">
                  <span>{blogDetail.tag2}</span>
                </div>
              )}
            </div>
            <h1 className="blog-detail-title-block__titleText">
              {/* Top 10 Most Useful Online Courses That Are Free */}
              {blogDetail.title}
            </h1>
            <div className="row mx-0 flex-nowrap align-items-center">
              <div className="flex-shrink-0 blog-detail-title-block__authorImgBlock">
                <img
                  // src="/img/desktop/blog-detail/blog-detail-author-dummy-img.svg"
                  src={blogDetail.author_image[0].url}
                  alt={`author ${blogDetail.author}`}
                />
              </div>
              <div>
                <p className="blog-detail-title-block__authorName">
                  {/* Author Name */}
                  {blogDetail.author}
                </p>
                {/* <p className="blog-detail-title-block__authorPost">
                  Data Scientist
                </p> */}
                <div className="row mx-0 align-items-center blog-detail-title-block__dateTimeBlock">
                  {!isEmpty(blogDetail.updatedAt) && (
                    <>
                      <p className="blog-detail-title-block__date">
                        {/* July 7,2021 */}
                        {format(new Date(blogDetail.updatedAt), "MMM DD,YYYY")}
                      </p>
                      <i className="fa fa-circle blog-detail-title-block__circle"></i>
                    </>
                  )}
                  <p className="blog-detail-title-block__date">
                    {/* 3 */}
                    {blogDetail.time_to_read}{" "}
                    {blogDetail.time_to_read === 1 ? "Min read" : "Mins read"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-detail-content-desc">
          <ReactMarkdown source={blogDetail.article_body} escapeHtml={false} />
        </div>
        <BlogDetailsFooterSocialMedia blogSlug={blogDetail.slug} />
      </article>
    </>
  );
}
