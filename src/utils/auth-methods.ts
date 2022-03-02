
type AuthMethod = {
  title: string
  acrValue: string
}

type Provider = {
  title: string
  authMethods: AuthMethod[]
  page: string
}

export const PROVIDERS : Provider[] = [
  {
    title: 'Finnish e-ID',
    authMethods: [
      {
        title: 'BankID',
        acrValue: 'urn:grn:authn:fi:bank-id'
      },
      {
        title: 'Mobile certificate (Mobiilivarmenne)',
        acrValue: 'urn:grn:authn:fi:mobile-id'
      },
      {
        title: 'All (Both of the above)',
        acrValue: 'urn:grn:authn:fi:all'
      }
    ],
    page: '/verify/e-ids/finnish-trust-network'
  },
  {
    title: 'Danish NemID',
    authMethods: [
      {
        title: 'Personal with code card',
        acrValue: 'urn:grn:authn:dk:nemid:poces'
      },
      {
        title: 'Employee with code card',
        acrValue: 'urn:grn:authn:dk:nemid:moces'
      },
      {
        title: 'Employee with code file',
        acrValue: 'urn:grn:authn:dk:nemid:moces:codefile'
      }
    ],
    page: '/verify/e-ids/danish-nemid'
  },
  {
    title: 'Danish MitID',
    authMethods: [
      {
        title: 'Low',
        acrValue: 'urn:grn:authn:dk:mitid:low'
      },
      {
        title: 'Substantial',
        acrValue: 'urn:grn:authn:dk:mitid:substantial'
      }
    ],
    page: '/verify/e-ids/danish-mitid'
  },
  {
    title: 'Swedish BankID',
    authMethods: [
      {
        title: 'Same device',
        acrValue: 'urn:grn:authn:se:bankid:same-device'
      },
      {
        title: 'QR Code',
        acrValue: 'urn:grn:authn:se:bankid:another-device:qr'
      }
    ],
    page: '/verify/e-ids/swedish-bankid'
  },
  {
    title: 'ItsME',
    authMethods: [
      {
        title: 'Basic',
        acrValue: 'urn:grn:authn:itsme:basic'
      },
      {
        title: 'Advanced',
        acrValue: 'urn:grn:authn:itsme:advanced'
      }
    ],
    page: '/verify/e-ids/itsme'
  },
  {
    title: 'Norwegian BankID',
    authMethods: [{
      title: 'Norwegian BankID',
      acrValue: 'urn:grn:authn:no:bankid'
    }],
    page: '/verify/e-ids/norwegian-bankid'
  },
  {
    title: 'Norwegian Vipps',
    authMethods: [{
      title: 'Norwegian Vipps',
      acrValue: 'urn:grn:authn:no:vipps'
    }],
    page: '/verify/e-ids/norwegian-vipps'
  },
  {
    title: 'Belgium',
    authMethods: [
      {
        title: 'Verified e-ID',
        acrValue: 'urn:grn:authn:be:eid:verified'
      }
    ],
    page: '/verify/e-ids/belgian-eid'
  },
  {
    title: 'Germany',
    authMethods: [
      {
        title: 'Sofort (with Schufa check)',
        acrValue: 'urn:grn:authn:de:sofort'
      }
    ],
    page: '/verify/e-ids/sofort'
  }
];