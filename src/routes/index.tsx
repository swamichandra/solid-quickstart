import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Student of the Client</Title>
      <h3>Student of the Client!</h3>
     

      <gen-search-widget
            configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
            triggerId="searchWidgetTrigger">
      </gen-search-widget>

     <input placeholder="Search here" id="searchWidgetTrigger" />

    </main>
  );
}
