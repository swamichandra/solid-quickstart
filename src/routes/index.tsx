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
        <input type="text" placeholder="Search here" id="searchWidgetTrigger" />
            <button type="button">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
     </form>


        
      <div class="search_box">
         <div class="search">
           <div class= "select_area">
             <i class="fas fa-map-marker-alt map_icon"></i>
             <div class="text">Search</div>
           </div>
           
           <div class="line"></div>
           
           <div class = "text_and-icon">
             <input type="text" class="search_text" id="searchWidgetTrigger" placeholder="Search by Company, Keyword or the designation ..">
                  <i class="fas fa-search search_icon"></i>
           </div>
      </div>  
     
    </main>
  );
}
