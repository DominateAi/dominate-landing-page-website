import React, { useState, useEffect } from "react";
import Link from "next/link";
import format from "date-fns/format";
import LandingPageNavbar from "../LandingPageNavbar";
import isEmpty from "../../../store/validation/is-empty";
import { compareAsc } from "date-fns";

export default function BlogMain({ blogs }) {
  const [values, setValues] = useState({
    blogSearch: "",
  });

  // console.log(blogs);

  const [searchResult, setSearchResult] = useState(blogs);

  const cardOneData = searchResult.slice(0, 1)[0];
  const blogCardsArrayOne = searchResult.slice(1, searchResult.length);
  // blogCardsArrayTwo called in renderBlockThree
  // const blogCardsArrayTwo = searchResult.slice(4, searchResult.length);

  useEffect(() => {
    if (!isEmpty(blogs)) {
      let newLatestBlogs = setLatestBlogsFirst(blogs);
      setSearchResult(newLatestBlogs);
    }
  }, [blogs]);

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

  const handleChangeSearch = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    let searchStr = e.target.value.toLowerCase();

    if (!isEmpty(searchStr)) {
      let newLatestBlogs = setLatestBlogsFirst(
        blogs.filter(
          (a) =>
            (!isEmpty(a.article_body) &&
              a.article_body.toLowerCase().match(searchStr)) ||
            (!isEmpty(a.title) && a.title.toLowerCase().match(searchStr)) ||
            (!isEmpty(a.description) &&
              a.description.toLowerCase().match(searchStr))
        )
      );
      setSearchResult(newLatestBlogs);
    } else {
      let newLatestBlogs = setLatestBlogsFirst(blogs);
      setSearchResult(newLatestBlogs);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };

  /*=======================================
              renderBlockOne
  ======================================*/
  const renderBlockOne = () => {
    return !isEmpty(cardOneData) ? (
      <article className="row mx-0 flex-nowrap align-items-center">
        <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
          <a>
            <div className="new-blog-row1-img-block">
              <img
                // src={"/img/desktop/blog/new-blog-row1-img.png"}
                src={cardOneData.featured_image.url}
                alt={cardOneData.featured_image.alternativeText}
                className="new-blog-row1-img"
              />
            </div>
          </a>
        </Link>
        <div className="new-blog-row1-right-div">
          <div className="row mx-0 align-items-center blog-detail-title-block__colm2-category-tags-block pb-0">
            {!isEmpty(cardOneData.tag1) && (
              <div className="new-blog-technology-div">
                <span>{cardOneData.tag1}</span>
              </div>
            )}
            {!isEmpty(cardOneData.tag2) && (
              <div className="new-blog-technology-div">
                <span>{cardOneData.tag2}</span>
              </div>
            )}
          </div>

          <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
            <a>
              <h4 className="new-blog-row1-title pt-10">
                {/* Top 10 Most Useful <br />
                Online Courses That Are Free */}
                {cardOneData.title}
              </h4>
            </a>
          </Link>
          <p className="new-blog-row1-para pt-25">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamc */}
            {cardOneData.description}
          </p>
          <div className="row mx-0 flex-nowrap pt-40 align-items-center">
            <div className="flex-shrink-0 new-blog-row1-people-one-img-block">
              <img
                // src={"/img/desktop/blog/people-one.svg"}
                src={cardOneData.author_image[0].url}
                alt={`author ${cardOneData.author}`}
                className="new-blog-row1-people-one-img"
              />
            </div>
            <div className="pl-22">
              <h4 className="new-blog-row1-author-name">
                {/* Author Name */}
                {cardOneData.author}
              </h4>
              {/* <h5 className="new-blog-row1-author-profile">Data Scientist</h5> */}
              <h5 className="new-blog-row1-time">
                {/* July 7,2021 */}
                {!isEmpty(cardOneData.updatedAt) && (
                  <>
                    {format(new Date(cardOneData.updatedAt), "MMM DD,YYYY")}
                    <i className="fa fa-circle blog-detail-title-block__circle"></i>
                  </>
                )}
                {/* 3 */}
                {cardOneData.time_to_read}{" "}
                {cardOneData.time_to_read === 1 ? "Min read" : "Mins read"}
              </h5>
            </div>
          </div>
        </div>
      </article>
    ) : (
      <p className="new-blog-row2-card-para">No Blogs Found</p>
    );
  };

  /*=======================================
              renderBlockTwo
  ======================================*/
  const renderBlockTwo = () => {
    return (
      !isEmpty(blogCardsArrayOne) && (
        <div className="row mx-0 align-items-start new-blog-row2-div">
          {blogCardsArrayOne.map((data, index) => (
            <article key={index} className="new-blog-row2-card">
              <Link as={`/blog/${data.slug}`} href="/blog/[id]">
                <a>
                  <div className="new-blog-row2-card-img-div">
                    <img
                      // src={data.imgPath}
                      src={data.featured_image.url}
                      alt={data.featured_image.alternativeText}
                    />
                  </div>
                </a>
              </Link>

              <div className="row mx-0 align-items-center">
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
                  <h4 className="new-blog-row2-card-title"> {data.title}</h4>
                </a>
              </Link>
              <p className="new-blog-row2-card-para">{data.description}</p>
              <div className="row mx-0 flex-nowrap align-items-center pt-50">
                <div className="flex-shrink-0 new-blog-row1-people-one-img-block">
                  <img
                    // src={data.authorImg}
                    src={cardOneData.author_image[0].url}
                    alt={`author ${data.author}`}
                    className="new-blog-row1-people-one-img"
                  />
                </div>
                <div>
                  <h4 className="new-blog-row1-author-name">{data.author}</h4>
                  {/* <h5 className="new-blog-row1-author-profile">{data.profile}</h5> */}
                  <h5 className="new-blog-row1-time">
                    {/* July 7,2021 */}
                    {!isEmpty(data.updatedAt) && (
                      <>
                        {format(new Date(data.updatedAt), "MMM DD,YYYY")}
                        <i className="fa fa-circle blog-detail-title-block__circle"></i>
                      </>
                    )}
                    {/* 3 */}
                    {data.time_to_read}{" "}
                    {data.time_to_read === 1 ? "Min read" : "Mins read"}
                  </h5>
                </div>
              </div>
            </article>
          ))}
        </div>
      )
    );
  };

  /*=======================================
              renderBlockThree
  ======================================*/
  // const renderBlockThree = () => {
  //   return (
  //     !isEmpty(blogCardsArrayTwo) && (
  //       <div className="row mx-0 align-items-start new-blog-row3-div">
  //         {blogCardsArrayTwo.map((data, index) => (
  //           <article key={index} className="new-blog-row3-card">
  //             <Link as={`/blog/${data.slug}`} href="/blog/[id]">
  //               <a>
  //                 <div className="new-blog-row3-card-img-div">
  //                   <img
  //                     src={data.featured_image.url}
  //                     alt={data.featured_image.alternativeText}
  //                   />
  //                 </div>
  //               </a>
  //             </Link>
  //             <div className="row mx-0 align-items-center">
  //               {!isEmpty(data.tag1) && (
  //                 <div className="new-blog-technology-div">
  //                   <span>{data.tag1}</span>
  //                 </div>
  //               )}
  //               {!isEmpty(data.tag2) && (
  //                 <div className="new-blog-technology-div">
  //                   <span>{data.tag2}</span>
  //                 </div>
  //               )}
  //             </div>
  //             <Link as={`/blog/${data.slug}`} href="/blog/[id]">
  //               <a>
  //                 <h4 className="new-blog-row2-card-title"> {data.title}</h4>
  //               </a>
  //             </Link>
  //             <p className="new-blog-row2-card-para">{data.description}</p>
  //           </article>
  //         ))}
  //       </div>
  //     )
  //   );
  // };

  /*============================================
             return
=============================================*/
  return (
    <>
      <LandingPageNavbar activeLink={"blogs"} />
      <div className="text-center new-blog-main-div">
        <h1 className="new-blog-page-title">
          Dominate <br />
          <span>Blog</span>
        </h1>
        {/*<p>Latest news </p>*/}
        <img
          src={"./img/desktop/blog/latest-img.svg"}
          alt="latest blog"
          className="latest-blog-img"
        />

        <div className="blog-3d-circle-img-block">
          <img src="./img/desktop/blog/blog-3d-circle.png" alt="" />
        </div>

        <div className="new-blog-newslatter-serach-div new-blog-newslatter-serach-div--search">
          <form onSubmit={handleSubmitSearch}>
            <input
              name="blogSearch"
              value={values.blogSearch}
              onChange={handleChangeSearch}
              placeholder="Search"
              autoComplete="off"
            />
            <button type="submit" className="new-blog-search-btn">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>

        {renderBlockOne()}
        {renderBlockTwo()}
      </div>
      {/* {renderBlockThree()} */}
    </>
  );
}
