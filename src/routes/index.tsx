import { Title } from "solid-start";

export default function Home() {
  return (    
    <main>
    	<h1>Student of the Client</h1>
      
      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>
    	
    	<div class="SearchBox">
        <input type="text" class="SearchBox-input" placeholder="Discover client insights" id="searchWidgetTrigger" />
    	
    			<button class="SearchBox-button">
    				<i class="SearchBox-icon  material-icons">discover</i>
    			</button>
    	</div>
    </main>
  );
}
