"use client";

import { useEffect, useState } from "react";

type Category = {
  name: string;
  amount: number;
};

type Summary = {
  currency: string;
  financialYear: number;
  totalIncome: number;
  totalExpenses: number;
  categories: Category[];
  dataStatus: string;
};

export default function Home() {
  const [data, setData] = useState<Summary | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/financial-summary`
    )
      .then((response) => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
      })
      .then(setData)
      .catch(() => setError("Unable to load financial data"));
  }, []);

  const money = (amount: number) =>
    new Intl.NumberFormat("en-SG", {
      style: "currency",
      currency: "SGD",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold">CondoWatch</h1>
      <p className="mt-2 text-gray-500">
        Financial Transparency Portal
      </p>

      {error && <p role="alert">{error}</p>}
      {!data && !error && <p>Loading...</p>}

      {data && (
        <>
          <p className="mt-6 text-sm">
            Financial Year: {data.financialYear}
            {" | "}
            Data Status: {data.dataStatus}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <section className="rounded border p-5">
              <h2>Total Income</h2>
              <p className="text-2xl font-bold">
                {money(data.totalIncome)}
              </p>
            </section>

            <section className="rounded border p-5">
              <h2>Total Expenses</h2>
              <p className="text-2xl font-bold">
                {money(data.totalExpenses)}
              </p>
            </section>
          </div>

          <h2 className="mt-8 text-xl font-bold">
            Expense Breakdown
          </h2>

          <div className="mt-4 space-y-3">
            {data.categories.map((category) => (
              <div
                key={category.name}
                className="flex justify-between rounded border p-4"
              >
                <span>{category.name}</span>
                <strong>{money(category.amount)}</strong>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
