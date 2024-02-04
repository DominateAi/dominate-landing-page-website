import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import LandingPageMobileNavbar from "../LandingPageMobileNavbar";
import AuthorNameDetails from "../blog/AuthorNameDetails";
import isEmpty from "../../../store/validation/is-empty";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";

export default function BlogDetailMobileMain({ blogDetails }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCard1 = () => {
    return (
      <div className="new-blog-main-div__card1">
        <img
          // src={"/img/mobile/blog/new-blog-one.png"}
          // alt="technology"
          src={!isEmpty(blogDetails) && blogDetails.imgUrl}
          // alt={blogDetail.featured_image.alternativeText}
          className=" new-blog-img-one"
        />
        <div className="new-blog-main-div__card1-content blog-detail-title-block__colm2">
          <div className="row mx-0 align-items-center">
            {/* {categories.map((data, index) => (
                <div key={index} className="new-blog-technology-div">
                  <span>Technology</span>
                </div>
              ))} */}
            {!isEmpty(blogDetails) && !isEmpty(blogDetails.tag1) && (
              <div className="new-blog-technology-div">
                <span>{blogDetails.tag1}</span>
              </div>
            )}
            {!isEmpty(blogDetails) && !isEmpty(blogDetails.tag2) && (
              <div className="new-blog-technology-div">
                <span>{blogDetails.tag2}</span>
              </div>
            )}
          </div>
          <h2 className="new-blog-title">
            {/* Top 10 Most Useful Online Courses That Are Free */}
            {!isEmpty(blogDetails) && blogDetails.title}
          </h2>
          <AuthorNameDetails
            img={!isEmpty(blogDetails) && blogDetails.authorImg}
            name={!isEmpty(blogDetails) && blogDetails.author}
            blogDate={!isEmpty(blogDetails) && blogDetails.datePosted}
            time_to_read={!isEmpty(blogDetails) && blogDetails.time_to_read}
          />
          <div className="new-blog-main-div__card1-content-desc">
            {/* description here */}
            <ReactMarkdown
              source={!isEmpty(blogDetails) && blogDetails.description}
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
          {/* <BlogDetailsFooterSocialMedia blogSlug={blogDetail.slug} /> */}
        </div>
      </article>
    </>
  );
}
