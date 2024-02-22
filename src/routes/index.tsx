import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Discover Client Insights</Title>

      <!-- Search widget element is not visible by default -->
      <gen-search-widget
        configId="f93d75f5-4d53-439c-9194-f075086d3eb9"
        location="us"
        triggerId="searchWidgetTrigger">
      </gen-search-widget>

<div class="wrapper">
  <div class="container">
    <div class="flexbox">
      <div class="search">
        <h1>Discover Client Insights</h1>
        <h3> Click on search icon, prompt what you want to know about a client <span class="blinking-cursor"> |</span></h3>
        <div>
          <input type="text" id="searchWidgetTrigger" placeholder="Discover . . ."  />
        </div>
      </div>
      <div id="facet_results"></div>
    </div>
   </div>
</div>
    </main>
  );
}
