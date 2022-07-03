import { getSortedPostsData } from "../src/helpers/posts.helpers";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HowTo({ allPostsData }) {
  return (
    <section>
      <h2>Posts</h2>
      <PostsWrapper>
        {allPostsData.map(({ id, date, title }) => (
          <Post key={id}>
            <Link href={`/posts/${id}`}>
              {
                <Image
                  src={`/${id}.jpg`}
                  alt={title}
                  width="300"
                  height="200"
                />
              }
            </Link>
            <Link href={`/posts/${id}`}>{title}</Link>
          </Post>
        ))}
      </PostsWrapper>
    </section>
  );
}

const PostsWrapper = styled.ul`
  display flex;
  flex-flow: row wrap;
  gap: 30px;
  padding: 0;
`;

const Post = styled.li`
  width: calc(33% - 14px);
  list-style: none;
  overflow: hidden;
`;
