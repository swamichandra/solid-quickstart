import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Student of the Client</Title>
      
      <header>
          <h1 class="header-3">Student of the Client</h1>
      </header>

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
