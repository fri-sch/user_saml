OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Ez a fiók le van tiltva, kérlek lépj kapcsolatba a rendszergazdával.",
    "Saved" : "Elmentve",
    "Provider" : "Szolgáltató",
    "Unknown error, please check the log file for more details." : "Ismeretlen hiba, kérlek ellenőrizd a log fájlokat további részletekért.",
    "Direct log in" : "Közvetlen belépés",
    "SSO & SAML log in" : "SSO & SAML belépés",
    "Provider " : "Szolgáltató",
    "X.509 certificate of the Service Provider" : "Szolgáltató X.509 tanúsítványa",
    "Private key of the Service Provider" : "Szolgáltató titkos kulcsa",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Jelzi, hogy a  <samlp:logoutRequest> nameID-ja titkosítva lesz küldve ezen SP által.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Jelzi, hogy a <samlp:AuthnRequest> üzenetek ezen az SP-n keresztül küldve alá lesznek írva. [Az SP metaadatai megadják ezt az infót]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Jelzi, hogy a <samlp:logoutRequest> üzenetek ezen az SP-n keresztül küldve alá lesznek írva.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Jelzi, hogy a <samlp:logoutResponse> üzenetek ezen az SP-n keresztül küldve alá lesznek írva.",
    "Whether the metadata should be signed." : "Metaadatok aláírása.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Jelzi, hogy az SP által fogadott <samlp:Response>, <samlp:LogoutRequest> és <samlp:LogoutResponse> elemek kötelezően aláírtak.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Jelzi, hogy az SP által fogadott <saml:Assertion> elemek kötelezően aláírtak. [Az SP metaadatai felajánlják ezt az infót.]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Kényszeríti a <saml:Assertion> elemek ezen SP által történő fogadáskori titkosítását.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Jelzi, hogy az SP által fogadott SAMLResponse kötelezően tartalmazta a NameID-t.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Jelzi, hogy az SP által fogadott NameID titkosítva lesznek-e.",
    "Indicates if the SP will validate all received XML." : "Mutatja ha az SP validálja az összes fogadott XML-t.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "Az ADFS kisbetűvel URL-kódolja a SAML adatokat, és az eszköz alapértelmezetten nagybetűket használ. Kapcsold be az ADFS kompatibilitáshoz az aláírás ellenőrzéskor.",
    "Attribute to map the UID to." : "Attribútum melyre az UID leképeződik.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Csak akkor engedd a hitelesítést, ha egy másik háttérszolgáltatásban is létezik a fiók. (pl: LDAP)",
    "Attribute to map the displayname to." : "Attribútum melyre az megjelenítendő név leképeződik.",
    "Attribute to map the email address to." : "Attribútum melyre az e-mail leképeződik.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "SAML használata %s asztali kliens hitelesítés (felhasználók ismételt bejelentkezését igényli)",
    "SSO & SAML authentication" : "SSO & SAML hitelesítés",
    "Open documentation" : "Dokumentáció megnyitása",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Kélek válassz, hogy a Nextcloud-ba épített SAML szolgáltató vagy egy környezeti változó ellenében szeretnél bejelentkeztetni.",
    "Use built-in SAML authentication" : "Használd a beépített SAML hitelesítés",
    "Use environment variable" : "Használd a környezeti változót",
    "Global settings" : "Globális beállítások",
    "General" : "Általános",
    "Service Provider Data" : "Szolgáltató adatok",
    "If your Service Provider should use certificates you can optionally specify them here." : "Ha a szolgáltatód tanúsítványokat kellene használjon, megadhatod azokat.",
    "Show Service Provider settings…" : "Szolgáltató beállításainak mutatása…",
    "Identity Provider Data" : "Azonosítási szolgáltató adatai",
    "Configure your IdP settings here." : "IdP beállításaid.",
    "Identifier of the IdP entity (must be a URI)" : "IdP bejegyzés azonosítója (URI kell legyen)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "IdP URL célja ahova SP küldi a bejelentkezés kérési üzeneteit",
    "Show optional Identity Provider settings…" : "Kiegészítő identitás szolgáltató beállításai…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Az IdP URL-je ahova az SP küldi az SLO kérést",
    "Public X.509 certificate of the IdP" : " IdP nyilvános X.509 tanúsítványa",
    "Attribute mapping" : "Attribútum összekötés",
    "If you want to optionally map attributes to the user you can configure these here." : "Ha opcionális attribútumokat szeretnél rendelni a felhasználóhoz, itt megteheted.",
    "Show attribute mapping settings…" : "Attribútum összerendelési beállítások mutatása…",
    "Security settings" : "Biztonsági beállítások",
    "For increased security we recommend enabling the following settings if supported by your environment." : "A nagyobb biztonság érdekében javasoljuk az alábbi bekapcsolását, ha a környezeted lehetővé teszi.",
    "Show security settings…" : "Biztonsági beállítások mutatása…",
    "Signatures and encryption offered" : "Aláírások és titkosítás ajánlott",
    "Signatures and encryption required" : "Aláírások és titkosítás szükséges",
    "Download metadata XML" : "XML metaadat letöltés",
    "Reset settings" : "Beállítások visszaállítása",
    "Metadata invalid" : "Érvénytelen metaadat",
    "Metadata valid" : "Érvényes metaadat",
    "Account not provisioned." : "Nem felügyelt fiók.",
    "Your account is not provisioned, access to this service is thus not possible." : "A fiókod nincs engedélyezve, így ehhez a szolgáltatáshoz nem férhetsz hozzá."
},
"nplurals=2; plural=(n != 1);");
