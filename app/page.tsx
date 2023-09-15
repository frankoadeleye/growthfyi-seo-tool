"use client";

import SearchInput from "@/components/SearchInput";
import Nav from "@/components/Nav";
import { useState } from "react";
import SEOResult from "@/hooks/SeoResult";
import Accordion from "@/components/Accordion";

export default function Home() {
  const [url, setUrl] = useState("");

  const { SEOSummaryData, callIsMade, loading, SEOSummary } = SEOResult(url);

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
      <br/>
      {callIsMade ? loading ? <div>Loading . . .</div>
       : 
      <>
      <Accordion data={SEOSummaryData} />
      <div>More details can be added to result...</div>
      </> : ""}
    </main>
  );
}
