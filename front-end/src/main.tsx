import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.tsx";

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

// eslint-disable-next-line react-refresh/only-export-components
const ProvidersTree = buildProvidersTree([
  [React.StrictMode, {}],
  [ThemeProvider, { theme }],
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
);
