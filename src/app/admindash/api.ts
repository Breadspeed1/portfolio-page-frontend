'use server'

const BACKEND_ADDRESS = process.env.BACKEND_ADDRESS;

export async function GetRefList() {
    const uri = BACKEND_ADDRESS + "/ref/list"
    const res = await fetch(uri)
    const json = await res.json()

    return json ? json : null
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

export async function GetRefName(refstr: string) {
    const uri = BACKEND_ADDRESS + "/ref/" + refstr + "/name"
    const res = await fetch(uri)

    return res.ok ? await res.text() : null
}

export async function SearchSkills(searchTerm: string) {
    const uri = BACKEND_ADDRESS + "/skills/search/" + searchTerm;
    const res = await fetch(uri);
    
    return res.ok ? await res.text() : null
}

export async function GetRef(refstr: string) {
    const name = await GetRefName(refstr);

    if (!name) {
        return null
    }

    const uri = BACKEND_ADDRESS + "/ref/" + refstr + "/skills"
    const res = await fetch(uri)
    const json = await res.json()

    if (json) {
        return {
            name: name,
            skills: json
        }
    }

    return null
}

export async function GetSkillsList() {
    const uri = BACKEND_ADDRESS + "/skills/list"
    const res = await fetch(uri)
    const json = await res.json()

    return json ? json : null
}