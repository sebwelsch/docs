import { GatsbySSR } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import wrapWithProvider from "./src/state/wrap-with-provider";

export const wrapRootElement : GatsbySSR["wrapRootElement"] = wrapWithProvider;
library.add(fas);