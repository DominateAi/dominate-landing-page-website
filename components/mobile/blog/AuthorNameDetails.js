import React from "react";
import format from "date-fns/format";
import isEmpty from "../../../store/validation/is-empty";

export default function AuthorNameDetails({
  img,
  name,
  blogDate,
  time_to_read,
}) {
  return (
    <>
      <div className="row mx-0 flex-nowrap align-items-center">
        <div className="flex-shrink-0 blog-detail-title-block__authorImgBlock">
          <img
            // src="/img/desktop/blog-detail/blog-detail-author-dummy-img.svg"
            src={img}
            alt={`author ${name}`}
          />
        </div>
        <div>
          <p className="blog-detail-title-block__authorName">
            {/* Author Name */}
            {name}
          </p>
          {/* <p className="blog-detail-title-block__authorPost">Data Scientist</p> */}
          <div className="row mx-0 align-items-center blog-detail-title-block__dateTimeBlock">
            {!isEmpty(blogDate) && (
              <>
                <p className="blog-detail-title-block__date">
                  {/* July 7,2021 */}
                  {format(new Date(blogDate), "MMM DD,YYYY")}
                </p>
                <i className="fa fa-circle blog-detail-title-block__circle"></i>
              </>
            )}
            <p className="blog-detail-title-block__date">
              {/* 3 */}
              {time_to_read} {time_to_read === 1 ? "Min read" : "Mins read"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
