import React, { useEffect, useState } from "react";
import Link from "next/link";
import LandingPageMobileNavbar from "../LandingPageMobileNavbar";
import AuthorNameDetails from "./AuthorNameDetails";
import isEmpty from "../../../store/validation/is-empty";
import { compareAsc } from "date-fns";

export default function BlogMobileMain({ blogs }) {
  const [searchResult, setSearchResult] = useState(blogs);

  useEffect(() => {
    if (!isEmpty(blogs)) {
      let newLatestBlogs = setLatestBlogsFirst(blogs);
      setSearchResult(newLatestBlogs);
    }
  }, [blogs]);

  const blogCardsArrayOne = searchResult.slice(0, 3);
  const blogCardsArrayTwo = searchResult.slice(3, searchResult.length);

  const [isLoadMore, setIsLoadMore] = useState(false);
  const handleOnClickLoadMore = () => {
    setIsLoadMore(true);
  };

  /*=======================================
              handler
  ======================================*/
  const setLatestBlogsFirst = (result) => {
    // descendign order as per updated date
    let newLatestBlogsArray = result.sort((a, b) =>
      compareAsc(new Date(b.updatedAt), new Date(a.updatedAt))
    );

    return newLatestBlogsArray;
  };

  /*=======================================
              renderCard1
  ======================================*/
  const renderCard1 = (blogArray) => {
    return (
      !isEmpty(blogArray) &&
      blogArray.map((data, index) => (
        <article key={index} className="new-blog-main-div__card1">
          <Link as={`/blog/${data.slug}`} href="/blog/[id]">
            <a>
              <img
                // src={"/img/mobile/blog/new-blog-one.png"}
                // alt="technology"
                src={data.featured_image.url}
                alt={data.featured_image.alternativeText}
                className="new-blog-img-one"
              />
            </a>
          </Link>

          <div className="row mx-0 align-items-center blog-detail-title-block__colm2-category-tags-block pb-0">
            {!isEmpty(data.tag1) && (
              <div className="new-blog-technology-div">
                <span>{data.tag1}</span>
              </div>
            )}
            {!isEmpty(data.tag2) && (
              <div className="new-blog-technology-div">
                <span>{data.tag2}</span>
              </div>
            )}
          </div>
          <Link as={`/blog/${data.slug}`} href="/blog/[id]">
            <a>
              <h2 className="new-blog-title">
                {/* Top 10 Most Useful Online Courses That Are Free */}
                {data.title}
              </h2>
            </a>
          </Link>
          <p className="new-blog-para">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamc */}
            {data.description}
          </p>
          <AuthorNameDetails
            img={data.author_image[0].url}
            name={data.author}
            blogDate={data.updatedAt}
            time_to_read={data.time_to_read}
          />
        </article>
      ))
    );
  };

  /*=======================================
              main
  ======================================*/
  return (
    <>
      <LandingPageMobileNavbar />
      <div className="new-blog-main-div">
        {isEmpty(blogs) && (
          <p className="new-blog-row2-card-para">No Blogs Found</p>
        )}

        {renderCard1(blogCardsArrayOne)}

        {!isEmpty(blogCardsArrayTwo) && !isLoadMore && (
          <div className="text-center">
            <button
              className="new-blog-newslatter-subscribe-button"
              onClick={handleOnClickLoadMore}
            >
              Load More
            </button>
          </div>
        )}

        {!isEmpty(blogCardsArrayTwo) &&
          isLoadMore &&
          renderCard1(blogCardsArrayTwo)}
      </div>
    </>
  );
}
