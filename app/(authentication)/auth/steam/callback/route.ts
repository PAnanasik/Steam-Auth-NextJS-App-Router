import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
import {
  getSteamAuthenticationURL,
  getSteamUserIdentifier,
} from "@/utils/auth/steam";
import { cookies } from "next/headers";
import { encrypt, getPlayerData } from "@/lib";

export async function GET(request: NextRequest) {
  const identifier = await getSteamUserIdentifier(request);
  const callback = await getSteamAuthenticationURL();
  const accountData = await getPlayerData(identifier);

  const expires = new Date(Date.now() + 1209600 * 1000);
  const session = await encrypt({ accountData, expires });

  cookies().set("session", session, {
    expires,
    httpOnly: true,
    sameSite: "lax",
  });
  cookies().set("callbackUrl", callback, {
    expires,
    httpOnly: true,
    sameSite: "lax",
  });

  const urlRedirect = new URL(request.nextUrl.origin);

  redirect(urlRedirect.href);
}
