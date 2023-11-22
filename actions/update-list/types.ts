import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";
import { z } from "zod";
import { UpdateList } from "./schema";

export type InputType = z.infer<typeof UpdateList>;
export type ReturnType = ActionState<InputType, List>;
