import { FetchedTrace } from "../../types";

export const sampleTrace: FetchedTrace = {
    "data": {
        "services": [
            {
                "name": "frontend",
                "numberOfSpans": 2
            }
        ],
        "spans": [
            {
                "traceID": "665b3cc06e48f122",
                "spanID": "665b3cc06e48f122",
                "flags": 1,
                "operationName": "HTTP GET /dispatch",
                "references": [],
                "startTime": 1555385360015391,
                "duration": 279850,
                "tags": [
                    {
                        "key": "component",
                        "type": "string",
                        "value": "net/http"
                    },
                    {
                        "key": "http.method",
                        "type": "string",
                        "value": "GET"
                    },
                    {
                        "key": "http.status_code",
                        "type": "int64",
                        "value": 200
                    },
                    {
                        "key": "http.url",
                        "type": "string",
                        "value": "/dispatch?customer=123"
                    },
                    {
                        "key": "sampler.param",
                        "type": "bool",
                        "value": true
                    },
                    {
                        "key": "sampler.type",
                        "type": "string",
                        "value": "const"
                    },
                    {
                        "key": "span.kind",
                        "type": "string",
                        "value": "server"
                    }
                ],
                "logs": [
                    {
                        "timestamp": 1555372921477590,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "HTTP request received"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "method",
                                "type": "string",
                                "value": "GET"
                            },
                            {
                                "key": "url",
                                "type": "string",
                                "value": "/dispatch?customer=123"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372921477628,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Getting customer"
                            },
                            {
                                "key": "customer_id",
                                "type": "string",
                                "value": "123"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372921826687,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Found customer"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372921826818,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "baggage"
                            },
                            {
                                "key": "key",
                                "type": "string",
                                "value": "customer"
                            },
                            {
                                "key": "value",
                                "type": "string",
                                "value": "Rachel's Floral Designs"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372921826826,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding nearest drivers"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "location",
                                "type": "string",
                                "value": "115,277"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922042864,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Found drivers"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922043042,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "193,463"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922043065,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "41,921"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922043088,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "424,920"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922095106,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "428,634"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922095484,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "474,159"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922100523,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "349,919"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922120556,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "418,360"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922142665,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "126,773"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922162291,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "208,292"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922183561,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Finding route"
                            },
                            {
                                "key": "dropoff",
                                "type": "string",
                                "value": "115,277"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            },
                            {
                                "key": "pickup",
                                "type": "string",
                                "value": "386,239"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922251251,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Found routes"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            }
                        ]
                    },
                    {
                        "timestamp": 1555372922251325,
                        "fields": [
                            {
                                "key": "event",
                                "type": "string",
                                "value": "Dispatch successful"
                            },
                            {
                                "key": "driver",
                                "type": "string",
                                "value": "T757304C"
                            },
                            {
                                "key": "eta",
                                "type": "string",
                                "value": "2m0s"
                            },
                            {
                                "key": "level",
                                "type": "string",
                                "value": "info"
                            }
                        ]
                    }
                ],
                "processID": "p4",
                "warnings": [],
                "process": {
                    "serviceName": "frontend",
                    "tags": [
                        {
                            "key": "client-uuid",
                            "type": "string",
                            "value": "3a9fd4913b360df4"
                        },
                        {
                            "key": "hostname",
                            "type": "string",
                            "value": "localhost.localdomain"
                        },
                        {
                            "key": "ip",
                            "type": "string",
                            "value": "192.168.1.102"
                        },
                        {
                            "key": "jaeger.version",
                            "type": "string",
                            "value": "Go-2.15.1dev"
                        }
                    ]
                },
                "relativeStartTime": 0,
                "depth": 0,
                "hasChildren": true
            },
            {
                "traceID": "665b3cc06e48f122",
                "spanID": "616bc4df9f135fcd",
                "flags": 1,
                "operationName": "HTTP GET: /customer",
                "references": [
                    {
                        "refType": "CHILD_OF",
                        "traceID": "665b3cc06e48f122",
                        "spanID": "665b3cc06e48f122",
                        "span": {
                            "traceID": "665b3cc06e48f122",
                            "spanID": "665b3cc06e48f122",
                            "flags": 1,
                            "operationName": "HTTP GET /dispatch",
                            "references": [],
                            "startTime": 1555385360015391,
                            "duration": 279850,
                            "tags": [
                                {
                                    "key": "component",
                                    "type": "string",
                                    "value": "net/http"
                                },
                                {
                                    "key": "http.method",
                                    "type": "string",
                                    "value": "GET"
                                },
                                {
                                    "key": "http.status_code",
                                    "type": "int64",
                                    "value": 200
                                },
                                {
                                    "key": "http.url",
                                    "type": "string",
                                    "value": "/dispatch?customer=123"
                                },
                                {
                                    "key": "sampler.param",
                                    "type": "bool",
                                    "value": true
                                },
                                {
                                    "key": "sampler.type",
                                    "type": "string",
                                    "value": "const"
                                },
                                {
                                    "key": "span.kind",
                                    "type": "string",
                                    "value": "server"
                                }
                            ],
                            "logs": [
                                {
                                    "timestamp": 1555372921477590,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "HTTP request received"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "method",
                                            "type": "string",
                                            "value": "GET"
                                        },
                                        {
                                            "key": "url",
                                            "type": "string",
                                            "value": "/dispatch?customer=123"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372921477628,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Getting customer"
                                        },
                                        {
                                            "key": "customer_id",
                                            "type": "string",
                                            "value": "123"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372921826687,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Found customer"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372921826818,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "baggage"
                                        },
                                        {
                                            "key": "key",
                                            "type": "string",
                                            "value": "customer"
                                        },
                                        {
                                            "key": "value",
                                            "type": "string",
                                            "value": "Rachel's Floral Designs"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372921826826,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding nearest drivers"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "location",
                                            "type": "string",
                                            "value": "115,277"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922042864,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Found drivers"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922043042,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "193,463"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922043065,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "41,921"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922043088,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "424,920"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922095106,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "428,634"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922095484,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "474,159"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922100523,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "349,919"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922120556,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "418,360"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922142665,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "126,773"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922162291,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "208,292"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922183561,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Finding route"
                                        },
                                        {
                                            "key": "dropoff",
                                            "type": "string",
                                            "value": "115,277"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        },
                                        {
                                            "key": "pickup",
                                            "type": "string",
                                            "value": "386,239"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922251251,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Found routes"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        }
                                    ]
                                },
                                {
                                    "timestamp": 1555372922251325,
                                    "fields": [
                                        {
                                            "key": "event",
                                            "type": "string",
                                            "value": "Dispatch successful"
                                        },
                                        {
                                            "key": "driver",
                                            "type": "string",
                                            "value": "T757304C"
                                        },
                                        {
                                            "key": "eta",
                                            "type": "string",
                                            "value": "2m0s"
                                        },
                                        {
                                            "key": "level",
                                            "type": "string",
                                            "value": "info"
                                        }
                                    ]
                                }
                            ],
                            "processID": "p4",
                            "warnings": [],
                            "process": {
                                "serviceName": "frontend",
                                "tags": [
                                    {
                                        "key": "client-uuid",
                                        "type": "string",
                                        "value": "3a9fd4913b360df4"
                                    },
                                    {
                                        "key": "hostname",
                                        "type": "string",
                                        "value": "localhost.localdomain"
                                    },
                                    {
                                        "key": "ip",
                                        "type": "string",
                                        "value": "192.168.1.102"
                                    },
                                    {
                                        "key": "jaeger.version",
                                        "type": "string",
                                        "value": "Go-2.15.1dev"
                                    }
                                ]
                            },
                            "relativeStartTime": 0,
                            "depth": 0,
                            "hasChildren": true
                        }
                    }
                ],
                "startTime": 1555385360015391,
                "duration": 179848,
                "tags": [],
                "logs": [],
                "processID": "p2",
                "process": {
                    "serviceName": "frontend",
                    "tags": [
                        {
                            "key": "client-uuid",
                            "type": "string",
                            "value": "3a9fd4913b360df4"
                        },
                        {
                            "key": "hostname",
                            "type": "string",
                            "value": "localhost.localdomain"
                        },
                        {
                            "key": "ip",
                            "type": "string",
                            "value": "192.168.1.102"
                        },
                        {
                            "key": "jaeger.version",
                            "type": "string",
                            "value": "Go-2.15.1dev"
                        }
                    ]
                },
                "relativeStartTime": 0,
                "depth": 1,
                "hasChildren": false,
                "warnings": []
            }
        ],
        "traceID": "665b3cc06e48f122",
        "traceName": "frontend: HTTP GET /dispatch",
        "processes": {
            "p4": {
                "serviceName": "frontend",
                "tags": [
                    {
                        "key": "client-uuid",
                        "type": "string",
                        "value": "3a9fd4913b360df4"
                    },
                    {
                        "key": "hostname",
                        "type": "string",
                        "value": "localhost.localdomain"
                    },
                    {
                        "key": "ip",
                        "type": "string",
                        "value": "192.168.1.102"
                    },
                    {
                        "key": "jaeger.version",
                        "type": "string",
                        "value": "Go-2.15.1dev"
                    }
                ]
            },
            "p2": {
                "serviceName": "frontend",
                "tags": [
                    {
                        "key": "client-uuid",
                        "type": "string",
                        "value": "3a9fd4913b360df4"
                    },
                    {
                        "key": "hostname",
                        "type": "string",
                        "value": "localhost.localdomain"
                    },
                    {
                        "key": "ip",
                        "type": "string",
                        "value": "192.168.1.102"
                    },
                    {
                        "key": "jaeger.version",
                        "type": "string",
                        "value": "Go-2.15.1dev"
                    }
                ]
            }
        },
        "duration": 279850,
        "startTime": 1555385360015391,
        "endTime": 1555385360295241
    },
    "id": "665b3cc06e48f122",
    "state": "FETCH_DONE"
}