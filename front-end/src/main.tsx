import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const buildProvidersTree = (
  componentsWithProps: [JSX.ElementType, object][]
) => {
  const initialComponent = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  );

  return componentsWithProps.reduce(
    (
      AccumulatedComponents: JSX.ElementType,
      [Provider, props = {}]: [JSX.ElementType, object]
    ) => {
      return ({ children }: { children: React.ReactNode }) => (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );
    },
    initialComponent
  );
};

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

// eslint-disable-next-line react-refresh/only-export-components
const ProvidersTree = buildProvidersTree([
  [React.StrictMode, {}],
  [ThemeProvider, { theme }],
  [ApolloProvider, { client }],
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
);
