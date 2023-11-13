import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Discover Client Insights <div id="cursor"></div></Title>
      
      <header>
          <h1 class="header-1">Discover Client Insights</h1>
      </header>

      <div class='top'></div>

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>

     <div class="container">
      <input type="text" placeholder="Discover client insights" id="searchWidgetTrigger" />
      <div class="search"></div>
    </div>
    </main>
  );
}
