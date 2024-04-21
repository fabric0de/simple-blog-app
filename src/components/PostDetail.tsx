import { Link } from "react-router-dom";

export default function PostDatail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">게시글 제목</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">김정현</div>
            <div className="post__date">2024.04.19 금요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to="/posts/edit/1">수정</Link>
            </div>
          </div>
          <div className="post__text">test</div>
        </div>
      </div>
    </>
  );
}
