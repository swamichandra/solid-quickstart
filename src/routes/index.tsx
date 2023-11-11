import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Student of the Client</Title>
      

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>


      <div class="flexbox">
        <div class="search">
          <h1>Studenf of the Client</h1>
          <h3>Click on search icon, to discover client insights.</h3>
          <div>
            <input type="text" class="searchInput" placeholder="Discover client insights" id="searchWidgetTrigger" />
          </div>
        </div>
     </div>

      
    </main>
  );
}
