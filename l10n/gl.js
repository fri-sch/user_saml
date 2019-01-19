OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Esta conta de usuario está desactivada, póñase en contacto co administrador.",
    "Saved" : "Gardado",
    "Provider" : "Provedor",
    "Unknown error, please check the log file for more details." : "Produciuse un erro descoñecido, revise o rexistro para obter máis información.",
    "Direct log in" : "Acceso directo",
    "SSO & SAML log in" : "Acceso SSO e SAML",
    "This page should not be visted directly." : "Esta páxina non debe ser visitada directamente.",
    "Provider " : "Provedor",
    "X.509 certificate of the Service Provider" : "Certificado X.509 do provedor do servizo",
    "Private key of the Service Provider" : "Chave privada do provedor do servizo",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica que o nameID do <samlp:logoutRequest> enviado por este SP vai ser cifrado.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica se as mensaxes <samlp:AuthnRequest>enviadas por este SP van seren asinadas. [Os metadatos do SP ofrecerán esta información]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica se as mensaxes <samlp:logoutRequest> enviadas por este SP van seren asinadas.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica se as mensaxes <samlp:logoutResponse> enviadas por este SP van seren asinadas.",
    "Whether the metadata should be signed." : "Se os metadatos deben ser asinados.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica un requisito para os elementos <samlp:Response>, <samlp:LogoutRequest> e <samlp:LogoutResponse> recibidos por este SP para seren asinados.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica un requisito para os elementos <saml:Assertion> recibidos por este SP para seren asinados. [Os metadatos do SP ofrecerán esta información]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica un requisito para os elementos <saml:Assertion> recibidos por este SP para seren cifrados.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica un requisito para que o elemento NameID no SAMLResponse recibido por este SP estea presente.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica un requisito para que o NameID recibido por este SP estea cifrado.",
    "Indicates if the SP will validate all received XML." : "Indica se o SP validará todos os XMLs recibidos.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Cifra datos SAML en minúsculas, e o conxunto de ferramentas usa maiúsculas como predeterminado. Active ADFS para a compatibilidade na sinatura de verificación.",
    "Attribute to map the UID to." : "Atributo para asignar o UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Permitir soamente se existe unha conta noutro sistema. (p. ex. LDAP)",
    "Attribute to map the displayname to." : "Atributo para asignar o nome que amosar.",
    "Attribute to map the email address to." : "Atributo para asignar o enderezo de correo que amosar.",
    "Attribute to map the quota to." : "Atributo para asignar a cota.",
    "Attribute to map the users groups to." : "Atributo para asignar os grupos de usuarios.",
    "Attribute to map the users home to." : "Atributo para asignar o cartafol dos usuarios.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Usar a autenticación SAML para os clientes de escritorio %s (necesita unha re-autenticación do usuario)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Nome para amosar opcional do provedor de identidade (por omisión: «rexistro SSO e SAML»)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Permitir o uso de várias infraestruturas de autenticación (p. ex. LDAP) ",
    "SSO & SAML authentication" : "Autenticación SSO e SAML",
    "Authenticate using single sign-on" : "Autenticación usando SSO (single sign-on)",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Usando o aplicativo SSO e SAML no seu NextCloud pode facer posíbel integrar a súa solución de «Single-Sign-On» co Nextcloud. Ademaiss, pode empregar o provedor de usuarios LDAP do NextCloud para manter a conveniencia para usuarios (p. ej., ao compartir).\nPolo momento foron omprobados e son compatíbeis os seguintes proveedores:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Autenticación mediante variábel de contorno**\n\t* Kerberos (mod_auth_kerb)\n\t* Calquera outro provedor que autentique usando a variábel de contorno\n\nAínda que teoricamente calquera outro provedor de autenticación que implemente calquera destes estándares é compatible, queremos facer notar que non forman parte de ningunha matriz de probas interna.",
    "Open documentation" : "Abrir a documentación",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Escolla se quere autenticarse usando o provedor SAML integrado en Nextcloud ou se quere autenticarse nunha variábel de entorno.",
    "Use built-in SAML authentication" : "Usar a autenticación integrada de SAML",
    "Use environment variable" : "Usar variábel de entorno",
    "Global settings" : "Axustes globais",
    "Remove identity provider" : "Retirar o provedor de identidade",
    "Add identity provider" : "Engadir un provedor de identidade",
    "General" : "Xeral",
    "Service Provider Data" : "Provedor do servizo de datos",
    "If your Service Provider should use certificates you can optionally specify them here." : "Se o seu provedor do servizo usa certificados, pode, opcionalmente, especificalos aquí.",
    "Show Service Provider settings…" : "Amosar os axustes do Proveedor dos Servizos...",
    "Identity Provider Data" : "Identificación do provedor de datos",
    "Configure your IdP settings here." : "Configure os axustes do seu IdP aquí.",
    "Identifier of the IdP entity (must be a URI)" : "Identificador da entidade IdP (ten que ser un URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL obxectivo do IdP onde o SP enviará a mensaxe de solicitude de autenticación",
    "Show optional Identity Provider settings…" : "Amosar axustes opcionais do Provedor de Identidade...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Enderezo URL do IdP onde o SP enviará as solicitudes SLO",
    "Public X.509 certificate of the IdP" : "Certificado público X.509 do IdP",
    "Attribute mapping" : "Asignación de atributos",
    "If you want to optionally map attributes to the user you can configure these here." : "Se queres asignar atributos opcionais ao usuario, podes configuralos aquí.",
    "Show attribute mapping settings…" : "Amosar axustes de asignación de atributos...",
    "Security settings" : "Axustes de seguridade",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Para incrementar a seguridade recomendámoslle que active os seguintes axustes se son admitidos polo seu entorno.",
    "Show security settings…" : "Amosar axustes de seguridade...",
    "Signatures and encryption offered" : "Sinaturas e cifrado ofrecidos",
    "Signatures and encryption required" : "Sinaturas e cifrado requiridos",
    "Download metadata XML" : "Descargar metadatos en XML",
    "Reset settings" : "Restabelecer os axustes",
    "Metadata invalid" : "Metadatos incorrectos",
    "Metadata valid" : "Metadatos correctos",
    "Error" : "Erro",
    "Account not provisioned." : "Conta non aprovisionada.",
    "Your account is not provisioned, access to this service is thus not possible." : "A súa conta non esta aprovisionada, polo que non é posíbel o acceso a este servizo.",
    "Choose a authentication provider" : "Escolla un provedor de autenticación",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\"" : "Asegúrese de configurar un usuario administrativo que poida acceder á instancia a través de SSO. Acceder coa sua conta normal %s xa non será posíbel, a non ser que teña activado «%s»."
},
"nplurals=2; plural=(n != 1);");
