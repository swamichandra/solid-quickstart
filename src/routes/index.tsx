import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>


<gen-search-widget
  configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
  triggerId="searchWidgetTrigger">
</gen-search-widget>

<input placeholder="Search here" id="searchWidgetTrigger" />
    </main>
  );
}
