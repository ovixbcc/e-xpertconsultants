import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogList from '../../components/BlogList';
import { getAllPosts, formatDate } from '../../lib/posts';

export const metadata = {
  title: 'Blog | e-Xpert Consultants',
  description: 'Practical articles and case studies on process automation, growth, payments and technology for businesses in Bangladesh.',
};

export default function BlogPage() {
  const posts = getAllPosts().map(({ content, ...p }) => ({ ...p, dateLabel: formatDate(p.date) }));
  return (
    <>
      <Header />
      <main id="top">
        <section className="block blog-hero">
          <div className="wrap">
            <p className="eyebrow">Blog</p>
            <h1 className="blog-title">Ideas for running a business that grows.</h1>
            <p className="lede">Practical articles and real business case studies on automation, operations, payments and growth, written by the e-Xpert team.</p>
          </div>
        </section>
        <section className="block blog-list-wrap">
          <div className="wrap">
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
