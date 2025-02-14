'use server'

import { cookies } from "next/headers";

const BACKEND_ADDRESS = process.env.BACKEND_ADDRESS;

async function makeReqWithAuth(url: string, auth: string, method?: string) {
    const uri = BACKEND_ADDRESS + url
    const res = await fetch(uri, {
        headers: [['authorization', auth]],
        method
    })

    return res
}

export async function GetAuthCookie() {
    return (await cookies()).get('authorization')
}

export async function GetRefList(auth: string) {
    return await (await makeReqWithAuth("/ref/list", auth)).json()
}

export async function AddRef(name: string, auth: string) {
    return (await makeReqWithAuth('/ref/create/' + name, auth, 'POST')).ok
}

export async function DeleteRef(refstr: string, auth: string) {
    return (await makeReqWithAuth('/ref/delete/' + refstr, auth, 'DELETE')).ok
}

export async function GetRefName(refstr: string, auth: string) {
    return await (await makeReqWithAuth('/ref/' + refstr + '/name', auth)).text()
}

export async function GetRef(refstr: string, auth: string) {
    const name = await GetRefName(refstr, auth);

    if (!name) {
        return null
    }

    const json = await (await makeReqWithAuth('/ref/' + refstr + '/skills', auth)).json()

    if (json) {
        return {
            name: name,
            skills: json
        }
    }

    return null
}

export async function GetSkillsList(auth: string) {
    return await (await makeReqWithAuth('/skills/list', auth)).json()
}

export async function CreateSkill(skill: string, auth: string) {
    return (await makeReqWithAuth('/skills/create/' + skill, auth, 'POST')).ok
}

export async function AddSkillToRef(refstr: string, skill: string, auth: string) {
    return (await makeReqWithAuth('/ref/' + refstr + '/add_skill/' + skill, auth, 'POST')).ok
}

export async function RemoveSkillFromRef(refstr: string, skill: string, auth: string) {
    return (await makeReqWithAuth('/ref/' + refstr + '/remove_skill/' + skill, auth, 'DELETE')).ok
}

export async function DeleteSkill(skill: string, auth: string) {
    return (await makeReqWithAuth('/skills/delete/' + skill, auth, 'DELETE')).ok
}

export async function CheckAdmin(auth: string) {
    return (await makeReqWithAuth('/admincheck', auth)).ok
}

export async function Upgrade(pw: string, auth: string) {
    const res = await fetch(
        BACKEND_ADDRESS + '/token/admin',
        {
            headers: [
                ['authorization', auth],
                ['Content-Type', 'application/json']
            ],
            method: 'POST',
            body: JSON.stringify({ password: pw })
        }
    )

    return await res.text()
}

export async function GetRefFromJWT(jwt: string) {
    const uri = BACKEND_ADDRESS + "/getref";
    const res = await fetch(uri, {
        headers: [
            ["authorization", jwt]
        ]
    })

    if (res) return await res.text()
    return undefined
}

export async function GetJWTForRef(ref: string) {
    const uri = BACKEND_ADDRESS + "/token/" + ref;
    const res = await fetch(uri)

    if (res.ok) return await res.text()
    return undefined
}