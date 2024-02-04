import React, { useState, useEffect } from "react";
// import HeadTag from "../components/common/HeadTag";
// import LandingPageTerms from "../components/desktop/LandingPageTerms";
// import ReactMarkdown from "react-markdown";
import BlogDetailMain from "../components/desktop/blog-detail/BlogDetailMain";
import BlogDetailMobileMain from "../components/mobile/blog-detail/BlogDetailMobileMain";
// import { fetchAPI } from "../api/blogs";
// import isEmpty from "../../store/validation/is-empty";
import HeadTag from "../components/common/HeadTag";
 
// let markDonw = `
// # Exploring the Wonders of DynamoDB: A Comprehensive Guide

// ## Overview

// Dive into the world of Amazon DynamoDB, a fully managed NoSQL database service that powers some of the most scalable and performant applications. In this comprehensive guide, we'll explore the key features, use cases, and best practices for leveraging DynamoDB in your projects.

// ## Key Topics Covered

// - **Introduction to DynamoDB:**
//   - Understand the fundamentals and architecture of DynamoDB.

// - **Scalability and Performance:**
//   - Learn how DynamoDB ensures consistent, low-latency performance at any scale.

// - **Security Measures:**
//   - Explore built-in security features, encryption options, and access control mechanisms.

// - **Global Tables:**
//   - Discover the power of multi-region replication for enhanced availability.

// - **Use Cases:**
//   - Explore real-world use cases, including web and mobile applications, gaming, IoT, and more.

// - **Advanced Features:**
//   - Delve into features like DynamoDB Accelerator (DAX) and DynamoDB Streams.

// ## Who Should Read?

// This guide is perfect for developers, architects, and anyone interested in understanding and maximizing the potential of Amazon DynamoDB. Whether you're new to NoSQL databases or a seasoned pro, there's something here for everyone.

// ## Why DynamoDB?

// Find out why DynamoDB is a popular choice for developers and businesses worldwide. From its serverless options to seamless scalability, DynamoDB offers a robust solution for diverse application needs.

// Ready to embark on a journey through the intricacies of DynamoDB? Let's get started!

// `;
let article = [{}];
export default function terms() {
  const [blogDetailData, setBlogDetailData] = useState({});
  useEffect(() => {
    let blogDetails = JSON.parse(localStorage.getItem("selectedBlog"));
    console.log("blogDetails", blogDetails);
    setBlogDetailData(blogDetails);
  }, []);

  return (
    <>
      {/* {console.log("article:", article)} */}
      {/* <h1>{article.title}</h1> */}

      {/* {!isEmpty(article) && (
      <HeadTag
        pageTitle="Blog"
        pageDescription={article.description}
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${article.slug}`}
        ogType="blog"
        ogTitle={article.title}
        ogDesription={article.description}
      />
    )} */}

      <div className="d-none d-md-block">
        <BlogDetailMain blogDetails={blogDetailData} />
      </div>
      <div className="d-block d-md-none">
        <BlogDetailMobileMain blogDetails={blogDetailData} />
      </div>
    </>
    // <>
    //   {/* <HeadTag
    //     pageTitle="Terms and conditions"
    //     canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/terms`}
    //     ogTitle="Dominate ai terms and conditions"
    //   />

    //   <div className="d-none d-md-block pricing-page-bg">
    //     <LandingPageTerms />
    //   </div> */}
    //   <article>
    //     <div className="row mx-0 flex-nowrap align-items-center justify-content-center blog-detail-title-block">
    //       <div className="flex-shrink-0 blog-detail-title-block__img">
    //         <img
    //           src="https://res.cloudinary.com/myrltech/image/upload/v1614076647/full-width-image-headers-websites.jpg"
    //           //   src={blogDetail.featured_image.url}
    //           //   alt={blogDetail.featured_image.alternativeText}
    //         />
    //       </div>
    //       <div className="blog-detail-title-block__colm2">
    //         <div className="row mx-0 align-items-center blog-detail-title-block__colm2-category-tags-block">
    //           {/* {categories.map((data, index) => (
    //             <div key={index} className="new-blog-technology-div">
    //               <span>Technology</span>
    //             </div>
    //           ))} */}
    //           {/* {!isEmpty(blogDetail.tag1) && ( */}
    //           <div className="new-blog-technology-div">
    //             <span>tag1</span>
    //           </div>
    //           {/* )} */}
    //           {/* {!isEmpty(blogDetail.tag2) && ( */}
    //           <div className="new-blog-technology-div">
    //             <span>tag2</span>
    //           </div>
    //           {/* )} */}
    //         </div>
    //         <h1 className="blog-detail-title-block__titleText">
    //           Top 10 Most Useful Online Courses That Are Free
    //           {/* {blogDetail.title} */}
    //         </h1>
    //         <div className="row mx-0 flex-nowrap align-items-center">
    //           <div className="flex-shrink-0 blog-detail-title-block__authorImgBlock">
    //             <img
    //               src="https://res.cloudinary.com/myrltech/image/upload/v1614076647/full-width-image-headers-websites.jpg"
    //               //   src={blogDetail.author_image[0].url}
    //               //   alt={`author ${blogDetail.author}`}
    //             />
    //           </div>
    //           <div>
    //             <p className="blog-detail-title-block__authorName">
    //               Author Name
    //               {/* {blogDetail.author} */}
    //             </p>
    //             {/* <p className="blog-detail-title-block__authorPost">
    //               Data Scientist
    //             </p> */}
    //             <div className="row mx-0 align-items-center blog-detail-title-block__dateTimeBlock">
    //               {/* {!isEmpty(blogDetail.updatedAt) && ( */}
    //               <>
    //                 <p className="blog-detail-title-block__date">
    //                   July 7,2021
    //                   {/* {format(new Date(blogDetail.updatedAt), "MMM DD,YYYY")} */}
    //                 </p>
    //                 <i className="fa fa-circle blog-detail-title-block__circle"></i>
    //               </>
    //               {/* )} */}
    //               <p className="blog-detail-title-block__date">
    //                 {/* 3 */}
    //                 {/* {blogDetail.time_to_read}{" "} */}
    //                 read
    //                 {/* {blogDetail.time_to_read === 1 ? "Min read" : "Mins read"} */}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="blog-detail-content-desc">
    //       <ReactMarkdown source={markDonw} escapeHtml={false} />
    //     </div>
    //     {/* <BlogDetailsFooterSocialMedia blogSlug={blogDetail.slug} /> */}
    //   </article>
    // </>
  );
}

// const terms = ({ article }) => {
//   return (
//     <>
//       {/* {console.log("article:", article)} */}
//       {/* <h1>{article.title}</h1> */}

//       {/* {!isEmpty(article) && (
//         <HeadTag
//           pageTitle="Blog"
//           pageDescription={article.description}
//           canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${article.slug}`}
//           ogType="blog"
//           ogTitle={article.title}
//           ogDesription={article.description}
//         />
//       )} */}

//       <div className="d-none d-md-block">
//         <BlogDetailMain blogDetail={article} />
//       </div>
//       <div className="d-block d-md-none">
//         {/* <BlogDetailMobileMain blogDetail={article} /> */}
//       </div>
//     </>
//   );
// };

/*===============================================
    client side rendering
================================================*/

// export async function getStaticPaths() {
//   const articles = await fetchAPI("/domblogs");

//   return {
//     paths: articles.map((article) => ({
//       params: {
//         slug: article.slug,
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const articles = await fetchAPI(`/domblogs?slug=${params.slug}`);

//   return {
//     props: {
//       article: articles[0],
//     },
//     revalidate: 1,
//   };
// }

/*===============================================
    server side rendering
================================================*/

// export async function getServerSideProps(context) {
//   // Run API calls in parallel
//   // const articles = await fetchAPI(`/domblogs?slug=${context.params.slug}`);

//   const singleBlog = await fetch(
//     `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/domblogs?slug=${context.params.slug}`
//   );
//   const singleBlogData = await singleBlog.json();

//   if (isEmpty(singleBlogData)) {
//     return {
//       redirect: {
//         destination: "/blog",
//         permanent: false,
//       },
//     };
//   } else {
//     return {
//       props: { article: singleBlogData[0] }, // will be passed to the page component as props
//     };
//   }
// }

// export default Article;
