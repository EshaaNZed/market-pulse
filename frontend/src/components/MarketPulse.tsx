export {};
import React, { useEffect, useState } from 'react';

const MarketPulse = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketPulse = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/market-pulse?ticker=AAPL');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchMarketPulse();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Market Pulse for {data.ticker}</h2>
      <p><strong>Date:</strong> {data.as_of}</p>
      <p><strong>Returns:</strong> {data.momentum.returns}</p>
      <p><strong>Score:</strong> {data.momentum.score}</p>
      <p><strong>Pulse:</strong> {data.pulse}</p>
      <p><strong>Explanation:</strong> {data.llm_explanation}</p>

      <h3>News</h3>
      <ul>
        {data.news.map((article: any, index: number) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketPulse;
 // makes it a module, even if you're not exporting anything
