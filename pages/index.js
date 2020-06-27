import Link from 'next/link';

const Index = (props) => (
  <div>
    <h1>Index page.</h1>
    <p>This page was rendered on the server side: {props.isServer.toString()}</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

Index.getInitialProps = async function () {
  return {
    isServer: typeof window === 'undefined'
  }
};

export default Index;
