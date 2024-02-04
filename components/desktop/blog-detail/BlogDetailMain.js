import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import format from "date-fns/format";
import LandingPageNavbar from "../LandingPageNavbar";
import ScrollDown from "../ScrollDown";
import ScrollTop from "../ScrollTop";
import isEmpty from "../../../store/validation/is-empty";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";

// const categories = [1, 2, 3];

export default function BlogDetailMain({ blogDetails }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("blogDetails", blogDetails);
 
  return (
    <>
      <LandingPageNavbar activeLink={"blogs"} />
      <ScrollDown />
      <ScrollTop />

      <article>
        <div className="row mx-0 flex-nowrap align-items-center justify-content-center blog-detail-title-block">
          <div className="flex-shrink-0 blog-detail-title-block__img">
            <img src={!isEmpty(blogDetails) && blogDetails.imgUrl} />
          </div>
          <div className="blog-detail-title-block__colm2">
            <div className="row mx-0 align-items-center blog-detail-title-block__colm2-category-tags-block">
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
            <h1 className="blog-detail-title-block__titleText">
             
              {!isEmpty(blogDetails) && blogDetails.title}
            </h1>
            <div className="row mx-0 flex-nowrap align-items-center">
              <div className="flex-shrink-0 blog-detail-title-block__authorImgBlock">
                <img
                 
                  src={!isEmpty(blogDetails) && blogDetails.authorImg}
               
                />
              </div>
              <div>
                <p className="blog-detail-title-block__authorName">
                 
                  {!isEmpty(blogDetails) && blogDetails.author}
                </p>
               
                <div className="row mx-0 align-items-center blog-detail-title-block__dateTimeBlock">
                  {!isEmpty(blogDetails) &&
                    !isEmpty(blogDetails.datePosted) && (
                      <>
                        <p className="blog-detail-title-block__date">
                         
                          {format(
                            new Date(blogDetails.datePosted),
                            "MMM DD,YYYY"
                          )}
                        </p>
                        <i className="fa fa-circle blog-detail-title-block__circle"></i>
                      </>
                    )}
                  <p className="blog-detail-title-block__date">
                  
                    {!isEmpty(blogDetails) && blogDetails.time_to_read}{" "}
                    {!isEmpty(blogDetails) && blogDetails.time_to_read === 1
                      ? "Min read"
                      : "Mins read"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-detail-content-desc">
          <ReactMarkdown source={!isEmpty(blogDetails) && blogDetails.description} escapeHtml={false} />
        </div>
       
      </article>
    </>
  );
}
