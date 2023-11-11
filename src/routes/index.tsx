import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Student of the Client</Title>
      <h3>Student of the Client!</h3>

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>
      
      <form>
       
            <button type="button">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
      </form>

      
      <div class="searchBox">
            <input class="searchInput" type="text" placeholder="Search here" id="searchWidgetTrigger" />
            <button class="searchButton" href="#">
                <i class="material-icons">
                    search
                </i>
            </button>
      </div>

      
    </main>
  );
}
