'use server'

const BACKEND_ADDRESS = process.env.BACKEND_ADDRESS;

export async function GetRefList() {
    const uri = BACKEND_ADDRESS + "/ref/list"
    const res = await fetch(uri)

    return res.ok ? await res.json() : null
}

export async function AddRef(name: string) {
    const uri = BACKEND_ADDRESS + '/ref/create/' + name
    const res = await fetch(uri, { method: "POST" })
    return res.ok
}

export async function DeleteRef(refstr: string) {
    const uri = BACKEND_ADDRESS + '/ref/delete/' + refstr
    const res = await fetch(uri, { method: "DELETE" })

    return res.ok
}