import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import LandingPageMobileNavbar from "../LandingPageMobileNavbar";
import AuthorNameDetails from "../blog/AuthorNameDetails";
import isEmpty from "../../../store/validation/is-empty";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";

export default function BlogDetailMobileMain({ blogDetail }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCard1 = () => {
    return (
      <div className="new-blog-main-div__card1">
        <img
          // src={"/img/mobile/blog/new-blog-one.png"}
          // alt="technology"
          src={blogDetail.featured_image.url}
          alt={blogDetail.featured_image.alternativeText}
          className=" new-blog-img-one"
        />
        <div className="new-blog-main-div__card1-content blog-detail-title-block__colm2">
          <div className="row mx-0 align-items-center">
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
          <h2 className="new-blog-title">
            {/* Top 10 Most Useful Online Courses That Are Free */}
            {blogDetail.title}
          </h2>
          <AuthorNameDetails
            img={blogDetail.author_image[0].url}
            name={blogDetail.author}
            blogDate={blogDetail.updatedAt}
            time_to_read={blogDetail.time_to_read}
          />
          <div className="new-blog-main-div__card1-content-desc">
            {/* description here */}
            <ReactMarkdown
              source={blogDetail.article_body}
              escapeHtml={false}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <LandingPageMobileNavbar />
      <article>
        <div className="new-blog-detail-main-div">
          {renderCard1()}
          <BlogDetailsFooterSocialMedia blogSlug={blogDetail.slug} />
        </div>
      </article>
    </>
  );
}
