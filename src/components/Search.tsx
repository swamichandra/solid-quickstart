import { createSignal } from "solid-js";
import "./Counter.css";

export default function Search() {
  return (
    <main>
      <gen-search-widget configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4" triggerId="searchWidgetTrigger"></gen-search-widget>

      <input placeholder="Search here" id="searchWidgetTrigger" />
    </main>
  );
  );
}
