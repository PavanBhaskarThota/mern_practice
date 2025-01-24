import React from "react";
import useFetch from "../Hooks/useFetch";

export const Fetch = () => {
  const { data, loading, error } = useFetch("https://api.example.com/data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
