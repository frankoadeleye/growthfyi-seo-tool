"use client";

import SearchInput from "@/components/SearchInput";
import Nav from "@/components/Nav";
import { useState } from "react";
import SEOResult from "@/hooks/SeoResult";
import Accordion from "@/components/Accordion";

export default function Home() {
  const [url, setUrl] = useState("");

  const { SEOSummaryData, callIsMade, loading, SEOSummary, isValidURL } =
    SEOResult(url);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    SEOSummary();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24">
      <Nav />
      <form onSubmit={handleSubmit} className="md:w-96 w-64 mt-40 form">
        <SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUrl(e.target.value)
          }
          url={url}
        />
      </form>
      <br />
      {callIsMade && !isValidURL ? "Please Enter a valid Url" : ""}
      {callIsMade && isValidURL ? (
        loading ? (
          <div>Loading . . .</div>
        ) : (
          <>
            {SEOSummaryData?.tasks[0].result !== null ? (
              <>
                <Accordion data={SEOSummaryData} />
                <div>More details can be added to result...</div>
              </>
            ) : (
              <div className="flex flex-col text-center">
                Request was successful, but DataForSeo provided No Result.{" "}
                <br />
                Check if you added https:// or try again later
              </div>
            )}
          </>
        )
      ) : (
        ""
      )}
    </main>
  );
}
