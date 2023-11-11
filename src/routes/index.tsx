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
      
      <div class="flexbox">
        <div class="search">
           <input placeholder="Search here" id="searchWidgetTrigger" />
          </div>
        </div>

    </main>
  );
}
