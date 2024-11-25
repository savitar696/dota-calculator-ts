import compose from "compose-function"
import {withMui} from "#/app/providers/with-mui";

export const withProviders = compose(
    withMui
)