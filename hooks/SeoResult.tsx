"use client";

import { useState } from "react";
import axios from "axios";

function SEOResult(url: string) {
  const [SEOSummaryData, setSEOSummaryData] = useState({});
  const [callIsMade, setCall] = useState(false);
  const [loading, setLoading] = useState(false);

  const SEOSummary = async () => {
    setLoading(true);
    setCall(true);
    try {
      const response = await axios.post(
        "https://api.dataforseo.com/v3/on_page/instant_pages",
        [
          {
            "url": url,
            "custom_js": "meta = {}; meta.url = document.URL; meta;",
          },
        ],
        {
          auth: {
            username: "oluwatimiadeleye22@gmail.com",
            password: "07f1795c9dd9acc2",
          },
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
          },
        }
      );
      setLoading(false);
      setSEOSummaryData(response.data);
    } catch (error) {
      console.error("Error fetching SEO data:", error);
      setLoading(false);
    }
  };

  return {
    loading,
    SEOSummaryData,
    SEOSummary,
    callIsMade,
  };
}

export default SEOResult;
