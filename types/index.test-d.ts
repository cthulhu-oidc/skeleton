import { addition } from ".."
import { expectType } from "tsd"

expectType<number>(addition(1,2))
