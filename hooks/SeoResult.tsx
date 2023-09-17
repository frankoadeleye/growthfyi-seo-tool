"use client";

import { useState } from "react";
import axios from "axios";

function SEOResult(url: string) {
  const [SEOSummaryData, setSEOSummaryData] = useState({});
  const [callIsMade, setCall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValidURL, setURLValidity] = useState(false);

  const checkURLValididty = (urlString: string) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const SEOSummary = async () => {
    setLoading(true);
    setCall(true);
    if (checkURLValididty(url)) {
      setURLValidity(true);
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
    } else {
      setURLValidity(false);
    }
  };

  return {
    loading,
    SEOSummaryData,
    SEOSummary,
    callIsMade,
    isValidURL,
  };
}

export default SEOResult;
