import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Student of the Client</Title>
      

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>

      
      <div class="searchBox">
            <input class="searchInput" type="text" placeholder="Discover insights about your clients here" id="searchWidgetTrigger" />
            <button class="searchButton" href="#">
                <i class="material-icons">
                    ASK
                </i>
            </button>
      </div>

      
    </main>
  );
}
