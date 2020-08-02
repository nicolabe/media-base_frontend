import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Link href="/">
          <h1 className="title">MediaBase</h1>
        </Link>
      </header>

      <style jsx>{`
        .header {
          background-color: teal;
          padding: 0.6rem 2rem;
          display: flex;
          align-items: center;
        }

        .title {
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
