'use server'

import { redirect } from "next/navigation";

export default async function Default() {
    redirect('/default')
}