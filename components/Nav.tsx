"use client";

function Nav() {
  return (
    <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed gap-2 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        GrowthFYI
        <code className="font-mono font-bold">
          FREE SEO Checker for any URL
        </code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://www.linkedin.com/in/frank-adeleye-15a536171"
          target="_blank"
          rel="noopener noreferrer">
          By{" "}
            Frank Adeleye
        </a>
      </div>
    </div>
  );
}

export default Nav;
