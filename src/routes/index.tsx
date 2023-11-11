import { Title } from "solid-start";

export default function Home() {
  return (    
    <main>
    	<h1>Student of the Client</h1>
      
      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>
    	
      <form class="search-box">
        <input type="text" placeholder=" "/>
        <input type="text" class="SearchBox-input" placeholder="Discover client insights" id="searchWidgetTrigger" />
        <button type="reset"></button>
      </form>
      

    </main>
  );
}
