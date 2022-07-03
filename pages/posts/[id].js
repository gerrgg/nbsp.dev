import Layout from "../../src/components/Layout";
import { getAllPostIds, getPostData } from "../../src/helpers/posts.helpers";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Link href="/posts">
        <a>Back To Posts</a>
      </Link>
      <br />
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
