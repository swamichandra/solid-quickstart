import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Discover Client Insights</Title>
      
      <header>
          <h1 class="header-1">Discover Client Insights</h1><div id="cursor"></div>
      </header>

      <div class='top'></div>

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>

    <div class="flexbox">
      <div class="search">
        <h1>Search this site</h1>
        <h3>Click on search icon, then type your keyword.</h3>
        <div>
          <input type="text" id="searchWidgetTrigger" placeholder="Discover client insights . . ." required>
        </div>
      </div>
    </div>
      
    </main>
  );
}
