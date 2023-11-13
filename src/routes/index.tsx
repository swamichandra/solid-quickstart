import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Discover Client Insights</Title>
      
      <header>
          <h1 class="header-1">KPMG: Discover Client Insights/h1>
      </header>

    <div class='text'>
      <h2>Ask </h2><div id="cursor"></div>
    </div>

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
