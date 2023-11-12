import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Student of the Client</Title>
      

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>

     <center>
     <form action="" class="search-bar">
      <input class="searchInput" name="search" type="search" id="searchWidgetTrigger" pattern=".*\S.*" required/>
      <button class="search-btn" type="submit">
        <span>Search</span>
      </button>
    </form>
    </center> 
    </main>
  );
}
