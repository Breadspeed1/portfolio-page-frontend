'use server'

import { redirect } from "next/navigation";
import { FAILURE_REDIRECT } from "./[slug]/page";

export default async function Default() {
    redirect(FAILURE_REDIRECT)
}