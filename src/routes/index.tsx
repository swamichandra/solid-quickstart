import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Discover Client Insights</Title>

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>

    <div class="flexbox">
      <div class="search">
        <h1>Discover Client Insights</h1>
        <h3>Click on search icon, then type what you would want to know about a client.</h3>
        <div>
          <input type="text" id="searchWidgetTrigger" placeholder="Discover . . ."  />
        </div>
      </div>
    </div>
      
    </main>
  );
}
