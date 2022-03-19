export type SolanaShop = {
  "version": "0.1.0",
  "name": "solana_shop",
  "instructions": [
    {
      "name": "initAdmin",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "openShop",
      "accounts": [
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shopToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signerAddress",
          "type": {
            "array": [
              "u8",
              20
            ]
          }
        }
      ]
    },
    {
      "name": "listItem",
      "accounts": [
        {
          "name": "item",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u32"
        },
        {
          "name": "freeze",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateItem",
      "accounts": [
        {
          "name": "item",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u32"
        }
      ]
    },
    {
      "name": "buyItem",
      "accounts": [
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "item",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userItem",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shopToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shopAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "admin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "shop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "shopToken",
            "type": "publicKey"
          },
          {
            "name": "signerAddress",
            "type": {
              "array": [
                "u8",
                20
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "item",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shop",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "freeze",
            "type": "bool"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "supply",
            "type": "u32"
          },
          {
            "name": "sold",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "InitAdminEvent",
      "fields": [
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OpenShopEvent",
      "fields": [
        {
          "name": "shop",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "shopToken",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "signerAddress",
          "type": {
            "array": [
              "u8",
              20
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "ListItemEvent",
      "fields": [
        {
          "name": "item",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "shop",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u32",
          "index": false
        },
        {
          "name": "freeze",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateItemEvent",
      "fields": [
        {
          "name": "item",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u32",
          "index": false
        }
      ]
    },
    {
      "name": "BuyItemEvent",
      "fields": [
        {
          "name": "item",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u32",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SupplyTooLow",
      "msg": "SupplyTooLow"
    },
    {
      "code": 6001,
      "name": "InstructionAtWrongIndex",
      "msg": "InstructionAtWrongIndex"
    },
    {
      "code": 6002,
      "name": "InvalidSecpInstruction",
      "msg": "InvalidSecpInstruction"
    },
    {
      "code": 6003,
      "name": "InvalidSecpSigner",
      "msg": "InvalidSecpSigner"
    },
    {
      "code": 6004,
      "name": "InvalidSecpNonce",
      "msg": "InvalidSecpNonce"
    },
    {
      "code": 6005,
      "name": "ExceedsSupply",
      "msg": "ExceedsSupply"
    }
  ]
};

export const IDL: SolanaShop = {
  "version": "0.1.0",
  "name": "solana_shop",
  "instructions": [
    {
      "name": "initAdmin",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "openShop",
      "accounts": [
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shopToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "signerAddress",
          "type": {
            "array": [
              "u8",
              20
            ]
          }
        }
      ]
    },
    {
      "name": "listItem",
      "accounts": [
        {
          "name": "item",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u32"
        },
        {
          "name": "freeze",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateItem",
      "accounts": [
        {
          "name": "item",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "supply",
          "type": "u32"
        }
      ]
    },
    {
      "name": "buyItem",
      "accounts": [
        {
          "name": "shop",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "item",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userItem",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shopToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shopAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstruction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "admin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "shop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "shopToken",
            "type": "publicKey"
          },
          {
            "name": "signerAddress",
            "type": {
              "array": [
                "u8",
                20
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "item",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shop",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "freeze",
            "type": "bool"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "supply",
            "type": "u32"
          },
          {
            "name": "sold",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "InitAdminEvent",
      "fields": [
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OpenShopEvent",
      "fields": [
        {
          "name": "shop",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "shopToken",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "signerAddress",
          "type": {
            "array": [
              "u8",
              20
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "ListItemEvent",
      "fields": [
        {
          "name": "item",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "shop",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u32",
          "index": false
        },
        {
          "name": "freeze",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateItemEvent",
      "fields": [
        {
          "name": "item",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u32",
          "index": false
        }
      ]
    },
    {
      "name": "BuyItemEvent",
      "fields": [
        {
          "name": "item",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u32",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SupplyTooLow",
      "msg": "SupplyTooLow"
    },
    {
      "code": 6001,
      "name": "InstructionAtWrongIndex",
      "msg": "InstructionAtWrongIndex"
    },
    {
      "code": 6002,
      "name": "InvalidSecpInstruction",
      "msg": "InvalidSecpInstruction"
    },
    {
      "code": 6003,
      "name": "InvalidSecpSigner",
      "msg": "InvalidSecpSigner"
    },
    {
      "code": 6004,
      "name": "InvalidSecpNonce",
      "msg": "InvalidSecpNonce"
    },
    {
      "code": 6005,
      "name": "ExceedsSupply",
      "msg": "ExceedsSupply"
    }
  ]
};
