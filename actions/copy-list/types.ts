import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";
import { z } from "zod";
import { CopyList } from "./schema";

export type InputType = z.infer<typeof CopyList>;
export type ReturnType = ActionState<InputType, List>;
