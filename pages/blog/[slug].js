import React from "react";

function Article() {
  return <div>Coming Soon</div>;
}

export default Article;

// import BlogDetailMain from "../../components/desktop/blog-detail/BlogDetailMain";
// import BlogDetailMobileMain from "../../components/mobile/blog-detail/BlogDetailMobileMain";
// import { fetchAPI } from "../api/blogs";
// import isEmpty from "../../store/validation/is-empty";
// import HeadTag from "../../components/common/HeadTag";

// const Article = ({ article }) => {
//   return (
//     <>
//       {/* {console.log("article:", article)} */}
//       {/* <h1>{article.title}</h1> */}

//       {!isEmpty(article) && (
//         <HeadTag
//           pageTitle="Blog"
//           pageDescription={article.description}
//           canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${article.slug}`}
//           ogType="blog"
//           ogTitle={article.title}
//           ogDesription={article.description}
//         />
//       )}

//       <div className="d-none d-md-block">
//         <BlogDetailMain blogDetail={article} />
//       </div>
//       <div className="d-block d-md-none">
//         <BlogDetailMobileMain blogDetail={article} />
//       </div>
//     </>
//   );
// };

// /*===============================================
//     client side rendering
// ================================================*/

// // export async function getStaticPaths() {
// //   const articles = await fetchAPI("/domblogs");

// //   return {
// //     paths: articles.map((article) => ({
// //       params: {
// //         slug: article.slug,
// //       },
// //     })),
// //     fallback: false,
// //   };
// // }

// // export async function getStaticProps({ params }) {
// //   const articles = await fetchAPI(`/domblogs?slug=${params.slug}`);

// //   return {
// //     props: {
// //       article: articles[0],
// //     },
// //     revalidate: 1,
// //   };
// // }

// /*===============================================
//     server side rendering
// ================================================*/

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
