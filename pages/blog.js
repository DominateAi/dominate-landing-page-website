import React from "react";

function Blog() {
  return <div>Coming Soon</div>;
}

export default Blog;
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import Pagination from "rc-pagination";
// import "rc-pagination/assets/index.css";
// // import { Fragment } from "react";
// // import Link from "next/link";
// import { fetchAPI } from "./api/blogs";
// import BlogMain from "../components/desktop/blog/BlogMain";
// import BlogMobileMain from "../components/mobile/blog/BlogMobileMain";
// // import isEmpty from "../store/validation/is-empty";
// import HeadTag from "../components/common/HeadTag";
// import isEmpty from "../store/validation/is-empty";
// import BlogMainNewsLetter from "../components/desktop/blog/BlogMainNewsLetter";

// const totalRecordsInOnePage = 10;

// export default function blogs({ articles }) {
//   const router = useRouter();
//   const [currentPagination, setCurrentPagination] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(1);
//   // const [values, setValues] = useState({
//   //   articles: [],
//   //   totalRecords: [],
//   // });

//   // let totalRecords = count;

//   useEffect(() => {
//     if (router.query.page) {
//       setCurrentPagination(parseInt(router.query.page));
//     } else {
//       setCurrentPagination(1);
//     }
//   }, [articles]);

//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     let articles = JSON.parse(localStorage.getItem("articlesData"));
//   //     let totalRecords = JSON.parse(localStorage.getItem("countData"));
//   //     setValues({
//   //       ...values,
//   //       articles: articles,
//   //       totalRecords: totalRecords,
//   //     });
//   //   }
//   // }, []);

//   useEffect(() => {
//     const RetrieverDataProcess = async () => {
//       const count = await fetch(
//         `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/domblogs/count`
//       );

//       const countData = await count.json();

//       if (!isEmpty(countData)) {
//         setTotalRecords(countData);
//       }
//     };
//     RetrieverDataProcess();
//   }, []);

//   /*=================================================================================
//         renderPagination
//   =================================================================================*/
//   const onChangePaginationModule = (page) => {
//     // setCurrentPagination(page);
//     const path = router.pathname;
//     const query = router.query;
//     query.page = page;
//     router.push({
//       pathname: path,
//       query: query,
//     });
//   };

//   const renderPagination = () => {
//     return (
//       <div className="custom-pagination">
//         <Pagination
//           onChange={onChangePaginationModule}
//           current={currentPagination}
//           defaultPageSize={totalRecordsInOnePage}
//           total={totalRecords}
//           showTitle={false}
//         />
//       </div>
//     );
//   };

//   /*=================================================================================
//         main
//   =================================================================================*/
//   return (
//     <>
//       {/* {console.log("articles", articles)} */}

//       {/* article title */}
//       {/* <div className="d-none d-md-block">
//         {articles.map((article, i) => {
//           return (
//             <Fragment key={`article-${article.id}`}>
//               <Link as={`/blog/${article.slug}`} href="/blog/[id]">
//                 <a>
//                   <p>{article.title}</p>
//                 </a>
//               </Link>
//             </Fragment>
//           );
//         })}
//       </div> */}

//       <HeadTag
//         pageTitle="Blogs"
//         canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog`}
//         ogType="blog"
//         ogTitle="Dominate ai blogs"
//       />
//       {/* content */}
//       {!isEmpty(articles) && (
//         <>
//           <div className="d-none d-md-block">
//             <BlogMain blogs={articles} />
//             {renderPagination()}
//             <BlogMainNewsLetter />
//           </div>
//           <div className="d-block d-md-none">
//             <BlogMobileMain blogs={articles} />
//             {renderPagination()}
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// /*===============================================
//     client side rendering
// ================================================*/

// // export async function getStaticProps() {
// //   // Run API calls in parallel
// //   const [articles] = await Promise.all([fetchAPI("/domblogs")]);

// //   return {
// //     props: { articles }, // will be passed to the page component as props
// //     revalidate: 1,
// //   };
// // }

// /*===============================================
//     server side rendering
// ================================================*/

// export async function getServerSideProps({ query }) {
//   let current = query.page || 1;
//   const start = current === 1 ? 0 : (current - 1) * totalRecordsInOnePage;

//   // Run API calls in parallel
//   // const [articles] = await Promise.all([fetchAPI(`/domblogs`)]);

//   // const [articles] = await Promise.all([
//   //   fetchAPI(`/domblogs?_limit=${totalRecordsInOnePage}&_start=${start}`),
//   // ]);

//   // const count = await Promise.all([fetchAPI(`/domblogs/count`)]);

//   const articles = await fetch(
//     `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/domblogs?_limit=${totalRecordsInOnePage}&_start=${start}`
//   );
//   const articlesData = await articles.json();

//   // const count = await fetch(
//   //   `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/domblogs/count`
//   // );
//   // const countData = await count.json();

//   return {
//     props: {
//       articles: articlesData,
//       //  count: countData
//     },
//     // will be passed to the page component as props
//   };
// }

// // blogs.getInitialProps = async (ctx) => {
// //   let current = ctx.query.page || 1;
// //   const start = current === 1 ? 0 : (current - 1) * totalRecordsInOnePage;

// //   const articles = await fetch(
// //     `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/domblogs?_limit=${totalRecordsInOnePage}&_start=${start}`
// //   );
// //   // const count = await fetch(
// //   //   `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/domblogs/count`
// //   // );
// //   const articlesData = await articles.json();
// //   // const countData = await count.json();

// //   return {
// //     articles: articlesData,
// //     // count: countData,
// //   };
// // };
