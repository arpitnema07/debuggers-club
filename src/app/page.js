"use client";
import React, { useState, useEffect, useRef } from "react";
import HtmlEditor from "../../components/HtmlEditor";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.text();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Connection Successful, fetch Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <HtmlEditor className="flex h-100" />
        </div>
      ) : (
        <p>Testing Btw Frontend and backend...</p>
      )}
    </div>
  );

  // return (1
  //   <main>
  //     <div>This is the front end app</div>
  //   </main>
  // );
}
