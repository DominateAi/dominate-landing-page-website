import React, { useState } from "react";
import Link from "next/link";
import LandingPageMobileNavbar from "../LandingPageMobileNavbar";
import AuthorNameDetails from "./AuthorNameDetails";
import isEmpty from "../../../store/validation/is-empty";

const img2 = "./img/mobile/blog/blog-card-2-1.png";
const img3 = "./img/mobile/blog/blog-card-2-2.png";
const p3 = "./img/desktop/blog/people-four.svg";

//array
const blogrow2 = [
  {
    imgPath: img2,
    name: "Technology",
    title: "Top 10 Most Useful Online Courses That Are Free",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la",
    authorImg: p3,
    authorName: "Author Name",
    profile: "Data Scientist",
  },
  {
    imgPath: img3,
    name: "Technology",
    title: "Top 10 Most Useful Online Courses That Are Free",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la",
    authorImg: p3,
    authorName: "Author Name",
    profile: "Data Scientist",
  },
];

export default function BlogMobileMainOld({ blogs }) {
  const cardOneData = blogs.slice(0, 1)[0];
  // const blogCardsArrayOne = blogs.slice(0, 1);
  // const blogCardsArrayTwo = blogs.slice(0, 1);
  const blogCardsArrayOne = blogs.slice(1, 3);
  const blogCardsArrayTwo = blogs.slice(3, blogs.length);

  const [isLoadMore, setIsLoadMore] = useState(false);
  const handleOnClickLoadMore = () => {
    setIsLoadMore(true);
  };

  const renderCard1 = () => {
    return !isEmpty(cardOneData) ? (
      <article className="new-blog-main-div__card1">
        <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
          <a>
            <img
              // src={"/img/mobile/blog/new-blog-one.png"}
              // alt="technology"
              src={cardOneData.featured_image.url}
              alt={cardOneData.featured_image.alternativeText}
              className="new-blog-img-one"
            />
          </a>
        </Link>
        <div className="new-blog-technology-div">
          <span>
            {/* Technology */}
            {cardOneData.tag1}
          </span>
        </div>
        <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
          <a>
            <h2 className="new-blog-title">
              {/* Top 10 Most Useful Online Courses That Are Free */}
              {cardOneData.title}
            </h2>
          </a>
        </Link>
        <p className="new-blog-para">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamc */}
          {cardOneData.description}
        </p>
        <AuthorNameDetails
          img={cardOneData.author_image[0].url}
          name={cardOneData.author}
          blogDate={cardOneData.updatedAt}
          time_to_read={cardOneData.time_to_read}
        />
      </article>
    ) : (
      <p className="new-blog-row2-card-para">No Blogs Found</p>
    );
  };

  const renderCard2Fold = (arrayData) => {
    return (
      <div className="row mx-0 align-items-start new-blog-row2-div">
        {arrayData.map((data, index) => (
          <article key={index} className="new-blog-row2-card">
            <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
              <a>
                <div className="new-blog-row2-card-img-div">
                  <img
                    // src={data.imgPath}
                    // alt={data.name}
                    src={data.featured_image.url}
                    alt={data.featured_image.alternativeText}
                  />
                </div>
              </a>
            </Link>

            <div className="new-blog-row2-card__content">
              <div className="new-blog-technology-div">
                <span>
                  {/* {data.name} */}
                  {data.tag1}
                </span>
              </div>
              <Link as={`/blog/${data.slug}`} href="/blog/[id]">
                <a>
                  <h4 className="new-blog-row2-card-title">{data.title}</h4>
                </a>
              </Link>
              <AuthorNameDetails
                img={cardOneData.author_image[0].url}
                name={data.author}
                blogDate={data.updatedAt}
                time_to_read={data.time_to_read}
              />
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <>
      <LandingPageMobileNavbar />
      <div className="new-blog-main-div">
        {renderCard1()}

        {renderCard2Fold(blogCardsArrayOne)}

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
          renderCard2Fold(blogCardsArrayTwo)}
      </div>
    </>
  );
}
