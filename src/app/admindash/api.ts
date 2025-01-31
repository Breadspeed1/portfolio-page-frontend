'use server'

const BACKEND_ADDRESS = process.env.BACKEND_ADDRESS;

export async function GetRefList() {
    const uri = BACKEND_ADDRESS + "/ref/list"
    const res = await fetch(uri);

    return res.ok ? await res.json() : null
}