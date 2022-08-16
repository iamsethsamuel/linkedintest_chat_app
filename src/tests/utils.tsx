import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import { PreloadedState } from "redux";
import { setupStore, store as stores } from "../stores/store";
import { StoreType } from "../utils/types";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<StoreType>
  store?: any
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {user: {name: "test"}, chat: {chatBubble: ""}},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
