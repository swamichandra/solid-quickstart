import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <gen-search-widget
      configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
      triggerId="searchWidgetTrigger">
    </gen-search-widget>
    
    <input placeholder="Search here" id="searchWidgetTrigger" />
    
  );
}
