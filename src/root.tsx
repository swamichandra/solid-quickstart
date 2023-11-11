// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- Widget JavaScript bundle -->
        <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>
        
        <!-- Search widget element is not visible by default -->
        <gen-search-widget
          configId="23df4038-8851-4b5e-84ef-86eae2f5ecc4"
          triggerId="searchWidgetTrigger">
        </gen-search-widget>
        
        <!-- Element that opens the widget on click. It does not have to be an input -->
        <input placeholder="Search here" id="searchWidgetTrigger" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
